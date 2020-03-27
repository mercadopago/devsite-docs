# Integra la API de pagos para tarjetas 

La integración por API de pagos de Mercado Pago para tarjetas permite que puedas ofrecer una opción de pagos totalmente en tu sitio. Toda la experiencia sucede en tu tienda para que los clientes no tenga que salir al momento de realizar la compra.

## ¿Cómo funciona?

![API-integration-flowchart](/images/api/api_integration_flowchart.png)

Al usar nuestra API de pagos de Mercado Pago, es importante tener en cuenta dos instancias: la de la captura de datos y el envío de confirmación del pago.

1. Primero, necesitas un frontend para que recolecte los datos de la tarjeta y que genere un token de seguridad con la información para poder crear el pago.
2. Segundo, un backend que tome el token generado y los une a los datos del pago para poder confirmar y efectuar el pago, como por ejemplo el monto e ítem.

Tanto para el frontend como para el backend, tienes que utilizar nuestras librerías para poder recolectar los datos sensibles de tus usuarios de manera segura. 

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/).

## Captura los datos de la tarjeta. [Client-side]

> CLIENT_SIDE
> 
> Captura los datos de la tarjeta.

Para crear un pago es necesario hacer la captura de los datos de la tarjeta a través del navegador del comprador. Por cuestiones de seguridad, **es muy importante que los datos nunca lleguen a tus servidores**. 

### 1. Incluye la librería MercadoPago.js

**Usa nuestra librería oficial para acceder a la API de Mercado Pago** desde tu aplicación y recolectar los datos de forma segura. 
 
```html
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

La información de la tarjeta será convertida en un token para que envíes los datos de modo seguro.

### 2. Agrega el formulario de pago

Para realizar la captura de datos sensibles de las tarjetas de tus clientes, **es muy importante que utilices nuestro formulario con los atributos correspondientes** para garantizar la seguridad de la información. Por ejemplo, los campos que tienen datos sensibles no cuentan con el atributo `name`, de esta forma nunca llegarán a tus servidores.

Puedes agregar todo lo que necesites y sumarle el estilo que quieras sin problemas. 

```html
<form action="/procesar_pago.php" method="post" id="pay" name="pay" >
    <fieldset>
        <p>
            <label for="cardNumber">Número de la tarjeta:</label>
            <input type="text" id="cardNumber" data-checkout="cardNumber" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
        </p>
        <p>
            <label for="cardholderName">Nombre y apellido:</label>
            <input type="text" id="cardholderName" data-checkout="cardholderName" />
        </p>                                    
        <p>
            <label for="cardExpirationMonth">Mes de vencimiento:</label>
            <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
        </p>
        <p>
            <label for="cardExpirationYear">Año de vencimiento:</label>
            <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
        </p>
        <p>
            <label for="securityCode">Código de seguridad:</label>
            <input type="text" id="securityCode" data-checkout="securityCode" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autocomplete=off />
        </p>
        <p>
            <label for="installments">Cuotas:</label>
            <select id="installments" class="form-control" name="installments"></select>
        </p>
        <p>
            <label for="docType">Tipo de documento:</label>
            <select id="docType" data-checkout="docType"></select>
        </p>
        <p>
            <label for="docNumber">Número de documento:</label>
            <input type="text" id="docNumber" data-checkout="docNumber"/>
        </p>
        <p>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value="test@test.com"/>
        </p>                                    
        <input type="hidden" name="transaction_amount" id="transaction_amount"/>
        <input type="hidden" name="description"/>
        <input type="hidden" name="payment_method_id" id="payment_method_id"/>
        <input type="submit" value="Pagar"/>
    </fieldset>
</form>
```

### 3. Configura tu clave pública

Agrega tu [clave pública](https://www.mercadopago.com/mlb/account/credentials) de la siguiente manera:

```javascript 
window.Mercadopago.setPublishableKey("ENV_PUBLIC_KEY");
```

> Si aún no tienes cuenta, [regístrate](https://www.mercadopago.com.ar/registration-mp).

### 4. Obtén los datos para tu formulario
	
#### Obtener tipos de documentos

Uno de los campos obligatorios es el tipo de número de documento. Utiliza la lista de documentos al momento de completar los datos. 
Con el elemento de tipo `select` con `id = docType` que se encuentra en el formulario, MercadoPago.js completará automáticamente las opciones disponibles.

```javascript 
window.Mercadopago.getIdentificationTypes();
```

> Encuentra más detalle en la [sección de tipos de documentos](https://www.mercadopago.com.ar/developers/es/guides/localization/identification-types/).

#### Obtener cantidad de cuotas

Otro de los campos obligatorios para pagos con tarjetas es la cantidad de cuotas. Para obtener las cuotas disponibles, utiliza la función `setInstallmentsInfo`

```javascript
function setInstallmentInfo(status, response) {
        var selectorInstallments = document.querySelector("#installments"),
        fragment = document.createDocumentFragment();
        selectorInstallments.options.length = 0;

        if (response.length > 0) {
            var option = new Option("Escolha...", '-1'),
            payerCosts = response[0].payer_costs;
            fragment.appendChild(option);

            for (var i = 0; i < payerCosts.length; i++) {
                fragment.appendChild(new Option(payerCosts[i].recommended_message, payerCosts[i].installments));
            }

            selectorInstallments.appendChild(fragment);
            selectorInstallments.removeAttribute('disabled');
        }
    };
