# Crear una afiliación de gateway MercadoPagoV2 

Una afiliación de gateway es un conjunto de configuraciones que representan el procesamiento de tus pagos, en este caso, con Mercado Pago. 

La **afiliación MercadoPagoV2** te permitirá procesar pagos con ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mlu, mco, mpe, mlc]---- Checkout API ------------ y Checkout Pro, en los que podrás ofrecer abonar con tarjeta de crédito y débito, ----[mla, mlm, mlb]----financiación sin tarjetas,------------ efectivo o dinero en cuenta. 

Además, MercadoPagoV2 te ofrece la posibilidad de activar **3DS (3-D Secure)**,  un protocolo creado para proteger transacciones en tiendas online mediante una capa adicional de verificación de identidad antes de la autorización final, lo que volverá tus transacciones todavía más seguras. 

> WARNING
>
> Importante
>
> La afiliación de gateway MercadoPagoV1 será discontinuada. Si ya cuentas con una afiliación de gateway MercadoPagoV1, deberás [migrar a MercadoPagoV2](/developers/es/docs/vtex/how-tos/migrate-v1-v2) para continuar operando con Mercado Pago y aprovechar las ventajas que este nuevo conector ofrece. 

Para crear una **afiliación de gateway MercadoPagoV2**, sigue los pasos a continuación:

