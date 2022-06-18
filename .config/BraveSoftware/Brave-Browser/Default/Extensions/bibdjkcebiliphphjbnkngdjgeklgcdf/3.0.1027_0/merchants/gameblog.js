function getNormalizedPlatformName(platform)
{
	return {
		PC:'pc',
		PS4:'playstation4',
		PS3:'playstation3',
		XB1:'xboxone',
		X360:'xbox360',
		WiiU:'wiiu',
		'3DS':'3ds',
		SWITCH:'switch',
	}[platform]||null;
}
function getPlatformIdsOnPage()
{
	var platforms={};
	document.querySelectorAll('#onglets_l1 li').forEach((platform)=>{
		if (platform.hasAttribute('id')&&platform.id.startsWith('gb_platform_onglet_'))
			platforms[platform.innerText]=platform.id.replace('gb_platform_onglet_','');
	});
	return platforms;
}
function createPlatforms(offer,offersCount,seeOnAKSLink,translates)
{
	const productsByPlatform=merchantCfg.getProductsByPlatform(offer.bestOffer,offer.apiResponse.products);
	var str_dom='';
	for (let [platform,product] of Object.entries(productsByPlatform))
	{
		if(merchantCfg.debug)
			console.info(' merchantCfg.translates=', merchantCfg);
		str_dom+= `<div>
			<a href="${DOMPurify.sanitize(product.bestOffer.url)}"${merchantCfg.open_mode} style="text-decoration:none!important;color:#f47920;">
				<span>${platform}: </span>
				<span class="product_price" style="margin-right:0px">
					${merchantCfg.priceCleaner(product.bestOffer.price)}
				</span>
			</a>
		</div>`;
	}
	if (str_dom.length<1)
		return(merchantCfg.debug)?console.warning('No platform to insert'):null;
	document.querySelector('.entity-details').insertAdjacentHTML(
		'beforeend',
		`<div style="text-align:center;font-size:15px;background:rgba(0,0,0,0.1);padding:10px 0;">
			<h2><a href="${seeOnAKSLink}"${merchantCfg.open_mode} style="text-decoration:none!important;">${translates.buyOnAks}</a></h2>
			${str_dom}
			<a href="${seeOnAKSLink}"${merchantCfg.open_mode}>
				<button style="width:266px;color:white!important;">
					${translates.seeOtherOffers(offersCount)}
				</button>
			</a>
		</div>`
	);
}
const merchantCfg={
	name:'gameblog',
	productNameSelector:'.game-details-title',
	insertAt:'.entity-details',
	customInsert:true,
	acceptNoMerchantPriceFound: true,
	template:createPlatforms
};