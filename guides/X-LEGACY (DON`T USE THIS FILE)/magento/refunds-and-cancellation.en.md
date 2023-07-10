# Refunds and cancellations

**Refunds** are transactions carried out when a certain charge is reversed and the amounts paid are returned to the buyer. This means that the customer will receive back the amount paid for the purchase of a certain product or service on their account or credit card statement.

**Cancellations** happen when a purchase is made but the payment has not yet been approved for some reason. In this case, considering that the transaction was not processed and the establishment did not receive any amount, the purchase is canceled and therefore, no charge takes place.

In the sections below you will find the necessary steps to accept returns and make cancellations in your store.

## Refunds

To accept payment refunds, you must activate the option in the configuration of your payment method by selecting the "Yes" option in the drop-down field.

By enabling this option, the module will make the partial or total refund of the payment in Mercado Pago when a credit memo is created in the order. The refund is only made on payments that have the status Approved.

> If the refund is made in the Mercado Pago panel, the module is not prepared to create a credit memo automatically. Due to this limitation, it is advisable that it is created from the store.

## Cancelations

To cancel payments made at your store, you must activate the option in the configuration of your payment method by selecting the "Yes" option in the drop-down field.

By enabling this option, the module will cancel the payment in Mercado Pago when the order is canceled.

The payment will be canceled when the status is `pending` or` in_process`, otherwise the module will return an error message.
