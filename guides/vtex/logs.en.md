# Logs verification

Logs provide the teams with a greater understanding so that they can have a better support in the first instance, since they allow to review the information returned in the integration of Mercado Pago with VTEX, allowing a better understanding of what happened with a transaction.

Also, in case of modification or activation of new payment methods, they give us the possibility to validate that everything is working as planned.

To access the logs, access the administration panel of your VTEX store, and click on **Payments > Transactions**, then look for the log that contains the `status response` and click on **"+ Information"**. The most significant data is the following:

|Field|Data|Description|
|---|---|---|
|`ID`|10302316|Mercado Pago transaction number.|
|`Payment_method_id`|visa|Payment method.|
|`Payment_type_id`|credit_card|MPayment method.|
|`Status`|authorized|Payment status.|
|`Status_detail`|pending_capture|Payment status detail.|
|`External_reference`|503451|VTEX identifier sent to Mercado Pago.|
|`First_six_digits`|450995|Credit card Bin.|
|`Processing_mode`|agregador|Payment processing method.|

> NOTE
>
> Note
>
> [This document](https://help.vtex.com/en/tutorial/checking-for-errors-or-problems-in-a-transaction--3QecZEdmzumGKe8WGmeI8a) explains in detail how to check for errors or problems in a transaction.

In case of a rejection, it is very important to check the `status_detail` that specifies the reason for it.

For more information, access the link [Results of the creation of a position](/developers/en/docs/checkout-api/response-handling/collection-results).