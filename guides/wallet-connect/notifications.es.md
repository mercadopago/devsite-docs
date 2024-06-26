# Notificaciones

## Webhooks

Webhook (también conocido como devolución de llamada web) es un método simple que facilita que una aplicación o sistema proporcione información en tiempo real cada vez que ocurre un evento, es decir, es una forma de recibir datos pasivamente entre dos sistemas a través de un HTTP POST.

Una vez configurado, el Webhook se enviará siempre que se produzcan uno o más eventos registrados, evitando un trabajo de búsqueda innecesarios de una respuesta y, en consecuencia, una sobrecarga del sistema y pérdida de datos siempre que se presente alguna situación. 

Luego de recibir una notificación en su plataforma, Mercado Pago esperará una respuesta para validar si la recibió correctamente.

> NOTE
>
> Importante
>
> Las notificaciones de webhook se pueden configurar para una o más aplicaciones creadas en su Panel del desarrollador.

## Requisitos previos

Antes de configurar las notificaciones de Webhooks para Wallet Connect, considere los requisitos enumerados a continuación.

| Requisito  | Descripción  |
| --- | --- |
| Certificado SSL  | Protocolo que permite establecer comunicaciones seguras en Internet para actividades como navegación, correo electrónico y otras transferencias de datos. |
| Respuesta al request  | El endpoint debe devolver un código de respuesta 2XX para reconocer la recepción del request. Todos los códigos de respuesta fuera de 2XX activarán reintentos exponenciales de Mercado Pago. |
| Timeout  | Para evitar problemas de timeout, la aplicación debe devolver una respuesta antes de activar una lógica compleja.  |
| Solicitud de permiso | Para poder incluir solicitudes en la lista de permisos a través de DNS, las solicitudes llegarán a través del endpoint api.mercadopago.com. El integrador deberá deshabilitar el CSRF (**Cross-site request forgery**) para api.mercadopago.com, lo que permitirá las solicitudes de Mercado Pago. |

## Tipos de eventos

Hay tres tipos diferentes de eventos que le permiten recibir notificaciones. Estos eventos se refieren a la actualización y/o cancelación de un contrato.

### Confirmación de la vinculación por parte del usuario.

A partir de este evento, el integrador es notificado cuando un usuario confirma la vinculación.

Para esto, envíe un **GET** al endpoint [/v2/wallet_connect/agreements/{agreement_id}](/developers/es/reference/wallet_connect/_wallet_connect_agreements_agreement_id/get) para obtener el `agreement_code` y `external_flow_id`. Esto permitirá seguir con la creación del _token_ de pago para la creación de los pagos.

A continuación se muestra un ejemplo de código con la información enviada en el momento del request.

[[[
```curl

curl -X POST 'https://api.integrator.com/wallet_connect/events' \
-H 'Content-Type: application/json' \
-d '{
    "id": "22abcd1235ed497f945f755fcaba3c6c",
    "type": "wallet_connect",
    "entity": "agreement",
    "action": "status.updated",
    "date": "2021-09-30T23:24:44Z",
    "model_version": 1,
    "version": 0,
    "data": {
        "id": "22abcd1235ed497f945f755fcaba3c6c",
        "status": "confirmed_by_user"
    }
}'

```
]]]

### Cancelación de una vinculación entre integrador y Mercado Pago

En este caso, el usuario tiene la posibilidad de darse de baja de una vinculación, lo que provoca la cancelación del contrato existente. Cuando esto sucede, el `payer_token` se invalida y no se realizan más cargos al usuario. 

> NOTE
>
> Importante
>
> En caso de que se hagan nuevos intentos de cobro, serán rechazados.

Observa a continuación un ejemplo de código con la información enviada en el momento del request.

[[[
```curl

curl -X POST 'https://api.integrator.com/wallet_connect/events' \
-H 'Content-Type: application/json' \
 -d '{
  "id": "22abcd1235ed497f945f755fcaba3c6c",
  "type": "wallet_connect",
  "entity": "agreement",
  "action": "status.updated",
  "date": "2021-09-30T23:24:44Z",
  "model_version": 1,
  "version": 0,
  "data": {
    "id": "22abcd1235ed497f945f755fcaba3c6c",
    "status": "cancelled"
  }
}'


```
]]]

### Actualización del medio de pago de una vinculación

