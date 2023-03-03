# Create payer token

After the _agreement_ creation and the buyer's approval, you must create the _payer token_. The _payer token_ is responsible for storing the buyer's data and ensuring the security of the transaction, it is also a mandatory attribute for creating transactions throughout the validity period of the `agreement` previously created.

Check out the diagram below that illustrates how the payer token creation flow works.

![Create payer token](/images/wallet-connect/create-payer-token.en.png)
\

To create a **payer token**, send a POST with all necessary attributes to the endpoint [/v2/wallet_connect/agreements/{agreementId}/payer_token](/developers/en/reference/wallet_connect/_wallet_connect_agreements_agreement_id_payer_token/post) and execute the request or, if you prefer, use the `curl` available below.

[[[
```curl

curl -X POST \
      'https://api.mercadopago.com/v2/wallet_connect/agreements/{agreement_id}/payer_token?client.id=1451895580758649&caller.id=832564722' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \ 
      -H 'x-platform-id: YOUR_ACCESS_TOKEN' \
      -d '{
  "code": "aeecea3e11f2545d1e7790eb6591ff68df74c57930551ed980239f4538a7e530"
}'
```
]]]

With the creation of the payer token, the Wallet Connect integration will finish successfully. Therefore, we recommend you check the [Webhooks](/docs/wallet-connect/additional-content/notifications/webhooks) documentation to set notifications up and receive real-time information anytime an event occurs.

