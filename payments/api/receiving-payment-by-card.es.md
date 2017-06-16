# Recibir un pago con tarjeta

Con Mercado Pago puedes capturar los datos de la tarjeta de forma segura, manteniendo el control de la experiencia de compra que le brindas a tus usuarios.

Esto se divide en tres pasos principales:

* Captura de los datos de tarjeta
* Obtención del tipo de tarjeta
* Creación del pago


## Captura los datos de tarjeta

La captura de datos de tarjeta es realizada desde el navegador de tu comprador. Es **muy importante que los datos nunca lleguen a tus servidores por cuestiones de seguridad**.

Mercado Pago cuenta con una librería Javascript para ayudarte a realizar esto de forma simple y segura.

### 1. Incluir MercadoPago.js

Para hacer uso de esta librería debes comenzar insertando el siguiente código en nuestro checkout:

```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

> _**Nota**_: Es importante que la librería **siempre** se importe desde _https://secure.mlstatic.com_.

### 2. Configura tu public key

Tu clave pública es la que es la que te identifica para poder capturar los datos de tarjeta de forma segura. La public key debe ser cargada después de incluir _MercadoPago.js_ y antes de realizar un request.

```javascript
Mercadopago.setPublishableKey("TEST-b3d5b663-664a-4e8f-b759-de5d7c12ef8f");
```

>_**Nota**_: Esta es una clave pública del entorno de pruebas. Para capturar tarjetas reales deberás reemplazarla por tu [clave pública productiva](https://www.mercadopago.com/mla/account/credentials).

### 3. Capturar datos de tarjeta

#### Formulario

El siguiente paso es realizar la captura de los datos de tarjeta. Para hacer esto es importante contar con un formulario que utilice los siguientes atributos `data-checkout`:

```html
<form action="" method="post" id="pay" name="pay" >
    <fieldset>
        <ul>
            <li>
                <label for="email">Email</label>
                <input id="email" name="email" value="test_user_19653727@testuser.com" type="email" placeholder="your email"/>
            </li>
            <li>
                <label for="cardNumber">Credit card number:</label>
                <input type="text" id="cardNumber" data-checkout="cardNumber" placeholder="4509 9535 6623 3704" />
            </li>
            <li>
                <label for="securityCode">Security code:</label>
                <input type="text" id="securityCode" data-checkout="securityCode" placeholder="123" />
            </li>
            <li>
                <label for="cardExpirationMonth">Expiration month:</label>
                <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" placeholder="12" />
            </li>
            <li>
                <label for="cardExpirationYear">Expiration year:</label>
                <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" placeholder="2015" />
            </li>
            <li>
                <label for="cardholderName">Card holder name:</label>
                <input type="text" id="cardholderName" data-checkout="cardholderName" placeholder="APRO" />
            </li>
            <li>
                <label for="docType">Document type:</label>
                <select id="docType" data-checkout="docType"></select>
            </li>
            <li>
                <label for="docNumber">Document number:</label>
                <input type="text" id="docNumber" data-checkout="docNumber" placeholder="12345678" />
            </li>
        </ul>
        <input type="hidden" name="paymentMethodId" />
        <input type="submit" value="Pay!" />
    </fieldset>
