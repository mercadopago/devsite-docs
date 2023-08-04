# Glosario

Algunos términos son nuevos y quizás no estés familiarizado con ellos. Usa este glosario para no perderte:

| Producto        | Término          | Descripción                                                                                                                                                                                     |
|-----------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Point y QR      | Credenciales     | Tus [credenciales](/developers/es/docs/ecosistema-presencial/additional-content/your-integrations/credentials) son las claves que te proporcionamos para que puedas configurar tus integraciones. Para poder encontrarlas, ve a tus credenciales y selecciona las productivas.         |
| Point y QR      | Access token     | Llave privada con la cual podrás generar cobros. Debes usarla para identificarte en tus integraciones. Es muy importante que estos datos estén protegidos en tus servidores y no sean accesibles por ningún usuario o atacante.                  |
| Point y QR      | Intent           | Intención de pago que contiene los detalles de la transacción a realizarse. Cuando es creado mediante la API de Ecosistema Presencial, recibe un 'intent_id' que lo identifica.           |
| Point y QR      | PDV              | Punto de venta. Modo del dispositivo en el que opera con la API de Ecosistema Presencial. Recibe el valor `device-id`.                                                                         |
| Point y QR      | Caja (POS)       | Es un punto de venta que existe en una sucursal o tienda física. Cada caja tendrá vinculado un código QR unívoco, y sólo puede tener asociado un dispositivo en modo PDV. En la API Ecosistema Presencial, las cajas están identificadas con el campo ´external_id´.        |
| Point y QR      | Tienda (Store)   | Es una tienda física en la que tus clientes pueden adquirir tus productos o servicios. Puedes tener varias sucursales en una misma cuenta.                                                        |
| Point           | Poi              | Serial del dispositivo Point. Lo puedes ver en la parte posterior del dispositivo (SN, NS).                                                                                                    |
| Point           | Poi Type         | Tipo de dispositivo.                                                                                                                                                                           |
| Point           | Self-service     | Se traduce como "autoservicio", y es el modelo en donde el cliente puede hacer uso de los dispositivos de manera autónoma y autogestionable. Este modelo es desaconsejado para los dispositivos en modo PDV.                                                   |
| QR              | Cash out         | Operación disponible para realizarse mediante Código QR. Consiste en la extracción de dinero en efectivo a partir de la generación de un código QR, o de la utilización del código QR asociado a la caja.                                                  |
| QR              | Extra cash       | Operación disponible para realizarse mediante Código QR. Consiste en generar una orden mediante la cual un cliente puede pagar un producto y extraer dinero en efectivo en una sola transacción.                                                          |

## Posibles estados de un intent

### Point

| Estado | Descripción |
|---|---|
| Opened | Estado inicial de un intent al crearlo desde el PDV. |
| On_Terminal | Estado intermedio de un intent  al momento de obtenerlo desde el dispositivo Point. |
| Processing | Estado intermedio de un intent  al momento de conciliar con una entidad financiera. |
| Processed | Estado intermedio de un intent al momento de finalizar la conciliación con una entidad financiera. |
| Closed | Estado final de un intent cuando finaliza la transacción. Cuando recibes este estado, debes dirigirte a [Payments API](/developers/es/reference/payments/_payments_search/get) para verificar el estado final del pago utilizando el `id` recibido. |
| Confirmation_required | Estado final del intent cuando ha finalizado sin recibir un estado del pago. Una vez obtenido, este estado no cambiará. Cuando es recibido, debes confirmar en tu dispositivo cuál es el estado del pago, utilizando el `payment_id` recibido en la respuesta, antes de entregar tu producto o servicio. |
| Canceled | Estado final de un intent cuando se cancela. |
| Error | Estado final de un intent cuando ocurre un error en la transacción. |
| Expired | Estado final de un intent cuando no se procesa luego de una hora de haber sido generado. |

### QR

| Término | Descripción |
|---|---|
| Opened | Estado inicial de un intent al crearlo. |
| Closed | Estado final de un intent cuando finaliza la transacción. Cuando recibes este estado, debes dirigirte a [Payments API](/developers/es/reference/payments/_payments_search/get) para verificar el estado final del pago utilizando el `id` recibido. |
| Canceled | Estado final de un intent cuando se cancela. |
| Expired | Un intent llega a este estado cuando el pago no fue realizado dentro de la fecha enviada en el campo expiration_date, o cuando pasaron más de 3 meses sin que sea procesado. |