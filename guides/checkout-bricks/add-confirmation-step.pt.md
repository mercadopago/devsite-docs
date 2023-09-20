# Adicionar etapa de confirmação

Após o preenchimento dos dados necessários para processar o pagamento, é possível apresentar ao comprador uma área de revisão dos itens, valores e forma de pagamento, assim como o endereço de entrega e o endereço de faturamento.

Essa etapa adicional proporciona ao comprador uma experiência mais transparente e segura, pois permite que ele revise e edite as informações antes de confirmar o pagamento. Além disso, para os integradores, ela agiliza o desenvolvimento de uma experiência de pagamento consistente e completa.

<center>

![review-confirm-pt](checkout-bricks/review-confirm-pt.gif)

</center>

Para integrar essa funcionalidade, faz-se necessário o envio de informações adicionais durante a inicialização do Payment Brick. Apresentamos agora um exemplo do objeto de configuração com destaque para a propriedade enableReviewStep, que habilita o fluxo de revisão:

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
    onRenderNextStep: (currentStep: string) => {}, // opcional
    onRenderPreviousStep: (currentStep: string) => {}, // opcional
  },
};
```

Vamos examinar cada aspecto dessas configurações em detalhes a seguir.
