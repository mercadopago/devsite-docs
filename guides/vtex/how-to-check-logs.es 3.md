# Cómo verificar logs

Los logs ayudan a una mayor comprensión de los equipos que brindan soporte, ya que permiten revisar la información devuelta en la integración de Mercado Pago con VTEX. Esto facilita el entendimiento de lo sucedido con una transacción.

También, en caso de modificación o activación de nuevos métodos de pago, dan la posibilidad de validar que todo esté funcionando según lo previsto.

Eventualmente, el equipo de Soporte podrá pedirte que verifiques y/o envíes logs para rastrear información necesaria. Para acceder a estos logs, ingresa al panel de administración de tu tienda VTEX y haz clic en **Pagos > Transacciones**. Luego, busca el log que contiene el *status response* y haz clic en **+ Información**. Los datos más significativos son los siguientes:

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
> Puedes ver cómo buscar errores o problemas en una transacción de manera más detallada accediendo a [este documento](https://help.vtex.com/es/tutorial/checking-for-errors-or-problems-in-a-transaction--3QecZEdmzumGKe8WGmeI8a) disponible en el sitio de VTEX. Para obtener más información, accede al enlace [Resultados de la creación de un cobro](/developers/es/docs/checkout-api/response-handling/collection-results).