# Verificación de logs

Los logs te permiten revisar la información que devuelve Mercado Pago y expone VTEX para tener una mejor comprensión de lo que sucedió con una transacción. También, en caso de modificación o activación de nuevos métodos de pago, nos dan la posibilidad de validar que todo esté funcionando según lo previsto. Por último, proporcionan una mayor comprensión a los equipos comerciales para que puedan brindar un mejor soporte a los vendedores y convertirse en una primera instancia de soporte.

Accede a la transacciones de VTEX, luego busca el LOG que contiene el status response y haz clic en **ver más**.

Los datos más significativos son los siguientes:

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

Ante un rechazo, es muy importante revisar el `status_detail` que especifica el motivo del mismo.

Para obtener más información, accede al enlace [Resultados de la creación de un cargo](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/handling-responses).

> LEFT_BUTTON_RECOMMENDED_ES
>
> Glosario de errores
>
> Conoce los errores más comunes.
>
> [Glosario de errores](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/common-errors)