1. En el panel de administración de tu plataforma VTEX, accede a **Pagos> Configuración**.
2. En la parte superior de la pantalla, dirígete a la pestaña **Afiliaciones de gateway**, y  haz clic en el botón "+" para crear una nueva afiliación.
3. Busca por el conector **MercadoPagoV2** y selecciónalo. Esto te llevará a una nueva pantalla.
4. En esta pantalla, elige cuál quieres que sea el **Nombre de la afiliación** dentro de la tienda. Además, asegúrate de tener activado el botón slider **Live/Producción**.
5. Luego, completa los campos correspondientes:
| Campo | Descripción |
|---|---|
| Application Key  | Son tus [credenciales](/developers/es/docs/vtex/additional-content/your-integrations/credentials) de producción de Mercado Pago. Completa con tu **Public Key**. |
| Application Token | Son tus [credenciales](/developers/es/docs/vtex/additional-content/your-integrations/credentials) de producción de Mercado Pago. Completa con tu **Access Token**. |
| Prazo de vencimento do boleto - Período de vencimiento del ticket  | Plazo, en días hábiles, para el vencimiento de la orden de compra. Si el cliente paga fuera de plazo, el dinero se depositará en su cuenta de Mercado Pago. |
| Nome da loja - Nombre para resúmenes:  | Nombre de la tienda. El valor de este campo aparecerá en la factura de compra del cliente. |
| Parcelamento máximo - Cuotas máximas  | Número máximo de veces en las que podrá realizarse el pago.  Con Mercado Pago, puedes ofrecer hasta 12 veces. |
| Suporte 3DS 2.0 - Soporte 3DS 2.0 | 3-D Secure es un protocolo creado para proteger transacciones en comercios electrónicos mediante una capa adicional de verificación de identidad antes de la autorización final.  Solo las transacciones rechazadas por Alto Riesgo se envían para la validación del 3DS y no afecta la experiencia de compra. <br>Para activarlo, **deshabilita el Modo binário - binario** y  selecciona la opción **Yes**. <br>Asegúrate de haber instalado Mercado Pago Payment App para que funcione correctamente. |
| Categoría principal da loja - Categoría principal de la tienda  | Rubro de la tienda. |
| Compartilhamento da categoria (loja ou produto) por transação - Categoría (tienda o producto) compartida por transacción | Para ayudar a nuestro sistema de prevención de fraudes, tienes la opción de compartir los datos de la categoría de la tienda o producto por cada transacción realizada. Te recomendamos elegir la opción **Categoria da Loja - Categoría de la Tienda**. |
| Reembolso automático / manual  | En caso de cancelación, puedes elegir si deseas que Mercado Pago reembolse automáticamente el dinero, o si deseas retener el monto pagado para que el cliente lo use en futuras compras dentro de la misma tienda. |
| Modo binário - binario | Configura si deseas que la tienda acepte pagos pendientes. <br>Si seleccionas la opción **No**, la transacción quedará pendiente por 48 hs o hasta que se realice el pago, y el stock involucrado en esa compra será retenido por el mismo período de tiempo. <br>Si seleccionas **Sí**, en cambio, se rechazarán transacciones pendientes y el stock será automáticamente liberado. <br>**Importante:** para usar 3DS, el modo binario precisa estar desactivado. |
| Métodos de pagamento excluídos - Métodos de pago excluídos  | Si quieres ofrecer pagos con Checkout Pro, puedes excluir métodos de pago para que no estén disponibles al momento de la compra. Deberás tipear los nombres de cada uno, tal como se muestra en [Tipos y métodos de pago](/developers/es/docs/vtex/payment-methods). Estarás excluyendo métodos de pago en particular (visa, rapipago, amex, etc.).  <br>Ten en cuenta que durante el proceso de Configuración de pagos, deberás seleccionar uno a uno los medios de pago que deseas ofrecer. <br>Excluir métodos y tipos de pago en esta etapa limitará esas opciones sólo en caso de integrar Checkout Pro. Si integras Checkout API, estas configuraciones no tendrán impacto. |
| Tipos de pagamento excluídos - Tipos de pago excluidos  | Integrando Checkout Pro, también puedes excluir tipos de pago en su totalidad (credit_card; debit_card; ticket). Puedes  mirar las opciones disponibles en [Tipos y métodos de pago](/developers/es/docs/vtex/payment-methods). Asegúrate de digitar los nombres tal cual están listados para garantizar que el proceso de exclusión sea correcto.<br>Ten en cuenta que durante el proceso de Configuración de pagos, deberás seleccionar uno a uno los medios de pago que deseas ofrecer. <br>Excluir métodos y tipos de pago en esta etapa limitará esas opciones sólo en caso de integrar Checkout Pro. Si integras Checkout API, estas configuraciones no tendrán impacto. |
| Modo de processamento - Modo de procesamiento  | Selecciona la opción **Aggregator**. |
| Integrator ID | Si eres desarrollador, completa con tu **identificación de Mercado Pago**. |
| Moeda - Moneda | ----[mlu]---- Configura la moneda de la tienda (**USD** o **Local**). ------------ ----[mla, mlm, mlb, mco, mpe, mlc]---- Este campo identifica la moneda de la tienda. No es necesario que lo completes. ------------  |
| Merchant Account | Este campo identifica la cuenta del merchant. No es necesario que lo completes. |
| Plazo de captura de pagamento aprobado - Plazo de captura de pagos aprobado | Puedes configurar un retraso en la captura del pago que hace VTEX seleccionando de entre las opciones deplegables. Si no quieres configurarlo, selecciona "Desactivado". |
| Tempo para cancelar carrito abandonado - Fecha para cancelar compras de un carrito abandonado | Configura el rango de tiempo que se deberá esperar para que los medios de pago habilitados no estén disponibles para realizar la compra. Puedes seleccionar un rango de tiempo de entre las opciones desplegables, o bien elegir "no cancelar". |



![Configure MercadoPagoV2](/images/vtex/vtex-new-admin-gateway-es.gif) 

Una vez que hayas completado todos los campos, haz clic en **Guardar**, ¡y listo! Tu afiliación con MercadoPagoV2 ya está activa.


> NOTE
>
> Nota
>
> Si tienes dificultades durante la integración, consulta nuestra [lista de errores](/developers/es/guides/vtex/additional-content/possible-errors) y nuestro documento sobre [logs de VTEX.](/developers/es/guides/vtex/how-tos/logs)
