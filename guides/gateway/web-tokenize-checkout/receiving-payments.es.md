---
sites_supported:
  - mla
  - mco
  - global
indexable: false
---

# Mercado Pago Gateway: Checkout de Mercado Pago
----[mla, mlb, mlc, mlm, mco, mlu, mpe]----
> NOTE
>
> Pre-requisito
>

> Haber realizado [la integración](https://www.mercadopago.com.ar/developers/es/guides/payments/web-tokenize-checkout/introduction) de **Web Tokenize Checkout**
------------


</br>
> WARNING
>
> Contacto comercial requerido
>
> Solo puedes integrar este producto si tu contacto comercial te compartió toda la información necesaria para hacerlo.

## Integración

La única modificación necesaria para soportar **Modelo Gateway** en el Web Tokenize Checkout, es agregar el atributo `data-processing-modes` cuando incorporas el código HTML.

[[[
```html
<form action="https://www.mi-sitio.com/procesar-pago" method="POST">
  <script
    src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
    data-public-key="ENV_PUBLIC_KEY"
    data-processing-modes=gateway
    data-max-installments=50
    data-transaction-amount="100.00">
  </script>
</form>
```
]]]

¡Listo! Tu **Web Tokenize Checkout** ahora estará funcionando en Modelo Gateway.

> Puedes encontrar tu Public key en la [sección de credenciales]([FAKER][CREDENTIALS][URL]).
> **Modelo híbrido:** todavía no estamos soportando este modelo en Web Tokenize Checkout. Estamos trabajando para tenerlo pronto. Te avisaremos cuando esté listo.



## Obtener los datos

El *Web Tokenize Checkout* hará un `POST` a la URL que hayas definido en el atributo `action` del fragmento de código HTML (En el ejemplo: **/procesar-pago**) con ciertos datos. Debes utilizar dichos datos para realizar el pago.
En el caso de Modelo Gateway se incorporarán dos datos adicionales a tu integración actual:

#### Los datos son:

Dato | Descripción
---- | ------------
**token** | Identificador único de la tarjeta tokenizada
**payment_method_id** | Medio de pago elegido por el comprador
**installments** | Cantidad de cuotas elegidas por el comprador
**issuer_id** | ID del emisor de la tarjeta del comprador
**processing_mode** | El modo de procesamiento, en este caso `gateway`
**merchant_account_id** | El Id que indica el número de comercio


_No recibirás ni el **transaction_amount** ni el **payer.email** por cuestiones de seguridad._

[[[
```php
<?php
  $token = $_REQUEST["token"];
  $payment_method_id = $_REQUEST["payment_method_id"];
  $installments = $_REQUEST["installments"];
  $issuer_id = $_REQUEST["issuer_id"];
  $processing_mode = $_REQUEST["processing_mode"];
  $merchant_account_id = $_REQUEST["merchant_account_id"];
?>
```
```java
String token = request.getParameter("token");
String payment_method_id = request.getParameter("payment_method_id");
Int installments = request.getParameter("installments");
Int issuer_id = request.getParameter("issuer_id");
String processing_mode = request.getParameter("processing_mode");
String merchant_account_id = request.getParameter("merchant_account_id");
```
```node
const token = req.body.token;
const payment_method_id = req.body.payment_method_id;
const installments = req.body.installments;
const issuer_id = req.body.issuer_id;
const processing_mode = req.body.processing_mode;
const merchant_account_id = req.body.merchant_account_id;
```
```ruby
token = request.body.token
payment_method_id = request.body.payment_method_id
installments = request.body.installments
issuer_id = request.body.issuer_id
processing_mode = request.body.processing_mode
merchant_account_id = request.body.merchant_account_id
```
```csharp
token = Request["token"]
payment_method_id = Request["payment_method_id"]
installments = Request["installments"]
issuer_id = Request["issuer_id"]
processing_mode = Request["processing_mode"]
merchant_account_id = Request["merchant_account_id"]
```
]]]


### Próximos pasos

* [Conciliá tus operaciones](https://www.mercadopago.com.ar/developers/es/guides/gateway/general-considerations/reconciliation)
