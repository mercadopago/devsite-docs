> CLIENT_SIDE
>
> h1
>
> Initialize data on the Bricks

## Cards

In the form displayed for payment by card, you can start with the **document** and **email** fields already filled in. For this, it is necessary to pass the following configuration in the Brick's initialization object.

[[[
```Javascript
settings = {
  ...,
  initialization: {
    ...,
    payer: {
      ...,
      email: '<PAYER_EMAIL_HERE>',
      identification: {
          type: 'string',
          number: 'string',
      },
    }
  }
}
```
```react-jsx
const initialization = {
 ...,
 payer: {
   ...,
   email: '<PAYER_EMAIL_HERE>',
   identification: {
     type: 'string',
     number: 'string',
   },
 },
};
```
]]]

----[mlb]----
## Pix

In the form displayed for payment by Pix, you can start with the **email** field already filled in. For this, it is necessary to pass the following configuration in the Brick's initialization object.

[[[
```Javascript
settings = {
  ...,
  initialization: {
   ...,
  payer: {
  email: '<PAYER_EMAIL_HERE>'
   }
}
```
```react-jsx
const initialization = {
 ...,
 payer: {
   ...,
   email: '<PAYER_EMAIL_HERE>',
 },
};
```
]]]

## Other payment methods

In the form displayed for payment by **boleto bancário** and **payment in lottery**, you can start with the fields already filled in. For this, it is necessary to pass the following configuration in the Brick's initialization object.

[[[
```Javascript
settings = {
  ...,
  initialization: {
 ...,
 payer: {
   firstName: '<PAYER_FIRST_NAME_HERE>',
   lastName: '<PAYER_LAST_NAME_HERE>',
   identification: {
    "type": "<PAYER_DOC_TYPE_HERE>",
    "number": "<PAYER_DOC_NUMBER_HERE>",
   },
   email: '<PAYER_EMAIL_HERE>',
   address: {
     zipCode: '<PAYER_ZIP_CODE_HERE>',
     federalUnit: '<PAYER_FED_UNIT_HERE>',
     city: '<PAYER_CITY_HERE>',
     neighborhood: '<PAYER_NEIGHBORHOOD_HERE>',
     streetName: '<PAYER_STREET_NAME_HERE>',
     streetNumber: '<PAYER_STREET_NUMBER_HERE>',
     complement: '<PAYER_COMPLEMENT_HERE>',
   }
 }
}
```
```react-jsx
const initialization = {
 ...,
 payer: {
   firstName: '<PAYER_FIRST_NAME_HERE>',
   lastName: '<PAYER_LAST_NAME_HERE>',
   identification: {
    "type": "<PAYER_DOC_TYPE_HERE>",
    "number": "<PAYER_DOC_NUMBER_HERE>",
   },
   email: '<PAYER_EMAIL_HERE>',
   address: {
     zipCode: '<PAYER_ZIP_CODE_HERE>',
     federalUnit: '<PAYER_FED_UNIT_HERE>',
     city: '<PAYER_CITY_HERE>',
     neighborhood: '<PAYER_NEIGHBORHOOD_HERE>',
     streetName: '<PAYER_STREET_NAME_HERE>',
     streetNumber: '<PAYER_STREET_NUMBER_HERE>',
     complement: '<PAYER_COMPLEMENT_HERE>',
   }
 },
};
```
]]]

------------
----[mla]----
## Other payment methods

In the form displayed for payment by **Rapipago** and **Pago Fácil**, you can start with the fields already filled in. For this, it is necessary to pass the following configuration in the Brick's initialization object.

