# Cómo migrar de versión de gateway

Si ya tienes registrada una afiliación de gateway MercadoPagoV1, debes saber que próximamente será discontinuada y **la migración a MercadoPagoV2 pasará a ser obligatoria** para continuar procesando pagos en tiendas VTEX.

MercadoPagoV2 te permitirá disponibilizar los mismos medios de pago y sumar, además, pagos ----[mla, mlb]---- en cuotas sin tarjeta o------------ ----[mlm]---- en meses sin tarjeta o------------ en efectivo. También podrás activar **3DS (3-D Secure)**,  un protocolo creado para proteger transacciones en tiendas online mediante una capa adicional de verificación de identidad antes de la autorización final, lo que volverá tus transacciones todavía más seguras y aumentará la tasa de aprobación de tus pagos.


Para realizar la migración de MercadoPagoV1 a MercadoPagoV2, sigue los siguientes pasos:

## 1. Registra una afiliación de gateway MercadoPagoV2

Si ya cuentas con una afiliación de gateway MercadoPagoV1, deberás crear ahora una **nueva afiliación MercadoPagoV2**. Es sencillo y similar al proceso que has hecho al configurar el conector anterior, por lo que deberás prestar particular atención al proceso y la descripción de los campos a continuación.

1. Accede al panel de administración de tu plataforma **VTEX> Pagos> Configuración**.
2. En la parte superior de la pantalla, dirígete a la pestaña **Afiliaciones de gateway**, y  haz clic en el botón **+** para crear una nueva afiliación.
3. Busca el conector **MercadoPagoV2** y selecciónalo. Esto te llevará a una nueva pantalla.
4. En esta pantalla, elige cuál quieres que sea el **Nombre de la afiliación** dentro de la tienda. Además, asegúrate de tener activado el botón slider **Live/Producción**, incluso si estás utilizando cuentas de prueba.
5. Luego, completa los campos siguiendo las indicaciones:

