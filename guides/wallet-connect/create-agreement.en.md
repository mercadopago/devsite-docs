# Create agreement 

The first step to integrating Wallet Connect is the creation of an agreement, that is, an authorization link that the buyer accesses to authorize the merchant access to his Mercado Pago wallet when making a payment. 

The agreement stores the payment methods selected by the payer and allows the modification of these settings without the intervention of the merchant, turning this step transparent during the payment flow.

Check out the diagram below that illustrates how the agreement creation flow works.

![Create agreement](/images/wallet-connect/new-create-agreement.en.png)

To create an _agreement_, send a **POST** with the necessary attributes to the [/v2/wallet_connect/agreements](/developers/en/reference/wallet_connect/_wallet_connect_agreements/post) endpoint and execute the request. On the response, consider two required parameters to obtain the payer's approval: `agreement_uri` and `return_uri`.


> WARNING
>
> Important
>
> A user can only have one active agreement per integration. If you want to create a new agreement, you must cancel the previous one. To cancel an agreement, send a DELETE to the endpoint [/v2/wallet_connect/agreements/{agreement_id}](/developers/en/reference/wallet_connect/_wallet_connect_agreements_agreement_id/delete) and execute the request.

