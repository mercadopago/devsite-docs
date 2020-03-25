# Integración avanzada

## Recuerda tus clientes y sus tarjetas

Usa nuestras APIs para guardar la referencia de las tarjetas de tus clientes y poder brindarles una mejor experiencia. De esta manera, tus clientes no tienen que completar sus datos cada vez y pueden finalizar sus pagos más rápido.

### Crear un cliente y una tarjeta

Para crear un cliente y su tarjeta tienes que enviar el campo del e-mail y el token generado.

Vas a sumar a cada cliente con el valor `customer` y a la tarjeta como `card`.

php | node | java | ruby | csharp | curl
[[[

```curl
curl -X POST \
'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards?access_token=ENV_ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"token": "9b2d63e00d66a8c721607214cedaecda"}'
```

]]]

Respuesta

```json 
{
    "id": "123456789-jxOV430go9fx2e",
    "email": "test@test.com",
    ...
    "default_card": "1490022319978",
    "default_address": null,
    "cards": [{
        "id": "1490022319978",
        "expiration_month": 12,
        "expiration_year": 2020,
        "first_six_digits": "415231",
        "last_four_digits": "0001",
        ...
    }],
    "addresses": [],
    "live_mode": false
}
```

> NOTE
>
> Nota
> 
> Te recomendamos almacenar los datos de tarjeta luego de realizar un pago de forma exitosa para guardar datos correctos. 

### Agrega nuevas tarjetas a un cliente

Para agregar nuevas tarjetas a un cliente, debes crear un token y hacer un `HTTP POST` al `customer`.

 php | node | java | ruby | csharp | curl
[[[

```curl
curl -X POST \
'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards?access_token=ENV_ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"token": "9b2d63e00d66a8c721607214cedaecda"}'
```

]]]

Respuesta


```json 
{
    "id": "1493990563105",
    "expiration_month": 12,
    "expiration_year": 2020,
    "first_six_digits": "503175",
    "last_four_digits": "0604",
    "payment_method": {
        "id": "master",
        "name": "master",
        "payment_type_id": "credit_card",
        "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/master.gif",
        "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/master.gif"
    },
    "security_code": {
        "length": 3,
        "card_location": "back"
    },
    "issuer": {
        "id": 3,
        "name": "Mastercard"
    },
    "cardholder": {
        "name": "Card holdername",

        "identification": {
            "number": "12345678",
            "type": "DNI"
        }

    },
    "date_created": "2017-05-05T09:22:30.893-04:00",
    "date_last_updated": "2017-05-05T09:22:30.893-04:00",
    "customer_id": "255276729-yLOTNHQjpDWw1X",
    "user_id": "255276729",
    "live_mode": false
}
```

### Usa las tarjetas guardadas para un pago

Para que un cliente pueda hacer un pago con sus datos guardados, es necesario volver a capturar el código de seguridad. Mercado Pago no puede almacenar esa información por cuestiones de seguridad. 

#### 1. Muestra las tarjetas guardadas a tu cliente

Primero, obtén el listado de guardadas para que tu cliente pueda elegir con cuál quiere pagar:

 curl | php | node | java | ruby | csharp

[[[

```curl
curl -X GET \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards/?access_token=ENV_ACCESS_TOKEN' \
```

]]]


Respuesta de datos de una tarjeta guardada: 

```json 
[{
    "id": "1490022319978",
    "expiration_month": 12,
    "expiration_year": 2020,
    "first_six_digits": "415231",
    "last_four_digits": "0001",
    ...
}]
```

Y puedes armar el formulario de la siguiente manera: 

```html 
<li>
    <label>Payment Method:</label>
    <select id="cardId" name="cardId" data-checkout='cardId'>
    <?php foreach ($cards["response"] as $card) { ?>
        <option value="<?php echo $card["id"]; ?>"
            first_six_digits="<?php echo $card["first_six_digits"]; ?>"
            security_code_length="<?php echo $card["security_code"]["length"]; ?>">
                <?php echo $card["payment_method"]["name"]; ?> ended in <?php echo $card["last_four_digits"]; ?>
        </option>
    <?php } ?>
    </select>
</li>
<li id="cvv">
    <label for="cvv">Security code:</label>
    <input type="text" id="cvv" data-checkout="securityCode" placeholder="123" />
</li>
```

#### 2. Captura el código de seguridad

