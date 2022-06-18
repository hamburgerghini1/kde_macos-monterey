const debug=false;
const is_test=false;
var currency_fetch_retry=0,free_gleam_fetch_retry=0,voucher_fetch_retry=0;
var currency_fetch_timer_id=null,free_gleam_fetch_timer_id=null,voucher_fetch_timer_id=null;
if(typeof browser==='undefined')
	var browser=chrome;
function patch_3_0_1015()
{
	const hold_settings=['currency','open_mode','display_always','auto_voucher'];
	const hold_merchants=['2game','Allyouplay','Amazon','BuyGames','CDKeys','Eneba','EpicGames','G2A','G2Play','GameBillet','GameBlog','GameKult','GamersGate','GamesPlanet','GameSpot','Gamivo','GoCdkeys','GoG','GreenManGaming','GVGmall','HRK','HumbleBundle','InstantGaming','JeuxVideoCom','K4g','Kinguin','Microsoft','Nintendo','Origin','Pixelcodes','Playstation','PremiumCDKeys','Punktid','Royalcdkeys','SCDKey','Steam','Twitch','Ubisoft','Voidu','Xbox','Youtube'];
	const new_merchants=hold_merchants.map(s=>s.toLowerCase());
	browser.storage.sync.get(
		hold_settings.concat(hold_merchants,new_merchants),
		(settings)=>{
			var new_settings={};
			for([setting_name,setting_value] of Object.entries(settings))
			{
				if(hold_settings.includes(setting_name))
				{
					new_settings[setting_name]=setting_value;
					continue;
				}
				if (setting_name==='BuyGammes')
					setting_name='BuyGames';
				if (setting_name==='CDKeys')
					continue;
				if(hold_merchants.includes(setting_name))
				{
					if(setting_value===true)
						setting_value=3;
					else if(setting_value===false)
						setting_value=0;
					new_settings[setting_name.toLowerCase()]=setting_value;
				}
				else if(new_merchants.includes(setting_name))
					new_settings[setting_name]=setting_value;
				else if(debug)
					console.error('Remove outdated key: ',setting_name,'=',setting_value);

			}
			browser.storage.sync.clear();
			if(debug)
				console.info('Patch ending to update hold settings:',settings,' to new settings:',new_settings);
			browser.storage.sync.set(new_settings);
		}
	);
}
browser.runtime.onInstalled.addListener((details)=>{
	browser.storage.sync.set({['last_merchant_id']:undefined});
	if(details.reason==='install')
		browser.runtime.openOptionsPage();
	else if(details.reason==='update')
	{
		if(debug)
			console.log( 'Extension updated from ', details.previousVersion, ' to ', chrome.runtime.getManifest().version, ' version.');
		if(details.previousVersion!==chrome.runtime.getManifest().version)
		{
			/*browser.tabs.create({active:true,url:'release_notes.html'});*/
			patch_3_0_1015();
		}
		else if(debug)
			console.log('Shame on u ! This is not a real update !');
	}
});
browser.runtime.onUpdateAvailable.addListener((details) =>
	browser.runtime.reload()
);
const official_merchants=[
	'2game','allyouplay','amazon','epicgames','gamebillet','gamersgate','gamesplanet','gog','humblebundle',
	'microsoft','nintendo','origin','playstation','steam','twitch','ubisoft','voidu','xbox','youtube'
];
function parseMerchantState(merchant,value)
{
	if(value===undefined||![true,false,0,1,2,3].includes(value))
	{
		if(debug&&value!==undefined)
			console.error('Unexpected value in stat of marchant ',merchant,': ',value);
		return(official_merchants.includes(merchant)||is_test)?3:2;
	}
	else if(value===true)
		return 3;
	else if(value===false)
		return 0;
	return value;
}
function sendSettingsToPopup(queries)
{
	const merchants=queries.pop();
	browser.storage.sync.get(
		merchants,
		(data)=>{
			for(merchant of merchants)
				data[merchant]=parseMerchantState(merchant,data[merchant]);
			browser.runtime.sendMessage({
				query:'getMerchantStates',
				states:data
			});
		}
	);
	browser.storage.sync.get(
		['currency','open_mode','display_always','auto_voucher'],
		(data)=>{
			data['query']='getSettings';
			browser.runtime.sendMessage(data);
		}
	);
	sendVoucherStatsToPopup();
}
function sendVoucherStatsToPopup()
{
	browser.storage.sync.get(
		['last_merchant_id'],
		(data)=>{
			if(data===undefined||data['last_merchant_id']===undefined)
				return browser.runtime.sendMessage({
					query:'getVoucherStats',
					voucher_stats:[]
				});
			if(debug)
				console.info('sendVoucherStatsToPopup for merchant_id=',data['last_merchant_id']);
			browser.storage.sync.get(
				['voucher_stats_'+data['last_merchant_id'],'voucher_tab_id'],
				(data2)=>{
					if(debug)
						console.info('sendVoucherStatsToPopup for voucher_stats=',data2['voucher_stats_'+data['last_merchant_id']]===undefined?null:data2['voucher_stats_'+data['last_merchant_id']]);
					browser.runtime.sendMessage({
						query:'getVoucherStats',
						merchant_id:data['last_merchant_id'],
						voucher_stats:data2['voucher_stats_'+data['last_merchant_id']]===undefined?[]:data2['voucher_stats_'+data['last_merchant_id']],
						voucher_tab_id:data2['voucher_tab_id']===undefined?null:data2['voucher_tab_id']
					});
				}
			);
		}
	);
}
function queryTabSettings(merchant,tabId)
{
	browser.storage.sync.get(
		[merchant,'currency','open_mode','do_not_display_anymore','display_always','auto_voucher'],
		(data)=>browser.tabs.query({active:true,currentWindow:true},(tabs)=>{
			if(debug)
				console.info('Send: ',data,' for ',merchant);
			browser.tabs.sendMessage(
				tabId,
				{
					query:'queryTabSettings',
					state:parseMerchantState(merchant,data[merchant]),
					currency:data['currency']===undefined?'EUR':data['currency'],
					open_mode:data['open_mode']===undefined?false:data['open_mode'],
					display_always:data['display_always']===undefined?true:data['display_always'],
					auto_voucher:data['auto_voucher']===undefined?false:data['auto_voucher'],
					do_not_display_anymore:data['do_not_display_anymore']===undefined?[]:data['do_not_display_anymore'],
				}
			)
		})
	);
}
function queryCurrencyRateRetry(currencyName,tabId,errorMsg)
{
	if(currency_fetch_retry>11)
	{
		currency_fetch_retry=0;
		if(currency_fetch_timer_id!=null)
			clearTimeout(currency_fetch_timer_id);
		return;
	}
	currency_fetch_retry++;
	if(debug)
		console.log('Try '+String(currency_fetch_retry)+' of queryCurrencyRate failed in sw:'+errorMsg);
	setTimeout(()=>queryCurrencyRate(currencyName,tabId),(2**currency_fetch_retry)*1000);
}
function queryCurrencyRate(currencyName,tabId)
{
	browser.storage.sync.get(
		['currency'],
		(data)=>{browser.tabs.query({active:true,currentWindow:true},(tabs)=>{
			const currency=data['currency']===undefined?'EUR':data['currency'];
			fetch('https://www.allkeyshop.com/api/currency_converter.php?q='+currency+'_'+currencyName)
			.then(function(response)
			{
				if(response.ok)
				{
					currency_fetch_retry=0;
					response.text().then((responseText)=>{
					browser.tabs.sendMessage(
						tabId,
						{
							query:'queryCurrencyRate',
							rate:responseText
						}
					)});
				}
				else
					queryCurrencyRateRetry(currencyName,tabId,'HTTP status='+String(response.status));
			})
			.catch(function(error)
			{
				queryCurrencyRateRetry(currencyName,tabId,'Network problem='+error.message);
			});
		})}
	);
}
function queryFreeGleamRetry(tabId,errorMsg)
{
	if(free_gleam_fetch_retry>2)
	{
		free_gleam_fetch_retry=0;
		if(free_gleam_fetch_timer_id!=null)
			clearTimeout(free_gleam_fetch_timer_id);
		return;
	}
	free_gleam_fetch_retry++;
	if(debug)
		console.log('Try '+String(free_gleam_fetch_retry)+' of queryFreeGleam failed in sw:'+errorMsg);
	setTimeout(()=>queryFreeGleam(tabId),(2**free_gleam_fetch_retry)*1000);
}
function queryFreeGleam(tabId)
{
	browser.tabs.query(
		{active:true,currentWindow:true},
		(tabs)=>{
			fetch(
				'https://www.allkeyshop.com/api/free_gleam.php',
				{
					method: 'POST',
					headers: {'Content-type':'application/x-www-form-urlencoded; charset=UTF-8'},
					body: 's=2fctFyrqp6EDSCaMU6kdCtJM4TB3hvx3eoRHUcRKNSSR'
				}
			)
			.then(function(response)
			{
				if(response.ok)
				{
					free_gleam_fetch_retry=0;
					response.text().then((responseText)=>{
					browser.tabs.sendMessage(
						tabId,
						{
							query:'queryFreeGleam',
							infos:responseText
						}
					)});
				}
				else
					queryFreeGleamRetry(tabId,'HTTP status='+String(response.status));
			})
			.catch(function(error)
			{
				queryFreeGleamRetry(tabId,'Network problem='+error.message);
			});
		}
	)
}
function queryVoucherCodeRetry(merchantId,tabId,errorMsg)
{
	if(voucher_fetch_retry>11)
	{
		voucher_fetch_retry=0;
		if(voucher_fetch_timer_id!=null)
			clearTimeout(voucher_fetch_timer_id);
		return;
	}
	voucher_fetch_retry++;
	if(debug)
		console.log('Try '+String(voucher_fetch_retry)+' of queryVoucherCode failed in sw:'+errorMsg);
	setTimeout(()=>queryVoucherCode(merchantId,tabId),(2**voucher_fetch_retry)*1000);
}
function queryVoucherCode(merchantId,tabId)
{
	browser.tabs.query({active:true,currentWindow:true},(tabs)=>{
		fetch('https://www.allkeyshop.com/api/vouchers.php?m='+merchantId)
		.then(function(response)
		{
			if(response.ok)
			{
				voucher_fetch_retry=0;
				response.text().then((responseText)=>{
					try
					{
						responseText=JSON.parse(responseText);
					}
					catch
					{
						responseText=null;
					}
					browser.tabs.sendMessage(
						tabId,
						{
							query:'queryVoucherCode',
							vouchers:responseText
						}
					)
				});
			}
			else
				queryVoucherCodeRetry(merchantId,tabId,'HTTP status='+String(response.status));
		})
		.catch(function(error)
		{
			queryVoucherCodeRetry(merchantId,tabId,'Network problem='+error.message);
		});
	});
}
function sendVersion()
{
	browser.tabs.query({active:true,currentWindow:true},(tabs)=>{
		const manifest = browser.runtime.getManifest();
		if(debug)
			console.info('Send version number: ',manifest.version);
		browser.tabs.sendMessage(
			tabId,
			{
				query:'getVersion',
				version:manifest.version
			}
		)
	});
}
function iconUpdate(url,tabId,count)
{
	if(actionObj===undefined)return;
	actionObj.setBadgeText({text:String(count),tabId});
	actionObj.setBadgeBackgroundColor({color:[0, 0, 0, 1]});
	actionObj.setIcon({path:'../images/icon48.jpg',tabId:tabId});
}
function voucherSubmitCompleted(sender,merchantId,tested)
{
	if(debug)console.info('Save voucher_stats_'+merchantId+':', tested);
	browser.storage.sync.set({['voucher_stats_'+merchantId]:tested,'voucher_tab_id':sender.tab.id});
	iconUpdate(sender.tab.url,sender.tab.id,tested?tested.length:0);
}
// Router
browser.runtime.onMessage.addListener((request,sender,sendResponse)=>{
	if(debug)console.info('Request: ',request,'\nFrom: ',sender);
	if(request.query==='queryTabSettings')
		queryTabSettings(request.merchantName,sender.tab.id);
	else if(request.query==='getSettingsFromPopup')
		sendSettingsToPopup(request.queries);
	else if(request.query==='setMerchantState')
		browser.storage.sync.set({[request.merchantName]:request.value});
	else if(request.query==='setMerchantStates')
		browser.storage.sync.set(request.value);
	else if(request.query==='setCurrency')
		browser.storage.sync.set({currency:request.value});
	else if(request.query==='setOpenMode')
		browser.storage.sync.set({'open_mode':request.value});
	else if(request.query==='setDisplayAlways')
		browser.storage.sync.set({'display_always':request.value});
	else if(request.query==='setAutoVoucher')
		browser.storage.sync.set({'auto_voucher':request.value});
	else if(request.query==='setLastMerchantId')
		browser.storage.sync.set({'last_merchant_id':request.value});
	else if(request.query==='getVersion')
		sendVersion();
	else if(request.query==='getVoucherStats')
		sendVoucherStatsToPopup();
	else if(request.query==='voucherSubmitCompleted')
		voucherSubmitCompleted(sender,request.merchantId,request.value);
	else if(request.query==='voucherRetryAll')
		browser.tabs.sendMessage(parseInt(request.tab_id),{query:'voucherRetryAll'});
	else if(request.query==='queryCurrencyRate')
	{
		if(currency_fetch_timer_id!=null)
			clearTimeout(currency_fetch_timer_id);
		currency_fetch_retry=0;
		queryCurrencyRate(request.currencyName,sender.tab.id);
	}
	else if(request.query==='queryFreeGleam')
	{
		if(free_gleam_fetch_timer_id!=null)
			clearTimeout(free_gleam_fetch_timer_id);
		free_gleam_fetch_retry=0;
		queryFreeGleam(sender.tab.id);
	}
	else if(request.query==='queryVoucherCode')
	{
		if(voucher_fetch_timer_id!=null)
			clearTimeout(voucher_fetch_timer_id);
		voucher_fetch_retry=0;
		queryVoucherCode(request.merchantId,sender.tab.id);
	}
	if(sendResponse)sendResponse({go:'die'});
});
var actionObj=undefined;
if(browser.action!==undefined)
	actionObj=browser.action;
else if(browser.browserAction!==undefined)
	actionObj=browser.browserAction;
else if(debug)
	console.error('No action api found for update icon.');
if(actionObj!==undefined)
{
	browser.tabs.onActivated.addListener(function(info)
	{
		if(debug)
			console.info('activated');
		browser.storage.sync.set({'voucher_tab_id':info.tabId});
		try{
			browser.tabs.sendMessage(info.tabId,{query:'extractMerchantId'})
				.then(response=>debug?console.info('Reply:',response):undefined)
				.catch(response=>debug?console.info('Reply error:',response):undefined);
		}catch{}
	});
	browser.tabs.onUpdated.addListener(function(tabId,change,tab)
	{
		if(!tab||!tab.url||!tab.url.startsWith('http'))
			return;
		if(debug)
			console.info('updated change=',change,' \ntab=',tab,' \nurl=',tab.url);
		browser.storage.sync.set({'voucher_tab_id':tabId});
		try{
			browser.tabs.sendMessage(tabId,{query:'extractMerchantId'})
				.then(response=>debug?console.info('Reply:',response):undefined)
				.catch(response=>debug?console.info('Reply error:',response):undefined);
		}catch{}
	});
}