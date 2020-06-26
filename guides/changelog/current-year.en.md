# Changelog

Find out everything about the new versions and updates of Mercado Pago integrations.

---

## June 2020

### June 11th

> CHANGELOG
> 
> New version for Button and payment link
> 
> NEW_VERSION: NEW VERSION
> 
> PRODUCT: Button and payment link

We have lauched a new version for Button and payment link, totally renewed. We have designed and implemented a new experience when creating payment links to share online by chat, e-mail or social media.

[Go to Button and payment link documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/button/intro-button/)

---

## May 2020

### May 26th

> CHANGELOG
> 
> New version of Javascript SDK
> 
> NEW_VERSION: NEW VERSION
> 
> PRODUCT: SDK Javascript
 
We have released the new version of Javascript SDK 1.3.0. From now on, it is compatible with Internet Explorer 11 so you can use it in your integrations without problems.
[Go to Javascript SDK documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/sdks/official/js/)


### May 13th

> CHANGELOG
> 
> New version WooCommerce
> 
> NEW_VERSION: NEW VERSION
> 
> PRODUCT: WooCommerce 

We have released a new version of WooCommerce.

[Go to WooCommerce documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/woocommerce/introduction/)

> GIT
> 
> Github
> 
> [Check GitHub](https://github.com/mercadopago/cart-woocommerce/releases/tag/v4.2.0) for further details regarding this release.


### May 6th

> CHANGELOG
> 
> New version SDK Java
> 
> NEW_VERSION: NEW VERSION
> 
> PRODUCT: SDK Java

We have released a new version of SDK Java 1.6.

> GIT
> 
> Github
> 
> [Check GitHub](https://github.com/mercadopago/dx-java/releases/tag/1.6.0) for further details regarding this release.


### May 4th

> CHANGELOG
> 
> New version SDK .NET
> 
> NEW_VERSION: NEW VERSION
> 
> PRODUCT: SDK .NET

We have released a new version of SDK .NET.

> GIT
> 
> Github
> 
> [Check GitHub](https://github.com/mercadopago/dx-dotnet/releases/tag/1.7.0) for further details regarding this release.

---

## April 2020

### April 3rd

> CHANGELOG
> 
> Updated API documentation
> 
> NEW_DOCUMENTATION: NEW DOCUMENTATION
> 
> PRODUCT: API  

We have updated the documentation for using our payments API. We included a basic example of a frontend form as well as workflow diagrams in order to help ease your integration.

[Go to API documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/payments/api/introduction/)

---

## March 2020

### March 27th

> CHANGELOG
> 
> We improve your scheduled reports
> 
> FEATURE: FEATURE
> 
> PRODUCT: Reports

In order to help you optimize your reconciliations, we made some changes in the generation of the date ranges for your scheduled reports. This change applies to both the Available Balance report and Account Balance report. After April 1st, 2020 to find your scheduled reports, you will have to search for them by one second less. 

 `Search` Filters | Actual Date | New Date |
--------- | ------------------------ | ------------------------------- |
begin_date  | 01/01/2020 00:00:00 | 01/01/2020 00:00:00
end_date | 02/01/2020 00:00:00 |  01/01/2020  23:59:59

Your new parameter will look as follows:

```
https://api.mercadolibre.com/account/bank_report/search?access_token={{access_token}}
	&created_from=schedule
	&user_id=290477154
	&begin_date=2020-01-01T00:00:00Z
	&end_date=2020-01-01T23:59:59Z

```

> For further information regarding scheduling your reports, [visit our documentation](https://www.mercadopago.com.ar/developers/en/guides/reports/general-considerations/reconciliation-reports/).


### March 19th

> CHANGELOG
> 
> New version Prestashop 1.6 & 1.7
> 
> NEW_VERSION: NEW VERSION
> 
> PRODUCT: Prestashop

We have released a new version of Prestashop 1.6 & 1.7. Our Mercado Pago Checkout now works through a modal: your customers can complete their purchase without leaving the site.

[Go to Prestashop 1.6 & 1.7 documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/prestashop/introduction/)

> GIT
> 
> Github
> 
> [Check GitHub](https://github.com/mercadopago/cart-prestashop-7/releases) for further details regarding this release.

---

## January 2020

### January 9th

> CHANGELOG
> 
> Get information about your business
> 
> FEATURE: FEATURE
> 
> PRODUCT: Mercado Pago Checkout

If you have advertising campaigns for your business, it is important that you can follow them and see if they are helping you to realize sales. In order to improve them and make it more efficient, we add the possibility of associating a Facebook Pixel and a Google Ads conversion tracking tag to the payments of your Mercado Pago Checkout.

[Start now measuring the conversion of your ads](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/configurations/).