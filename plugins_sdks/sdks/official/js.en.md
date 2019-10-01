#SDK Javascript

El SDK Javascript de Mercado Pago te facilita obtener los datos de las tarjetas de tus clientes de forma segura.

Al usar el SDK, y seguir los pasos que te indicamos, la información sensible de la tarjeta nunca viajará a tus servidores, asegurando el nivel adecuado de cumplimiento de la norma PCI DSS.

##Incluye el SDK de MercadoPago

Como primer paso, tienes que incluir el SDK en el HTML de tu aplicación:

```javascript
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

##Configura tu clave pública

Para comenzar a utilizar el SDK Javascript, debes proveer tú public key para que podamos identificarte al conectarte con MercadoPago.

```javascript
Mercadopago.setPublishableKey("TEST-98638d24-eb00-4dd5-82d8-4e573fac6a80");
```

##Obtén un token de uso único para la tarjeta

Para cobrar a tus clientes de forma segura, sin tener que almacenar información sensible de las tarjetas de tu lado, tienes que convertir dichos datos en un token de uso único que puedas pasar a tus servidores.

```javascript
Mercadopago.createToken(form, tokenHandler);
```

La función recibe como argumento un formulario HTML con los datos de la tarjeta de tu cliente y una función de callback. Los datos necesarios son extraídos de los campos marcados con data-checkout en el formulario.

Si todo anduvo bien, tienes que agregar el token devuelto en el callback al formulario del pago y enviarlo a tu servidor. En caso de obtener algún error, debes comunicárselo a tu cliente para que intente nuevamente.

En la función de callback recibirás un objeto con las siguientes propiedades:

```javascript
{
    "id": "ff8080814cbd77a8014cc",
    "public_key": "TEST-98638d24-eb00-4dd5-82d8-4e573fac6a80",
    "card_id": null,
    "luhn_validation": true,
    "status": "active",
    "date_used": null,
    "card_number_length": 16,
    "date_created": "2015-04-16T13:06:25.525-04:00",
    "first_six_digits": "450995",
    "last_four_digits": "3704",
    "security_code_length": 3,
    "expiration_month": 6,
    "expiration_year": 2017,
    "date_last_updated": "2015-04-16T13:06:25.525-04:00",
    "date_due": "2015-04-24T13:06:25.531-04:00",
    "live_mode": false,
    "cardholder": {
        "identification": {
            "number": "23456789",
            "type": "type"
        },
        "name": "name"
    }
}
```

##Obtén información del medio de pago

Puedes obtener información de la tarjeta ingresada o del medio de pago seleccionado utilizando:

```javascript
Mercadopago.getPaymentMethod(object, paymentMethodHandler);
```

La función recibe como argumento un objeto y una función de callback.

Ejemplos:

Obtener el medio de pago en base a los primeros 6 dígitos (bin) de la tarjeta:

```javascript
object = { “bin” : bin }
```

Obtener el medio de pago mediante su identificador:

```javascript
object = {“payment_method_id”: “visa”}
```

Con la información del medio de pago podrás determinar si necesitas pedir a tu cliente datos adicionales para realizar el cobro.

Por ejemplo, si el campo `additional_info_needed` contiene el valor issuer_id, deberás solicitar a tu cliente el emisor de su tarjeta.

Ejemplo de respuesta:

```javascript
[ {
    "id": "visa",
    "name": "Visa",
    "payment_type_id": "credit_card",
    "status": "active",
    "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/visa.gif",
    "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/visa.gif",
    "deferred_capture": "supported",
    "settings": [
      {
        "bin": {
          "pattern": "^4",
          "exclusion_pattern": "^(487017)",
          "installments_pattern": "^4"
        },
        "card_number": {
          "length": 16,
          "validation": "standard"
        },
        "security_code": {
          "mode": "optional",
          "length": 3,
          "card_location": "back"
        }
      }
    ],
    "additional_info_needed": [
      "cardholder_name",
      "cardholder_identification_type",
      "cardholder_identification_number"
    ]
  }]
