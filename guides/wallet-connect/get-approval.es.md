# Obtener aprobación 

Con la vinculación creada, es necesario obtener la aprobación del comprador para utilizar los datos de pago guardados en la billetera Mercado Pago. Esta aprobación se produce durante el flujo de pago y utiliza dos parámetros devueltos en la respuesta de la creación de la vinculación:

* `agreement_uri`: dirección a la que se redirige al comprador para otorgar acceso a la billetera de Mercado Pago para realizar el pago.
* `return_uri`: dirección de redireccionamiento tras la confirmación de la vinculación otorgada por el comprador.

> NOTE
>
> Importante
>
> Al confirmar la vinculación y obtener la aprobación del comprador, se enviará una notificación webhook con los detalles de la aprobación. Consulte la sección [Confirmación de la vinculación por parte del usuario](/developers/es/docs/wallet-connect/additional-content/your-integrations/notifications/webhooks) para obtener más detalles.

Puedes ver el diagrama que ilustra el proceso de aprobación del comprador a continuación.

![Obtener aprobación](/images/wallet-connect/get-payer-approval.es.png)

El diagrama de secuencia mostrado anteriormente ilustra que la confirmación del comprador ocurre simultáneamente con el proceso de compra. Dentro de este escenario, el comprador otorga autorización para integrar su cuenta de Mercado Pago, permitiendo el uso de los diversos métodos de pago ofrecidos para efectuar la transacción.

Tras concluir la vinculación, consulte la sección [Generar token de pago](/developers/es/docs/wallet-connect/account-linking-flow/create-payer-token). Este paso es fundamental para finalizar con éxito el flujo de vinculación de cuentas, habilitando la progresión hacia la fase subsiguiente del flujo de pagos.

