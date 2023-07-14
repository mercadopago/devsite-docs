## Glossary

Some terms are new and you may not be familiar with them. Use this glossary so you don't get lost:

| Term | Description |
| --- | --- |
| Access token | Private key with which you can generate charges. You must use it to identify yourself in your integrations. It is very important that this data is protected in your servers and is not accessible by any user or attacker. |
| Integrator | Person or entity that wishes to process a payment through our API.|
| Payment intent | Contains the transaction details.|
| Poi | Device serial. You can see it on the back of your device (SN, NS). |
| Poi Type | Device type. |
| POS | Point of Sale.|
| Self service | It is the model where the client can make use of the devices in an autonomous and self-managed way. |
| Webhook | This is a notification that is sent from our server to the integrator through an HTTP POST call in relation to your transactions. |

## Possible statuses of a payment intent

| Term | Description |
| --- | --- |
| Abandoned | Final status of a payment intent when hasn’t been processed after a certain time. |
| Canceled | Final status of a payment intent when it is canceled. |
| Error | Final status of a payment intent when a transaction error occurs. |
| Confirmation_required | Final status of a payment intent when it ends without obtaining a payment status. When you receive this, you must confirm on your device what the payment status is, using the `payment_id` received in the response, before delivering your product or service.  |
| Finished | Final status of a payment intent when the transaction ends. |
| On Terminal | Intermediate status of a payment intent when obtaining it from the Point device. |
| Open | Initial status of a payment intent when creating it from the POS. |
| Processed | Intermediate status of a payment intent at the time of finalizing the reconciliation with a financial institution. |
| Processing | Intermediate status of a payment intent at the time of reconciliation with a financial institution. |