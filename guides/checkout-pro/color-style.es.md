# Estilo de colores

Checkout Pro te permite personalizar el estilo de color de los elementos de su interfaz, personalizando la forma en que se mostrará al usuario.

Entre las personalizaciones de color, es posible personalizar el color del encabezado y los elementos de pago, como botones, campos de datos, bordes, elementos de transición y texto.

> NOTE
>
> Importante
>
> La personalización de colores y elementos es válida únicamente para el esquema de apertura modal. Además, los atributos de color deben estar obligatoriamente en formato hexadecimal.

Para habilitar la edición de estilo de color en el checkout y sus elementos, agrega el objeto `theme` y el atributo `elementsColor` con el color que deseas aplicar a las opciones de inicio de Checkout Pro, como se muestra a continuación.

[[[
```html
<script>
  mp.checkout({
    preference: {...},
    render: {...},
    theme: {
        elementsColor: ''.
    }
  });
</script>
```
]]]

> PREV_STEP_CARD_ES
>
> Redireccionamiento  
>
> Aprenda a redirigir al comprador a otro entorno del sitio al final del proceso de pago. 
>
> [Redireccionamiento](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection)

> NEXT_STEP_CARD_ES
>
> Billetera Mercado Pago   
>
> Vea cómo configurar pagos con Billetera Mercado Pago. 
>
> [Billetera Mercado Pago](/developers/es/docs/checkout-pro/checkout-customization/mp-wallet)