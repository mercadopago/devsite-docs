# Ad conversion
 
The ad conversion analysis makes it possible to evaluate the relevance and return of the created ads. Therefore, Checkout Pro offers integration with Facebook Ads and Google Ads platforms, allowing you to associate payments with business campaigns.
 
> NOTE
>
> Important
>
> Only payments approved instantly with credit and debit cards, cash in Mercado Pago or Mercado Crédito will be associated.
 
## Facebook Ads
 
Checkout Pro's integration with Facebook Ads is done through the Preferences API by adding the `pixel_id` of your ads, or through our SDKs.
 
To integrate Checkout Pro with Facebook Ads via API, follow the steps below or, if you prefer, check [SDKs](/developers/en/guides/sdks-v2/official/landing) to carry out the integration using our libraries.
 
1. Send a POST with the `tracks` parameter containing the `type` and `values` attributes to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post).
2. In "type" enter `facebook_ad`.
3. In "value" enter the Pixel ID, which can be found in the Facebook ad management panel.
4. Execute the request.
 
Upon completion of setup, a `Purchase` event will be associated with the specified pixel when a payment forwarded by your ad is approved.
 
## Google Ads
 
Checkout Pro's integration with Google Ads is done through the Preferences API by sending the Google Ads account identification information in the `tracks` parameter in the request body, or through our SDKs.
 
To integrate Checkout Pro with Google Ads via API, follow the steps below or, if you prefer, check [SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/sdks) to carry out the integration using our libraries.
 
1. Send the `tracks` parameter with the `type`, `conversion_id` and `conversion_label` attributes to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post).
2. In `type`, enter `google_ad`.
3. In `CONVERSION_ID` e  `CONVERSION_LABEL`, insira o seu ID de conversão e o Rótulo de conversão disponíveis na conta do Google Analytics.
4. Execute the request.
 
Once setup is complete, a conversion will be associated with the specified tag when a payment forwarded by your ad is approved.