</form>
```

> _**Importante:**_ Los campos que tienen datos sensibles no cuentan con el atributo `name`, de esta forma nunca llegarán a tus servidores.

#### Obtener el tipo de documento

Entre los campos requeridos se encuentra el tipo y número de documento.

Poder obtener el listado de documentos disponibles:

```javascript
Mercadopago.getIdentificationTypes();
```

#### Obtener el medio de pago de la tarjeta

Es importante que obtengamos el medio de pago de la tarjeta para poder realizar el pago.

Para obtener el medio de pago, utiliza el método `MercadoPago.getPaymentMethod(jsonParam,callback)`. Este acepta dos parámetros: un objeto y una función de callback.

```javascript
Mercadopago.getPaymentMethod({
    "bin": bin
}, setPaymentMethodInfo);
```

El `bin` corresponde a los primeros 6 dígitos de la tarjeta, y son los que identifican el medio de pago y banco emisor de esta.

El callback recibe un status y un response. La función deberá almacenar el id de la respuesta en el campo `paymentMethodId` (input hidden), por ejemplo:

```
function setPaymentMethodInfo(status, response) {
    if (status == 200) {
        paymentMethod.setAttribute('name', "paymentMethodId");
        paymentMethod.setAttribute('type', "hidden");
        paymentMethod.setAttribute('value', response[0].id);

        form.appendChild(paymentMethod);
        } else {
            document.querySelector("input[name=paymentMethodId]").value = response[0].id;
        }
    }
};
```

#### Capturar los datos

Antes de enviar el formulario, debes capturar el evento `submit` y utilizar el método `Mercadopago.createToken(form, sdkRespondeHandler);`.

```javascript
doSubmit = false;
addEvent(document.querySelector('#pay'), 'submit', doPay);
function doPay(event){
    event.preventDefault();
    if(!doSubmit){
        var $form = document.querySelector('#pay');
        
        Mercadopago.createToken($form, sdkResponseHandler); // The function "sdkResponseHandler" is defined below

        return false;
    }
};
```

Enviando el `form`, y utilizando los atributos `data-checkout` se realiza la captura de todos los campos.

El método `createToken` devolverá un card_token, lo cual es la representación segura de la tarjeta:

```json
{
    "id": "ff8080814cbd77a8014cc",
    "public_key": "TEST-b3d5b663-664a-4e8f-b759-de5d7c12ef8f",
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

El segundo campo del método `createToken` es `sdkResponseHandler`, la cual es una función de callback que será ejecutada al crear el `card_token`.

Utilizaremos esta para crear un campo oculto (input hidden), y almacenaremos el valor de `id`, para luego enviar el formulario a tus servidores.

```javascript
function sdkResponseHandler(status, response) {
    if (status != 200 && status != 201) {
        alert("verify filled data");
    }else{
        var form = document.querySelector('#pay');
        var card = document.createElement('input');
        card.setAttribute('name', 'token');
        card.setAttribute('type', 'hidden');
        card.setAttribute('value', response.id);
        form.appendChild(card);
        doSubmit=true;
        form.submit();
    }
};
```

Puedes descargar el ejemplo completo desde [aquí](#).

## Recibir un pago con tarjeta

Debes obtener de los parametros enviados en el `POST` el id del `card_token` para realizar un pago único.

Los `card_token` tienen una validez de *7 días* y son de único uso.

Para realizar el pago solamente debes realizar un API call:

```php
<?php
  require_once ('mercadopago.php');

  // Setup your private key
  $mp = new MP('SECRET_ACCESS_TOKEN');

  $payment_data = array(
      "transaction_amount" => 100,
      "token" => "ff8080814c11e237014c1ff593b57b4d",
      "payment_method_id" => "visa",
      "payer" => array (
          "email" => "test_user_19653727@testuser.com"
      )
  );

  $payment = $mp->post("/v1/payments", $payment_data);
?>
```

> Los campos requeridos a enviar son `token`, `transaction_amount`, `payment_method_id` y el `payer.email`.

Eso es todo, la respuesta tendrá el estado del pago (approved, rejected o in_process). 

> Puedes ver más información sobre el [manejo de respuestas](#manejo-de-respuestas). 

## Recibir un pago en cuotas

Para hacer uso de las [promociones](https://www.mercadopago.com/mla/credit_card_promos.htm) que ofrece Mercado Pago, es importante que se envíe el campo `issuer_id` e `installments` al momento de crear un pago.

El campo `installments` corresponde a la cantidad de cuotas que el comprador elije. El `issuer_id` es el banco emisor de la tarjeta.

Para obtener las cuotas disponibles 

```javascript
Mercadopago.getInstallments({
    "bin": bin,
    "amount": amount
}, setInstallmentInfo);
```

La respuesta cuenta con el `issuer_id` que debe ser enviado, y el mensaje recomendado para mostrar en cada una de las cuotas disponibles indicando el valor a pagar:

```json
[
  {
    "payment_method_id": "amex",
    "payment_type_id": "credit_card",
    "issuer": {
        "id": "310",
        ...,
        {
            "installments": 3,
            "installment_rate": 18.9,
            "discount_rate": 0,
            "labels": [
            ],
            "min_allowed_amount": 2,
            "max_allowed_amount": 250000,
            "recommended_message": "3 cuotas de $ 396,33 ($ 1.189,00)",
            "installment_amount": 396.33,
            "total_amount": 1189
        }
        ...,
    ]
  }
]
```

> _**Nota**_: Debido a la Resolución E 51/2017 de la Secretaría de Comercio Argentina, sobre precios transparentes, es necesario que cumplas con ciertas exigencias adicionales.

Para crear el pago es importante enviar los datos indicados anteriormente:

```php
<?php
require_once ('mercadopago.php');

$mp = new MP('SECRET_ACCESS_TOKEN');

$payment_data = array(
    "transaction_amount" => 100,
    "token" => "ff8080814c11e237014c1ff593b57b4d",
    "payer" => array (
        "email" => "test_user_19653727@testuser.com"
    ),
    "installments" => 3,
    "payment_method_id" => "amex",
    "issuer_id" => 310
);

$payment = $mp->post("/v1/payments", $payment_data);
?>
```

## Manejo de respuestas

Es **muy importante** comunicar correctamente los resultados recibidos al crear un pago. Esto ayudará a mejorar la conversión en los casos de rechazos, y evitar contracargos en los casos de transacciones aprobadas.

Te recomendamos leer el artículo sobre el [manejo de respuestas](handling-responses.es.md) y utilizar la comunicación sugerida en cada uno de los casos.

## Recibir una notificación del pago

Es importante que te enteres de cualquier actualización del estado de tu pago. Para esto se debe utilizar _Webhooks_.

Un _Webhook_ es una notificación que se envía de un servidor a otro mediante un request `HTTP POST`.

### Configuración

Para recibir _webhooks_ debes [configurar la URL](https://www.mercadopago.com/mla/account/webhooks) donde recibirás las notificaciones.

### Notificaciones

Las notificaciones serán recibidas mediante un request `HTTP POST`. El body recibido en este request será un JSON con el siguiente formato:

```json
{
    "id": 12345,
    "live_mode": true,
    "type": "payment",
    "date_created": "2016-03-25T10:04:58.396-04:00",
    "user_id": 44444,
    "api_version": "v1",
    "action": "payment.created",
    "data": {
        "id": "999999999"
    }
}
```

Esto indica que se creó el pago **999999999** para el usuario **44444** en **modo productivo** con la versión V1 de la API. Dicho evento ocurrió en la fecha **2016-03-25T10:04:58.396-04:00**.

El listado de posibles notificaciones:

| Tipo de notificación |           Acción           |         Descripción          |
| :------------------- | :------------------------- | :--------------------------- |
| `payment`            | `payment.created`          | Creación de un pago          |
| `payment`            | `payment.updated`          | Actualización de un pago     |
| `mp-connect`         | `application.deauthorized` | Desvinculación de una cuenta |
| `mp-connect`         | `application.authorized`   | Vinculación de una cuenta    |
| `plan`               | `application.authorized`   | Vinculación de una cuenta    |
| `subscription`       | `application.authorized`   | Vinculación de una cuenta    |
| `invoice`            | `application.authorized`   | Vinculación de una cuenta    |


### Qué hacer al recibir una notificación

Cuando recibas una notificación de tipo `payment` en tu plataforma, esta indicará que se creo o actualizó un pago, pero todavía no cuentas con el estado del mismo (Por ejemplo, aprobado).

Para obtener el estado del pago debes realizar un request `HTTP GET` con el `id` del pago:

```php
<?php
require_once "mercadopago.php";

$mp = new MP("ACCESS_TOKEN");

$json_event = file_get_contents('php://input', true);
$event = json_decode($json_event);

// Validamos que el body tenga el atributo data y data->id
if (!isset($event->type, $event->data) || !ctype_digit($event->data->id)) {
    http_response_code(400);
    return;
}

if ($event->type == 'payment'){
    // Obtener la información del pago para el payment id recibido
    $payment_info = $mp->get('/v1/payments/'.$event->data->id);

    if ($payment_info["status"] == 200) {
        // El pago fue encontrado
        print_r($payment_info["response"]);
        // Mostramos el status
        print_r($payment_info["response"]["status"]);
        http_response_code(200);
    }
}
?>
```

Mercado Pago espera una respuesta para validar que recibiste la notificación correctamente. Para esto, debes devolver un `HTTP STATUS 200 (OK)` ó `201 (CREATED)`.

Si tu aplicación responde un error `4XX`, Mercado Pago no reintentará enviar la notificación.

> Recuerda que esta comunicación es exclusivamente entre los servidores de MercadoPago y tu servidor, por lo cual no habrá un usuario físico viendo ningún tipo de resultado.

### Reintentos

Si tu aplicación no se encuentra disponible o demora mucho en responder, Mercado Pago reintentará enviar la notificación mediante el siguiente esquema:

1. Reintento a los 5 minutos.
2. Reintento a los 45 minutos.
3. Reintento a las 6 horas.
4. Reintento a los 2 días.
5. Reintento a los 4 días.

Es necesario que cuando la recibas devuelvas una respuesta `HTTP STATUS 200 (OK)` ó `201 (CREATED)` para no recibir notificaciones duplicadas.


## Próximos pasos

### Recibe pagos con tarjetas guardadas

Puedes almacenar de forma segura las tarjetas de tus clientes y realizar pagos con una experiencia one-click-to-buy.

[Más información](customers-and-cards.es.md)