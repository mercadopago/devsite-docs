Instant Payment Notifications (IPN) - Notificaciones instantáneas de pago- es un mecanismo que le permite a tu tienda recibir mensajes del servidor de MercadoPago sobre el status de un pago determinado. En este plugin, no necesitas preocuparte sobre IPN, debido a que ya se encuentra implementado y configurado por ti. 

> HINT 1: Cuando configuras o testeas tus IPN/Webhooks y las comunicaciones del servidor está seguro que tu servidor pueda acceder al servidor de MercadoPago.

> HINT 2: Asegúrate que tu firewall tenga acceso al [Rango de IPs de MercadoPago](https://www.mercadopago.com.ar/developers/en/api-docs/basics/design-considerations#ip-range) dentro del white-list.

> HINT 3: Prestar atención a que Mercado Pago usa TSL protocol **version 1.0**, así que tu servidor necesita soportar/aceptar conexiones con esta versión del protocolo.

> HINT 4: Asegúrate que ningún otro plugin instalado esté bloqueando el de MercadoPago. 