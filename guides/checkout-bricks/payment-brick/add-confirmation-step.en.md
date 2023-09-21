# Add confirmation step

Após o preenchimento dos dados necessários para processar o pagamento, é possível apresentar ao comprador uma área de revisão dos itens, valores e forma de pagamento, assim como o endereço de entrega e o endereço de faturamento.

Essa etapa adicional proporciona ao comprador uma experiência mais transparente e segura, pois permite que ele revise e edite as informações antes de confirmar o pagamento. Além disso, para os integradores, ela agiliza o desenvolvimento de uma experiência de pagamento consistente e completa.

<center>

![review-confirm-en](checkout-bricks/review-confirm-en.gif)

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
          description: "<DESCRIPTION>", // optional
          imageURL: "<IMAGE_URL>", // optional
        },
        {
          units: 3,
          value: 10,
          name: "<NAME>",
          description: "<DESCRIPTION>", // optional
          imageURL: "<IMAGE_URL>", // optional
        },
      ],
    },
    shipping: { // optional
      costs: 5, // optional
      shippingMode: "<SHIPPING_MODE>",
      description: "<SHIPPING_DESCRIPTION>", // optional
      receiverAddress: {
        streetName: "<STREET_NAME>",
        streetNumber: "<STREET_NUMBER>",
        neighborhood: "<PAYER_NEIGHBORHOOD>", // optional
        city: "<PAYER_CITY>", // optional
        federalUnit: "<PAYER_FED_UNIT>", // optional
        zipCode: "<ZIP_CODE>",
      },
    },
    payer: { // optional
      email: "<EMAIL>",
    },
    billing: { // optional
      firstName: "<FIRST_NAME>", // optional
      lastName: "<LAST_NAME>", // optional
      taxRegime: "<TAX_REGIME>", // optional
      taxIdentificationNumber: "<TAX_IDENTIFICATION_NUMBER>",
      identification: { // optional
        type: "<IDENTIFICATION_TYPE>",
        number: "<IDENTIFICATION_NUMBER>",
      },
      billingAddress: { // optional
        streetName: "<STREET_NAME>",
        streetNumber: "<STREET_NUMBER>",
        neighborhood: "<PAYER_NEIGHBORHOOD>", // optional
        city: "<PAYER_CITY>", // optional
        federalUnit: "<FED_UNIT>", // optional
        zipCode: "<ZIP_CODE>",
      },
    },
    discounts: { // optional
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
    reviewCardsOrder: ["payment_method", "shipping", "billing"], // optional
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
    onClickEditShippingData: () => {}, // optional
    onClickEditBillingData: () => {}, // optional
    onRenderNextStep: (currentStep: string) => {}, // optional
    onRenderPreviousStep: (currentStep: string) => {}, // optional
  },
};
```

Vamos examinar cada aspecto dessas configurações em detalhes a seguir.

> WARNING
>
> Atenção
>
> As propriedades definidas neste trecho de documentação como obrigatórias são exclusivas à etapa de revisão, sendo desconsideradas em outros momentos do fluxo de pagamento.

> Mandatory
>
> h2
>
> Chaveamento da funcionalidade

A propriedade `enableReviewStep` é responsável pelo chaveamento da funcionalidade, ou seja, a seção de revisão será renderizada somente quando essa propriedade estiver definida como true.

> Mandatory
>
> h2
>
> Items

Define quais os itens que compõem o pedido, sendo obrigatório o preenchimento desta propriedade. A seguir, tem-se um exemplo: 

```Javascript
const items = {
  totalItemsAmount: 9.42,
  itemsList: [
    {
      units: 3,
      value: 3.14,
      name: "<NAME>",
      description: "<DESCRIPTION>", // optional
      imageURL: "<IMAGE_URL>", // optional
    },
  ],
};
```

> Opcional
>
> h2
>
> Payer

Identificação do comprador que será exibida no quadro junto com as informações de pagamento. Recomendamos fortemente que essa propriedade seja preenchida.

```Javascript
const payer = {
  email: "<EMAIL>",
}
```

> Opcional
>
> h2
>
> Shipping 

Dados relativos ao quadro de endereço de entrega, sendo que o mesmo somente será renderizado quando tais informações forem disponibilizadas.

<center>

![review-confirm-shipping-en](checkout-bricks/review-confirm-shipping-en.gif)

</center>

 Segue um exemplo do objeto de _shipping_:

```Javascript
const shipping = {
  costs: 5, // optional
  shippingMode: "<SHIPPING_MODE>",
  description: "<SHIPPING_DESCRIPTION>", // optional
  receiverAddress: {
    streetName: "<STREET_NAME>",
    streetNumber: "<STREET_NUMBER>",
    neighborhood: "<PAYER_NEIGHBORHOOD>", // optional
    city: "<PAYER_CITY>", // optional
    federalUnit: "<PAYER_FED_UNIT>", // optional
    zipCode: "<ZIP_CODE>",
  },
};
```

> Opcional
>
> h2
>
> Billing

Quadro que exibe os dados fiscais do pedido, sendo que o mesmo somente será renderizado quando tais informações forem disponibilizadas.

<center>

![review-confirm-billing-en](checkout-bricks/review-confirm-billing-en.png)

</center>

Segue um exemplo do objeto de _billing_:

```Javascript
const billing = {
  firstName: "<FIRST_NAME>", // optional
  lastName: "<LAST_NAME>", // optional
  taxRegime: "<TAX_REGIME>", // optional
  taxIdentificationNumber: "<TAX_IDENTIFICATION_NUMBER>",
  identification: { // optional
    type: "<IDENTIFICATION_TYPE>",
    number: "<IDENTIFICATION_NUMBER>",
  },
  billingAddress: { // optional
    streetName: "<STREET_NAME>",
    streetNumber: "<STREET_NUMBER>",
    neighborhood: "<PAYER_NEIGHBORHOOD>", // optional
    city: "<CITY>", // optional
    federalUnit: "<FED_UNIT>", // optional
    zipCode: "<ZIP_CODE>",
  },
};
```

> Opcional
>
> h2
>
> Discounts

No campo `discounts` é possível informar cupons ou outros tipos de desconto que tenham sido aplicados ao pedido:

<center>

![review-confirm-discounts-en](checkout-bricks/review-confirm-discounts-en.png)

</center>

```Javascript
const discounts = {
  totalDiscountsAmount: 3,
  discountsList: [
    {
      name: "<DISCOUNT_NAME>",
      value: 3,
    },
  ],
};
```

> WARNING
>
> Atenção
>
> O informe de descontos, incluso do valor total, é apenas uma representação visual e não será subtraído automaticamente do valor total do pagamento.

> Opcional
>
> h2
>
> Customizando a disposição dos quadros de informações

A disposição dos quadros com informações do comprador segue por padrão a uma ordem tendo em vista o mais comumente utilizado: `payment_method`, `shipping` e `billing`.

Para garantir uma experiência fluida, sugerimos que você organize os quadros na mesma sequência em que as informações são solicitadas nas etapas anteriores do processo. Para fazer isso, você pode utilizar a propriedade `reviewCardsOrder`. 

Segue um exemplo de customização no qual o quadro de shipping é exibido na primeira posição:

```Javascript
reviewCardsOrder: ['shipping','payment_method', 'billing'],
```

> Opcionais
>
> h2
>
> Callbacks de edição

Cada quadro da seção de revisão está associado a uma _callback_, que é acionada quando o comprador deseja editar os dados correspondentes. As callbacks são: `onClickEditShippingData` e `onClickEditBillingData`. No entanto, o quadro com os dados de pagamento é uma exceção, pois o redirecionamento pela edição é feito pelo próprio Brick.

| Callback | Descrição | Mandatory |
|---|---|---|
| `onClickEditShippingData` | O comprador deseja editar os dados de envio. | Sim (quando dados de _shipping_ forem informados) |
| `onClickEditBillingData` | O comprador deseja editar os dados de faturamento. | Sim (quando dados de _billing_ forem informados) |

Tais _callbacks_ permitem que o integrador construa um mecanismo de edição de acordo com sua conveniência. Para construir tal mecanismo, o _controller_ retornado ao instanciar o Brick possui um método `update`, que permite a edição desses dados. Consulte a [página de renderização](/developers/en/docs/checkout-bricks/payment-brick/default-rendering) para mais detalhes sobre o funcionamento do _controller_.

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

Diferente das _callbacks_ `onClickEditShippingData` e `onClickEditBillingData`, a função de edição do meio de pagamento irá reconduzir o comprador ao Payment Brick, para que o mesmo possa editar os dados de pagamento assim como o email associado.

Tem-se também as _callbacks_ opcionais `onRenderNextStep` e `onRenderPreviousStep`, as quais indicam que o comprador avançou ou retornou alguma etapa no processo de pagamento, sendo útil em experiências de pagamento com etapas visuais definidas, por exemplo.

| Callback | Descrição | Mandatory |
|---|---|---|
| `onRenderNextStep` | Indica que o comprador avançou da etapa de preenchimento dos dados no Payment Brick para o fluxo de revisão. | Não |
| `onRenderPreviousStep` | Indica que o comprador retornou da etapa de revisão para a etapa de preenchimento dos dados. | Não |

> Caso tenha optado pela customização que [oculta o botão de pagamento](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/hide-element), deve-se utilizar a função `nextStep`,disponibilizada pelo controller do Brick para navegar pelo fluxo de pagamento. Por exemplo: `window.paymentBrickController.nextStep();`

## Efetuação do pagamento

Por fim, ao clicar em **Pagar**, é acionada a _callback_ `onSubmit`, a qual segue com o envio dos dados de pagamento para o endpoint especificado em seu backend. Os dados disponibilizados por essa _callback_ já estão formatados de acordo com o contrato da [API de pagamentos](/developers/en/reference/payments/_payments/post).

As informações de itens e shipping serão retornadas no objeto `formData`, e para dados adicionais, tem-se o campo `additionalData`, que inclui dentre outros dados, os últimos quatro dígitos para compras com cartão. 

Consulte esse [tópico](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/additional-data) especializado caso deseje utilizar o campo `additionalData`. Já para mais detalhes sobre o processo de submissão, consulte a seção de [envio de pagamentos](/developers/en/docs/checkout-bricks/payment-brick/payment-submission).

## Customização dos textos 

É possível alterar os textos que vêm carregados no Brick. Para isso, no objeto de inicialização do Brick, é preciso enviar o objeto `customization.visual.texts` com os valores de textos desejados. Para mais detalhes, consulte a página de [alterações dos textos](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/change-texts).