[[[
```Javascript
settings = {
  ...,
  initialization: {
   ...,
  payer: {
  email: '<PAYER_EMAIL_HERE>',
   }
}
```
```react-jsx
const initialization = {
 ...,
 payer: {
   firstName: '<PAYER_FIRST_NAME_HERE>',
   lastName: '<PAYER_LAST_NAME_HERE>',
   identification: {
    "type": "<PAYER_DOC_TYPE_HERE>",
    "number": "<PAYER_DOC_NUMBER_HERE>",
   },
   email: '<PAYER_EMAIL_HERE>',
   address: {
     zipCode: '<PAYER_ZIP_CODE_HERE>',
     federalUnit: '<PAYER_FED_UNIT_HERE>',
     city: '<PAYER_CITY_HERE>',
     neighborhood: '<PAYER_NEIGHBORHOOD_HERE>',
     streetName: '<PAYER_STREET_NAME_HERE>',
     streetNumber: '<PAYER_STREET_NUMBER_HERE>',
     complement: '<PAYER_COMPLEMENT_HERE>',
   }
 },
};
```
]]]

------------
----[mlm]----
## Other payment methods

In the form displayed for payment by **ticket**, you can start with the fields already filled in. For this, it is necessary to pass the following configuration in the Brick's initialization object.

[[[
```Javascript
settings = {
  ...,
  initialization: {
    ...,
    payer: {
      email: '<PAYER_EMAIL_HERE>',
      firstName: '<PAYER_FIRST_NAME_HERE>',
      lastName: '<PAYER_LAST_NAME_HERE>',
    }
  }
}
```
```react-jsx
const initialization = {
 ...,
 payer: {
   firstName: '<PAYER_FIRST_NAME_HERE>',
   lastName: '<PAYER_LAST_NAME_HERE>',
   identification: {
    "type": "<PAYER_DOC_TYPE_HERE>",
    "number": "<PAYER_DOC_NUMBER_HERE>",
   },
   email: '<PAYER_EMAIL_HERE>',
   address: {
     zipCode: '<PAYER_ZIP_CODE_HERE>',
     federalUnit: '<PAYER_FED_UNIT_HERE>',
     city: '<PAYER_CITY_HERE>',
     neighborhood: '<PAYER_NEIGHBORHOOD_HERE>',
     streetName: '<PAYER_STREET_NAME_HERE>',
     streetNumber: '<PAYER_STREET_NUMBER_HERE>',
     complement: '<PAYER_COMPLEMENT_HERE>',
   }
 },
};
```
]]]

------------
----[mpe]----
## Other payment methods

In the form displayed for payment by **PagoEfectivo**, you can start with the fields already filled in. For this, it is necessary to pass the following configuration in the Brick's initialization object.

[[[
```Javascript
settings = {
  ...,
  initialization: {
    ...,
    payer: {
      ...,
      email: '<PAYER_EMAIL_HERE>',
    }
  }
}
```
```react-jsx
const initialization = {
 ...,
 payer: {
   email: '<PAYER_EMAIL_HERE>',
 },
};
```
]]]

------------
----[mco]----
## Other payment methods

In the form displayed for payment by other payment methods, you can start with the fields already filled in. For this, it is necessary to pass the following configuration in the Brick's initialization object.

[[[
```Javascript
settings = {
  ...,
  initialization: {
    ...,
    payer: {
      ...,
      email: '<PAYER_EMAIL>',
    }
  }
}
```
```react-jsx
const initialization = {
 ...,
 payer: {
   email: '<PAYER_EMAIL>',
 },
};
```
]]]

## PSE

In the form shown for payment with PSE, you can start with the **email**, **person** and **id** already filled in. For this, it is necessary to pass the following configuration in the Brick's initialization object.

[[[
```Javascript
settings = {
  ...,
  initialization: {
    ...,
    payer: {
      email: '<PAYER_EMAIL>',
      entityType: 'individual',
      identification: {
        type: '<PAYER_IDENTIFICATION_TYPE>',
        number: '<PAYER_IDENTIFICATION_NUMBER>'
      }
    }
  }
}
```
```react-jsx
const initialization = {
   ...,
   payer: {
    email: '<PAYER_EMAIL>',
    entityType: 'individual',
    identification: {
      type: '<YOUR_IDENTIFICATION_TYPE>',
      number: '<YOUR_IDENTIFICATION_NUMBER>'
    }
  }
};
```
]]]

------------