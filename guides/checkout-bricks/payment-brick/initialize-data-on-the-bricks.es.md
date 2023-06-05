> CLIENT_SIDE
>
> h1
>
> Inicializar datos en Bricks

## Tarjetas

En el formulario que se muestra para el pago con tarjetas, puedes empezar con los campos de **documento** y **correo electrónico** ya rellenados. Para eso, es necesario pasar la siguiente configuración en el objeto de inicialización del Brick.

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

En el formulario que se muestra para el pago con Pix, puedes empezar con el **correo electrónico** ya rellenado. Para eso, es necesario pasar la siguiente configuración en el objeto de inicialización del Brick.

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

## Otros medios de pago

En el formulario que se muestra para el pago con **boleto bancário** y en **agencias de lotería** puedes empezar con los campos ya rellenados. Para eso, es necesario pasar la siguiente configuración en el objeto de inicialización del Brick.

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
## Otros medios de pago

En el formulario que se muestra para el pago con **Rapipago** y **Pago Fácil** puedes empezar con los campos ya rellenados. Para eso, es necesario pasar la siguiente configuración en el objeto de inicialización del Brick.

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
## Otros medios de pago

En el formulario que se muestra para el pago con **ticket** puedes empezar con los campos ya rellenados. Para eso, es necesario pasar la siguiente configuración en el objeto de inicialización del Brick.

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
## Otros medios de pago

En el formulario que se muestra para el pago con **PagoEfectivo** puedes empezar con los campos ya rellenados. Para eso, es necesario pasar la siguiente configuración en el objeto de inicialización del Brick.

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
## Otros medios de pago

En el formulario que se muestra para el pago con otros medios de pago puedes empezar con los campos ya rellenados. Para eso, es necesario pasar la siguiente configuración en el objeto de inicialización del Brick.

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

En el formulario que se muestra para el pago con PSE, puedes empezar con el **correo electrónico**, **persona** y **identificación** ya rellenado. Para eso, es necesario pasar la siguiente configuración en el objeto de inicialización del Brick.

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