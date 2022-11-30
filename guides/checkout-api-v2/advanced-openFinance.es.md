# Open Finance (Integración avanzada)

Open Finance es un nuevo sistema financiero que te permite tener un dominio total de sus datos y mayor libertad con sus finanzas. Con él, es posible compartir historias financieras con otras instituciones para acceder a productos y servicios más ventajosos.

Con Open Finance, se pueden hacer pagos Pix con saldos de otras cuentas bancarias **en Checkout API**.

> NOTE
> 
> Importante
> 
> Para usar esta función, debes registrar una clave Pix en su cuenta de Mercado Pago. Si aún no lo has hecho, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) para obtener más información sobre cómo registrarte.

Use nuestras API o SDK para crear su propio sistema de pago Open Finance en su sitio web o aplicación móvil. Desde la configuración básica hasta la avanzada, controlando todo el flujo de acuerdo con su experiencia de pago.

### Características
* Cree su propia plataforma de Iniciación de Pagos dentro de su sitio web.
  
* Desarrolle y personalice la experiencia de inicio de transacciones de pago. 
  
* Permita que sus clientes paguen con saldos de otras cuentas. 
  
* Comunícate directamente con tus clientes a través de mensajes de error con respuestas personalizadas.

### Cómo integrar Open Finance en su Checkout
Para iniciar un pago utilizando Open Finance, debe tener configurado previamente el método de pago Pix. Para obtener instrucciones de configuración e integración, [consulte la documentación](/developers/es/docs/checkout-api/prerequisites).

Una vez que haya configurado correctamente el método de pago, deberá agregar nueva información a la solicitud para [crear el pago](/developers/es/reference/payments/_payments/post), a través del parámetro `point_of_interaction`, que indica el modo de financiación abierta. Esto es válido tanto a través de la API como a través de nuestros SDK, como se muestra en los siguientes ejemplos:

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
> Informaciones importantes
> 
> - Para este tipo de método de pago, **el número de CPF es obligatorio**.
> - El parámetro `callback_url` tiene que ser la URL de la pantalla de feedback.


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
      "ticket_url": "https://mercadopago.com.br/payments/1111111111/openfinance?caller_id=11111111&hash=1111",
      "qr_code_base64": null
    }
  }
}
```

## Buenas prácticas de usabilidad
Para asegurar que el usuario pagador comprenda el uso de la opción de Inicio de Transacción de Pago de Open Finance, es necesario asegurarse de que en el Checkout quede claro que el pago **se realiza a través de Open Finance a través del ecosistema de pagos de Mercado Pago**.

![Tela para escolha ](/images/api/open-finance(advanced)/usability-rule1.png)

Consulte a continuación algunos consejos de usabilidad para mejorar el flujo de pagos a través de Open Finance.

### Cómo enumerar los bancos disponibles
Presentar una lista de posibles entidades financieras para que el usuario seleccione la que le gustaría para proceder al pago.

Para permitir que el cliente inicie una transacción de pago a través del iniciador de transacciones de pago de Open Finance, debe hacer lo siguiente:

#### 1 - Proporcionar la lista de Instituciones Financieras disponibles
Para hacer esto, solo haga la siguiente solicitud:

```curl
curl --request GET \
  --url https://api.mercadopago.com/open-banking/payments/v1/banks \
  --header 'Authorization: Bearer <ENV_ACCESS_TOKEN>'
