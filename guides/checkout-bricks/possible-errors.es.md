# Posibles errores

A continuación encontrará listas de errores que pueden ocurrir durante la integración de los bricks. Ya sean relacionadas con **envío de variables** o **comunicación con servicios externos** (APIs de Mercado Pago).

## Variables pasadas por el integrador

Durante el proceso de integración del Brick, es posible que **al momento de instanciar el Brick **se muestren al integrador diferentes errores relacionados con el envío de variables. Estos errores se mostrarán mediante un log en la consola del navegador (el comprador no recibe ningún mensaje).

| Error  | Mensaje  | Código de causa  |
| --- | --- | --- |
| Objeto de configuración vacío  | [Initialization error] Settings object is empty, please pass required properties. <br> _[Error de inicialización] El objeto de configuración está vacío, pase las propiedades requeridas._  | settings_empty  |
| Ausencia de la propiedad amount (monto total de la compra)  | [Initialization error] Amount property is required. <br> _[Error de inicialización] Se requiere la propiedad amount._ | missing_amount_property  |
| Ausencia de los callbacks de onReady y onError  | [Initialization error] Callbacks onReady and onError are required. <br> _[Error de inicialización] Se requieren los callbacks onReady y onError._ | missing_required_callbacks  |
| Ausencia de un ID de un elemento HTML que sirva como container del brick  | [Initialization error] You must provide an HTML element ID as a container to allow component rendering. <br> _[Error de inicialización] Debe proporcionar un ID de elemento HTML como contenedor para permitir la representación de componentes._ | missing_container_id  |
| Ausencia de la propiedad locale (idioma deseado)  | [Initialization error] Locale property is required. <br> _[Error de inicialización] Se requiere la propiedad de configuración regional._  | missing_locale_property  |
| Error genérico ocurrido durante la inicialización del brick, generalmente alguna validación que falló debido a un valor enviado por el integrador  | [Initialization error] Brick incorrectly initialized: {error} <br> _[Error de inicialización] Brick inicializado incorrectamente._  | incorrect_initialization  |

## Comunicación con servicios externos (APIs de Mercado Pago)

| Error  | Mensaje para el usuario  | Mensaje para el integrador  | ¿Crítico?  | Código de causa  |
| --- | --- | --- | --- | --- |
| Incapacidad para generar Secure Fields dentro del formulario del brick de Card Payment  | Ocurrió un error  | The integration with Secure Fields failed  | Si  | fields_setup_failed  |
| No se pudo obtener la información del medios de pago según la public_key del integrador  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | An error occurred while trying to search for payment methods  | No | get_payment_methods_failed  |
| No se pudo crear el token que representa la información de la tarjeta  | Ocurrió un error y no se pudo procesar el pago. Por favor, inténtalo de nuevo más tarde.  | Failed to create card token  | No  | card_token_creation_failed  |
| Error al buscar tipos de documentos de identificación según el país definido en el SDK de MercadoPago.js  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | Failed to get identification types  | No  | get_identification_types_failed  |
| No se pudo obtener la información de la tarjeta basada en el bin  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | Failed to get payment methods using card bin  | No  | get_card_bin_payment_methods_failed  |
| Error al buscar bancos emisores de tarjetas  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | Failed to get card issuer(s)  | No  | get_card_issuers_failed  |
| Error al buscar la cantidad y los montos de las cuotas de pago según el amount enviado por el integrador  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | Failed to get payment installments  | No  | get_payment_installments_failed  |
| Campos de pago incompletos por algún motivo (cuotas, emisor de la tarjeta, payment_method_id)  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | Se devolverá uno de los siguientes mensajes según el tipo de error:  The payment method id is missing The payment installments are missing The card issuer is missing    | No  | missing_payment_information  |