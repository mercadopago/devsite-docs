# Add confirmation step

After filling in the necessary data to process the payment, it is possible to present the buyer with a review area of the items, amounts, and payment method, as well as the delivery address and billing address.

This additional step provides the buyer with a more transparent and secure experience because it allows them to review and edit the information before confirming the payment. Additionally, for integrators, it streamlines the development of a consistent and complete payment experience.

----[mlm]----
<center>

![review-confirm-mlm](checkout-bricks/review-confirm-mlm-es.gif)

</center>
------------
----[mla]----
<center>

![review-confirm-mla](checkout-bricks/review-confirm-intro-mla-en.gif)

</center>
------------

To integrate this functionality, it is necessary to send additional information during the initialization of Payment Brick. We now present an example of the configuration object with emphasis on the `enableReviewStep` property, which enables the review flow:

> WARNING
>
> Attention
>
> Make sure to replace all numeric and textual values within `<>`.

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
        complement: "<COMPLEMENT>",
        neighborhood: "<PAYER_NEIGHBORHOOD>", // optional
        city: "<PAYER_CITY>", // optional
        federalUnit: "<PAYER_FED_UNIT>", // optional
        zipCode: "<ZIP_CODE>",
        additionalInformation: "<ADDITIONAL_INFORMATION>", // opcional
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
    onClickEditShippingData: () => {}, // optional
    onClickEditBillingData: () => {}, // optional
    onRenderNextStep: (currentStep) => {}, // optional
    onRenderPreviousStep: (currentStep) => {}, // optional
  },
};
```

We will examine each aspect of these settings in detail below.

> WARNING
>
> Attention
>
> The properties defined in this section of the documentation as mandatory are exclusive to the confirmation stage and are disregarded at other times in the payment flow.

## Feature activation (mandatory)

The `enableReviewStep` property is responsible for triggering the feature, meaning the review section will be rendered only when this property is set to true.

## Items (mandatory)

Define the items that make up the order, and filling in this property is mandatory. Here's an example:

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
          description: "<DESCRIPTION>", // optional
          imageURL: "<IMAGE_URL>", // optional
        },
      ],
    },
  },
};

```

## Payer (optional)

Buyer identification that will be displayed on the panel along with payment information. We strongly recommend filling in this property.

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

## Shipping (optional)

Data related to the shipping address panel, which will only be rendered when such information is available.

----[mlm]----
<center>

![review-confirm-shipping-mlm](checkout-bricks/review-confirm-shipping-mlm-en.png)

</center>
------------
----[mla]----
<center>

![review-confirm-shipping-mla](checkout-bricks/review-confirm-shipping-mla-en.png)

</center>
------------

Below is an example of the shipping object:

```Javascript
const settings = {
  // ...
  initialization: {
    shipping: {
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
  },
};
```

## Billing (optional)

Panel displaying the fiscal data of the order, which will only be rendered when such information is available.

----[mlm]----
<center>

![review-confirm-billing-mlm](checkout-bricks/review-confirm-billing-mlm-en.png)

</center>
------------
----[mla]----
<center>

![review-confirm-billing-mla](checkout-bricks/review-confirm-billing-mla-en.png)

</center>
------------

Below is an example of the billing object:

```Javascript
const settings = {
  // ...
  initialization: {
    billing: {
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
    },
  },
};
```

## Discounts (optional)

In the `discounts` field, you can enter coupons or other types of discounts that have been applied to the order:

----[mlm]----
<center>

![review-confirm-discounts-mlm](checkout-bricks/review-confirm-discounts-mlm-en.png)

</center>
------------
----[mla]----
<center>

![review-confirm-discounts-mla](checkout-bricks/review-confirm-discounts-mla-en.png)

</center>
------------

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
> Attention
>
> The discount information, including the total amount, is only a visual representation and will not be subtracted automatically from the total payment amount.

## Customizing the arrangement of information panels (optional)

The arrangement of panels with buyer information follows a default order based on the most commonly used: `payment_method`, `shipping` and `billing`.

To ensure a fluid experience, we suggest that you arrange the panels in the same sequence as the information is requested in the previous steps of the process. To do this, you can use the `reviewCardsOrder` property.

Here's an example of customization in which the shipping panel is displayed in the first position:

```Javascript
const settings = {
  // ...
  customization: {
    reviewCardsOrder: ['shipping','payment_method', 'billing'],
  },
};
```

## Edit callbacks (optional)

Each panel in the review section is associated with a callback, which is triggered when the buyer wants to edit the corresponding data. The callbacks are: `onClickEditShippingData` and `onClickEditBillingData`. However, the panel with payment data is an exception because the editing redirection is done by the Brick itself.

| Callback | Description | Mandatory |
|---|---|---|
| `onClickEditShippingData` | The buyer wants to edit the shipping details. | Yes (when _shipping_ data is provided) |
| `onClickEditBillingData` | The buyer wants to edit the billing details. | Yes (when _billing_ data is provided) |

These callbacks allow the integrator to build an editing mechanism according to their convenience. To build such a mechanism, the controller returned when instantiating the Brick has an update method, which allows the editing of this data. Check out our [technical documentation](https://github.com/mercadopago/sdk-js/blob/main/API/bricks/paymentReview.md#brick-controllerupdate) for more details on how the controller and the update method works.

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

Unlike the `onClickEditShippingData` and `onClickEditBillingData` _callbacks_, the payment method edit function will redirect the buyer to the Payment Brick so that they can edit the payment details, as well as the associated email.

There are also optional callbacks, `onRenderNextStep` and `onRenderPreviousStep`, which indicate whether the buyer has advanced or returned in any step of the payment process. This can be useful in payment experiences with defined visual steps, for example.

| Callback | Description | Mandatory |
|---|---|---|
| `onRenderNextStep` | Indicates that the buyer has advanced from the data filling stage in Payment Brick to the review flow. | No |
| `onRenderPreviousStep` | Indicates that the buyer returned from the confirmation stage to the data filling stage. | No |

> If you have opted for the customization that [hides the payment button,](/developers/en/docs/checkout-bricks/payment-brick/visual-customizations/hide-element#bookmark_hide_payment_button) you should use the `nextStep` function provided by the Brick controller to navigate through the payment flow. For example: `window.paymentBrickController.nextStep();`

## Payment processing

Finally, when clicking **Pay**, the `onSubmit` callback is triggered, which proceeds to send the payment data to the endpoint specified in your backend. The data provided by this callback is already formatted according to the [payment API](/developers/en/reference/payments/_payments/post) contract.

Information about items and shipping will be returned in the `formData` object, and for additional data, there is the `additionalData` field, which includes, among other details, the last four digits for card purchases.

If you wish to use the `additionalData` field, please check out to this specialized [topic](/developers/en/docs/checkout-bricks/payment-brick/advanced-features/additional-data). For more details on the submission process, consult the [payment submission](/developers/en/docs/checkout-bricks/payment-brick/payment-submission) section.

----[mla]----
<center>

![review-confirm-payment-mla](checkout-bricks/review-confirm-payment-mla-en.png)

</center>
------------

## Text customization

It is possible to change the texts that are loaded in the Brick. To do this, in the Brick initialization object, you need to send the `customization.visual.texts` object with the desired text values. For more details, refer to the [text changes](/developers/en/docs/checkout-bricks/payment-brick/visual-customizations/change-texts) page.