```

**Parámetros de filtro**

| Parámetro | Tipo | Requerido     | Valores              | Descripción                                                                                                                                                                                                                             |
|-----------|-------------|----------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| segment   | Query       | Opcional | [personal, business] | Le permite filtrar por bancos para PJ o PF.                                                                                                                                                                                             |
| platform  | Query       | Opcional | [desktop, mobile]    | Le permite filtrar por bancos que tienen una experiencia específica, si el pago se está realizando en el escritorio, la lista de bancos se puede filtrar para mostrar solo los bancos que tienen una experiencia de escritorio y viceversa. |

> NOTE
> 
> Nota
> 
> Por defecto, la API devuelve todos los bancos, sin ningún tipo de filtro.

**Respuesta**

```json
{
   "data": [
       {
           "id": "81d8e591-5d8e-46e2-8b4a",
           "name": "Mercado Pago - Payments",
           "code": "370",
           "ispb": "10573521",
           "logo": "https://http2.mlstatic.com/open-banking/assets/88b4a.svg",
           "isFrequentlyUsed": true
       },
       {
           "id": "87290355-03e2-4cf9-b30b",
           "name": "Mock Bank",
           "code": "345",
           "ispb": "",
           "logo": "https://http2.mlstatic.com/open-banking/assets/8b30b.svg",
           "isFrequentlyUsed": false
       }
   ]
}
```

**Errores posibles**

| Código do error | Tipo         | Descripción                                        |
|----------------|--------------|--------------------------------------------------|
| 401            | unauthorized | Acceso no autorizado                            |
| 403            | forbidden    | No tienes permiso para acceder a este recurso |


> WARNING
> 
> Importante
> 
> Como requisito previo para realizar una llamada a este punto final, es necesario pasar el `access_token` de producción para llamadas productivas y el de prueba para llamadas de prueba.

Actualmente, las Instituciones Financieras participantes aprobadas y disponibles para comenzar son:

| Instituição Financeira    | App | Web |
|---------------------------|-----|-----|
| Nubank                    | OK  | OK  |
| Bradesco PF               | OK  | OK  |
| PicPay Servicos S.A       | OK  | OK  |
| Banco do Brasil           | OK  | OK  |
| Banco Bradesco S.A (Next) | OK  | OK  |
| Santander PF              | OK  | OK  |
| Itaú PF                   | OK  | OK  |
| XP                        | OK  | OK  |
| iti - Itaú                | OK  |  -  |
| Pagbank                   | OK  | OK  |
| Neon                      | OK  | OK  |
| Sicredi                   | OK  | OK  |
| Woop                      | OK  | OK  |

> WARNING
> 
> Importante
> 
> La lista de entidades financieras puede cambiar si hay alguna que no esté disponible.

#### 2 - Crear un pago
Con el ID de banco elegido por el usuario, cree un pago y pase esta información al campo `transaction_data.bank_info.origin_bank_id` de la solicitud de creación de pago.

Para más información, ve la sección de creación de pagos en [esta documentación](#bookmark_creación_de_pago)

#### Prácticas recomendadas
El vendedor podrá mostrar las instituciones favoritas en los primeros lugares de la lista o en el formato que prefiera. Sin embargo, **no podrá impedir que el cliente seleccione alguna de las instituciones disponibles para su uso**.

![Lista de bancos disponíveis](/images/api/open-finance(advanced)/display-tips.png)

> WARNING
> 
> Importante
> 
> Recuerde que, por el momento, el Banco Central de Brasil obliga a todos los participantes de Open Finance a mostrar todas las Instituciones Financieras disponibles para su uso sin ser excluidas de la lista, excepto en caso de errores, indisponibilidad o inoperatividad. 

### Revisar y confirmar
La pantalla de revisión y confirmación debe incluir, como mínimo, la siguiente información:

* El método del pago;

* El monto de la transacción de pago;

* Información sobre el destinatario de la transacción de pago;

* Fecha del pago.

* Aviso de redirección para dar al cliente una mayor visibilidad sobre los próximos pasos. 

![Tela de revisa e confirma](/images/api/open-finance(advanced)/review-confirm.png)

> WARNING
> 
> Importante
> 
> La Información de Términos y Condiciones se puede presentar como un link para su lectura, quedando a criterio de la Institución Iniciadora de la Transacción de Pago definir si mostrará una acción obligatoria por parte del cliente. 

## Creacíon de pago
Para iniciar un pago Pix a través de Open Finance, el vendedor debe utilizar el método de creación de pago API, con algunos requisitos:

* La información del pagador es obligatoria y debe ingresarse en el atributo `payer`

* Se debe enviar una URL de callback de llamada, a través del campo `callback_url`, para mostrar los comentarios al pagador. Para obtener más información, visite la sección de [callback](#bookmark_callback) de esta documentación 

**Solicitud**

```curl
curl --request POST \
  --url 'https://api.mercadopago.com/v1/payments?access_token=XXX' \
  --data '{
  "payment_method_id": "pix",
  "transaction_amount": 5,
  "description": "Pagamento Openfinace",
  "payer": {
    "email": "test_user_58128038@testuser.com",
    "identification": {
      "number": "15635614680",
      "type": "CPF"
    },
  },
  "point_of_interaction": {
    "linked_to": "openfinance",
       "transaction_data": {
		"bank_info": {
			"origin_bank_id": "81d8e591-5d8e-46e2-8b4a-9819e4739fd9"
	 }
  },
  "token": "45ba90f2-a37f-4d57-bce2-e46aae3c3b04",
  "callback_url": "https://example.com"
}'
```

Para la autenticación y confirmación en la Institución Financiera seleccionada, el cliente debe ser redirigido al canal apropiado a través de la URL devuelta en el parámetro `ticket_url` en la respuesta de la solicitud. 

> NOTE
> 
> Nota
> 
> El valor devuelto en `ticket_url` es la URL de redirección del carrusel.

**Respuesta**

```json
{
    "id": 22831702804,
    "date_created": "2022-06-02T10:17:13.865-04:00",
    "date_approved": null,
    "date_last_updated": "2022-06-02T10:17:13.865-04:00",
    "date_of_expiration": "2022-06-03T10:17:13.536-04:00",
    "money_release_date": null,
    "operation_type": "regular_payment",
    "issuer_id": null,
    "payment_method_id": "pix",
    "payment_type_id": "bank_transfer",
    "status": "pending",
    "status_detail": "pending_waiting_transfer",
    "currency_id": "BRL",
    "description": "Pagamento Openfinace",
    "live_mode": true,
    "sponsor_id": null,
    "authorization_code": null,
    "money_release_schema": null,
    "taxes_amount": 0,
    "counter_currency": null,
    "brand_id": null,
    "shipping_amount": 0,
    "pos_id": null,
    "store_id": null,
    "integrator_id": null,
    "platform_id": null,
    "corporation_id": null,
    "collector_id": 456852241,
    "payer": {
        "type": null,
        "id": "435906493",
        "operator_id": null,
        "email": null,
        "identification": {
            "type": null,
            "number": null
        },
        "phone": {
            "area_code": null,
            "number": null,
            "extension": null
        },
        "first_name": null,
        "last_name": null,
        "entity_type": null
    },
    "marketplace_owner": null,
    "metadata": {},
    "additional_info": {
        "available_balance": null,
        "nsu_processadora": null,
        "authentication_code": null
    },
    "order": {},
    "external_reference": "45ba90f2-a37f-4d57-bce2-e46aae3c3b04",
    "transaction_amount": 5,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "deduction_schema": null,
    "callback_url": null,
    "installments": 1,
    "transaction_details": {
        "payment_method_reference_id": null,
        "net_received_amount": 0,
        "total_paid_amount": 5,
        "overpaid_amount": 0,
        "external_resource_url": null,
        "installment_amount": 0,
        "financial_institution": null,
        "payable_deferral_period": null,
        "acquirer_reference": null,
        "bank_transfer_id": null,
        "transaction_id": null
    },
    "fee_details": [],
    "charges_details": [],
    "captured": true,
    "binary_mode": false,
    "call_for_authorize_id": null,
    "statement_descriptor": null,
    "card": {},
    "notification_url": null,
    "refunds": [],
    "processing_mode": "aggregator",
    "merchant_account_id": null,
    "merchant_number": null,
    "acquirer_reconciliation": [],
    "point_of_interaction": {
        "type": "OPENPLATFORM",
        "linked_to": "openfinance",
        "business_info": {
            "unit": "online_payments",
            "sub_unit": "default"
        },
        "application_data": {
            "name": null,
            "version": null
        },
        "transaction_data": {
            "qr_code": null,
            "bank_transfer_id": null,
            "transaction_id": null,
            "financial_institution": null,
            "ticket_url": null,
            "bank_info": {
                "payer": {
                    "account_id": null,
                    "id": null,
                    "long_name": null,
                    "external_account_id": null
                },
                "collector": {
                    "account_id": null,
                    "long_name": null,
                    "account_holder_name": "Salazar Tucker",
                    "transfer_account_id": null
                },
                "is_same_bank_account_owner": null,
                "origin_bank_id": null,
                "origin_wallet_id": null
            },
            "infringement_notification": {
                "type": null,
                "status": null
            },
          "qr_code_base64":null
        }
    }
}
```

## Autorización y redirección
El redireccionamiento debe ocurrir al canal digital seguro de la Institución Financiera titular de la cuenta, el cual puede ser:

* App-to-App
  
* App-to-Browser
  
* Browser-to-Browser
  
* Browser-to-App

![Exemplo de tela de redirecionamento](/images/api/open-finance(advanced)/authorization.gif)


Es necesario señalar que el redireccionamiento es parte de Open Finance, por lo que el cliente está siendo redirigido, de forma segura, desde la Institución Iniciadora de la Transacción de Pago - Mercado Pago a la Institución Titular de la Cuenta, utilizando los mismos elementos gráficos para ambas instituciones.


> WARNING
> 
> Importante
> 
> Recuerda que el Banco Central de Brasil requiere que el cliente conozca el Iniciador de la Transacción de Pago que está orquestando la transacción, por lo que es necesario informar que la transacción se "realiza a través de Mercado Pago".

## Callback
Luego de la autorización del pago en la otra institución, el usuario será redirigido a **una página web de Mercado Pago**, que regula este flujo de pago, y pronto será dirigido a la URL insertada en el atributo `callback_url` al momento de crear el pago. 

En este momento, si desea obtener el estado actual del pago, debe consultar la API de pago, utilizando el método [Obtener Pagamento](/developers/es/reference/payments/_payments_search/get), utilizando la identificación de pago devuelta en la URL.

> NOTE
> 
> Nota
> 
> La URL de devolución de llamada vendrá con el parámetro `paymentId` que contiene la identificación de pago creada anteriormente.

Si necesitas abrir una aplicación móvil, te recomendamos que crees un [Android App Link](https://developer.android.com/training/app-links) o un [Universal Link](https://developer.android.com/training/app-links). Vale recordar que en Androids con versiones anteriores a la 12, el usuario tiene la posibilidad de elegir dónde abrir el App Link como se muestra en la siguiente imagen:

![Exemplo de Android solicitando onde abrir](/images/api/open-finance(advanced)/callback.png)

Por lo tanto, incluso si el flujo va a terminar en una aplicación móvil, **te recomendamos que también crees una pantalla web de handover** para usarla cuando el usuario quiera abrir el link en su navegador.

## Mensajes de respuesta
Ofrece a tus clientes información clara y precisa sobre posibles errores en la Iniciación de Operaciones de Pago o el estado de los pagos realizados. Esto te permite notificarles qué acción pueden tomar para resolver o comunicar si hay pasos adicionales que tomar.

Por ejemplo, si la cuenta elegida para iniciar el pago no tiene saldo suficiente para la compra, puede ser recomendable que intente pagar de nuevo con otro método de pago para completar la operación. Para obtener más información sobre posibles errores, consulte la referencia en la declaración de la API.

> WARNING
> 
> Importante
> 
> Recuerda que el Banco Central de Brasil requiere que cada transacción comenzada a través del Iniciador de transacciones de pago venza después de 60 minutos.

**Status del Pago**
| Status   | Situación                                  | Mensaje sugerido                     |
|----------|--------------------------------------------|--------------------------------------|
| PENDING  | El pago está pendiente                     | Su pago está siendo procesado        |
| APPROVED | El pago está aprobado                      | Su pago ha sido aprobado             |
| REJECTED | El pago está rechazado                     | Su pago ha sido rechazado            |

**Motivos de rechazo**

| Status                     | Situación                                                              | Mesaje sugerido                                                                                                                                   |
|----------------------------|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| REJECTED_ACCOUNT_ERROR     | Existe algún tipo de error                                             | No pudimos completar la transacción debido a un problema con su cuenta. Póngase en contacto con su banco y vuelva a intentarlo.                   |
| INSUFFICIENT_AMOUNT        | El usuario que paga no tiene                                           | Saldo insuficiente en la cuenta que has elegido. Elija otra cuenta y vuelva a intentarlo.                                                         |
| REJECTED_CAP_EXCEEDED      | El límite del valor Pix se supera                                      | Esta cantidad excede su límite diario de Pix. Vuelve a la {{institución retenedora}} y elige una cantidad más baja, o vuelve a intentarlo mañana. |
| REJECTED_SETTLEMENT_FAILED | El cliente no autorizó el pago o tuvo un error durante la autorización | Actualmente, no es posible realizar esta transacción. Nos disculpamos por eso. Vuelva a intentarlo más tarde.                                     |


## Pruebe su integración
Para probar su integración, simplemente cree un pago PIX Open Finance y haga lo siguiente:

* Redirigir a la URL informada en `point_of_interaction.transaction_data.ticket_url`, que tiene el enlace al entorno Sandbox;

* Informar a `transaction_data.bank_info.origin_bank_id` con el ID del banco elegido, resultante del listado público de bancos disponibles para Open Finance;

* Informe la URL de redireccionamiento en `callback_url`.

En el entorno de Sandbox, se mostrará una pantalla que simula la institución propietaria de la cuenta, con tres botones que le permitirán elegir cuál será el estado final de este pago de prueba:

* approved
  
* pending
  
* rejected.

Finalmente, después de elegir el estado de pago final, será redirigido a la pantalla de feedbacks.

Tenga en cuenta que, solo en el flujo de prueba después de elegir el estado de pago final, antes de la redirección de regreso a la URL pasada en `callback_url`, se mostrará una pantalla de "espera", que no aparecerá en los flujos productivos.

> WARNING
> 
> Importante
> 
> En las pruebas de Sandbox no es posible ver el callback que se produce en el navegador (en el dominio de Mercado Pago por motivos regulatorios).