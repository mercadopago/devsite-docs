# Mercado Pago's release notes 2020

Each release note describes the new changes applying to a version. This changes may include:

- **API updates:** added, modified or deleted resources,parameters or fields in our APIs.

- **New products or features:** Launch of tools which will help you accept payments seamlessly.

- **Annoucements:** News related to any of our products or future changes.

- **Documentation updates:** Guides, references and tutorials to help you monetize your business by integrating Mercado Pago.



## March 27th, 2020
 
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
  


## January 9th, 2020 

If you have advertising campaigns for your business, it is important that you can follow them and see if they are helping you to realize sales. In order to improve them and make it more efficient, we add the possibility of associating a Facebook Pixel and a Google Ads conversion tracking tag to the payments of your Mercado Pago Checkout.

[Start now measuring the conversion of your ads](https://www.mercadopago.com.ar/developers/en/guides/payments/web-payment-checkout/configurations/).
