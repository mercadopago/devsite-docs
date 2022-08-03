# Notificaciones

## Webhooks

Webhook (también conocido como devolución de llamada web) es un método simple que facilita que una aplicación o sistema proporcione información en tiempo real cada vez que ocurre un evento, es decir, es una forma de recibir datos pasivamente entre dos sistemas a través de un HTTP POST.

Las notificaciones de webhook se pueden configurar para una o más aplicaciones creadas en su Dashboard.

Una vez configurado, el Webhook se enviará siempre que se produzcan uno o más eventos registrados, evitando un trabajo de búsqueda cada minuto en busca de una respuesta y, en consecuencia, una sobrecarga del sistema y pérdida de datos siempre que se presente alguna situación. Luego de recibir una notificación en su plataforma, Mercado Pago esperará una respuesta para validar si la recibió correctamente.

### Requisitos previos

Antes de configurar las notificaciones de webhook para Wallet Connect, es importante tener en cuenta los siguientes requisitos.


| Requisito  | Descripción  |
| --- | --- |
| Certificado SSL  | Protocolo que permite establecer comunicaciones seguras en Internet para actividades como navegación, correo electrónico y otras transferencias de datos. |
| Respuesta al request  | El endpoint debe devolver un código de respuesta 2XX para acusar el recibo del request. Todos los códigos de respuesta fuera de 2XX activarán reintentos exponenciales de Mercado Pago. |
| Timeout  | Para evitar problemas de timeout, la aplicación debe devolver una respuesta antes de activar una lógica compleja.  |
| Solicitud de permiso | Para poder incluir solicitudes en la lista de permisos a través de DNS, las solicitudes llegarán a través del endpoint api.mercadopago.com. El integrador deberá deshabilitar el CSRF (**Cross-site request forgery**) para api.mercadopago.com, lo que permitirá las solicitudes de Mercado Pago. |


### Tipos de eventos

Hay dos tipos diferentes de eventos que le permiten recibir notificaciones. Estos eventos se refieren a la actualización y/o cancelación de un contrato.


#### Cancelación de un agreement entre integrador y Mercado Pago

En este caso, el usuario tiene la posibilidad de darse de baja de un agreement, lo que provoca la cancelación del contrato existente. Cuando esto sucede, el `payer_token` se invalida y no se realizan más cargos al usuario. Si el integrador realiza nuevos intentos de cobro, será rechazado.

Observa a continuación un ejemplo de código con la información enviada en el momento del request.

[[[
```curl

curl -X POST 'https://api.integrator.com/wallet_connect/events' \

-d '{ 

     id: "11ae6c7564ed497f945f755fcabat8k6",
     type: "wallet_connect",
     entity: "agreement",
     action: "status.updated",
     date: "2021-09-30T23:24:44Z",
     model_version: 1,
     version: 0,
     data: { 

           id: "22ae6c1235ed497f945f755fcaba3c6c",
           status: "cancelled"

     }

}'

```
]]]

#### Actualización del medio de pago de un agreement

En este caso, el usuario puede agregar o actualizar un medio de pago secundario. (Por defecto, Account Money de Mercado Pago es el primer medio de pago). En función de los estados de pago, es posible detectar pagos rechazados y notificar al usuario para que realice la actualización o agregue un medio de pago secundario.

Observa a continuación un ejemplo de código con la información enviada en el momento del request.


[[[
```curl

curl -X POST 'https://api.integrator.com/wallet_connect/events' \

-d '{ 

     id: "44ae6c7564ed497f945f755fcabat9d4",
     type: "wallet_connect",
     entity: "agreement",
     action: "payment_method.updated",
     date: "2021-09-30T23:24:44Z",
     model_version: 1,
     version: 0,
     data: { 

           id: "22ae6c1235ed497f945f755fcaba3c6c",

     }

}' 

```
]]]



En la siguiente tabla mostramos con más detalle los posibles valores que se envían en el cuerpo del request de cancelación y actualización del medio de pago de un agreement.

| Campo  | Valor  | Tipo  | Descripción  |
| --- | --- | --- | --- |
| id  | UUID/Number  | String  | ID exclusivo del evento. Este ID evita mensajes duplicados del lado del integrador. |
| type  | wallet_connect  | String  | Representa eventos sobre el agreement entre el integrador y el usuario de Mercado Pago. Este valor siempre será `wallet_connect`.  |
| entity  | agreement  | String  | Entidad relacionada con el agreement. El valor siempre será `agreement`. |
| action  | payment_method.updated  | String  | - Indica que se ha actualizado el medio de pago secundario asociado al agreement. <br> - Puede ser utilizado por el vendedor como una forma de saber si se debe realizar un nuevo cargo. |
| action  | status.updated  | String  | - Indica que el agreement fue cancelado por el usuario. <br> - Se puede utilizar para saber que no se deben realizar nuevos cargos. |
| date  | {{action_date}}  | Date  | Una fecha aproximada (en formato Zulu) asociada con el evento.  |
| data  | {  id: {{agreement_id}},  status: {{agreement_status}}  }  | id: String  status: String  | Este campo puede proporcionar detalles adicionales sobre el evento según el tipo y la acción. |
| model_version  | 1  | Integer  | Versión del modelo del body del webhook. Siempre será `1`.|
| version  | 0  | Integer  | Versión para identificar duplicados dentro del mismo id. |

### Configuración


La configuración de los webhooks se realiza a través del Dashboard. A continuación explicaremos cómo indicar las URLs que serán notificadas y cómo configurar los eventos para los que se recibirán notificaciones.

![webhooks](/images/notifications/webhooks_pt.png)

1. Primero, se debe crear una aplicación en la página de inicio de su [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel).
2. Con la aplicación creada, ve a la pestaña Notificaciones de Webhooks en tu Panel de control y configura las [URLs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications) de **producción** y **prueba** de las que se recibirán notificaciones. 
3. También podrás experimentar y probar si la URL indicada está recibiendo notificaciones correctamente, pudiendo verificar la solicitud, la respuesta dada por el servidor y la descripción del evento.
4. Si necesitas identificar varias cuentas, al final de la URL indicada puedes indicar el parámetro `?cliente=(nommbredelvendedor) endpoint` para identificar a los vendedores.
5. A continuación, selecciona los **eventos** de los que recibirás notificaciones en formato `json` a través de un `HTTP POST` a la URL especificada anteriormente. Un evento es cualquier tipo de actualización del objeto informado, incluidos los cambios de estado o atributos. Vea los eventos que se pueden configurar en la siguiente tabla.

| Tipo de notificación  | Acción  | Descripción  |
| --- | --- | --- |
| Cancelación del agreement | status.updated  | Agreement entre el integrador y el usuario de Mercado Pago fue cancelado por el usuario.|
| Actualización de método de pago | payment_method.updated  | El usuario ha actualizado el método de pago de un acuerdo.  |