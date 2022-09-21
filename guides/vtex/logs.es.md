# Verificación de logs

Los logs brindan una mayor comprensión a los equipos para que puedan tener un mejor soporte en una primera instancia, ya que permiten revisar la información devuelta en la integración de Mercado Pago con VTEX, permitiendo una mejor comprensión de lo sucedido con una transacción.

También en caso de modificación o activación de nuevos métodos de pago, nos dan la posibilidad de validar que todo está funcionando según lo previsto.

Para acceder a los logs, accede al panel de administración de tu tienda VTEX y haz clic en **Pagos > Transacciones**. Luego busca el log que contiene el `status response` y haz clic en **"+ Información"**. Los datos más significativos son los siguientes:

|Campo|Dato|Descripción|
|---|---|---|
|`ID`|10302316|Número de transacción de Mercado Pago.|
|`Payment_method_id`|visa|Medio de pago.|
|`Payment_type_id`|credit_card|Medio de pago.|
|`Status`|authorized|Estado del pago.|
|`Status_detail`|pending_capture|Detalle del estado del pago.|
|`External_reference`|503451|Identificador de VTEX enviado a Mercado Pago.|
|`First_six_digits`|450995|Bin de tarjeta de credito.|
|`Processing_mode`|agregador|Modo de procesamiento del pago.|

> NOTE
>
> Nota
>
> [Este documento](https://help.vtex.com/es/tutorial/checking-for-errors-or-problems-in-a-transaction--3QecZEdmzumGKe8WGmeI8a) explica detalladamente cómo buscar errores o problemas en una transacción.

Ante un rechazo, es muy importante revisar el `status_detail` que especifica el motivo del mismo.

Para obtener más información, accede al enlace [Resultados de la creación de un cobro](/developers/es/docs/checkout-api/response-handling/collection-results).

> NEXT_STEP_CARD_ES
>
> Lista de errores
>
> Conoce los errores más comunes.
>
> [Lista de errores](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/vtex/common-errors)