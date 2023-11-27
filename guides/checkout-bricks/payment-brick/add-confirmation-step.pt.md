# Adicionar etapa de confirmação

Após o preenchimento dos dados necessários para processar o pagamento, é possível apresentar ao comprador uma área de revisão dos itens, valores e forma de pagamento, assim como o endereço de entrega e o endereço de faturamento.

Essa etapa adicional proporciona ao comprador uma experiência mais transparente e segura, pois permite que ele revise e edite as informações antes de confirmar o pagamento. Além disso, para os integradores, ela agiliza o desenvolvimento de uma experiência de pagamento consistente e completa.

<center>

![review-confirm](checkout-bricks/review-confirm-1.gif)

</center>

Para integrar essa funcionalidade, faz-se necessário o envio de informações adicionais durante a inicialização do Payment Brick. Apresentamos agora um exemplo do objeto de configuração com destaque para a propriedade `enableReviewStep`, que habilita o fluxo de revisão:

> WARNING
>
> Atenção
>
> Certifique-se de substituir todos os valores numéricos e textuais entre "<>".

```Javascript
const settings = {
  initialization: {
    amount: 23.14,
    items: {
      totalItemsAmount: 33.14,
      itemsList: [
        {
          units: 1,
          value: 3.14,
          name: "<NAME>",
          description: "<DESCRIPTION>", // opcional
          imageURL: "<IMAGE_URL>", // opcional
        },
        {
          units: 3,
          value: 10,
          name: "<NAME>",
          description: "<DESCRIPTION>", // opcional
          imageURL: "<IMAGE_URL>", // opcional
        },
      ],
    },
    shipping: { // opcional
      costs: 5, // opcional
      shippingMode: "<SHIPPING_MODE>",
      description: "<SHIPPING_DESCRIPTION>", // opcional
      receiverAddress: {
        streetName: "<STREET_NAME>",
        streetNumber: "<STREET_NUMBER>",
        complement: "<COMPLEMENT>",
        neighborhood: "<PAYER_NEIGHBORHOOD>", // opcional
        city: "<PAYER_CITY>", // opcional
        federalUnit: "<PAYER_FED_UNIT>", // opcional
        zipCode: "<ZIP_CODE>",
      },
    },
    payer: { // opcional
      email: "<EMAIL>",
    },
    billing: { // opcional
      firstName: "<FIRST_NAME>", // opcional
      lastName: "<LAST_NAME>", // opcional
      taxRegime: "<TAX_REGIME>", // opcional
      taxIdentificationNumber: "<TAX_IDENTIFICATION_NUMBER>",
      identification: { // opcional
        type: "<IDENTIFICATION_TYPE>",
        number: "<IDENTIFICATION_NUMBER>",
      },
      billingAddress: { // opcional
        streetName: "<STREET_NAME>",
        streetNumber: "<STREET_NUMBER>",
        neighborhood: "<PAYER_NEIGHBORHOOD>", // opcional
        city: "<PAYER_CITY>", // opcional
        federalUnit: "<FED_UNIT>", // opcional
        zipCode: "<ZIP_CODE>",
      },
    },
    discounts: { // opcional
      totalDiscountsAmount: 15,
      discountsList: [
        {
          name: "<DISCOUNT_NAME>",
          value: 5,
        },
        {
          name: "<DISCOUNT_NAME_2>",
          value: 10,
        },
      ],
    },
  },
  customization: {
    enableReviewStep: true,
    reviewCardsOrder: ["payment_method", "shipping", "billing"], // opcional
    paymentMethods: {
      ticket: "all",
      atm: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
  },
  callbacks: {
    onReady: () => {},
    onSubmit: ({ selectedPaymentMethod, formData }) => {
      return new Promise((resolve, reject) => {
        fetch("/process_payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((response) => resolve(response))
          .catch((error) => reject());
      });
    },
    onError: (error) => console.error(error),
    onClickEditShippingData: () => {}, // opcional
    onClickEditBillingData: () => {}, // opcional
    onRenderNextStep: (currentStep) => {}, // opcional
    onRenderPreviousStep: (currentStep) => {}, // opcional
  },
};
```

Vamos examinar cada aspecto dessas configurações em detalhes a seguir.

