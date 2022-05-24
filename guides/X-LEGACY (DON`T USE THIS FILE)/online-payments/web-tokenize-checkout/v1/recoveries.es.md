# Web Tokenize Checkout - Recuperos

> NOTE
>
> Nota
>
> Evita pagos rechazados con nuestras recomendaciones para [mejorar la aprobación de tus pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/payment-rejections).

> WARNING
>
> Importante
>
> Esta documentación utiliza la antigua versión de la librería. Para ver la versión nueva, ve a la [sección de Recuperos con MercadoPago.js V2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/web-tokenize-checkout/recoveries).


En el caso de que un pago fuese rechazado puedes ofrecerle al comprador la opción de reintentarlo y recuperar la venta.

En ese momento recibirás como respuesta el estado del pago *rechazado* (`rejected`) y es recomendable informarle al usuario dicho estado.

Junto con la comunicación puedes ofrecer además la posibilidad de volver a ingresar los datos de tarjeta, **usando nuevamente el _Web Tokenize Checkout_**. También tienes la posibilidad de [cambiar el texto del botón](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/web-tokenize-checkout/personalization) mediante el atributo `data-button-label` para complementar la comunicación.

Por ejemplo:

```html
<h1>¡Algo salió mal!</h1>
<p>Ha ocurrido un error con el pago. Por favor vuelve a intentarlo:</p>

<form action="/procesar-pago" method="POST">
  <script
    src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-tokenize-checkout.js"
    data-public-key="ENV_PUBLIC_KEY"
    data-transaction-amount="100.00"
    data-button-label="Reintentar"> <!-- Texto del botón -->
  </script>
</form>
```

![Recuperos Mercado Pago Web Tokenize Checkout](/images/cow/cow-recovery-page.png)

## Checkout abierto por defecto

Otra posibilidad, en caso de que un pago fuese rechazado, es invocar al *Web Tokenize Checkout* con el formulario ya abierto en el contexto donde originalmente el usuario cargó los datos.

La opción de abrir el checkout por defecto es controlada desde el atributo `data-open` y sólo es cuestión de setear el atributo en `true`.

Por ejemplo:

```html
<form action="/procesar-pago" method="POST">
  <script
    src="https://www.mercadopago[FAKER][URL][DOMAIN]/integrations/v1/web-tokenize-checkout.js"
    data-public-key="ENV_PUBLIC_KEY"
    data-transaction-amount="100.00"
    data-open="true"> <!-- Abierto por defecto -->
  </script>
</form>
```
