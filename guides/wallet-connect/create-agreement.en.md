# Create agreement

The first step in integrating Wallet Connect is to create an agreement, an authorization link that the buyer uses to grant the seller access to their Mercado Pago wallet at the moment a payment is made.

The agreement stores the payment methods selected by the payer and allows for changes to these settings without seller intervention, making this step transparent during the payment flow.

Any change to payment methods is communicated through a webhook notification, which provides details of the update. 
For more information, consult the section [Agreement payment method update](/developers/en/docs/wallet-connect/additional-content/your-integrations/notifications/webhooks).

> WARNING
>
> Important
>
> A user may have only one active agreement per integration. To create a new agreement, the previous one must be canceled. To do this, send a **DELETE** to the endpoint [/v2/wallet_connect/agreements/{agreement_id}](/developers/en/reference/wallet_connect/_wallet_connect_agreements_agreement_id/delete) and execute the request. After cancellation, a webhook notification will be sent containing all the details of the operation. To understand the process in more detail, visit the section [Cancellation of agreement between integrator and Mercado Pago](/developers/en/docs/wallet-connect/additional-content/your-integrations/notifications/webhooks).

Check out the diagram below that illustrates how the agreement creation flow works.

![Create agreement](/images/wallet-connect/new-create-agreement.en.png)

To create an agreement, send a **POST** with the necessary attributes to the [/v2/wallet_connect/agreements](/developers/en/reference/wallet_connect/_wallet_connect_agreements/post) endpoint and execute the request or, if you prefer, use the `curl` below and pay attention to the request response that will return **two parameters** mandatory to obtain the payer's approval: `agreement_uri` and `return_uri`.

```curl
curl -X POST \
    'https://api.mercadopago.com/v2/wallet_connect/agreements' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \
      -H 'x-platform-id: YOUR_PLATFORM_ID' \
      -d '{
  "return_uri": "https://www.mercadopago.com/",
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

## Response

```json
{
  "agreement_id": "22abcd1235ed497f945f755fcaba3c6c",
  "agreement_uri": "https://wwww.mercadopago.com.ar/v1/wallet_agreement/22abcd1235ed497f945f755fcaba3c6c"
}
```