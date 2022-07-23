var timerWaitingToSwitch=null;
const merchantCfg={
	name:'gamesforplay',
	needRearm:true,
	voucherRearm:true,
	productNameSelector:'.title,.page-title',
	priceSelector:'.product-price-new',
	insertAt:'.price-wrapper',
	insertMode:'beforebegin',
	currencySelector:'.currency-code',
	langSelector:()=>{
		if(document.querySelector('html').hasAttribute('lang'))
			return merchantCfg.isoLangToLang(document.querySelector('html').getAttribute('lang').split('-')[0]);
	},
	template:(offer,offersCount,seeOnAKSLink,translates)=>`
	<div id="akInjected" style="margin:auto;z-index:2147483647!important;">
		<h3 style="margin-bottom:0!important;padding-bottom:3px;width:100%;margin-top:10px;color:white;font-size:2.1rem;font-weight:bold;">
			${(offer.priceDiffPercent<0)?translates.buyOnAksAt+' '+merchantCfg.priceDiffText:translates.buyOnAks}
		</h3>
		<a id="button-cart" class="btn" href="${DOMPurify.sanitize(offer.bestOffer.url)}"${merchantCfg.open_mode} style="color:#212C46!important;font-size:17px;font-weight:bold;">
			${translates.buy}
			<span style="text-decoration:line-through;margin:0rem 2rem 0rem 2rem;color:#212C46!important;">
				${(offer.merchantPriceText!='0')?DOMPurify.sanitize(offer.merchantPriceText):''}
			</span>
			<span style="color:#212C46!important;font-weight:bold;">${merchantCfg.priceCleaner(offer.bestOffer.price)}</span>
		</a>
		<a href="${seeOnAKSLink}"${merchantCfg.open_mode} class="activatesin" style="font-size:17px;float:none;margin-bottom:30px;">
			${translates.seeOtherOffers(offersCount)}
		</a>
	</div>`
};