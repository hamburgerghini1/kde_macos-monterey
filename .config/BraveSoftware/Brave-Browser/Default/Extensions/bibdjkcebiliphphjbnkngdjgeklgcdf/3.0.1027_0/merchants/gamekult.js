function getNormalizedPlatformName(platform)
{
	return {
		PC:'pc',
		PS4:'playstation4',
		PS3:'playstation3',
		'Xbox One':'xboxone',
		'Xbox 360':'xbox360',
		'Wii U':'wiiu',
		'3DS':'3ds',
		'Nintendo Switch':'switch',
	}[platform]||null;
}
function getPlatformIdsOnPage()
{
	var platforms={};
	document.querySelectorAll('.gk__pt__tbs__lst__itm').forEach((platform)=>{
		if (!platform.hasAttribute('data-tab'))
			return;
		const platform_txt=platform.getAttribute('data-tab');
		const platform_aks=getNormalizedPlatformName(platform_txt);
		if (platform_aks)
			platforms[platform_aks]=platform_txt;
	});
	return platforms;
}
function getProductByPlatform(platformTargeted,products)
{
	var dataById={};
	products.forEach((product)=>{
		dataById[product.id]=product;
	});
	for (product in products)
	{
		if (Object.keys(products[product].availablePlatforms).length===0)
			continue;
		let productsByPlatform={},gameId;
		for (let platform in products[product].availablePlatforms)
		{
			if (platformTargeted!==platform||!products[product].availablePlatforms[platform])
				continue;
			gameId = products[product].availablePlatforms[platform]['gameId'];
			if (dataById[gameId].bestOffer&&dataById[gameId].bestOffer.available)
				return dataById[gameId];
		}
	}
}
function createPlatforms(offer,offersCount,seeOnAKSLink,translates)
{
	document.querySelector('head').insertAdjacentHTML('beforeend','<style type="text/css">.gk__pt__prc.na::after{content:none;}</style>');
	for (let [platform,platformId] of Object.entries(getPlatformIdsOnPage()))
	{
		target = document.querySelector('.gk__pt__lst[data-tab="'+platformId+'"]');
		if (!target)
			continue;
		platformed_product = getProductByPlatform(getNormalizedPlatformName(platformId),offer.apiResponse.products);
		if(merchantCfg.debug)
			console.log('Get platformed product=',platformed_product);
		target.insertAdjacentHTML(
			'afterbegin',
			`<li class="gk__pt__lst__itm">
				<a href="${DOMPurify.sanitize(platformed_product.link)}" class="gk__pt__lst__itm__lnk"${merchantCfg.open_mode}></a>
				<div class="gk__pt__slr">
					<i style="background-image: url(https://www.allkeyshop.com/blog/wp-content/themes/aks-theme/assets/image/favicon-32x32.png);background-size:16px">
						</i>Allkeyshop.com
				</div>
				<div class="gk__pt__prc na">
					${merchantCfg.priceCleaner(platformed_product.bestOffer.price)}
				</div>
				<div class="gk__pt__cta">
					<a class="gk__pt__cta__btn" href="${DOMPurify.sanitize(platformed_product.bestOffer.url)}"${merchantCfg.open_mode} style="display:block;z-index:2;"${merchantCfg.open_mode}></a>
				</div>
			</li>`
		);
	}
}
const merchantCfg={
	name:'gamekult',
	productNameSelector:'.gk__helpers__fat-title-l a',
	insertAt:'.gk__pt__lst',
	customInsert:true,
	acceptNoMerchantPriceFound:true,
	template:createPlatforms
};