> WARNING
>
> Atenção
>
> As propriedades definidas neste trecho de documentação como obrigatórias são exclusivas à etapa de confirmação, sendo desconsideradas em outros momentos do fluxo de pagamento.

## Ativação da funcionalidade (obrigatório)

A propriedade `enableReviewStep` é responsável pelo acionamento da funcionalidade, ou seja, a seção de revisão será renderizada somente quando essa propriedade estiver definida como _true_.

## Items (obrigatório)

Define quais os itens que compõem o pedido, sendo obrigatório o preenchimento desta propriedade. A seguir, tem-se um exemplo: 

```Javascript
const settings = {
  // ...
  initialization: {
    items: {
      totalItemsAmount: 9.42,
      itemsList: [
        {
          units: 3,
          value: 3.14,
          name: "<NAME>",
          description: "<DESCRIPTION>", // opcional
          imageURL: "<IMAGE_URL>", // opcional
        },
      ],
    },
  },
};
```

## Payer (opcional)

Identificação do comprador que será exibida no quadro junto com as informações de pagamento. **Recomendamos que essa propriedade seja preenchida**.

```Javascript
const settings = {
  // ...
  initialization: {
    payer: {
      email: "<EMAIL>",
    },
  },
};
```

## Shipping (opcional)

Dados relativos ao quadro de endereço de entrega, sendo que o mesmo somente será renderizado quando tais informações forem disponibilizadas.

<center>

![review-confirm-shipping-pt](checkout-bricks/review-confirm-shipping-pt.png)

</center>

Segue um exemplo do objeto de _shipping_:

```Javascript
const settings = {
  // ...
  initialization: {
    shipping: {
      costs: 5, // opcional
      shippingMode: "<SHIPPING_MODE>",
      description: "<SHIPPING_DESCRIPTION>", // opcional
      receiverAddress: {
        streetName: "<STREET_NAME>",
        streetNumber: "<STREET_NUMBER>",
        neighborhood: "<PAYER_NEIGHBORHOOD>", // opcional
        city: "<PAYER_CITY>", // opcional
        federalUnit: "<PAYER_FED_UNIT>", // opcional
        zipCode: "<ZIP_CODE>",
      },
    },
  },
};
```

## Billing (opcional)

Quadro que exibe os dados fiscais do pedido, sendo que o mesmo somente será renderizado quando tais informações forem disponibilizadas.

<center>

![review-confirm-billing-pt](checkout-bricks/review-confirm-billing-pt.png)

</center>

Segue um exemplo do objeto de _billing_:

```Javascript
const settings = {
  // ...
  initialization: {
    billing: {
      firstName: "<FIRST_NAME>", // opcional
      lastName: "<LAST_NAME>", // opcional
      taxRegime: "<TAX_REGIME>", // opcional
      taxIdentificationNumber: "<TAX_IDENTIFICATION_NUMBER>",
      identification: { // opcional
        type: "<IDENTIFICATION_TYPE>",
        number: "<IDENTIFICATION_NUMBER>",
      },
      billingAddress: { // opcional
        streetName: "<STREET_NAME>",
        streetNumber: "<STREET_NUMBER>",
        neighborhood: "<PAYER_NEIGHBORHOOD>", // opcional
        city: "<CITY>", // opcional
        federalUnit: "<FED_UNIT>", // opcional
        zipCode: "<ZIP_CODE>",
      },
    },
  },
};
```

## Discounts (opcional)

No campo `discounts` é possível informar cupons ou outros tipos de desconto que tenham sido aplicados ao pedido:

<center>

![review-confirm-discounts-pt](checkout-bricks/review-confirm-discounts-pt.png)

</center>

```Javascript
const settings = {
  // ...
  initialization: {
    discounts: {
      totalDiscountsAmount: 3,
      discountsList: [
        {
          name: "<DISCOUNT_NAME>",
          value: 3,
        },
      ],
    },
  },
};
```

> WARNING
>
> Atenção
>
> O informe de descontos, incluso do valor total, é apenas uma representação visual e não será subtraído automaticamente do valor total do pagamento.

## Customizando a disposição dos quadros de informações (opcional)

A disposição dos quadros com informações do comprador segue por padrão a uma ordem tendo em vista o mais comumente utilizado: `payment_method`, `shipping` e `billing`.

