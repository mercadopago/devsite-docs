# Recibir pagos

Recibe pagos de manera simple y segura utilizando el *Web Payment Checkout* de **Mercado Pago**.

## Paso 1: Obtener datos iniciales

Para iniciar el checkout necesitarás sólo 2 datos:

1. Preference ID: [Cómo crear una preferencia de pago](/guides/payments/web-payment-checkout/create-preference.es.md).
2. Public key: [Cómo obtener tu public key](https://www.mercadopago.com.ar/account/credentials).

## Paso 2: Lleva a tu comprador al checkout

Este _fragmento de código HTML_ insertará un botón de pago. Cuando el comprador presione el botón se mostrará el checkout.

Incluye el siguiente código en el lugar donde va a estar ubicado el botón dentro de tu sitio Web, usando el ID de la preferencia creado previamente:


```html
<form action="/procesar-pago" method="POST">
  <script
    src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"
    data-preference-id="<?php echo $preference->id; ?>"
    data-public-key="ENV_PUBLIC_KEY">
  </script>
</form>
```

## Paso 3: Obtener el estado del pago

El *Web Payment Checkout* hará un `POST` a la URL que hayas definido en el atributo `action` del fragmento de código HTML (En el ejemplo: **/procesar-pago**) con el estado del pago.

#### Los datos son:

Dato | Descripción
---- | ------------
**back_url** | URL según el estado del pago (*failure*, *pending* o *success*) configurada en la preferencia de pago.
**merchant_order_id** | id del agrupador de las entidades que corresponden a una orden de un cliente (uno o mas pagos) payer durante un proceso de compra
**payment_id** | id unico del pago que hizo el payer. nro de referencia que le va a aparecer al payer en su cuenta de MP. (comprobante)
**payment_status** | aprove rejected pending
**payment_status_detail** | por que
**preference_id** | ID de la preferencia de pago creada.


> INFO
>
> **return_url** vs. **action**
>
> Siempre que el checkout se haya instanciado desde un formulario con el atributo `action`, se enviarán los datos del estado del pago por POST a dicha URL. Esto ocurrirá incluso si la preferencia de pago tiene definido un `return_url`.


[[[
```php
<?php
  $token = $_REQUEST["token"];
  $payment_method_id = $_REQUEST["payment_method_id"];
  $installments = $_REQUEST["installments"];
  $issuer_id = $_REQUEST["issuer_id"];
?>
```
```java
String token = request.getParameter("token");
String payment_method_id = request.getParameter("payment_method_id");
Int installments = request.getParameter("installments");
Int issuer_id = request.getParameter("issuer_id");
```
```node
const token = req.body.token;
const payment_method_id = req.body.payment_method_id;
const installments = req.body.installments;
const issuer_id = req.body.issuer_id;
```
```ruby
token = request.body.token
payment_method_id = request.body.payment_method_id
installments = request.body.installments
issuer_id = request.body.issuer_id
```
```csharp
token = Request["token"]
payment_method_id = Request["payment_method_id"]
installments = Request["installments"]
issuer_id = Request["issuer_id"]
```
]]]


## Paso 4: Prueba tu integración

Puedes probar tu integración antes de salir a producción, a fin de verificar el funcionamiento y realizar los ajustes que necesites.

Para ello debes usar usuarios y tarjetas de prueba.

Visita la sección [Probando la Integración](/guides/payments/web-payment-checkout/testing.es.md) para más información.
