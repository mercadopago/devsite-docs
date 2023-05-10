# Refund payments

Refunds are transactions carried out when a certain charge is reversed and the amounts paid are returned to the buyer. This means that the customer will receive back in his account or on his card statement, the amount paid for the purchase of a certain product or service.

With Wallet Connect, it is also possible to refund an Advanced Payment. This operation will change the status to `refunded`.

> WARNING
>
> Important
>
> The refund does not happen immediately. Calling this endpoint triggers an asynchronous process that refunds the payment, and your change will be notified via webhook.

The diagram below illustrates the refund flow for an Advanced Payment.

![refund-a-payment](/images/wallet-connect/refund-a-payment.en.png)
