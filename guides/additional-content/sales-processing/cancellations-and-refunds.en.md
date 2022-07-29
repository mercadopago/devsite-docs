# Refunds and cancellations

**Refunds** are transactions made when a certain charge is reversed and the amounts paid are returned to the buyer. This means that the customer will receive back the amount paid for the purchase of a certain product or service on their account or credit card statement.

**Cancellations** happen when a purchase is made but the payment has not yet been approved for some reason. In this case, considering that the transaction was not processed and the establishment did not receive any amount, the purchase is canceled and there is no charge.

Although they are similar transactions, it is important to keep in mind that the cancellation is made on the same day as the payment is captured, returning the limit to the buyer's card within the period defined by the issuing bank. The return referring to the reversal is made directly on the credit card bill, or on the checking account in cases of payment via Pix, boleto bancário or debit.

In this documentation, you will find the necessary information to perform a full and partial refund, and cancel a purchase in your store.

> WARNING
>
> Important
>
> When running the APIs referenced in this documentation, you may encounter the attribute **X-Idempotency-Key**. Its completion is important to ensure the execution and re-execution of requests without side effects such as duplicate payments in refund cases.

## Cancellations

Before canceling a purchase, the following factors must be considered: 

- **Payment status**: Cancellations can only be made if the payment status is Pending or In process. These statuses are displayed in the response of the Cancellation API call in the fields *Status* and *Status detail* respectively.

- **Expiry date**: A payment expires after 30 days without confirmation and the cancellation is automatic. The final status of this transaction will appear as *Canceled* or *Expired*. This information will be displayed in the response of the Cancellation API call, in the fields *Status* and *Status detail* respectively.

----[mlb]----
- **Boleto bancário**: If the expiry date of a boleto bancário expires, the user can generate it again by entering the transaction ID of their Mercado Pago account. However, if you want to avoid stock retention problems, for example, you can choose not to make a new issue of this slip available. To do this, simply cancel it.

------------

Considering the above information, [click here](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_payment_id/put
) and visit our API Reference to access the Cancellation API.

## Refunds

[TXTSNIPPET][/guides/snippets/test-integration/refunds]