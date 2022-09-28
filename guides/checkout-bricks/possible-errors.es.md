# Posibles errores

A continuación encontrará listas de errores que pueden ocurrir durante la integración de los bricks. Ya sean relacionadas con **envío de variables** o **comunicación con servicios externos** (APIs de Mercado Pago).

> Los mensajes de error de la API se devuelven en inglés de forma predeterminada. Sin embargo, en la siguiente tabla puedes encontrar el mensaje original y su traducción.

## Variables pasadas por el integrador

Durante el proceso de integración del Brick, es posible que **al momento de instanciar el Brick** se muestren al integrador diferentes errores relacionados con el envío de variables. Estos errores se mostrarán mediante un log en la consola del navegador (el comprador no recibe ningún mensaje).

| Error  | Mensaje  | Código de causa  |
| --- | --- | --- |
| Objeto de configuración vacío  | [Initialization error] Settings object is empty, please pass required properties <br><br>  _[Error de inicialización] El objeto de configuración está vacío, pase las propiedades requeridas._  | settings_empty  |
| Ausencia de la propiedad amount (monto total de la compra)  | [Initialization error] Amount property is required <br><br>  _[Error de inicialización] Se requiere la propiedad amount._ | missing_amount_property  |
| Ausencia de los callbacks de onReady y onError  | [Initialization error] Callbacks onReady and onError are required <br><br>  _[Error de inicialización] Se requieren los callbacks onReady y onError._ | missing_required_callbacks  |
| Ausencia de un ID de un elemento HTML que sirva como container del brick  | [Initialization error] You must provide an HTML element ID as a container to allow component rendering <br><br>  _[Error de inicialización] Debe proporcionar un ID de elemento HTML como contenedor para permitir la representación de componentes._ | missing_container_id  |
| Ausencia de la propiedad locale (idioma deseado)  | [Initialization error] Locale property is required <br><br>  _[Error de inicialización] Se requiere la propiedad de configuración regional._  | missing_locale_property  |
| Error genérico ocurrido durante la inicialización del brick, generalmente alguna validación que falló debido a un valor enviado por el integrador  | [Initialization error] Brick incorrectly initialized: {error} <br><br>  _[Error de inicialización] Brick inicializado incorrectamente._  | incorrect_initialization  |

## Comunicación con servicios externos (APIs de Mercado Pago)

| Error  | Mensaje para el usuario  | Mensaje para el integrador  | ¿Crítico?  | Código de causa  |
| --- | --- | --- | --- | --- |
| Incapacidad para generar Secure Fields dentro del formulario del brick de Card Payment  | Ocurrió un error  | The integration with Secure Fields failed<br><br> _Falló la integración con Secure Fields,_  | Si  | fields_setup_failed  |
| No se pudo obtener la información del medios de pago según la public_key del integrador  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | An error occurred while trying to search for payment methods<br><br>_Ocurrió un error al intentar buscar métodos de pago._  | No | get_payment_methods_failed  |
| No se pudo crear el token que representa la información de la tarjeta  | Ocurrió un error y no se pudo procesar el pago. Por favor, inténtalo de nuevo más tarde.  | Failed to create card token<br><br> _No se pudo crear el token de la tarjeta._  | No  | card_token_creation_failed  |
| Error al buscar tipos de documentos de identificación según el país definido en el SDK de MercadoPago.js  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | Failed to get identification types<br><br>_Error al obtener los tipos de identificación._  | No  | get_identification_types_failed  |
| No se pudo obtener la información de la tarjeta basada en el bin  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | Failed to get payment methods using card bin<br><br>_No se pudo realizar el pago con el bin de la tarjeta._  | No  | get_card_bin_payment_methods_failed  |
| Error al buscar bancos emisores de tarjetas  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | Failed to get card issuer(s)<br><br>_No se pudo obtener el(los) emisor(es) de la tarjeta._   | No  | get_card_issuers_failed  |
| Error al buscar la cantidad y los montos de las cuotas de pago según el amount enviado por el integrador  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | Failed to get payment installments<br><br>_Error al obtener las cuotas de pago._  | No  | get_payment_installments_failed  |
| Campos de pago incompletos por algún motivo (cuotas, emisor de la tarjeta, payment_method_id)  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | Se devolverá uno de los siguientes mensajes según el tipo de error: <br><br> -The payment method id is missing<br> -The payment installments are missing<br> -The card issuer is missing <br><br>_-Falta el id del medio de pago._ <br> _-Faltan las cuotas de pago._ <br> _-Falta el emisor de la tarjeta._ | No  | missing_payment_information  |