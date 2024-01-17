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
| Self service | It is the model where the client can make use of the devices in an autonomous and self-managed way. Please note that this use of the devices is **discouraged** and, if implemented, will be the total responsibility of the business. |
| Webhook | This is a notification that is sent from our server to the integrator through an HTTP POST call in relation to your transactions. |

## Possible statuses of an intent

| Type of intent | Status | Description |
|---|---|---|
| Payment intent and refund intent | `Open` | Initial status of an intent when creating it from the POS. |
| Payment intent and refund intent | `On Terminal` | Intermediate status of an intent when obtaining it from the Point device. |
| Payment intent and refund intent | `Processing` | Intermediate status of an intent at the time of reconciliation with a financial institution. |
| Payment intent | `Processed` | Intermediate status of a payment intent at the time of finalizing the reconciliation with a financial institution. |
| Payment intent and refund intent | `Finished` | Final status of an intent when the transaction ends. |
| Payment intent | `Confirmation_required` | Final status of a payment intent when it ends without obtaining a payment status. Once obtained, this status will not change. When you receive this, you must confirm on your device what the payment status is, using the `payment_id` received in the response, before delivering your product or service. |
| Payment intent and refund intent | `Canceled` | Final status of an intent when it is canceled. |
| Payment intent and refund intent | `Error` | Final status of an intent when a transaction error occurs. |
| Payment intent and refund intent | `Abandoned` | Final status of an intent when hasn’t been processed after a certain time. |
