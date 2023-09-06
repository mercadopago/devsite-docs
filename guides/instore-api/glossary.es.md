# Glosario

Algunos términos son nuevos y quizás no estés familiarizado con ellos. Usa este glosario para no perderte:

| Producto        | Término          | Descripción                                                                                                                                                                                     |
|-----------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Point y QR      | Credenciales     | Tus [credenciales](/developers/es/docs/instore-api/additional-content/your-integrations/credentials) son las claves que te proporcionamos para que puedas configurar tus integraciones. Para poder encontrarlas, ve a tus credenciales y selecciona las productivas.         |
| Point y QR      | Access token     | Llave privada con la cual podrás generar cobros. Debes usarla para identificarte en tus integraciones. Es muy importante que estos datos estén protegidos en tus servidores y no sean accesibles por ningún usuario o atacante.                  |
| Point y QR      | Intent           | Intención de pago que contiene los detalles de la transacción a realizarse. Cuando es creado mediante InStore API, recibe un 'intent_id' que lo identifica.           |
| Point y QR      | PDV              | Punto de venta. En los casos de integraciones Point, es el modo del dispositivo en el que opera con InStore API y recibe el valor `device_id`.                                                                         |
| Point y QR      | Caja (POS)       | Es un punto de venta que existe en una sucursal o tienda física. Cada caja tendrá vinculado un código QR unívoco, y sólo puede tener asociado un dispositivo en modo PDV. En InStore API, las cajas están identificadas con el campo ´external_id´.        |
| Point y QR      | Tienda (Store)   | Es una tienda física en la que tus clientes pueden adquirir tus productos o servicios. Puedes tener varias sucursales en una misma cuenta.                                                        |
| Point           | Poi              | Serial del dispositivo Point. Lo puedes ver en la parte posterior del dispositivo (SN, NS).                                                                                                    |
| Point           | Poi Type         | Tipo de dispositivo.                                                                                                                                                                           |
| Point           | Self-service     | Se traduce como "autoservicio", y es el modelo en donde el cliente puede hacer uso de los dispositivos de manera autónoma y autogestionable. Este modelo es desaconsejado para los dispositivos en modo PDV.                                                   |


## Posibles estados de un intent

### Point

| Estado | Descripción |
|---|---|
| OPENED | Estado inicial de un intent al crearlo desde el PDV. |
| ON_TERMINAL | Estado intermedio de un intent  al momento de obtenerlo desde el dispositivo Point. |
| PROCESSING | Estado intermedio de un intent  al momento de conciliar con una entidad financiera. |
| PROCESSED | Estado intermedio de un intent al momento de finalizar la conciliación con una entidad financiera. |
| CLOSED | Estado final de un intent cuando finaliza la transacción. Cuando recibes este estado, debes dirigirte a [Payments API](/developers/es/reference/payments/_payments_id/get) para verificar el estado final del pago utilizando el `id` recibido. |
| CONFIRMATION_REQUIRED | Estado final del intent cuando ha finalizado sin recibir un estado del pago. Una vez obtenido, este estado no cambiará. Cuando es recibido, debes confirmar en tu dispositivo cuál es el estado del pago, utilizando el `payment_id` recibido en la respuesta, antes de entregar tu producto o servicio. |
| CANCELED | Estado final de un intent cuando se cancela. |
| ERROR | Estado final de un intent cuando ocurre un error en la transacción. |
| EXPIRED | Estado final de un intent cuando no se procesa luego de una hora de haber sido generado. |

### QR

| Término | Descripción |
|---|---|
| OPENED | Estado inicial de un intent al crearlo. |
| CLOSED | Estado final de un intent cuando finaliza la transacción. Cuando recibes este estado, debes dirigirte a [Payments API](/developers/es/reference/payments/_payments_id/get) para verificar el estado final del pago utilizando el `id` recibido. |
| CANCELED | Estado final de un intent cuando se cancela. |
| EXPIRED | Un intent llega a este estado cuando el pago no fue realizado dentro de la fecha enviada en el campo expiration_date, o cuando pasaron más de 3 meses sin que sea procesado. |