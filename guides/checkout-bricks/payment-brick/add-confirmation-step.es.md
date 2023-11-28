# Agregar etapa de confirmación

Después de completar los datos necesarios para procesar el pago, es posible mostrar al comprador un área de revisión de los elementos, valores y método de pago, así como la dirección de entrega y la dirección de facturación.

Esta etapa adicional brinda al comprador una experiencia más transparente y segura, ya que le permite revisar y editar la información antes de confirmar el pago. Además, para los integradores, acelera el desarrollo de una experiencia de pago coherente y completa.

<center>

![review-confirm](checkout-bricks/review-confirm-es.gif)

</center> 

Para integrar esta funcionalidad, es necesario enviar información adicional durante la inicialización de Payment Brick. Presentamos ahora un ejemplo del objeto de configuración con énfasis en la propiedad `enableReviewStep`, que habilita el flujo de revisión:

> WARNING
>
> Atención
>
> Asegúrese de reemplazar todos los valores numéricos y de texto entre "<>".

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

Vamos a examinar cada aspecto de estas configuraciones en detalle a continuación.

> WARNING
>
> Atención
>
> Las propiedades definidas en este fragmento de documentación como obligatorias son exclusivas de la etapa de confirmación y se ignoran en otros momentos del flujo de pago.

## Activación de funcionalidad (obligatorio)

La propiedad `enableReviewStep` es responsable de habilitar la funcionalidad, es decir, la sección de revisión se renderizará solo cuando esta propiedad esté definida como _true_.

## Ítems (opcional)

Define los elementos que componen el pedido, siendo obligatorio completar esta propiedad. A continuación, se muestra un ejemplo:

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

Identificación del comprador que se mostrará en el cuadro junto con la información de pago. **Recomendamos completar esta propiedad.**

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

Datos relacionados con la dirección de entrega, que solo se renderizará cuando esta información esté disponible.

<center>

![review-confirm-shipping-es](checkout-bricks/review-confirm-shipping-es.png)

</center>

A continuación se muestra un ejemplo del objeto de _shipping_:

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

Cuadro que muestra los datos fiscales del pedido, que solo se renderizará cuando esta información esté disponible.

<center>

![review-confirm-billing-es](checkout-bricks/review-confirm-billing-es.png)

</center>

A continuación se muestra un ejemplo del objeto de _billing_:

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

En el campo `discounts`, es posible indicar cupones u otros tipos de descuento aplicados al pedido:

<center>

![review-confirm-discounts-es](checkout-bricks/review-confirm-discounts-es.png)

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
> Atención
>
> La presentación de los descuentos, incluido el monto total, es solo una representación visual y no se restará automáticamente del monto total del pago.

## Personalización de la disposición de cuadros de información (opcional)

La disposición de los cuadros con la información del comprador sigue por defecto un orden basado en el más comúnmente utilizado: `payment_method`, `shipping` e `billing`.

Para garantizar una experiencia fluida, sugerimos que organice los cuadros en la misma secuencia en la que se solicitan las informaciones en las etapas anteriores del proceso. Para hacerlo, puede utilizar la propiedad `reviewCardsOrder`. 

A continuación, se muestra un ejemplo de personalización en el cual el cuadro de _shipping_ se muestra en la primera posición:

```Javascript
const settings = {
  // ...
  customization: {
    reviewCardsOrder: ['shipping','payment_method', 'billing'],
  },
};
```

## Callbacks de edición (opcionales)

Cada cuadro de la sección de revisión está asociado a una _callback_, que se activa cuando el comprador desea editar los datos correspondientes. Las callbacks son: `onClickEditShippingData` y `onClickEditBillingData`. Sin embargo, el cuadro con los datos de pago es una excepción, ya que la redirección para la edición se realiza a través del propio Brick.

| Callback | Descripción | Obligatorio |
|---|---|---|
| `onClickEditShippingData` | El comprador desea editar los datos de envío.	 | Si (cuando se proporcionen datos de _shipping_) |
| `onClickEditBillingData` | El comprador desea editar los datos de facturación. | Si (cuando se proporcionen datos de _billing_) |

Estas _callbacks_ permiten que el integrador construya un mecanismo de edición según su conveniencia. Para construir dicho mecanismo, el _controller_ devuelto al instanciar el Brick tiene un método `update`, que permite la edición de estos datos. Consulte nuestra [documentación técnica](https://github.com/mercadopago/sdk-js/blob/main/API/bricks/paymentReview.md#brick-controllerupdate) para obtener más detalles sobre cómo funcionan el _controlador_ y el método _update_.

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

A diferencia de las _callbacks_ `onClickEditShippingData` y `onClickEditBillingData`, la función de edición del método de pago redirigirá al comprador al Payment Brick para que pueda editar los datos de pago y el email asociado.

También hay _callbacks_ opcionales, `onRenderNextStep` y `onRenderPreviousStep`, que indican que el comprador avanzó o retrocedió en alguna etapa del proceso de pago, lo cual es útil en experiencias de pago con etapas visuales definidas, por ejemplo.

| Callback | Descripción | Obligatorio |
|---|---|---|
| `onRenderNextStep` | Indica que el comprador avanzó desde la etapa de completar los datos en Payment Brick hasta el flujo de revisión. | No |
| `onRenderPreviousStep` | Indica que el comprador retrocedió desde la etapa de confirmación a la etapa de completar los datos. | No |

> Si ha optado por la personalización que [oculta el botón de pago,](/developers/es/docs/checkout-bricks/payment-brick/visual-customizations/hide-element#bookmark_ocultar_botón_de_pago) debe utilizar la función `nextStep`, proporcionada por el controlador del Brick para navegar por el flujo de pago. Por ejemplo: `window.paymentBrickController.nextStep();`

## Proceso de pago

Finalmente, al hacer clic en **Pagar**, se activa la _callback_ `onSubmit`, que envía los datos de pago al endpoint especificado en su backend. Los datos proporcionados por esta _callback_ ya están formateados según el contrato de la [API de pagos](/developers/es/reference/payments/_payments/post).

La información de los ítems y el envío se devolverá en el objeto `formData`, y para datos adicionales, existe el campo `additionalData`, que incluye, entre otros datos, los últimos cuatro dígitos para compras con tarjeta.

Consulte este [tema](/developers/es/docs/checkout-bricks/payment-brick/advanced-features/additional-data) especializado si desea utilizar el campo `additionalData`. Para obtener más detalles sobre el proceso de envío, consulte la sección de [envío de pagos](/developers/es/docs/checkout-bricks/payment-brick/payment-submission).

## Personalización de textos

Es posible cambiar los textos que se cargan en el Brick. Para ello, en el objeto de inicialización del Brick, debe enviar el objeto `customization.visual.texts` con los valores de los textos deseados. Para obtener más detalles, consulte la página de [cambio de textos](/developers/es/docs/checkout-bricks/payment-brick/visual-customizations/change-texts).