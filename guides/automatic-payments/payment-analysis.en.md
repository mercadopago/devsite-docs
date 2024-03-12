# Payment analysis

If an automatic payment is rejected, we recommend following a logic of attempts based on the rejection status. For example, if the payment was rejected due to an expired card, it doesn't make sense to try again with the same card, and the customer should be asked to provide another card for processing future charges.

In case of rejection due to insufficient funds, a new attempt with the same card can be made as long as the issue of the limit for the used card is resolved.

In each case, it is important to communicate the payment result to your customer and provide instructions for the next step. We will report an `HTTP Status 201 OK` that the payment was created correctly and send a result code so that you can redirect the customer to the page with the correct message.

> NOTE
>
> Important
>
> Whenever a payment is processed and there is any news about the process, Mercado Pago will send a notification so that you can update your systems. Refer to the [Webhooks notifications](/developers/en/docs/your-integrations/notifications/webhooks) documentation to learn how to configure the receipt of these notifications.