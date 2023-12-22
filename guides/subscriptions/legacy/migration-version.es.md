# Migración de V1 a V0

A partir del 8 de marzo de 2022, estará disponible una nueva versión del motor de suscripciones relacionado con las entidades a continuación con nuevas funciones.

* **Plan** (identificado por /v1/plan en v1 y ahora por `preapproval_plan` en v0)
* **Subscription** (identificado por /v1/subscriptions en v1 y ahora por `preapproval` en v0)
* **Invoice** (identificada por /v1/invoices en v1 y ahora por `authorized_payments` en v0)

La nueva versión tiene una arquitectura superior y cuenta con notificaciones por correo electrónico enviadas con cada actualización de estado a:

* Suscripciones (creación y cancelación);
* Cargo por suscripción;
* Cambio de planes.

Además de las notificaciones por correo electrónico, la nueva versión también tiene [Webhooks](/developers/es/guides/additional-content/your-integrations/notifications/webhooks) para `plans`, `subscriptions` e `invoices`.

> WARNING
>
> Importante
>
> A diferencia de las notificaciones de Webhooks, que debes configurar, el envío de correos electrónicos está habilitado automáticamente de forma predeterminada. Sin embargo, puedes solicitar el apagado manual de esta funcionalidad a través de Integraciones.

## Migración

Se requiere la migración a este motor, ya que la **versión 1 dejará de estar disponible a partir del 8 de marzo de 2022**.

La migración se producirá automáticamente y todos los plans, subscriptions y invoices migrados permanecerán activos con un nuevo ID. Para verificar los nuevos ID migrados, puedes utilizar el **endpoint** a continuación, que permanecerá público a tu disposición hasta julio de 2022.

Cuando cuentes con el nuevo ID, puedes actualizar los IDs de tu plan, subscriptions y invoice como desees.

[[[
```curl
curl --location 
--request GET 'https://api.mercadopago.com/subscriptions/migrations/<RESOURCE>/<ID>
```
]]]

| - | Resource | ID |
| :--- | :--- | :--- |
| Request | `plan` <br/> `subscription` <br/> `invoice` | Identificador único |
| Response | `preapproval` <br/>`preapproval_plan` <br/> `authorized_payment`| Identificador único |

> NOTE
>
> Importante
>
> Te notificaremos por correo electrónico cuando llegue tu fecha límite de migración. Es importante que programes y tengas preparados los cambios para la migración, ya que todos los `Planes` y `Suscripciones` con estado **cancelado**, **inactivo** y/o **finalizado**, así como `Invoices` de más de seis meses no se migrarán.