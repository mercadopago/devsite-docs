# Pagos online

----[mlb]----
El **Checkout Transparente** de Mercado Pago permite que todo el proceso de finalización de compra, desde el llenado de los datos del usuario hasta la realización del pago, ocurra en un único entorno, sin la necesidad de redirigir a una página externa a su tienda.

------------
----[mla, mlm]----
El **Checkout API** de Mercado Pago permite que todo el proceso de finalización de compra, desde el llenado de los datos del usuario hasta la realización del pago, ocurra en un único entorno, sin la necesidad de redirigir a una página externa a su tienda.

------------

Principales diferencias de la nueva **API Order** respecto a la antigua **API de Payments**:

| Funcionalidad | Payments API | Order API |
| --- | --- |--- |
| Modo | Automático | Automático y manual |
| Operaciones | Payments | Payments y [In-store](/developers/pt/docs/order/online-payments/introduction) (QR y Point)|
| Múltiples transacciones | No tiene | Tiene |
| Envío de metadatos | Permite | No permite |
| Envío de Notification Url | Permite en el _payload_ | No permite en el _payload_ y debe ser configurado en [Panel del desarrollador > Detalles de la aplicación](/developers/es/docs/order/additional-content/your-integrations/application-details). |
| Validaciones con respuestas de errores completas | Valida un error a la vez | Retorna una lista con todos los errores |
| Retorno de datos PII | Retorna en algunos escenarios (ej: aprobado) | No retorna en ningún escenario |

Una Order de Pagos online puede ser creada para ser procesada de dos maneras: **Modo automático** y **Modo manual**.

## Modo automático

## Modo manual