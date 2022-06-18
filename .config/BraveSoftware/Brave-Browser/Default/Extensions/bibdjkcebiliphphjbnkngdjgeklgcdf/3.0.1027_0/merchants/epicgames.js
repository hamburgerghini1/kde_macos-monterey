const merchantCfg={
	name:'epicgames',
	productNameSelector:()=>{
		try
		{
			return JSON.parse(document.querySelector('#_schemaOrgMarkup-Product').innerHTML).name
		}
		catch{}
		return document.querySelector('[data-component="NavigationList"] > a span')&&document.querySelector('[data-component="NavigationList"] > a span').innerText;
	},
	priceSelector:'div[data-component="PriceLayout"] span:last-of-type div:last-of-type span:last-of-type',
	needRearm:true,
	waitPriceBlock: true,
	waitProductName: true,
	insertAt:'div[data-component="PDPSidebarTagsLayout"]',
	insertMode:'beforebegin',
	langSelector:()=>{
		const langIso=document.querySelector('html').lang;
		if (langIso)
			return merchantCfg.isoLangToLang(langIso);
	},
	currencySelector:()=>{
		if (!document.querySelector('#_schemaOrgMarkup-VideoGame'))
			return;
		const data=JSON.parse(document.querySelector('#_schemaOrgMarkup-VideoGame').innerText);
		if (data.offers.length&&data.offers[0].priceSpecification&&data.offers[0].priceSpecification.priceCurrency)
			return data.offers[0].priceSpecification.priceCurrency;
	},
	currencySymbolSelector:()=>{
		if (!merchantCfg.merchantPriceText)
			return;
		const currencySymbol=merchantCfg.merchantPriceText.replace(/[0-9,. -]/g, '');
		return (currencySymbol.length)?currencySymbol:null;
	},
	template:(offer,offersCount,seeOnAKSLink,translates)=>{
		const freeWords=['Free','Gratis','Gratuito','Gratuit','Bezpłatne','Бесплатно'];
		if ( document.querySelector('[data-component="PurchasePrice"] [data-component="Message"]')
		  && freeWords.includes(document.querySelector('div[data-component="PriceLayout"] span[data-component="Message"]').innerText)
		  )
			return
		const customButton=document.querySelector('div[data-component="PDPSidebarLayout"] button[data-component="BaseButton"]');
		var customColors='color:white;background-color:rgb(154, 0, 1);';
		if(customButton)
		{
			var getCss = window.getComputedStyle(customButton, null);
			customColors = DOMPurify.sanitize(`background-color:${getCss.getPropertyValue("background-color")};color:${getCss.getPropertyValue("color")};`);
		}
		return `<div style="margin-bottom:20px;">
					<div style="background:rgba(0,0,0,0.1);padding:15px;border-radius:5px">
						<div style="margin-bottom:5px;font-size:16px;line-height:20px;">
							<span>
								${merchantCfg.priceCleaner(offer.bestOffer.price)}
							</span>
						</div>
						<a
							href="${DOMPurify.sanitize(offer.bestOffer.url)}"
							style="${customColors}margin-top:1;display:flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:3px;font-size:15px;"
							${merchantCfg.open_mode}
						>
							<span>
								<span>${(offer.priceDiffPercent<0)?translates.buyOnAksAt+' '+merchantCfg.priceDiffText:translates.buyOnAks}</span>
							</span>
						</a>
						<a href="${seeOnAKSLink}" style="margin-top:5px;color:white;display:block;font-size:13px;"${merchantCfg.open_mode}>
							<div style="border:1px solid rgba(245,245,245,0.6);text-align:center;font-size:14px;letter-spacing:1px;font-weight:400;padding:5px;">
								${translates.seeOtherOffers(offersCount)}
							</div>
						</a>
					</div>
				</div>`
	}
};