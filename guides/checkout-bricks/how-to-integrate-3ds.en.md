# How to integrate 3DS with Checkout Bricks

In this documentation you will find all the necessary information to carry out the integration with 3DS with Checkout Bricks. For more information on how this type of authentication works, see [3DS 2.0](/developers/en/docs/checkout-bricks/how-tos/improve-payment-approval/3ds).

> NOTE
>
> Important
>
> To integrate with 3DS, certain requirements must be met. Before moving on to the next steps, review the [Prerequisites](/developers/en/docs/checkout-bricks/prerequisites) section and make sure that all are met.

## Integrate with 3DS

3DS authentication can be done through two different flows: **with or without Challenge**, which are additional steps that the buyer must complete to ensure their identity. The decision to include or exclude the Challenge depends on the card issuer and the risk profile of the transaction being performed.

For **low-risk transactions**, the information sent at checkout is sufficient and the additional Challenge steps are not necessary. However, **for cases of high fraud risk**, the Challenge is necessary to **verify the buyer's identity**, which increases card transaction conversion.

Below are the steps to integrate with 3DS.

1. Após gerar uma intenção de pagamento usando [Card Payment Brick](/developers/pt/docs/checkout-bricks/card-payment-brick/introduction) ou [Payment Brick](/developers/pt/docs/checkout-bricks/payment-brick/introduction), é necessário enviar, a partir do seu backend, uma solicitação de pagamento ao Mercado Pago através das nossas APIs. A  ativação do fluxo de 3DS 2.0 se dá pela adição do campo `three_d_secure_mode: 'optional'` nessa requisição.

```javascript
var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("YOUR_ACCESS_TOKEN");

const paymentData = {
...req.body,
three_d_secure_mode: 'optional'
};

mercadopago.payment.save(paymentData)
  .then(function(response) {
    const { status, status_detail, id } = response.body;
    res.status(response.status).json({ status, status_detail, id });
  })
  .catch(function(error) {
    console.error(error);
  });
```

Visão geral da resposta:

```javascript
{
   "payment_id":52044997115,
   "status":"pending",
   "status_detail":"pending_challenge",
   "three_ds_info":{
      "external_resource_url":"https://acs-public.tp.mastercard.com/api/v1/browser_Challenges",
      "creq":"eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6ImJmYTVhZjI0LTliMzAtNGY1Yi05MzQwLWJkZTc1ZjExMGM1MCIsImFjlOWYiLCJjW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IS4wIn0"
   },
   "owner":null
}
```

> NOTE
>
> Importante
>
> O campo retornado `three_ds_info` contém as informações necessárias para continuar o processo de pagamento caso o `status_detail` seja `pending_challenge`.

2. Para continuar o fluxo e exibir o _Challenge_ de forma simplificada, é recomendado integrar com o [Status Screen Brick](/developers/pt/docs/checkout-bricks/status-screen-brick/default-rendering), informando o ID do pagamento gerado, além do conteúdo do objeto `three_ds_info`, o qual foi retornados pela API de pagamentos.

Caso não deseje utilizar o Status Screen Brick nessa etapa, aconselhamos acessar a seção de [Realizar implantação](/developers/pt/docs/checkout-api/how-tos/how-to-integrate-3ds) na documentação de [Checkout Transparente(/developers/pt/docs/checkout-api/landing), visto que serão necessários passos adicionais para, por exemplo, capturar o evento emitido quando o _Challenge_ for finalizado.

```javascript
{
const renderStatusScreenBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     paymentId: "<PAYMENT_ID>", // id do pagamento a ser mostrado
     additionalInfo: {
       externalResourceURL: "<EXTERNAL_RESOURCE_URL>",
       creq: "<C_REQ>",
     },
   },
   callbacks: {
     onReady: () => {},
     onError: (error) => {
       console.error(error);
     },
   },
 };
 window.statusScreenBrickController = await bricksBuilder.create(
   "statusScreen",
   "statusScreenBrick_container",
   settings
 );
};
renderStatusScreenBrick(bricksBuilder);

```

O Status Screen Brick exibirá uma transição indicando redirecionamento e logo em seguida será exibido o _Challenge_ do banco em questão.

<center>

![how-to-integrate-3ds](checkout-bricks/how-to-integrate-3ds-en.gif)

</center>

O usuário deve responder ao desafio para que a transição seja validada devidamente. Vale ressaltar que a experiência do _Challenge_ é de responsabilidade exclusiva do banco encarregado.

> NOTE
> 
> Importante
> 
> Por questões de segurança, caso o processo de _Challenge_ não seja iniciado em até 30 segundos após a criação do pagamento, o mesmo será rejeitado, pois isso é importante que o desafio se inicie exatamente após a sua geração.

3. Após a resolução do desafio, será exibido o resultado final do pagamento, de acordo com a resposta emitida pelo banco ao finalizar o _Challenge_.

----[mlb]----
<center>

![payment-Brick-layout-mlb](checkout-bricks/payment-brick-layout-mlb-en.gif)

</center>
------------

----[mla]----
<center>

![payment-Brick-layout-mla](checkout-bricks/payment-brick-layout-mla-en.gif)

</center>

------------
----[mlm]----
<center>

![payment-Brick-layout-mlm](checkout-bricks/payment-brick-layout-mlm-en.gif)

</center>

------------
----[mco]----
<center>

![payment-brick-layout-mco](checkout-bricks/payment-brick-layout-mco-en.gif)

</center>

------------
----[mpe, mlu, mlc]----
<center>

![payment-brick-layout-all](checkout-bricks/payment-brick-layout-all-en.gif)

</center>

------------

## Possible payment statuses

A transaction with 3DS can return different statuses depending on the type of integration performed (with or without Challenge). In a payment **without Challenge**, the transaction status will be directly `approved` or `rejected`.

In a payment **with Challenge**, the transaction will have a `pending` status and the authentication process with the bank will be initiated. Only after this step, the final status will be displayed.

See below the table with the possible statuses and their respective descriptions.

| Status | Description |
| --- | --- |
| `pending` | Transaction with pending authentication or Challenge timeout. |
| `approved` | Transaction approved with authentication. |
| `rejected`| Transaction denied without authentication. |

## Integration test

Before going into production, it is possible to test the integration to ensure that the 3DS flow works correctly and that payments are processed without errors. This way, it avoids buyers from abandoning the transaction because they can't complete it.

To make a test purchase, you will need to have the test credentials of your production user and a test credit card with 3DS enabled.

> WARNING
>
> Important
>
> To perform the tests, we recommend that you contact your Mercado Pago consultant.