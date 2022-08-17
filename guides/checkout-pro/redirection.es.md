# Redireccionamiento 

Al final del proceso de pago, es posible redirigir al comprador a otro entorno del sitio a través del atributo `back_urls`. Este atributo le permite definir las URL a las que se debe redirigir al comprador al completar el pago.

Para definir las `back_urls`, envía un POST con el atributo `back_urls` informando las URL a las que el comprador debe ser redireccionado al finalizar el pago al endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/preferences/_checkout_preferences/post) o, si lo prefieres, accede a [SDKs](/developers/es/docs/sdks-library/landing) para integrar utilizando nuestras bibliotecas.