## Glossary

Some terms are new and you may not be familiar with them. Use this glossary so you don't get lost:

| Term | Description |
| --- | --- |
| POS | Point of Sale.|
| Integrator | Person or entity that wishes to process a payment through our API.|
| Payment intent | Contains the transaction details.|
| Access token | Private key with which you can generate charges. You must use it to identify yourself in your integrations. It is very important that this data is protected in your servers and is not accessible by any user or attacker. |
| Webhook | This is a notification that is sent from our server to the integrator through an HTTP POST call in relation to your transactions. |
| Poi | Device serial. You can see it on the back of your device (SN, NS). |
| Poi Type | Device type. |

## Possible statuses of a payment intent

| Term | Description |
| --- | --- |
| Open | Initial status of a payment intent when creating it from the POS |
| On Terminal | Intermediate status of a payment intent when obtaining it from the Point device |
| Processing | Intermediate status of a payment intent at the time of reconciliation with a financial institution |
| Processed | Intermediate status of a payment intent at the time of finalizing the reconciliation with a financial institution |
| Canceled | Final status of a payment intent when it is canceled|
| Abandoned | Final status of a payment intent when hasn’t been processed after a certain time |
| Error | Final status of a payment intent when a transaction error occurs |
| Finished | Final status of a payment intent when the transaction ends |