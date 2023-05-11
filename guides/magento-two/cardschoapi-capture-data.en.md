# Capture of customer details in the payment form

This function allows capturing customer documents from an additional field in the payment form. If the store does not yet capture this information, simply select the **Enable** option in **Capture document identification**. 

Activating this feature automatically inserts the customer's CPF in the payment form, optimizing the data filling experience.

![Capture data](/images/magento-two/captura_de_dados.gif)


> WARNING
>
> Important
>
> Our module tries to capture the information of the `vat_id` field of your store, if it does not find it, we will overwrite your configuration as this is a mandatory value for payment.