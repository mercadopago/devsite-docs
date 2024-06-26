# Get approval 

After the agreement creation, it is necessary to obtain the buyer's approval to use the payment data stored in the Mercado Pago wallet. This approval occurs during the payment flow and uses two parameters returned in the response of the agreement creation:

* `agreement_uri`: redirection address where the buyer authorizes access to the Mercado Pago wallet for making a payment.
* `return_uri`: redirection address after the agreement confirmation provided by the buyer.

> NOTE
>
> Important
>
> Upon confirming the agreement and obtaining the buyer's approval, a webhook notification will be sent with the details of the approval. See the section [User confirmation of the agreement](/developers/en/docs/wallet-connect/additional-content/your-integrations/notifications/webhooks) for more details.

See the diagram illustrating the buyer's approval process below.

![Get approval](/images/wallet-connect/get-payer-approval.en.png)

The sequence diagram previously displayed illustrates that the buyer's confirmation occurs simultaneously with the purchasing process. Within this scenario, the buyer grants authorization to integrate their Mercado Pago account, allowing the use of various payment methods offered to complete the transaction.

After concluding the agreement, refer to the section [Create payer token](/developers/en/docs/wallet-connect/account-linking-flow/create-payer-token). This step is necessary for successfully finalizing the account linking flow, enabling progression to the subsequent phase of the payment flow.