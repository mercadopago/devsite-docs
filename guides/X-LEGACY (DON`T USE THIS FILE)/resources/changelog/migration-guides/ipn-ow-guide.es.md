# Guía de migración: actualizamos las notificaciones IPN

> SI estás usando las notificaciones IPN desde el 31 de julio, no te preocupes, este cambio no te afecta. 

La versión antigua de notificaciones IPN ya no estará disponible. Por eso, te recomendamos que confirmes si estás actualizado para que puedas estar informado y no tengas problemas con tus pagos.

#### Sobre la nueva versión

Ahora, vas a poder suscribirte a los tópicos de pago que te interesen y vas a recibir los nuevos eventos en una URL HTTPS en formato JSON. 

## ¿Qué beneficios tiene?

- **Resiliencia en los reintentos.**
- **Mejores auditorías.** Nos permite entender qué sucedió con los notificaciones.
- **Mayor estabilidad.** Ofrece una arquitectura más moderna y segura.
- **Somos más rápidos.** Reducimos los tiempos de notificaciones a menos dos segundos.

## ¿Qué es lo que cambia?

Vas a recibir un objeto en formato JSON con datos básicos del pago. 
Hasta ahora recibías “x-www-form-urlencoded”, por lo que tenés que adaptar la lógica de tu servidor a procesar formato JSON. 

> Es necesario que después de recibir la notificación nos respondas un 200 inmediatamente para evitar un reenvío de notificación antes de los 10 segundos.

El JSON va a tener información básica del pago. Y si necesitas más información, [realizá un GET al ID del pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/payments/_payments_id/get).

> Es necesario que tu servidor tenga certificados HTTPS.

## ¿Cómo activar las notificaciones IPN?

Desde tu cuenta de Mercado Pago, puedes [sumar notificaciones IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications/ipn/introduction).

> Tienes que usar la cuenta en la que recibes los pagos de los que quieres ser notificado.

Al activarlas, ten en cuenta: 

- Es necesario que coloques el endpoint que preparaste para que te enviemos novedades.
- Los topics que vas a ver identifica de qué se trata la notificación. Pueden ser payment, chargebacks o merchant_order.

## ¿Qué parámetros voy a recibir?

Si configuraste la URL de la siguiente manera: `“https://www.yoursite.com/notifications”` vas a recibir: 


```query
"topic=payment&id=1234567"
```

Y finalmente verse así:

`https://www.yoursite.com/notifications?topic=payment&id=1234567`

También vas a recibir un JSON de esta forma:

```json
{
	"resource":"https://api.mercadolibre.com/collections/notifications/1234567",

	"topic":"payment"
}
```

> Puedes encontrar más información sobre cómo integrar las notificaciones en la [sección Notificaciones IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/introduction).

## Si no quiero notificaciones IPN, ¿qué puedo hacer?

En caso de querer o necesitar otro tipo de notificaciones puedes [usar webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications).

> Para usar webhooks, es importante que selecciones la aplicación sobre la que quieres recibir notificaciones y que elijas los tópicos correspondientes.  