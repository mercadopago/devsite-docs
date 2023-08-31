# Registra afiliaciones de gateway

Una **afiliación de gateway** es un conjunto de configuraciones que representan el procesamiento de tus pagos con una gateway de tu elección, en este caso **Mercado Pago**.

Con esto, es posible decidir por qué gateway de pagos se procesarán los diferentes tipos de transacciones de tu tienda VTEX, utilizando la **afiliación de gateway de MercadoPagoV2** para procesar pagos con Tarjeta de Crédito, Tarjeta de Débito, Mercado Pago Offline y Checkout Pro.

## Creando una afiliación de gateway MercadoPagoV2

----[mlb]----

La afiliación MercadoPagoV2 procesa los planes de pago con Tarjeta de Crédito, Boleto Bancário, Pix, Mercado Pago Offline y Checkout Pro.

------------
----[mla, mlm, mlu, mco, mpe]----

La afiliación MercadoPagoV2 procesa los planes de pago con Tarjeta de crédito, Tarjeta de débito, Mercado Pago Offline y Checkout Pro.

------------
----[mlc]----

La afiliación MercadoPagoV2 procesa los planes de pago con Tarjeta de crédito, Tarjeta de débito, y Checkout Pro.

------------

> WARNING
>
> Importante
>
> Si cuentas con una afiliación de gateway MercadoPagoV1, por cuestiones de seguridad te recomendamos [migrar a MercadoPagoV2.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/vtex/mp1-mp2-migration)

Para crear una **afiliación de gateway de pago con MercadoPagoV2**, sigue los pasos a continuación:

1. En el panel de administración de tu tienda, accede a **Configuración** del módulo de **Pagos**.
2. En la pestaña **Afiliaciones**, haz clic en el botón "+".
3. Haz clic en el conector **MercadoPagoV2**.
4. Completa los campos correspondientes:
   - **Application Key:** se refiere a tus [credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/credentials/credentials) de producción de Mercado Pago. Completa con tu Public Key.
   - **Application Token:** se refiere a tus [credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/credentials/credentials) de Mercado Pago. Completa con tu Access Token.
   - **Periodo de vencimiento del ticket:** plazo, en días hábiles, para el vencimiento de la orden de compra. También definirá el plazo del método de pago. Si el cliente paga fuera de plazo, el dinero se depositará en su cuenta de Mercado Pago.
   - **Nombre para resúmenes:** Nombre de la tienda. El valor de este campo aparecerá en la factura de la tarjeta del cliente.
   - **Parcelamento máximo - Cuotas máximas:** número máximo de cuotas disponibles.
   - **Categoría principal de la tienda:** categoría de la tienda.
   - **Reembolso automático / manual:** selecciona si deseas que Mercado Pago reembolse automáticamente en caso de cancelación o si deseas retener el monto pagado para que el cliente lo use en futuras compras.
   - **Modo binário:** configura si el pago puede pasar por revisión manual o no.
   - **Métodos de pago excluídos:** métodos de pago que se excluirán en el momento de la compra. [Mira las opciones aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/vtex/payment-methods). Aplicable solo para MercadoPagoPRO, MercadoPagoWallet y MercadoPAgoOff.
   - **Tipos de pago excluidos:** tipos de pago que se excluirán en el momento de la compra. [Mira las opciones aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/vtex/payment-methods). Aplicable solo para MercadoPagoPRO, MercadoPagoWallet y MercadoPagoOff.
   - **Modo de procesamiento:** configura el pago a través del modelo agregador.
   - **Integrator ID:** para programadores o agencias que realizan la integración.
   - **Moneda:** moneda a configurar (USD o Local).
   - **Plazo de captura de pagamento aprobado - Plazo de captura de pagos aprobado:** configura un retraso en la captura automática de VTEX.
5. Haz clic en **Salva**.

¡Y listo! ¡Tu afiliación con MercadoPagoV2 ya está activa!

> NOTE
>
> Nota
>
> Si tienes dificultades durante tu integración, consulta nuestra [lista de errores](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/common-errors) y nuestro documento sobre [logs de VTEX.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/vtex/logs)

![Creando una afiliación de gateway MercadoPagoV2](/images/vtex/affiliationV2-imagenv2-es.gif)