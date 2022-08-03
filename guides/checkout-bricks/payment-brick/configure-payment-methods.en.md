> CLIENT_SIDE 
>
> h1
>
> Configure accepted payment methods

As Payment Brick provides several means of payment, it is necessary to customize which ones will be made available. It is currently possible to select up to four:

----[mlm, mpe, mco, mlu, mlc]----
* Credit card
* Debit card
------------

----[mla, mlb]----
* Credit card
* Debit card
* Methods off
* Pix
------------

See below how to configure each of the options mentioned above.

## Credit card

To include the credit card as a means of payment, just use the following configuration:

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      creditCard: [ 'master', 'visa' ]
    }
  }
}
}
```
]]]

The `creditCard` property accepts 2 types of variables, `string` and `string[]`. In the example above, only **MASTER** and **VISA** card payments will be accepted. The allowed methods for credit card are: `visa`, `master`, `hipercard`, `amex` and `elo`.

If you want to select all methods, you can also pass a string instead of an array, as in the example below.

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      creditCard: 'all'
    }
  }
}
}
```
]]]

## Debit card

To include the debit card as a means of payment, just use the following configuration:

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      debitCard: [ 'master', 'visa' ]
    }
  }
}
}
```
]]]

The `debitCard` property accepts 2 types of variables, `string` and `string[]`. In the example above, only **MASTER** and **VISA** card payments will be accepted. The methods allowed for debit cards are the same as for credit cards, ie: `visa`, `master`, `hipercard`, `amex` and `elo`.

If you want to select all methods, you can also pass a string instead of an array, as in the example below.

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      debitCard: 'all'
    }
  }
}
}
```
]]]

----[mla, mlb]----
## Methods off

To include offline payment methods, just use the following configuration:

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: [ 'pec', 'bolbradesco' ]
    }
  }
}
}
```
]]]

The `ticket` property accepts 2 variable types, `string` and `string[]`. In the example above, payments via **boleto** and **payment in lottery** will be accepted. The allowed methods for offline payment are: `pec` (lottery payment) and `bolbradesco` (boleto bancário).

If you want to select all methods, you can also pass a string instead of an array, as in the example below.

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: 'all'
    }
  }
}
}
```
]]]

## Pix

To include Pix, just use the following configuration:

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      bankTransfer: [ 'pix' ]
    }
  }
}
}
```
]]]

The `bankTransfer` property accepts 2 types of variables, `string` and `string[]`. For now, the only accepted medium for `bankTransfer` is **Pix**, so passing the array `['pix']` or the string `all` will yield the same result.

------------

### Callback onSubmit

To allow different payment endpoints for different payment methods, the **callback de onSubmit** for the Payment Brick receives, in addition to the form data, also the payment type. See the example below.

[[[
```Javascript
settings = {
 ...,
 callbacks: {
   ...,
   onSubmit: ({ paymentType, formData }) => {
     // callback called when clicking on the data submission button
     return new Promise((resolve, reject) => {
       fetch("/processar-pago", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData)
       })
         .then((response) => {
           // receive payment result
           resolve();
         })
         .catch((error) => {
           // handle error response when trying to create payment
           reject();
         })
     });
   },
 },
};
}
```
]]]

> PREV_STEP_CARD_EN
>
> Customers & Cards
>
> Check how to configure the Customers & Cards functionality, which allows the use of cards saved in payments on your website.
>
> [Customers & Cards](/developers/en/docs/checkout-bricks/payment-brick/additional-customization/customers-cards) 

> NEXT_STEP_CARD_EN
>
> Set theme
>
> See how you can select another theme when instantiating/rendering the Card Payment Brick.
>
> [Set theme](/developers/en/docs/checkout-bricks/card-payment-brick/additional-customization/set-theme)