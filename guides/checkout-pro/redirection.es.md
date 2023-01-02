# URLs de retorno

Al final del proceso de pago, es posible redirigir al comprador a otro entorno del sitio a través del atributo `back_urls`. Este atributo te permite definir las URL a las que se debe redirigir el comprador al completar el pago.

> NOTE
>
> Importante
>
> Si deseas que la redirección para los pagos aprobados sea automática, sin generar un botón de retorno, debes agregar también el atributo `auto_return` con el valor `aprobado`. Además, el atributo `auto_return` solo funciona para el modo **redirect** y **mobile** de Checkout Pro. Este atributo no funciona en modo modal, ya que en este último el comprador permanece en el sitio durante todo el proceso de pago.

En las siguientes tablas encontrarás el detalle de cada uno de los posibles parámetros de request y respuesta.

| Atributo | 	Descripción |
| ------------ 	| 	-------- |
| `auto_return` | Los compradores son redirigidos automáticamente al _site_ cuando se aprueba el pago. El valor predeterminado es `approved`. |
| `back_urls` | URL de retorno al sitio. Los escenarios posibles son:<br/><br/>`success`: URL de retorno cuando se aprueba el pago.<br/><br/>`pending`: URL de retorno cuando el pago está pendiente.<br/><br/> `failure`: URL de retorno cuando se rechaza el pago.

A través de `back_urls`, se devolverán los siguientes parámetros:

| Parámetro | Descripción |
| --- | --- |
| `payment_id` | ID (identificador) del pago de Mercado Pago. |
| `status` | Status del pago. Por ejemplo: `approved` para un pago aprobado o `pending` para un pago pendiente. |
| `external_reference` | Monto enviado al crear la preferencia de pago. |
| `merchant_order_id` | ID (identificador) de la orden de pago generada en Mercado Pago. |


Para definir las `back_urls`, usa uno de las SDK a continuación que informa las URL a las que se debe dirigir al comprador al finalizar el pago.

> Además de los SDK, también es posible configurar `back_urls` a través de la API de preferencias. Para esto, envía un **POST** con el atributo `back_urls` informando las URLs a las que se debe dirigir al comprador al finalizar el pago al endpoint [/checkout/preferences](/developers/es/reference/preferencias/_checkout_preferences/post) y ejecuta el request.

[[[
```php
<?php
$preference = new MercadoPago\Preference();
//...
$preference->back_urls = array(
    "success" => "https://www.tu-sitio/success",
    "failure" => "http://www.tu-sitio/failure",
    "pending" => "http://www.tu-sitio/pending"
);
$preference->auto_return = "approved";
// ...
?>
```
```node
var preference = {}
preference = {
  // ...
  "back_urls": {
        "success": "https://www.tu-sitio/success",
        "failure": "http://www.tu-sitio/failure",
        "pending": "http://www.tu-sitio/pending"
    },
    "auto_return": "approved",
  // ...
}
```
```java
PreferenceBackUrlsRequest backUrls =
// ...
   PreferenceBackUrlsRequest.builder()
       .success("https://www.seu-site/success")
       .pending("https://www.seu-site/pending")
       .failure("https://www.seu-site/failure")
       .build();

PreferenceRequest request = PreferenceRequest.builder().backUrls(backUrls).build();
// ...
```
```ruby
# ...
preference_data = {
  # ...
  back_urls = {
    success: 'https://www.tu-sitio/success',
    failure: 'https://www.tu-sitio/failure',
    pending: 'https://www.tu-sitio/pendings'
  },
  auto_return: 'approved'
  # ...
}
# ...
```
```csharp
var request = new PreferenceRequest
{
    // ...
    BackUrls = new PreferenceBackUrlsRequest
    {
        Success = "https://www.tu-sitio/success",
        Failure = "http://www.tu-sitio/failure",
        Pending = "http://www.tu-sitio/pendings",
    },
    AutoReturn = "approved",
};
```
```python
preference_data = {
    "back_urls": {
        "success": "https://www.tu-sitio/success",
        "failure": "https://www.tu-sitio/failure",
        "pending": "https://www.tu-sitio/pendings"
    },
    "auto_return": "approved"
}
```
]]]
