# Get approval 

After the agreement creation, it is necessary to obtain the buyer's approval to use the payment data stored in the Mercado Pago wallet. This approval occurs during the payment flow and uses two parameters returned in the response of the agreement creation:

* `agreement_uri`: redirection address where the buyer authorizes access to the Mercado Pago wallet for making a payment.
* `return_uri`: redirection address after the agreement confirmation provided by the buyer.

See the diagram illustrating the buyer's approval process below.

As indicated in the sequence diagram above, the buyer's approval occurs during the purchase when the buyer authorizes connecting to his Mercado Pago account and using the available payment methods to finalize the transaction.

Once the connection is authorized, check the Create payer token section to complete the Wallet Connect integration.

> PREV_STEP_CARD_EN
>
> Create agreement
>
> See the steps for creating an agreement necessary for Wallet Connect integration.
>
> [Create agreement](/developers/en/docs/wallet-connect/integration-configuration/create-agreement)

> NEXT_STEP_CARD_EN
>
> Create payer token
>
> Learn how to create a payer token and complete the Wallet Connect integration.
>
> [Create payer token](/developers/en/docs/wallet-connect/integration-configuration/create-payer-token)