# Create agreement 

The first step to integrating Wallet Connect is the creation of an agreement, that is, an authorization link that the buyer accesses to authorize the merchant access to his Mercado Pago wallet when making a payment. 

The agreement stores the payment methods selected by the payer and allows the modification of these settings without the intervention of the merchant, turning this step transparent during the payment flow.

Check out the diagram below that illustrates how the agreement creation flow works.

![Create agreement](/images/wallet-connect/new-create-agreement.en.png)

To create an _agreement_, send a **POST** with the necessary attributes to the [/v2/wallet_connect/agreements](/developers/en/reference/wallet_connect/_wallet_connect_agreements/post) endpoint and execute the request or, if you prefer, use the `curl` below and pay attention to the request response that will return **two parameters** mandatory to obtain the payer's approval: `agreement_uri` and `return_uri`.

[[[
```curl

curl -X POST \
      'https://api.mercadopago.com/v2/wallet_connect/agreements?client.id=2451675580092619' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \ 
      -H 'x-platform-id: YOUR_ACCESS_TOKEN' \
      -d '{
  "return_url": "https://www.mercadopago.com/",
  "external_flow_id": "EXTERNAL_FLOW_ID",
  "external_user": {
    "id": "usertest",
    "description": "Test account"
  },
  "agreement_data": {
    "validation_amount": 3.14,
    "description": "Test agreement"
  }
}'
```
]]]


> WARNING
>
> Important
>
> A user can only have one active agreement per integration. If you want to create a new agreement, you must cancel the previous one. To cancel an agreement, send a DELETE to the endpoint [/v2/wallet_connect/agreements/{agreement_id}](/developers/en/reference/wallet_connect/_wallet_connect_agreements_agreement_id/delete) and execute the request.

