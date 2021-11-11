# Registra afiliaciones de gateway

Una afiliación de gateway es un conjunto de configuraciones que representan el procesamiento de tus pagos con Mercado Pago.
**Afiliación de gateway MercadoPagoV2** para procesar pagos con Tarjeta de Crédito, Tarjeta de Débito, Mercado Pago Offline y Checkout Pro.

## Creando una afiliación de gateway MercadoPagoV2


----[mlb]----

> WARNING
>
> Importante
>
> La afiliación MercadoPagoV2 procesa los planes de pago con Tarjeta de Crédito, Tarjeta de Débito, Boleto Bancário, Pix, Mercado Pago Offline y Checkout Pro.

------------

----[mla, mlm, mlu, mco, mpe]----

> WARNING
>
> Importante
>
> La afiliación MercadoPagoV2 procesa los planes de pago con Tarjeta de crédito, Tarjeta de débito, Mercado Pago Offline y Checkout Pro.

------------

----[mlc]----

> WARNING
>
> Importante
>
> La afiliación MercadoPagoV2 procesa los planes de pago con Tarjeta de crédito, Tarjeta de débito, y Checkout Pro.

------------

Para crear una **afiliación de gateway de pago con MercadoPagoV2**, sigue los pasos a continuación:

1. En el panel de administración de tu tienda, accede a **Configuración** del módulo de **Pagos**.
2. En la pestaña **Afiliaciones**, haz clic en el botón "+".
3. Haz clic en el conector **MercadoPagoV2**.
4. Completa los campos correspondientes: 

|Campos|Datos requeridos|
|---|---|
|Application Key|Se refiere a tus [credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) de Mercado Pago. Completea con tu Public Key.|
|Application Token|Se refiere a tus [credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) de Mercado Pago. Completea con tu Access Token.|
|Prazo para finalizar pedido (dias) - Plazo para finalizar el pedido (días)|Plazo, en días hábiles, para el vencimiento del ticket. Si el cliente paga fuera de plazo, el dinero se depositará en su propia cuenta de Mercado Pago.|
|Nome da loja - Nombre de la tienda|Nombre de la tienda. El valor de este campo aparecerá en la factura de la tarjeta del cliente.|
|Número máximo de parcelas - Número máximo de cuotas/mensualidades sin interés|Número máximo de cuotas disponibles.|
|Categoría principal da loja - Categoría principal de la tienda|Categoría de la tienda.|
|Reembolso em vendas canceladas - Reembolso de las ventas anuladas|Selecciona si deseas que Mercado Pago reembolse automáticamente en caso de cancelación o si deseas retener el monto pagado para que el cliente lo use en futuras compras.|
|Anti-fraude totalmente automático - Antifraude totalmente automático|Configura si el pago puede pasar por revisión manual o no.|
|Métodos de pagamento excluídos - Métodos de pago excluidos (formato: visa, paypal, etc.)|Métodos de pago que se excluirán en el momento de la compra. [Mira las opciones aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/payment-methods).|
|Tipos de pagamento excluídos - Tipos de pago excluidos (formato: credti_card, bank_transfer etc.)|Tipos de pago que se excluirán en el momento de la compra. [Mira las opciones aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/payment-methods).|
|Modo de processamento - Modo de procesamiento|Configura si el pago será gateway o agregador.|
|Insira seu Integrator ID - Introduce tu Integrator ID|Para programadores o agencias que realizan la integración.|
|Selecione a moeda das vendas - Seleccione la moneda de venta|Moneda a configurar (USD ou Local)|
|Prazo para captura de dados de cartão da compra -  Plazo para captura de datos de tarjetas de compra|Si utilizas un Antifraude externo complementario, puedes configurar una fecha límite de captura automática para una transacción aprobada, para evitar cancelaciones innecesarias.|

5. Haz clic en **Salva**.

![Creando una afiliación de gateway MercadoPagoV2](/images/vtex/affiliationV2-es.gif)

¡Y listo! ¡Tu afiliación con MercadoPagoV2 ya está activa!

> LEFT_BUTTON_RECOMMENDED_ES
>
> Migración de versión de gateway
>
> Aprende a migrar migrar de MercadoPagoV1 a MercadoPagoV2.
>
> [Migración de versión de gateway](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/mp1-mp2-migration)

> RIGHT_BUTTON_REQUIRED_ES
>
> Planes de pago
>
> Aprende a configurar planes de pago.
>
> [Planes de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/configure-payment-conditions)
