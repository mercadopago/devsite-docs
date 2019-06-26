---
sites_supported:
  - mla
---

# Campañas de descuento

> WARNING
>
>Nota
>
> Esta documentación es sobre la versión antigua de Checkout. 
> 
> Ten en cuenta que solo hay soporte activo y nuevas funcionalidades en la [nueva versión del Web Checkout](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/introduction/).

Crea campañas de descuento para potenciar tus ventas utilizando las herramientas de _marketing_ de tu cuenta de Mercado Pago, ingresando en la sección Configuración para tu Negocio: [Crear descuento](https://www.mercadopago.com.ar/campaigns/create).

Puedes crear dos tipos de campañas:

* Que apliquen a todos tus compradores. Por ejemplo por rebajas por temporada.
* Con código de descuento para enviar a tus compradores.

Sólo debes elegir cuánto dinero quieres invertir y cuándo, sin costos extras.

## Experiencia del comprador

Antes de mostrar el _checkout_, Mercado Pago se encargará de verificar si para ese comprador existe una campaña creada.

Si la campaña es válida se le aplicará el descuento o se solicitará el cupón. Automáticamente se calculará el monto a descontar y se mostrará el precio promocional.

Para conocer si un pago tuvo algún descuento, debes consultar si el atributo `coupon_id` no es `null`. Consulta el monto descontado en el atributo `coupon_amount`.