Para garantir uma experiência fluida, sugerimos que você organize os quadros na mesma sequência em que as informações são solicitadas nas etapas anteriores do processo. Para fazer isso, você pode utilizar a propriedade `reviewCardsOrder`. 

Segue um exemplo de customização no qual o quadro de _shipping_ é exibido na primeira posição:

```Javascript
const settings = {
  // ...
  customization: {
    reviewCardsOrder: ['shipping','payment_method', 'billing'],
  },
};
```

## Callbacks de edição (opcionais)

Cada quadro da seção de revisão está associado a uma _callback_, que é acionada quando o comprador deseja editar os dados correspondentes. As callbacks são: `onClickEditShippingData` e `onClickEditBillingData`. No entanto, o quadro com os dados de pagamento é uma exceção, pois o redirecionamento pela edição é feito pelo próprio Brick.

| Callback | Descrição | Obrigatório |
|---|---|---|
| `onClickEditShippingData` | O comprador deseja editar os dados de envio. | Sim (quando dados de _shipping_ forem informados) |
| `onClickEditBillingData` | O comprador deseja editar os dados de faturamento. | Sim (quando dados de _billing_ forem informados) |

Tais _callbacks_ permitem que o integrador construa um mecanismo de edição de acordo com sua conveniência. Para construir tal mecanismo, o _controller_ retornado ao instanciar o Brick possui um método `update`, que permite a edição desses dados. Consulte a nossa [documentação técnica](https://github.com/mercadopago/sdk-js/blob/main/API/bricks/paymentReview.md#brick-controllerupdate) para mais detalhes sobre o funcionamento do _controller_ e do método de _update_.

```Javascript
window.paymentBrickController = await bricksBuilder.create(
   "payment",
   "paymentBrick_container",
   settings
 );

...

 window.paymentBrickController.update((paymentData) => {
   ...
}
```

Ao contrário das _callbacks_ `onClickEditShippingData` e `onClickEditBillingData`, a função de edição do meio de pagamento irá reconduzir o comprador ao Payment Brick para que este possa editar os dados de pagamento, assim como o e-mail associado.

Tem-se também as _callbacks_ opcionais `onRenderNextStep` e `onRenderPreviousStep`, as quais indicam que o comprador avançou ou retornou alguma etapa no processo de pagamento, sendo útil em experiências de pagamento com etapas visuais definidas, por exemplo.

| Callback | Descrição | Obrigatório |
|---|---|---|
| `onRenderNextStep` | Indica que o comprador avançou da etapa de preenchimento dos dados no Payment Brick para o fluxo de revisão. | Não |
| `onRenderPreviousStep` | Indica que o comprador retornou da etapa de confirmação para a etapa de preenchimento dos dados. | Não |

> Caso tenha optado pela customização que [oculta o botão de pagamento,](/developers/pt/docs/checkout-bricks/payment-brick/visual-customizations/hide-element#bookmark_ocultar_botão_de_pagamento) deve-se utilizar a função `nextStep`, disponibilizada pelo controller do Brick para navegar pelo fluxo de pagamento. Por exemplo: `window.paymentBrickController.nextStep();`

## Processamento do pagamento

Por fim, ao clicar em **Pagar**, é acionada a _callback_ `onSubmit`, a qual segue com o envio dos dados de pagamento para o endpoint especificado em seu backend. Os dados disponibilizados por essa _callback_ já estão formatados de acordo com o contrato da [API de pagamentos](/developers/pt/reference/payments/_payments/post).

As informações de itens e _shipping_ serão retornadas no objeto `formData`, e para dados adicionais, tem-se o campo `additionalData`, que inclui dentre outros dados, os últimos quatro dígitos para compras com cartão. 

Consulte esse [tópico](/developers/pt/docs/checkout-bricks/payment-brick/advanced-features/additional-data) especializado caso deseje utilizar o campo `additionalData`. Já para mais detalhes sobre o processo de submissão, consulte a seção de [envio de pagamentos](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission).

## Customização dos textos 

É possível alterar os textos que vêm carregados no Brick. Para isso, no objeto de inicialização do Brick, é preciso enviar o objeto `customization.visual.texts` com os valores de textos desejados. Para mais detalhes, consulte a página de [alterações dos textos](/developers/pt/docs/checkout-bricks/payment-brick/visual-customizations/change-texts).