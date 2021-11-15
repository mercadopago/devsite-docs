# Logs verification

Logs allow you to review the information that Mercado Pago returns and that VTEX exposes, to have a better understanding of what happened with a transaction. Also, in case of modification or activation of new payment methods, they give us the possibility to validate that everything is working as planned. Lastly, they provide greater insight to commercial teams so they can better support vendors and become a first instance of support.

Access the VTEX transactions, then find the LOG containing the response status and click on **see more**.

The most significant data is the following:

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

In case of a rejection, it is very important to check the `status_detail` that specifies the reason for it.

For more information, access the link [Results of the creation of a position](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/handling-responses).

> LEFT_BUTTON_RECOMMENDED_EN
>
> Errors glossary
>
> Find out about the most common errors.
>
> [Errors glossary](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/unofficial/vtex/common-errors)