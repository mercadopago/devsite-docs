# Obtener aprobación 

Con el _agreement_ creado, es necesario obtener la aprobación del comprador para utilizar los datos de pago guardados en la billetera Mercado Pago. Esta aprobación se produce durante el flujo de pago y utiliza dos parámetros devueltos en la respuesta de la creación del agreement:

* `agreement_uri`: dirección a la que se redirige al comprador para otorgar acceso a la billetera de Mercado Pago para realizar el pago.
* `return_uri`: dirección de redireccionamiento tras la confirmación del agreement otorgada por el comprador.

Puedes ver el diagrama que ilustra el proceso de aprobación del comprador a continuación.

![Obtener aprobación](/images/wallet-connect/get-payer-approval.es.png)

Como se indica en el anterior diagrama de secuencia, la aprobación del comprador se produce en el momento de la compra, cuando este autoriza la conexión de su cuenta de Mercado Pago y la utilización de los medios de pago disponibles para finalizar la transacción.

Con la conexión autorizada, consulta la sección Crear payer token para finalizar la integración de Wallet Connect.

