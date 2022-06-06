# Crear agreement

La primera etapa para integrar Wallet Connect es la creación de un _agreement_, un link de autorización al que el comprador accede para otorgar al vendedor acceso a su billetera de Mercado Pago en el momento en que se efectúe un pago. 

El _agreement_ almacena los medios de pago seleccionados por el pagador y permite modificar estas configuraciones sin la intervención del vendedor, haciendo que esta etapa sea transparente durante el flujo de pago.

Para crear un _agreement_, envía un POST con los atributos necesarios al endpoint wallet_connect/agreements y ejecuta la solicitud. En la respuesta, presta atención a dos parámetros que serán necesarios para obtener la aprobación del pagador: `agreement_uri` y `return_uri`.


> WARNING
>
> Importante
>
> Un usuario sólo puede tener un agreement activo por integración. Si quieres crear un nuevo agreement, debes cancelar el anterior. Para cancelar un agreement, envía un DELETE al endpoint /v2/wallet_connect/agreements/{agreement_id} y ejecuta la solicitud.

> PREV_STEP_CARD_ES
>
> Requisitos previos 
>
> Conozca los requisitos previos necesarios para integrar Wallet Connect.
>
> [Requisitos previos](/developers/es/docs/wallet-connect/prerequisites)

> NEXT_STEP_CARD_ES
>
> Obtener aprobación
>
> Obtenga información sobre cómo obtener la aprobación del pagador para usar los datos de pago.
>
> [Obtener aprobación](/developers/es/docs/wallet-connect/integration-configuration/get-approval)