| Campo | Descripción |
|---|---|
| Application Key  | Son tus [credenciales](/developers/es/docs/vtex/additional-content/your-integrations/credentials) de producción de Mercado Pago. Completa con tu **Public Key**. |
| Application Token | Son tus [credenciales](/developers/es/docs/vtex/additional-content/your-integrations/credentials) de producción de Mercado Pago. Completa con tu **Access Token**. |
| Prazo de vencimento do boleto - Período de vencimiento del ticket  | Plazo, en días hábiles, para el vencimiento de la orden de compra. Si el cliente paga fuera de plazo, el dinero se depositará en su cuenta de Mercado Pago. |
| Nome da loja - Nombre para resúmenes:  | Nombre de la tienda. El valor de este campo aparecerá en la factura de compra del cliente. |
| Parcelamento máximo - Cuotas máximas  | Número máximo de veces en las que podrá realizarse el pago.  Con Mercado Pago, puedes ofrecer hasta 12 veces. |
| Suporte 3DS 2.0 - Soporte 3DS 2.0 | 3-D Secure es un protocolo creado para proteger transacciones en comercios electrónicos mediante una capa adicional de verificación de identidad antes de la autorización final.  Solo las transacciones rechazadas por Alto Riesgo se envían para la validación del 3DS y no afecta la experiencia de compra. <br>Actívalo seleccionando la opción **Yes**. <br>Asegúrate de haber instalado Mercado Pago Payment App para que funcione correctamente. |
| Categoría principal da loja - Categoría principal de la tienda  | Rubro de la tienda. |
| Compartilhamento da categoria (loja ou produto) por transação - Categoría (tienda o producto) compartida por transacción | Para ayudar a nuestro sistema de prevención de fraudes, tienes la opción de compartir los datos de la categoría de la tienda o producto por cada transacción realizada. Te recomendamos elegir la opción **Categoria da Loja - Categoría de la Tienda**. |
| Reembolso automático / manual  | En caso de cancelación, puedes elegir si deseas que Mercado Pago reembolse automáticamente el dinero, o si deseas retener el monto pagado para que el cliente lo use en futuras compras dentro de la misma tienda. |
| Modo binário - binario | Configura si deseas que la tienda acepte pagos pendientes. <br>Si seleccionas la opción **No**, la transacción quedará pendiente por 48 hs o hasta que se realice el pago, y el stock involucrado en esa compra será retenido por el mismo período de tiempo. <br>Si seleccionas **Sí**, en cambio, se rechazarán transacciones pendientes y el stock será automáticamente liberado. |
| Métodos de pagamento excluídos - Métodos de pago excluídos  | Si quieres ofrecer pagos con Checkout Pro, puedes excluir métodos de pago para que no estén disponibles al momento de la compra. Deberás tipear los nombres de cada uno, tal como se muestra en [Tipos y métodos de pago](/developers/es/docs/vtex/payment-methods). Estarás excluyendo métodos de pago en particular (visa, rapipago, amex, etc.).  <br>Ten en cuenta que durante el proceso de Configuración de pagos, deberás seleccionar uno a uno los medios de pago que deseas ofrecer. <br>Excluir métodos y tipos de pago en esta etapa limitará esas opciones sólo en caso de integrar Checkout Pro. Si integras Checkout API, estas configuraciones no tendrán impacto. |
| Tipos de pagamento excluídos - Tipos de pago excluidos  | Integrando Checkout Pro, también puedes excluir tipos de pago en su totalidad (credit_card; debit_card; ticket). Puedes  mirar las opciones disponibles en [Tipos y métodos de pago](/developers/es/docs/vtex/payment-methods). Asegúrate de digitar los nombres tal cual están listados para garantizar que el proceso de exclusión sea correcto.<br>Ten en cuenta que durante el proceso de Configuración de pagos, deberás seleccionar uno a uno los medios de pago que deseas ofrecer. <br>Excluir métodos y tipos de pago en esta etapa limitará esas opciones sólo en caso de integrar Checkout Pro. Si integras Checkout API, estas configuraciones no tendrán impacto. |
| Modo de processamento - Modo de procesamiento  | Selecciona la opción **Aggregator**. |
| Integrator ID | Si eres desarrollador, completa con tu **identificación de Mercado Pago**. |
| Moeda - Moneda | Configura la moneda de la tienda (**USD** o **Local**). |
| Merchant Account | Este campo identifica la cuenta del merchant. No es necesario que lo completes. |
| Prazo de captura de pagamento aprobado - Plazo de captura de pagos aprobado | Puedes configurar un retraso en la captura del pago que hace VTEX seleccionando de entre las opciones deplegables. Si no quieres configurarlo, selecciona "Desactivado". |
| Tempo para cancelar carrito abandonado - Fecha para cancelar compras de un carrito abandonado | Configura el rango de tiempo que se deberá esperar para que los medios de pago habilitados no estén disponibles para realizar la compra. Puedes seleccionar un rango de tiempo de entre las opciones desplegables, o bien elegir "no cancelar". |

6. Haz clic en Guardar, ¡y listo! Tu afiliación con MercadoPagoV2 ya está activa.

![Configure MercadoPagoV2](/images/vtex/vtex-new-admin-gateway-es.gif) 


## 2. Configurar medios de pago

Si ya tienes configurados tus medios de pago con la afiliación MercadoPagoV1, deberás efectuar la **migración a MercadoPagoV2 para cada uno de los medios que hayas disponibilizado**. El conector V2 te permitirá ofrecer los mismos medios de pago y sumar, además, nuevas opciones, como ----[mco]----PSE o------------ ----[mla, mlb, mlm]----financiación sin tarjeta o------------ pagos con dinero en cuenta de Mercado Pago.

Para hacerlo, sigue los pasos enumerados debajo.

1. Dirígete al panel de administración de tu plataforma **VTEX> Pagos> Configuración**.
2. Selecciona **Condiciones de Pago** en el panel superior y elige el medio de pago que deseas configurar.
3. En **Proceso con la afiliación**, cambia MercadoPagoV1 por **MercadoPagoV2**. 
4. Repite el proceso con el resto de los medios de pago que hayas disponibilizado en tu plataforma.

![Configure v2 in payment methods](/images/vtex/migration-payment-conditions.gif) 


Al concluir el proceso, tendrás configurada tu nueva afiliación de gateway MercadoPagoV2 y podrás continuar operando con Mercado Pago, aprovechando las nuevas ventajas que este conector te ofrece.
