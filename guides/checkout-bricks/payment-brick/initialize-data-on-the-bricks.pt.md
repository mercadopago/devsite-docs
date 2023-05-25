> CLIENT_SIDE
>
> h1
>
> Inicializar dados nos Bricks

## Cartões

No formulário exibido para pagamento com cartões, é possível inicializar com os campos de **documento** e **e-mail** já preenchidos. Para isso, é necessário passar a seguinte configuração no objeto de inicialização do Brick.

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

No formulário exibido para pagamento com Pix, é possível inicializar com o campo de **e-mail** já preenchido. Para isso, é necessário passar a seguinte configuração no objeto de inicialização do Brick.

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

## Outros meios de pagamento

No formulário exibido para pagamento com **boleto bancário** e **pagamento em lotérica**, é possível inicializar com as informações já preenchidas. Para isso, é necessário passar a seguinte configuração no objeto de inicialização do Brick.

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
## Outros meios de pagamento

No formulário exibido para pagamento com **Rapipago** e **Pago Fácil**, é possível inicializar com as informações já preenchidas. Para isso, é necessário passar a seguinte configuração no objeto de inicialização do Brick.

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
## Outros meios de pagamento

No formulário exibido para pagamento com **ticket**, é possível inicializar com as informações já preenchidas. Para isso, é necessário passar a seguinte configuração no objeto de inicialização do Brick.

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
## Outros meios de pagamento

No formulário exibido para pagamento com **PagoEfectivo**, é possível inicializar com as informações já preenchidas. Para isso, é necessário passar a seguinte configuração no objeto de inicialização do Brick.

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
## Outros meios de pagamento

No formulário exibido para pagamento com outros meios de pagamentos disponíveis, é possível inicializar com as informações já preenchidas. Para isso, é necessário passar a seguinte configuração no objeto de inicialização do Brick.

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

No formulário exibido para pagamento com PSE, é possível inicializar com o campo de **e-mail**, **pessoa** e **id** já preenchidos. Para isso, é necessário passar a seguinte configuração no objeto de inicialização do Brick.

[[[
```Javascript
settings = {
  ...,
  initialization: {
    ...,
    payer: {
      email: '<PAYER_EMAIL>',
      entity_type: 'individual',
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
    entity_type: 'individual',
    identification: {
      type: '<YOUR_IDENTIFICATION_TYPE>',
      number: '<YOUR_IDENTIFICATION_NUMBER>'
    }
  }
};
```
]]]

------------