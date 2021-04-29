# Web Tokenize Checkout - Recuperos

> NOTE
>
> Nota
>
> Evita pagos rechazados con nuestras recomendaciones para [mejorar la aprobación de tus pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/manage-account/account/payment-rejections).

En el caso de que un pago fuese rechazado puedes ofrecerle al comprador la opción de reintentarlo y recuperar la venta.

En ese momento recibirás como respuesta el estado del pago *rechazado* (`rejected`) y es recomendable informarle al usuario dicho estado.

Junto con la comunicación puedes ofrecer además la posibilidad de volver a ingresar los datos de tarjeta, **usando nuevamente el _Web Tokenize Checkout_**. También tienes la posibilidad de [cambiar el texto del botón](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/web-tokenize-checkout/personalization) mediante el atributo `buttonLabel` para complementar la comunicación.

Por ejemplo:

```html
<h1>¡Algo salió mal!</h1>
<p>Ha ocurrido un error con el pago. Por favor vuelve a intentarlo:</p>

<script src="https://sdk.mercadopago.com/js/v2"></script>

<script>
const mp = new MercadoPago('PUBLIC_KEY', {locale: 'es-AR'});

// Inicializa el Web Tokenize Checkout
mp.checkout({
  tokenizer: {
    totalAmount: 4000,
    backUrl: 'https://www.mi-sitio.com/process'
  },
 render: {
    container: '.tokenizer-container',
    label: 'Reintentar'
 }
});
</script>
```

![Recuperos Mercado Pago Web Tokenize Checkout](/images/cow/cow-recovery-page.png)

## Checkout abierto por defecto

Otra posibilidad, en caso de que un pago fuese rechazado, es invocar al *Web Tokenize Checkout* con el formulario ya abierto en el contexto donde originalmente el usuario cargó los datos.

La opción de abrir el checkout por defecto es controlada desde el atributo `autoOpen` y sólo es cuestión de setear el atributo en `true`.

Puedes encontrar más información sobre cómo configurar la apertura automática del checkout desde la [sección de Personalizaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/web-tokenize-checkout/personalization#bookmark_apertura_del_web_tokenize_checkout)

> Esta documentación utiliza la nueva versión de la librería. Para ver la versión anterior, ve a la [sección de Recuperos con MercadoPago.js V1](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/web-tokenize-checkout/v1/recoveries).
