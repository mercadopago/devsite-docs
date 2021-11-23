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
> Si cuentas con una afiliación de gateway MercadoPagoV1, por cuestiones de seguridad te recomendamos [migrar a MercadoPagoV2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/mp1-mp2-migration).

Para crear una **afiliación de gateway de pago con MercadoPagoV2**, sigue los pasos a continuación:

1. En el panel de administración de tu tienda, accede a **Configuración** del módulo de **Pagos**.
2. En la pestaña **Afiliaciones**, haz clic en el botón "+".
3. Haz clic en el conector **MercadoPagoV2**.
4. Completa los campos correspondientes: 
   * **Application Key:** Se refiere a tus [credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) de Mercado Pago. Completa con tu Public Key.
   * **Application Token:** Se refiere a tus [credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) de Mercado Pago. Completa con tu Access Token.
   * **Prazo de vencimento do boleto - Periodo de vencimiento del ticket:** Plazo, en días hábiles, para el vencimiento de la orden de compra. También definirá el plazo del método de pago. Si el cliente paga fuera de plazo, el dinero se depositará en su cuenta de Mercado Pago.
   * **Nome da loja - Nombre para resúmenes:** Nombre de la tienda. El valor de este campo aparecerá en la factura de la tarjeta del cliente.
   * **Parcelamento máximo - Cuotas máximas** Número máximo de cuotas disponibles.
   * **Categoría principal da loja - Categoría principal de la tienda:** Categoría de la tienda.
   * **Reembolso automático / manual:** Selecciona si deseas que Mercado Pago reembolse automáticamente en caso de cancelación o si deseas retener el monto pagado para que el cliente lo use en futuras compras.
   * **Modo binário - binário:** Configura si el pago puede pasar por revisión manual o no.
   * **Métodos de pagamento excluídos - Métodos de pago excluídos (visa, paypal, bolbradesco, oxxo...):** Métodos de pago que se excluirán en el momento de la compra. [Mira las opciones aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/payment-methods). Aplicable solo para MercadoPagoPRO, MercadoPagoWallet y MercadoPAgoOff.
   * **Tipos de pagamento excluídos - Tipos de pago excluidos (credit_card, bank_transfer, ticket...):** Tipos de pago que se excluirán en el momento de la compra. [Mira las opciones aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/payment-methods). Aplicable solo para MercadoPagoPRO, MercadoPagoWallet y MercadoPAgoOff.
   * **Modo de processamento - Modo de procesamiento** Configura si el pago será gateway o agregador. Para procesar pagos en modo Gateway, comunícate con tu Asesor de Mercado Pago.
   * **Integrator ID:** Para programadores o agencias que realizan la integración.
   * **Moeda - Moneda:** Moneda a configurar (USD o Local).
5. Haz clic en **Salva**.

¡Y listo! ¡Tu afiliación con MercadoPagoV2 ya está activa!

> NOTE
>
> Nota
> 
> Si tienes dificultades durante tu integración, consulta nuestro [lista de errores](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/common-errors) y nuestro documento sobre [logs de VTEX](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/logs).

![Creando una afiliación de gateway MercadoPagoV2](/images/vtex/affiliationV2-es.gif)

> LEFT_BUTTON_RECOMMENDED_ES
>
> Migración de versión de gateway
>
> Aprende a migrar de MercadoPagoV1 a MercadoPagoV2.
>
> [Migración de versión de gateway](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/mp1-mp2-migration)

> RIGHT_BUTTON_REQUIRED_ES
>
> Planes de pago
>
> Aprende a configurar planes de pago.
>
> [Planes de pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/unofficial/vtex/configure-payment-conditions)
