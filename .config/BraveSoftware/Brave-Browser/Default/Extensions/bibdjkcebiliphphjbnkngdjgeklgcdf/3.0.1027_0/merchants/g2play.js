const merchantCfg={
	merchantId:38,
	name:'g2play',
	needRearm:true,
	productNameSelector:['#c-page__content .container-fluid .d-none > div:nth-last-of-type(2)','#c-page__content .container-fluid .d-none > div:last-of-type'],
	priceSelector:'#main-offer-wrapper *[itemprop="priceCurrency"]+*[content]',
	insertMode:'beforeBegin',
	insertAt:'#main-offer-wrapper span',
	currencySelector:()=>{
		const priceMeta=document.querySelector('*[itemprop="priceCurrency"]');
		if(priceMeta)return priceMeta.getAttribute('content');
	},
	currencySymbolSelector:()=>{
		if(!merchantCfg.currencyDetected)merchantCfg.currencyDetected=merchantCfg.currencySelector();
		return merchantCfg.isoToCurrencySymbol(merchantCfg.currencyDetected);
	},
	langSelector:()=>{
		return merchantCfg.isoLangToLang(document.querySelector('html').getAttribute('lang').split('-')[0]);
	},
    voucherUrl:'https://www.g2play.net/new-checkout/review',
	voucherUrlPattern:'https?://www.g2play.net/new-checkout/review.*',
	voucherInputSelector:'#c-page__content input[placeholder]',
	voucherPreviousSubmitCallback:()=>{
		if(document.querySelector('#discount-error'))
			document.querySelector('#discount-error').setAttribute('id',false);
		setTimeout(merchantCfg.keyboardImpulse.bind(window),1);
		setTimeout(merchantCfg.keyboardImpulse.bind(window),10);
	},
	keyboardImpulse:()=>{
		document.querySelector(merchantCfg.voucherInputSelector).dispatchEvent(new Event('input',{bubbles:true}));
	},
	voucherPreviousInsertCallback:()=>{
		if(document.querySelector(merchantCfg.voucherSubmitSelector))
			document.querySelector(merchantCfg.voucherSubmitSelector).click();
	},
	voucherTimesCfg:{
		voucherTimeBetween:2500
	},
	voucherSubmitSelector:'#c-page__content input[placeholder] + button',
	voucherFailedSelector:'#discount-error',
	voucherSuccessSelector:(()=>{
		const voucherInputElement = document.querySelector(merchantCfg.voucherInputSelector);
		if(merchantCfg.voucherInputElement&&voucherInputElement.value!=merchantCfg.voucher)
		{
			voucherInputElement.value=merchantCfg.voucher;
			document.querySelector('#c-page__content input[placeholder]').dispatchEvent(new Event('input', { bubbles: true}));
			document.querySelector(merchantCfg.voucherSubmitSelector).click();
		}
		return document.querySelector('body').innerText.indexOf(merchantCfg.voucher)!=-1;
	}).bind(window),
	voucherPriceResultSelector:'div > span:last-of-type > span > span[itemprop="priceCurrency"] + span[content]',
	voucherInitialPriceSelector:'.c-checkout span[itemprop="priceCurrency"] + span[content]',
	voucherInitialPriceCurrencySelector:()=>merchantCfg.currencySelector(),
	template:(offer,offersCount,seeOnAKSLink,translates)=> {
		if(merchantCfg.priceDiffText.length<1)
			merchantCfg.priceDiffText='0%';
		return `<div style="margin-bottom:30px;color:#000!important;">
		<div style="display:flex;">
			<div style="font-weight:bold;font-size:5.5rem;line-height:5.5rem;">${merchantCfg.priceCleaner(offer.bestOffer.price)}</div>
			<div style="margin-left:5px;">
				<div style="background:rgb(255, 194, 15);border-radius:3.5rem;color:rgb(255, 255, 255);font-size:1.2rem;font-weight:normal;padding:0.3rem 0.8rem;width:max-content;margin:5px auto;">${merchantCfg.priceDiffText}</div>
				<div style="color:#000;font-weight:500;font-size:1.6rem;line-height:1;text-decoration:line-through;margin-top:8px;">${DOMPurify.sanitize(offer.merchantPriceText)}</div>
			</div>
		</div>
		<div style="margin-top:10px;">
			<a style="line-height:5.5rem;height:5.5rem;display:block;font-size:1.6rem;font-weight:bold;border:1px solid rgb(255, 194, 15);border-radius:3.5rem;cursor:pointer;background:linear-gradient(rgb(255, 194, 15) 0%, rgba(255, 194, 15, 0.88) 100%);cursor:pointer;"
				href="${DOMPurify.sanitize(offer.bestOffer.url)}"${merchantCfg.open_mode}>${translates.buyOnAks}
			</a>
		</div>
		<div style="text-align:center;margin-top:10px;">
			<a href="${seeOnAKSLink}"${merchantCfg.open_mode} style="font-size:1.6rem;">${translates.seeOtherOffers(offersCount)}</a>
		</div>
	</div>`;
	}
};