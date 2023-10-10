#  How to check logs 

Logs help to have a better understanding of the support systems, as they allow reviewing the information returned in the integration of Mercado Pago with VTEX. This facilitates the comprehension of what happened in a transaction. 

In addition, in case of modification or activation of new payment methods, they allow validating if everything is working as expected. 

Eventually, the support team may request that you check and/or send logs to track necessary information. To access these logs, go to the administration panel of your VTEX store and click on **Payments > Transactions**. Then, look for the log that contains the *response status* and click on **+ Information**. 


|Field|Data|Description|
|---|---|---|
|`ID`|10302316|Mercado Pago transaction number.|
|`Payment_method_id`|visa|Payment method.|
|`Payment_type_id`|credit_card|MPayment method.|
|`Status`|authorized|Payment status. When the `status` is rejected, it is very important to review the `status_detail` that specifies the reason for it. |
|`Status_detail`|pending_capture|Payment status detail.|
|`External_reference`|503451|VTEX identifier sent to Mercado Pago.|
|`First_six_digits`|450995|Credit card Bin.|
|`Processing_mode`|agregador|Payment processing method.|

> NOTE
>
> Note
>
> You can get more detailed information on how to search for errors or problems in a transaction by accessing [this document](https://help.vtex.com/en/tutorial/checking-for-errors-or-problems-in-a-transaction--3QecZEdmzumGKe8WGmeI8a) available on the VTEX website. For more information, access the link [Results of creating a charge](/developers/en/docs/checkout-api/response-handling/collection-results).
