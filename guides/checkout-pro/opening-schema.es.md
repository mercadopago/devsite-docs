# Esquema de apertura

El esquema de apertura le permite definir cómo se abrirá la caja para el usuario. Por defecto, Checkout Pro se abre en forma de **redirect**, es decir, con redirección de usuarios dentro de la misma página.

Sin embargo, es posible personalizar la apertura para que se abra en una página externa, por ejemplo, o definir el modelo **modal**, en el que Checkout Pro se abre en una ventana dentro del propio sitio, sin redirección.

> NOTE
> 
> Atención
>
> Es sumamente importante prestar atención, al crear la preferencia, a la configuración de las `back_urls` porque serán las encargadas de guiar el flujo de regreso a su sitio web cuando se complete el pago. Para obtener más información, consulte la sección [URL de retorno](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).

## Esquema de redirección a otra página

El cambio del comportamiento de redirección se realiza mediante la propiedad `redirectMode`, que puede asumir los valores `self`, `blank` o `modal`.

| Valor | Descripción |
| --- |--- |
| self | Mantiene la redirección en la misma página. |
| blank | Externaliza la redirección a una página nueva. |
| modal | Abre la experiencia de pago en modo modal. |

Los bloques de código a continuación implementan el pago en modo **redirect** a otra página.

[[[
```Javascript
mp.bricks().create("wallet", "wallet_container", {
   initialization: {
       preferenceId: "<PREFERENCE_ID>",
       redirectMode: "blank"
   },
});
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'blank' }} />
```
]]]

## Esquema de apertura en modo modal

Para definir el modelo de apertura modal, simplemente cambie la propiedad `redirectMode: 'modal'` durante la integración, como en el ejemplo a continuación.

[[[
```Javascript
mp.bricks().create("wallet", "wallet_container", {
   initialization: {
       preferenceId: "<PREFERENCE_ID>",
       redirectMode: "modal"
   },
});
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'modal' }} />
```
]]]

La propiedad `redirectMode: 'modal'` indica que el checkout debe abrirse en modo **modal** y no **redirect**.

## Esquema de apertura directa

También es posible realizar la integración a través de llamadas de backend directamente a la [API de preferencias](/developers/es/reference/preferences/_checkout_preferences/post). En este modelo, obtendrá el enlace de Checkout Pro en el atributo `init_point` en la respuesta a la solicitud de la API. A partir de ahí, solo utilícelo para redirigir al comprador al pago.

Para definir el modelo de redirección directa, inserte el código a continuación en su proyecto informando el `init_point`, campo que se devuelve al crear la preferencia generada anteriormente.

```html
<!doctype html>
<html>
 <head>
   <title>Pagar</title>
 </head>
 <body>
   <a href="YOUR_INIT_POINT"> // Indique el init_point devuelto al crear la preferencia
     <button>
       Paga con MercadoPago
     </button>
   </a>
 </body>
</html>
```