```    

> La función completará automáticamente el campo de tipo `select` con `id=installments`.

#### Obtener método de pago de la tarjeta

Valida los datos de tus clientes mientras los completan para evitar errores y que puedan configurar correctamente las cuotas. Usa la función `getBin()` para identificar el medio de pago y el banco emisor con los primeros 6 dígitos de la tarjeta.

```javascript 
document.querySelector('#cardNumber').addEventListener('keyup', guessingPaymentMethod);
document.querySelector('#cardNumber').addEventListener('change', guessingPaymentMethod);

function getBin() {
    const cardnumber = document.getElementById("cardNumber");
    return cardnumber.value.substring(0,6);
};

function guessingPaymentMethod(event) {
    var bin = getBin();

    if (event.type == "keyup") {
        if (bin.length >= 6) {
            window.Mercadopago.getPaymentMethod({
                "bin": bin
            }, setPaymentMethodInfo);
        }
    } else {
        setTimeout(function() {
            if (bin.length >= 6) {
                window.Mercadopago.getPaymentMethod({
                    "bin": bin
                }, setPaymentMethodInfo);
            }
        }, 100);
    }
};

function setPaymentMethodInfo(status, response) {
    if (status == 200) {
        const paymentMethodElement = document.querySelector('input[name=paymentMethodId]');

        if (paymentMethodElement) {
            paymentMethodElement.value = response[0].id;
        } else {
            const input = document.createElement('input');
            input.setAttribute('name', 'paymentMethodId');
            input.setAttribute('type', 'hidden');
            input.setAttribute('value', response[0].id);     

            form.appendChild(input);
        }

        Mercadopago.getInstallments({
            "bin": getBin(),
            "amount": parseFloat(document.querySelector('#amount').value),
        }, setInstallmentInfo);

    } else {
        alert(`payment method info error: ${response}`);  
    }
};
```

### 4. Crea el token de la tarjeta

Antes de enviar el pago, debes crear el token con toda la información de la tarjeta. Lo ejecutas de la siguiente manera: 

```javascript 
doSubmit = false;
document.querySelector('#pay').addEventListener('submit', doPay);
function doPay(event){
    event.preventDefault();
    if(!doSubmit){
        var $form = document.querySelector('#pay');

        window.Mercadopago.createToken($form, sdkResponseHandler);

        return false;
    }
};

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

El método `createToken` devolverá un `card_token` con la representación segura de la tarjeta. El segundo campo del método `createToken` es `sdkResponseHandler`, que se ejecuta al crear el token y lo usaremos para crear un campo oculto. De esta forma, almacenaremos el valor del ID para luego enviar el formulario a tus servidores.

> WARNING
>
> Importante
>
> Ten en cuenta que el token tiene una validez de 7 días y solo se pueda usar una vez.



> NOTE
> 
> Download
> 
> Sigue ejemplo completo del formulario de checkout para [download]().

## Envía el pago a Mercado Pago [Server-side]

Para realizar efectivamente el pago a Mercado Pago, es necesario que tu backend sepa recibir el atributo `action` del formulario con el token generado y los datos completados.

Los campos requeridos a enviar son: `token`,` transaction_amount`, `installments`, `payment_method_id` y el `payer.email`.

