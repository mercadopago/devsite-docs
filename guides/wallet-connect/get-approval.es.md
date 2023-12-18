# Obtener aprobación 

Con el _agreement_ creado, es necesario obtener la aprobación del comprador para utilizar los datos de pago guardados en la billetera Mercado Pago. Esta aprobación se produce durante el flujo de pago y utiliza dos parámetros devueltos en la respuesta de la creación del agreement:

* `agreement_uri`: dirección a la que se redirige al comprador para otorgar acceso a la billetera de Mercado Pago para realizar el pago.
* `return_uri`: dirección de redireccionamiento tras la confirmación del agreement otorgada por el comprador.

> NOTE
>
> Importante
>
> Al confirmar el agreement y obtener la aprobación del comprador, se enviará una notificación webhook con los detalles de la aprobación. Consulte la sección [Confirmación del agreement por parte del usuario](/developers/es/docs/wallet-connect/additional-content/your-integrations/notifications/webhooks) para obtener más detalles.

Puedes ver el diagrama que ilustra el proceso de aprobación del comprador a continuación.

![Obtener aprobación](/images/wallet-connect/get-payer-approval.es.png)

El diagrama de secuencia mostrado anteriormente ilustra que la confirmación del comprador ocurre simultáneamente con el proceso de compra. Dentro de este escenario, el comprador otorga autorización para integrar su cuenta de Mercado Pago, permitiendo el uso de los diversos métodos de pago ofrecidos para efectuar la transacción.

Tras concluir el agreement, consulte la sección [Crear payer token](/developers/es/docs/wallet-connect/account-linking-flow/create-payer-token). Este paso es fundamental para finalizar con éxito el flujo de vinculación de cuentas, habilitando la progresión hacia la fase subsiguiente del flujo de pagos.