```

##Obtén los tipos de documento

El tipo y número de documento de identidad es un dato obligatorio en la mayoría de los países para poder pagar con tarjetas.

El SDK de Mercado Pago provee una función que te facilita obtener los tipos de documento.
```javascript
Mercadopago.getIdentificationTypes(identificationHandler);
```

El argumento es una función de `callback` que se ejecutará luego de obtener los tipos de documento. Este argumento es opcional.

Si la función `getIdentificationTypes()` es llamada sin parámetros, luego de obtener los tipos de documento se intentará armar un combo con las opciones sobre el elemento `docType`.
```html
<select  id="docType" data-checkout="docType"></select>
```

Ejemplo de respuesta:

```javascript
[
    {
        "id": "DNI",
        "name": "DNI",
        "type": "number",
        "min_length": 7,
        "max_length": 8
    },
    {
        "id": "CI",
        "name": "Cédula",
        "type": "number",
        "min_length": 1,
        "max_length": 9
    },
….
    {
        "id": "Otro",
        "name": "Otro",
        "type": "number",
        "min_length": 5,
        "max_length": 20
    }
]

```

##Obtén los emisores de la tarjeta

Algunas tarjetas requieren que envíes información adicional del emisor. Para esto, el SDK de MecadoPago provee una función que te permite obtener los emisores de una tarjeta.
```javascript
Mercadopago.getIssuers(paymentMethodId, issuersHandler);
```

La función recibe como argumentos el identificador del medio de pago y una función de callback.

Ejemplo de respuesta con paymentMethodId = master:

```javascript
[
  {
    "id": "338",
    "name": "ICBC",
    "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/338.gif",
    "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/338.gif"
  },
  {
    "id": "303",
    "name": "Banco Patagonia",
    "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/303.gif",
    "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/303.gif"
  },
  {
    "id": "326",
    "name": "HSBC",
    "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/326.gif",
    "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/326.gif"
  },
 ….
   {
    "id": "3",
    "name": "Otro",
    "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/master.gif",
    "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/master.gif"
  }
]

```

##Obtén las cuotas y costos de financiación

Para cobrar en cuotas y poder mostrar a tus clientes los costos de financiación, el SDK de Mercado Pago te brinda una función que retorna las cuotas disponibles para la tarjeta de tu cliente.

```javascript
Mercadopago.getInstallments({"bin": bin,"amount": amount}, installmentHandler);
```

La función recibe como argumentos un objeto que está formado por el bin (primeros 6 dígitos de la tarjeta) y el valor de lo que queres cobrar, y una función de callback.

En los casos en que es necesario que el cliente indique el emisor de la tarjeta, el objeto pasado como argumento tendrá la siguiente forma:

```javascript
{
    "bin": "123456",
    "amount": 123.45,
    "issuer_id": 111
}

```

La función devuelve una lista con el detalle de las cuotas. Además, por cada cuota te recomendamos un mensaje para que muestres a tus clientes.

Ejemplo con {"bin": "530575", "amount": 10}:

```javascript
[
      {
        "installments": 1,
        "installment_rate": 0,
        "disccount_rate": null,
        "labels": [
        ],
        "min_allowed_amount": 0,
        "max_allowed_amount": 60000,
        "recommended_message": "1 cuota de $ 10,00 ($ 10,00)",
        "installment_amount": 10,
        "total_amount": 10
      },
      {
        "installments": 3,
        "installment_rate": 0,
        "disccount_rate": null,
        "labels": [
          "recommended_installment"
        ],
        "min_allowed_amount": 2,
        "max_allowed_amount": 60000,
        "recommended_message": "3 cuotas de $ 3,33 ($ 10,00)",
        "installment_amount": 3.33,
        "total_amount": 10
      },
      {
        "installments": 6,
        "installment_rate": 26.99,
        "disccount_rate": null,
        "labels": [
        ],
        "min_allowed_amount": 3,
        "max_allowed_amount": 60000,
        "recommended_message": "6 cuotas de $ 2,11 ($ 12,69)",
        "installment_amount": 2.11,
        "total_amount": 12.69
      },
      {
        "installments": 9,
        "installment_rate": 42.99,
        "disccount_rate": null,
        "labels": [
        ],
        "min_allowed_amount": 5,
        "max_allowed_amount": 60000,
        "recommended_message": "9 cuotas de $ 1,58 ($ 14,29)",
        "installment_amount": 1.58,
        "total_amount": 14.29
      },
      {
        "installments": 12,
        "installment_rate": 52.99,
        "disccount_rate": null,
        "labels": [
        ],
        "min_allowed_amount": 6,
        "max_allowed_amount": 60000,
        "recommended_message": "12 cuotas de $ 1,27 ($ 15,29)",
        "installment_amount": 1.27,
        "total_amount": 15.29
      }
    ]
```

> NOTE
>
> Nota
>
> Las funciones de callback son llamadas con 2 argumentos:

| status | response |
| :--------|:-------------|
| HTTP Status del request | Array(Object) |

Para la función de callback de Mercadopago.createToken(), response es un Object.
