# Crear payer token

Creado el _agreement_ y otorgada la aprobación del comprador, se debe crear el _payer token_. El _payer token_ se encarga de almacenar los datos del comprador y garantizar la seguridad de la transacción, además es un atributo obligatorio para crear transacciones durante todo el periodo de validez del `agreement` creado anteriormente.

Consulte el siguiente diagrama que ilustra cómo funciona el flujo de creación de un _payer token_.

![Crear payer token](/images/wallet-connect/create-payer-token.es.png)

Para crear un _payer token_, envíe un POST con todos los atributos necesarios al endpoint [/v2/wallet_connect/agreements/{agreementId}/payer_token](/developers/es/reference/wallet_connect/_wallet_connect_agreements_agreement_id_payer_token/post) y ejecute la solicitud.

Con la creación del payer token, la integración con Wallet Connect finalizará con éxito. Por tanto, te recomendamos que consultes la documentación [Webhooks](/docs/wallet-connect/additional-content/notifications/webhooks) para configurar las notificaciones y recibir información en tiempo real cada vez que se produzca un evento.

> PREV_STEP_CARD_ES
>
> Obtener aprobación
>
> Obtenga información sobre cómo obtener la aprobación del pagador para usar los datos de pago.
>
> [Obtener aprobación](/developers/es/docs/wallet-connect/integration-configuration/get-approval)

> NEXT_STEP_CARD_ES
>
> Notificaciones
>
> Configura notificaciones para recibir información en tiempo real sobre los eventos que suceden.
>
> [Notificaciones](/developers/es/docs/wallet-connect/additional-content/notifications/introduction)