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
| Self-service | Se traduce como autoservicio y es el modelo en donde el cliente puede hacer uso de los dispositivos de manera autónoma  y autogestionable. Ten en cuenta que este uso de los dispositivos es **desaconsejado** y que, en caso de implementarse, será total responsabilidad del comercio. |
| Webhook | Es una notificación que se envía desde nuestro servidor al del integrador mediante una llamada HTTP POST en relación a tus transacciones. |

## Posibles estados de una intención

| Estado | Descripción | Intención de pago | Intención de reembolso
|---|---|---|---|
| `Open` | Estado inicial de una intención al crearla desde el PDV. | ✔ | ✔ |
| `On Terminal` | Estado intermedio de una intención al momento de obtenerla desde el dispositivo Point. | ✔ | ✔ |
| `Processing` | Estado intermedio de una intención al momento de conciliar con una entidad financiera. | ✔ | ✔ |
| `Processed` | Estado intermedio de una intención de pago al momento de finalizar la conciliación con una entidad financiera. | ✔ | - |
| `Finished` | Estado final de una intención cuando finaliza la transacción. | ✔ | ✔ |
| `Confirmation_required` | Estado final de la intención cuando ha finalizado sin recibir un estado del pago. Una vez obtenido, este estado no cambiará. Cuando es recibido, debes confirmar en tu dispositivo cuál es el estado del pago, utilizando el `payment_id` recibido en la respuesta, antes de entregar tu producto o servicio. | ✔ | - |
| `Canceled` | Estado final de una intención cuando se cancela. | ✔ | ✔ |
| `Error` | Estado final de una intención cuando ocurre un error en la transacción. | ✔ | ✔ |
| `Abandoned` | Estado final de una intención cuando no se procesa después de determinado tiempo. | ✔ | ✔ |



