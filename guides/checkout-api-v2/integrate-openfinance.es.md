# Open Finance
Open Finance es un nuevo sistema financiero que te permite tener un dominio total de tus datos y mayor libertad con tus finanzas. Con él, es posible compartir historias financieras con otras instituciones para acceder a productos y servicios más ventajosos.

Con Open Finance, se pueden hacer pagos Pix con saldos de otras cuentas bancarias, **en el Checkout API**.


> NOTE
> 
> Importante
> 
> Para usar esta función, debes registrar una clave Pix en tu cuenta de Mercado Pago. Si aún no lo has hecho, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) para obtener más información sobre cómo registrarse.

## Creación de un pago Pix con Open Finance
Para iniciar un pago utilizando Open Finance, debes tener configurado previamente el método de pago Pix. Para obtener instrucciones de configuración e integración, [consulta la documentación](/developers/es/docs/checkout-api/prerequisites).

Una vez que hayas configurado correctamente el método de pago, deberás agregar nueva información a la solicitud para [crear el pago](/developers/es/reference/payments/_payments/post) a través del parámetro `point_of_interaction`, que indica el modo de financiación abierta. Esto es válido tanto a través de la API como a través de nuestros SDK, como se muestra en los siguientes ejemplos:

[[[
    ```php
    MercadoPago\SDK::setAccessToken("access_token");
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = 100;
    $payment->description = "Título do produto";
    $payment->payment_method_id = "pix";
    $payment->payer = array(
        "email" => "test@test.com",
        "first_name" => "Test",
        "last_name" => "User",
        "identification" => array(
            "type" => "CPF",
            "number" => "19119119100"
        ),
    );
    $payment->point_of_interaction = array(
    "linked_to" => "openfinance"
    );
    $payment->save();
    ```
    ```node
    mercadopago.configurations.setAccessToken("access_token");
    var payment = {
        transaction_amount: 100,
        description: 'description',
        payment_method_id: 'pix',
        payer: {
            email: 'test@test.com'
        },
        point_of_interaction: {
            linked_to: "openfinance"
        }
    };
    mercadopago.payment.create(payment).then(function (data) {
        console.log(data.response);
    }).catch(function (error) {
        console.log(error);
    });
    ```
    ```java
    MercadoPagoConfig.setAccessToken("access_token");
    PaymentClient client = new PaymentClient();

    PaymentCreateRequest createRequest =
    PaymentCreateRequest.builder()
        .transactionAmount(new BigDecimal(100))
        .description("description")
        .paymentMethodId("pix")
        .pointOfInteraction(
            PaymentPointOfInteractionRequest.builder().linkedTo("openfinance").build())
        .payer(PaymentPayerRequest.builder().email("test@test.com").build())
        .build();

    Payment payment = client.create(createRequest);
    ```
    ```ruby
    sdk = Mercadopago::SDK.new('access_token')

    payment_request = {
        transaction_amount: 100,
        description: 'description',
        payment_method_id: 'pix',
        payer: {
            email: 'test@test.com'
        },
        point_of_interaction: {
            linked_to: "openfinance"
        }
    }
    payment_response = sdk.payment.create(payment_request)
    payment = payment_response[:response]
    ```
    ```csharp
    MercadoPagoConfig.AccessToken = "access_token";

    var request = new PaymentCreateRequest
    {
        TransactionAmount = 100,
        Description = "description",
        PaymentMethodId = "pix",
        Payer = new PaymentPayerRequest
        {
            Email = "test@test.com"
        },
        PointOfInteraction = new PaymentPointOfInteractionRequest
        {
            LinkedTo = "openfinance"
        }
    };
    var client = new PaymentClient();
    Payment payment = await client.CreateAsync(request);
    ```
    ```python
    sdk = mercadopago.SDK("access_token")

    payment_data = {
        "transaction_amount": 100,
        "description": "description",
        "payment_method_id": "pix",
        "payer": {
            "email": "test@test.com"
        },
        "point_of_interaction": {
            "linked_to": "openfinance"
        }
    }
    payment_response = sdk.payment().create(payment_data)
    payment = payment_response["response"]
    ```
    ```curl
    curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
    --header 'Authorization: Bearer TOKEN' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "transaction_amount": 1000,
        "description": "Teste Pix Open Finance",
        "payment_method_id": "pix",
        "payer": {
            "email": "test_user_19734329@testuser.com"
        },
        "point_of_interaction": {
            "linked_to": "openfinance"
        },
        "callback_url": "https://example.com"
    }'
    ```
]]]

> WARNING
> 
> Atención
> 
> Para este tipo de medio de pago, **el número de CPF es obligatorio**.
> El parámetro `callback_url` tiene que ser la URL de la pantalla de feedback.


La respuesta de la solicitud será muy similar a la respuesta de un pago con un Pix común, con algunas modificaciones:

* El valor de **openfinance** en `point_of_interaction.linked_to`
* Valor **nulo** en `point_of_interaction.transaction_data.qr_code` y `point_of_interaction.transaction_data.qr_code_base64`
* Valor de `point_of_interaction.transaction_data.ticket_url` con URL a la aplicación que finaliza el pago por Open Finance

Respuesta

```json
{
  "point_of_interaction": {
    "linked_to": "openfinance",
    "transaction_data": {
      "qr_code": null,
      "ticket_url": "https://mercadopago.com.br/payments/12/openfinance?caller_id=1&hash=1111",
      "qr_code_base64": null
    }
  }
}
```

## Orientar al usuario para finalizar el pago
Con la respuesta de solicitud de creación de pago, simplemente usa la URL disponible en el objeto `point_of_interaction.transaction_data.ticket_url` para que el comprador pueda finalizar el pago a través de Open Finance.

Para esto, puedes redirigir al usuario a la URL directamente o presentar un botón que redirija cuando se haga clic.

La imagen siguiente muestra un ejemplo de este proceso en la vista del usuario:

![Payment flow sample](/images/api/api-integrate-openfinance.gif)

## Probando tu integración

Para probar la integración, debes usar una credencial de prueba al crear un pago y tener un usuario de prueba con una clave Pix registrada. [Haz clic aquí](/developers/es/docs/checkout-api/integration-test/make-test-purchase) para acceder a la documentación y encontrar más detalles sobre cómo hacerlo.

Crea un pago de Pix Open Finance y utiliza la URL disponible en el atributo `point_of_interaction.transaction_data.ticket_url` para acceder a la página de redirección.

```json
{
  "point_of_interaction": {
    "linked_to": "openfinance",
    "transaction_data": {
      "qr_code": null,
      "ticket_url": "https://mercadopago.com.br/payments/12/openfinance?caller_id=1121&hash=11",
      "qr_code_base64": null
    }
  }
}
```

En esta página, tendrás acceso a la información de pago y tendrás la posibilidad de seleccionar solo el banco 370 - Mercado Pago - Pagos para continuar con la prueba.

Al seleccionar el banco indicado, será posible confirmar el pago y finalmente, se producirá la redirección a la pantalla de Feedback definida en el parámetro `callback_url`.

La imagen siguiente muestra un ejemplo de esta experiencia:

![Open finance payment flow sample](/images/api/api-integrate-openfinance-sample.gif)