El cliente tiene que ingresar el código de seguridad en un flujo similar al que realizaste para la [captura de los datos de la tarjeta](). Debes crear un token enviando el formulario con el ID de la tarjeta y el código de seguridad.

```javascript 
doSubmit = false;
addEvent(document.querySelector('#pay'),'submit', doPay);function doPay(event){
    event.preventDefault();
    if(!doSubmit){
        var $form = document.querySelector('#pay');

        Mercadopago.createToken($form, sdkResponseHandler); 

// The function "sdkResponseHandler" is defined below

        return false;
    }
};
````

#### 3. Crea el pago

Una vez obtenido el token, puedes generar el pago por el monto correspondiente. Al ser un pago con tarjeta guardada, debes enviar el ID del cliente junto al token.

 php | node | java | ruby | csharp | curl
[[[

```curl
curl -X POST \
  'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
  transaction_amount: 100,
  token: "b9f86ce9e0fce43ef8ed2d9ae3792a50",
  installments: 1,
  payer: { 
  	type: "customer",
    id: "537294418-a8WFM1GrItxAQv"
  } 
}'
```

]]]


### Busca un cliente creado

Puedes buscar información sobre tu cliente si lo necesitas. Por ejemplo, en el caso que no sepas cuál es el ID asignado. El parámetro requerido para obtenerlo es el e-mail.

 php | node | java | ruby | csharp | curl 
[[[

```curl
curl -X GET \
  'https://api.mercadopago.com/v1/customers/search?access_token=ENV_ACCESS_TOKEN' \
  -d '{
	"email": "test_user_19653727@testuser.com"
}'
```

]]]

Respuesta

```json 
{
    "paging": {
        "limit": 10,
        "offset": 0,
        "total": 1
    },
    "results": [
        {
            "address": {
                "id": null,
                "street_name": null,
                "street_number": null,
                "zip_code": null
            },
            "addresses": [],
            "cards": [
                {
                    ...
                }
            ],
            "date_created": "2017-05-05T00:00:00.000-04:00",
            "date_last_updated": "2017-05-05T09:23:25.021-04:00",
            "date_registered": null,
            "default_address": null,
            "default_card": "1493990563105",
            "description": null,
            "email": "test@test.com",
            "first_name": null,
            "id": "123456789-jxOV430go9fx2e",
            "identification": {
                "number": null,
                "type": null
            },
            "last_name": null,
            "live_mode": false,
            "metadata": {},
            "phone": {
                "area_code": null,
                "number": null
            }
        }
    ]
}
```

Consulta el listado de tarjetas de un cliente


 php | node | java | ruby | csharp | curl
[[[

```curl
curl -X GET \
  'https://api.mercadopago.com/v1/customers/CUSTOMER_ID/cards/?access_token=ENV_ACCESS_TOKEN' \
```

]]]

Respuesta

```json 
[{
    "id": "1490022319978",
    "expiration_month": 12,
    "expiration_year": 2020,
    "first_six_digits": "415231",
    "last_four_digits": "0001",
    ...
}]
```

## Manejo de respuesta de error 

Ofrece a tus clientes información clara y precisa sobre los posibles errores en el ingreso de datos de la tarjeta o el estado del pago realizado. Esto permite notificarlos sobre qué acción pueden realizar para solucionarlo o comunicarles si tienen que realizar algún paso extra. 

Por ejemplo, si la tarjeta no tiene saldo suficiente para la compra, puedes recomendarles que vuelva a intentar con otro medio de pago para completar la operación.

### Resultados de creación de un cobro

#### HTTP Status 201 OK

Estado | `status_detail` | Comunicación sugerida
------------ | ------------- | -------------

### Errores de ingreso de datos

#### HTTP Status 400 Bad Request

### Errores en la creación del token de tarjeta


## Cancelaciones y devoluciones

Las cancelaciones se efectúan cuando el pago en efectivo no se concretó antes de la fecha de vencimiento y el vendedor decide cancelarlo. Y las devoluciones suceden cuando el pago se realizó pero el vendedor decide anularlo total o parcialmente.

Puedes encontrar toda la información en la [sección Devoluciones y cancelaciones]().

### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Otras funcionalidades
>
> Adapta la integración a las necesidades específicas de tu negocio. 
>
> [Otras funcionalidades]()

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Referencias de API
>
> Encuentra toda la información necesaria para interactuar con nuestras APIs.
>
> [Referencias de API](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/test-integration/)
