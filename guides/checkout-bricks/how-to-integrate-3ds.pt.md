# Como integrar 3DS com Checkout Bricks

Nesta documentação você encontrará toda a informação necessária para realizar a integração com 3DS com Checkout Bricks. Para mais informações sobre como esse tipo de autenticação funciona, veja [3DS 2.0](/developers/pt/docs/checkout-bricks/how-tos/improve-payment-approval/3ds).

> NOTE
>
> Importante
>
> Para realizar a integração com 3DS, é preciso atender a determinados requisitos. Antes de avançar para os próximos passos, revise a seção [Pré-requisitos](/developers/pt/docs/checkout-bricks/prerequisites) e certifique-se de que todos sejam cumpridos.

## Integrar com 3DS

A integração com 3DS resulta em um processo de autenticação que é executado através de dois fluxos: com ou sem _Challenge_, sendo _Challenge_ as etapas adicionais que o comprador deve cumprir para garantir sua identidade. 

Para **transações de baixo risco**, as informações enviadas na finalização da compra são suficientes, o fluxo segue de forma transparente e as etapas adicionais do _Challenge_ não são necessárias. Porém, **para casos de alto risco de fraude**, o _Challenge_ é necessário para verificar a identidade do comprador, o que aumenta a aprovação das transações com cartão.

A decisão de incluir ou não o _Challenge_ depende do emissor do cartão e do perfil de risco da transação que está sendo realizada.

Abaixo estão as etapas para realizar uma integração com 3DS.

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

Caso não seja necessário utilizar o fluxo do _Challenge_, o campo `status` do pagamento terá valor `approved` e não será necessário exibi-lo, dessa forma, o fluxo de pagamento seguirá normalmente.

Para os casos em que o _Challenge_ é necessário, o `status` mostrará o valor `pending`, e o `status_detail` será `pending_challenge`.

Visão geral simplificada da resposta:

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

2. Para continuar o fluxo e exibir o _Challenge_ de forma simplificada, é recomendado integrar com o [Status Screen Brick](/developers/pt/docs/checkout-bricks/status-screen-brick/default-rendering), informando o ID do pagamento gerado, além do conteúdo do objeto `three_ds_info`, os quais foram retornados pela API de pagamentos.

Caso não deseje utilizar o Status Screen Brick nessa etapa, aconselhamos acessar a seção de [Realizar implantação](/developers/pt/docs/checkout-api/how-tos/integrate-3ds) na documentação de [Checkout Transparente](/developers/pt/docs/checkout-api/landing), visto que serão necessários passos adicionais para, por exemplo, capturar o evento emitido quando o _Challenge_ for finalizado.

```javascript
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

O Status Screen Brick exibirá uma transição indicando redirecionamento e, logo em seguida, será exibido o _Challenge_ do banco em questão.

<center>

![how-to-integrate-3ds](checkout-bricks/how-to-integrate-3ds-pt.gif)

</center>

O usuário deve responder ao desafio para que a transição seja validada devidamente. Vale ressaltar que a experiência do _Challenge_ é de responsabilidade exclusiva do banco encarregado.

>  NOTE
> 
> Importante
> 
> Por questões de segurança, o pagamnto será rejeitado caso o processo de _Challenge_ não seja iniciado em até 30 segundos após a sua criação. Portanto, é importante que o desafio se inicie exatamente após a sua geração.

3. Após a resolução do desafio, será exibido o resultado final do pagamento de acordo com a resposta emitida pelo banco ao finalizar o _Challenge_.

<center>

![status-screen-Brick](checkout-bricks/status-screen-brick-pt.jpg)

</center>

## Teste de integração

Antes de ir à produção, é possível testar a integração para garantir que o fluxo 3DS funcione corretamente e que os pagamentos sejam processados sem erros. Dessa forma, evita-se que os compradores abandonem a transação por não conseguirem concluí-la.

Para realizar uma compra de teste, será necessário ter em mãos as credenciais de teste do seu usuário de produção, além de um cartão de crédito de teste com 3DS habilitado.

> WARNING
>
> Importante
>
> Para a realização dos testes, recomendamos que você entre em contato com seu consultor do Mercado Pago.