const merchantCfg={
	name:'nintendo',
	productNameSelector:'h1',
	waitPriceBlock:true,
	insertBeforeWaitPriceBlock:true,
	acceptNoMerchantPriceFound:true,
	priceSelector:()=>{
		const priceElement=document.querySelector('span[class^="Pricestyles"]');
		if(!priceElement)return (merchantCfg.debug)?console.info('priceElement not found'):undefined;
		if(merchantCfg.debug)
			console.info(
				'priceElement found:',priceElement,
				'Extracting:',merchantCfg.getTextOfHTMLElementWithoutChild(priceElement)
			);
		return merchantCfg.getTextOfHTMLElementWithoutChild(priceElement);
	},
	insertAt:'div[class^="PurchaseOptionsstyles"]',
	insertMode:'afterend',
	currencySelector:()=>'USD',
	currencySymbolSelector:()=>'$',
	langSelector:()=>'english',
	template:(offer,offersCount,seeOnAKSLink,translates)=>{
		if (document.querySelector('#akInjected'))
			document.querySelector('#akInjected').remove();
		return `<div class="box-tocart" id="akInjected" style="font-weight:500;font-size:1.7rem;text-align: center;">
			${(offer.priceDiffPercent<0)?`<span class="price-wrapper price">
				OR <span style="color:#e60012;text-decoration:line-through;">${offer.merchantPriceText}</span>
			</span>`:''}
			<span>${merchantCfg.priceCleaner(offer.bestOffer.price)}</span>
			<div class="actions has-add-to-links">
				<a href="${DOMPurify.sanitize(offer.bestOffer.url)}"${merchantCfg.open_mode} style="display:block;">
					<button style="color:white;background:#e60012;border:none;height:4rem;border-radius:0.25rem;font-weight:600;width:100%;">
						${(offer.priceDiffPercent<0)?translates.buyAtOnAks(merchantCfg.priceDiffText):translates.buyOnAks}
					</button>
				</a>
				<a href="${seeOnAKSLink}"${merchantCfg.open_mode} style="display:block;text-decoration:underline;">
					${translates.seeOtherOffers(offersCount)}
				</a>
			</div>
		</div>
		`;
	}
};