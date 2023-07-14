## Glosario

Algunos términos son nuevos y quizás no estés familiarizado con ellos. Usa este glosario para no perderte:

| Término | Descripción |
| --- | --- |
| Access token | Llave privada con la cual podrás generar cobros. Debes usarla para identificarte en tus integraciones. Es muy importante que estos datos estén protegidos en tus servidores y no sean accesibles por ningún usuario o atacante. |
| Integrador | Persona o entidad que quiere procesar un pago por medio de nuestra API.|
| Intención de pago | Contiene los detalles de la transacción.|
| PDV | Punto de venta.|
| Poi | Serial del dispositivo. Lo puedes ver en la parte posterior de tu dispositivo (SN, NS). |
| Poi Type | Tipo de dispositivo. |
| Self-service | Se traduce como autoservicio y es el modelo en donde el cliente puede hacer uso de los dispositivos de manera autónoma  y autogestionable. |
| Webhook | Es una notificación que se envía desde nuestro servidor al del integrador mediante una llamada HTTP POST en relación a tus transacciones. |

## Posibles estados de una intención de pago

| Término | Descripción |
| --- | --- |
| Abandoned | Estado final de una intención de pago cuando no se procesa después de determinado tiempo. |
| Canceled | Estado final de una intención de pago cuando se cancela. |
| Error | Estado final de una intención de pago cuando ocurre un error en la transacción. |
| Confirmation_required | Estado final del intento cuando ha finalizado sin recibir un estado del pago. Cuando lo obtienes, debes confirmar en tu dispositivo cuál es el estado del pago, utilizando el payment_id recibido en la respuesta, antes de entregar tu producto o servicio. |
| Finished | Estado final de una intención de pago cuando finaliza la transacción. |
| On Terminal | Estado intermedio de una intención de pago al momento de obtenerla desde el dispositivo Point. |
| Open | Estado inicial de una intención de pago al crearlo desde el PDV. |
| Processing | Estado intermedio de una intención de pago al momento de conciliar con una entidad financiera. |
| Processed | Estado intermedio de una intención de pago al momento de finalizar la conciliación con una entidad financiera. |