Ten en cuenta que para que este paso funcione. es necesario que tengas instalada la [SDK oficial de Mercado Pago](https://docs.google.com/document/d/1Oa3iaof8xaDQMFczMoqtroROFbx6T-6KX75QJCo8Efk/edit#heading=h.t7itbhr4pfdq) y que configures tu [clave privada](https://www.mercadopago.com/mla/account/credentials). 


[[[

```php

<?php  
    ===
    Puedes encontrar el estado del pago en el valor status
    ===

    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
    //...
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200];
    $payment->token = "ff8080814c11e237014c1ff593b57b4d";
    $payment->description = "[FAKER][COMMERCE][PRODUCT_NAME]";
    $payment->installments = 1;
    $payment->payment_method_id = "visa";
    $payment->payer = array(
    "email" => "[FAKER][INTERNET][FREE_EMAIL]"
    );
    // Save and posting the payment
    $payment->save();
    //...
    // Print the payment status
    echo $payment->status;
    //...
?>

```
```java

===
Puedes encontrar el estado del pago en el valor status
===

MercadoPago.SDK.setAccessToken("ENV_ACCESS_TOKEN");
//...
Payment payment = new Payment();
payment.setTransactionAmount([FAKER][NUMBER][BETWEEN][100, 200])
       .setToken("ff8080814c11e237014c1ff593b57b4d")
       .setDescription("[FAKER][COMMERCE][PRODUCT_NAME]")
       .setInstallments(1)
       .setPaymentMethodId("visa")
       .setPayer(new Payer()
         .setEmail("[FAKER][INTERNET][FREE_EMAIL]"));
// Save and posting the payment
payment.save();
//...
// Print the payment status
System.out.println(payment.getStatus());
//...
```
```node
===
Puedes encontrar el estado del pago en el valor status
===

var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("ENV_ACCESS_TOKEN");

var payment_data = {
  transaction_amount: [FAKER][NUMBER][BETWEEN][100, 200],
  token: 'ff8080814c11e237014c1ff593b57b4d'
  description: '[FAKER][COMMERCE][PRODUCT_NAME]',
  installments: 1,
  payment_method_id: 'visa',
  payer: {
    email: '[FAKER][INTERNET][FREE_EMAIL]'
  }
};

// Save and posting the payment
mercadopago.payment.save(payment_data).then(function (data) {
      console.log(data);
      res.send(data);
    }).catch(function (error) {
      console.log(error);
    });

```
```ruby
===
Puedes encontrar el estado del pago en el valor status
===

require 'mercadopago'
MercadoPago::SDK.access_token = "ENV_ACCESS_TOKEN";

payment = MercadoPago::Payment.new()
payment.transaction_amount = [FAKER][NUMBER][BETWEEN][100, 200]
payment.token = 'ff8080814c11e237014c1ff593b57b4d'
payment.description = '[FAKER][COMMERCE][PRODUCT_NAME]'
payment.installments = 1
payment.payment_method_id = "visa"
payment.payer = {
  email: "[FAKER][INTERNET][FREE_EMAIL]"
}
# Save and posting the payment
payment.save()

```
```csharp
===
Puedes encontrar el estado del pago en el valor status
===

using MercadoPago;
using MercadoPago.DataStructures.Payment;
using MercadoPago.Resources;
// ...
MercadoPago.SDK.SetAccessToken("ENV_ACCESS_TOKEN");
//...
Payment payment = new Payment()
{
    TransactionAmount = float.Parse("[FAKER][NUMBER][BETWEEN][100, 200]"),
    Token = "ff8080814c11e237014c1ff593b57b4d",
    Description = "[FAKER][COMMERCE][PRODUCT_NAME]",
    Installments = 1,
    PaymentMethodId = "visa",
    Payer = new Payer(){
        Email = "[FAKER][INTERNET][FREE_EMAIL]"
    }
};
// Save and posting the payment
payment.Save();
//...
// Print the payment status
console.log(payment.Status);
//...
```
```curl
===
Puedes encontrar el estado del pago en el valor status
===

curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    'https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN' \
    -d '{
          "transaction_amount": 179,
          "token": "ff8080814c11e237014c1ff593b57b4d",          
          "description": "Rustic Wool Clock",
          "installments": 3,
          "payment_method_id": "visa",
          "issuer_id": 310,
          "payer": {
            "email": "test_user_19653727@testuser.com"
          }
    }'
```
]]]

#### Respuesta

```json 
{
    "status": "approved",
    "status_detail": "accredited",
    "id": 3055677,
    "date_approved": "2019-02-23T00:01:10.000-04:00",
    "payer": {
        ...
    },
    "payment_method_id": "visa",
    "payment_type_id": "credit_card",
    "refunds": [],
    ...
}
```

> Puedes obtener más información en la [Referencias de API](https://www.mercadopago.com.ar/developers/es/reference/).

## Manejo de respuestas de error

### Los posibles estados de un pago son:

![payment-status](/images/api/api_payment_status.png)

Para ayudar a mejorar la conversión de tus pagos, es fundamental que puedas comunicar correctamente a tus clientes los resultados al realizar o crear un pago.

Esto ayudará a evitar casos de rechazos y contracargos en los casos de transacciones aprobadas. Por ejemplo, permite que se puedan corregir los errores de carga de datos o ayudar a cambiar el medio de pago. 

Te recomendamos usar el [manejo de respuesta de error](https://www.mercadopago.com.ar/developers/es/guides/payments/api/advanced-integration/#bookmark_manejo_de_respuesta_de_error) y utilizar la comunicación sugerida en cada uno de los casos.

> NOTE
> 
> Nota
> 
> Evita pagos rechazados con nuestras recomendaciones para mejorar la aprobación de tus pagos.

## Recibe notificaciones de pago

Por último, es importante que estés siempre informado sobre la creación de nuevos pagos y las actualizaciones de sus estados. Por ejemplo si fueron aprobados, rechazados o si se encuentran pendientes. 

[Configura notificaciones webhooks](https://www.mercadopago.com.ar/developers/es/guides/notifications/webhooks/)
[Configura notificaciones IPN](https://www.mercadopago.com.ar/developers/es/guides/notifications/ipn/)

### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Pruebas
>
> Revisa que esté todo bien en tu integración con los usuarios de prueba.
>
> [Pruebas](https://www.mercadopago.com.ar/developers/es/guides/payments/api/test-integration/)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Integra otros medios de pago
>
> Conoce todas las opciones de pago disponibles y cómo ofrecerlas.
>
> [Integra otros medios de pago](https://www.mercadopago.com.ar/developers/es/guides/payments/api/integrates-other-payment-methods)
