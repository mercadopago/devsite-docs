# Redireccionamiento 

Al final del proceso de pago, es posible redirigir al comprador a otro entorno del sitio a través del atributo `back_urls`. Este atributo le permite definir las URL a las que se debe redirigir al comprador al completar el pago.

Para definir las `back_urls`, envía un POST con el atributo `back_urls` informando las URL a las que el comprador debe ser redireccionado al finalizar el pago al endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post) o, si lo prefieres, accede a [SDKs](https://www.mercadopago.com.br/developers/es/guides/sdks) para integrar utilizando nuestras bibliotecas.

> PREV_STEP_CARD_ES
>
> Botón de pago 
>
> Aprenda a definir y personalizar la interfaz que se muestra al usuario, incluido cómo ingresar a la pantalla de pago. 
>
> [Botón de pago](/developers/es/docs/checkout-pro/checkout-customization/user-interface/payment-button)

> NEXT_STEP_CARD_ES
>
> Estilo de colores
>
> Aprenda a personalizar el estilo de color de los elementos de su interfaz. 
>
> [Estilo de colores](/developers/es/docs/checkout-pro/checkout-customization/user-interface/color-style)