En este caso, el usuario puede agregar o actualizar un medio de pago secundario (por defecto, dinero en cuenta de Mercado Pago es el primer medio de pago). 

En función de los estados de pago, es posible detectar pagos rechazados y notificar al usuario para que realice la actualización o agregue un medio de pago secundario.

Observa a continuación un ejemplo de código con la información enviada en el momento del request.

[[[
```curl

curl -X POST 'https://api.integrator.com/wallet_connect/events' \
-H 'Content-Type: application/json' \
-d '{
    "id": "22abcd1235ed497f945f755fcaba3c6c",
    "type": "wallet_connect",
    "entity": "agreement",
    "action": "payment_method.updated",
    "date": "2021-09-30T23:24:44Z",
    "model_version": 1,
    "version": 0,
    "data": {
        "id": "22abcd1235ed497f945f755fcaba3c6c"
    }
}'


```
]]]

En la siguiente tabla mostramos con más detalle los posibles valores que se envían en el cuerpo del request de cancelación y actualización del medio de pago de una vinculación.

| Campo  | Valor  | Tipo  | Descripción  |
| --- | --- | --- | --- |
| id  | UUID/Number  | String  | ID exclusivo del evento. Este ID evita mensajes duplicados del lado del integrador. |
| type  | wallet_connect  | String  | Representa eventos sobre la vinculación entre el integrador y el usuario de Mercado Pago. Este valor siempre será `wallet_connect`.  |
| entity  | agreement  | String  | Entidad relacionada con el vinculación. El valor siempre será `agreement`. |
| action  | payment_method.updated  | String  | - Indica que se ha actualizado el medio de pago secundario asociado a la vinculación. <br> - Puede ser utilizado por el vendedor como una forma de saber si se debe realizar un nuevo cargo. |
| action  | status.updated  | String  | - Indica que la vinculación fue cancelada o confirmada por el usuario. <br> - Puede ser usado por el integrador para saber si el usuario confirmó la vinculación o si fue cancelada y **no se deben** realizar nuevos cobros. |
| date  | {{action_date}}  | Date  | Una fecha aproximada (en formato Zulu) asociada con el evento.  |
| data  | {  id: {{agreement_id}},  status: {{agreement_status}}  }  | id: String  status: String  | Este campo puede proporcionar detalles adicionales sobre el evento según el tipo y la acción. |
| model_version  | 1  | Integer  | Versión del modelo del body del Webhook. Siempre será `1`.|
| version  | 0  | Integer  | Versión para identificar duplicados dentro del mismo id. |

## Configuración

La configuración de los webhooks se realiza a través del Panel del desarrollador. A continuación explicaremos cómo indicar las URLs que serán notificadas y cómo configurar los eventos para los que se recibirán notificaciones.

![webhooks](/images/notifications/webhooks_pt.png)

1. Si aún no tienes una aplicación creada, accede a tu [Panel del desarrollador](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) y haz clic en **Entrar** para iniciar sesión si aún no está conectado.
2. Con la aplicación creada, ve a la pestaña Notificaciones de Webhooks en tu Panel de control y configura las [URLs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/webhooks) de **producción** y **prueba** de las que se recibirán notificaciones. 
3. También podrás experimentar y probar si la URL indicada está recibiendo notificaciones correctamente, pudiendo verificar la solicitud, la respuesta dada por el servidor y la descripción del evento.
4. Si necesitas identificar varias cuentas, al final de la URL indicada puedes indicar el parámetro `?customer=(sellername) endpoint` para identificar a los vendedores.
5. Luego seleccione el evento **Wallet Connect** del que recibirá notificaciones en formato `json` a través de un `HTTP POST` a la URL especificada anteriormente. Un evento es cualquier tipo de actualización del objeto informado, incluidos los cambios de estado o atributos. Vea los eventos que se pueden configurar en la siguiente tabla.

| Tipo de notificación  | Acción  | Descripción  |
| --- | --- | --- |
| Confirmación de la vinculación | status.updated | El usuario ha confirmado una vinculación. |
| Cancelación de la vinculación | status.updated  | Vinculación entre el integrador y el usuario de Mercado Pago fue cancelada por el usuario.|
| Actualización de método de pago | payment_method.updated  | El usuario ha actualizado el método de pago de una vinculación. |