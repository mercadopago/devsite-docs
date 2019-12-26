# Loja Integrada

## ¿Qué es Loja Integrada?

Loja integrada es una plataforma virtual que permite procesar pagos a través de Mercado Pago. Para obtener más información, visita el sitio de [Loja integrada](https://www.lojaintegrada.com.br/).

## Configure la tienda integrada para operar con Mercado Pago

Los pasos para comenzar a operar con Mercado Pago son los siguientes:

1. Conecte su cuenta de Mercado Pago a Loja Integrada.
2. Configurar boleto.
3. Configurar tarjetas de crédito.

### Conectar cuenta de mercado pagada

Para vincular su cuenta de Mercado Pago a Loja Integrada, siga estos pasos:

1. Acceda a la configuración del método de pago desde el menú Tienda integrada.
2. Haga clic en "MercadoPago V1".
3. Haga clic en "Instalar la aplicación MercadoPago V1".
4. Haga clic en "Permitir".

    ![Installing Mercado Pago - Loja integrada](/images/lojaintegrada-connect-1.gif)

Después de vincular su cuenta, tiene la opción de habilitar dos tipos de pago:
- Pago transparente: el comprador permanece en el entorno de su tienda durante todo el proceso.
- Redireccionar Mercado Pago: el comprador se dirige a Mercado Pago para realizar el pago y completar la compra.

    ![Activating Checkout transparent and Checkout redirected - Loja Integrada](/images/lojaintegrada-checkout-1.gif)

### Configurar boleto

Para operar con boleto, siga estos pasos:

1. Acceda a la configuración del método de pago desde el menú Tienda integrada.
2. Navegue hasta el grupo "Configuración de boleto".
3. Active el campo "Boleto bancario".
4. Ingrese un monto mínimo para que la plataforma presente la opción del boleto al comprador. Si todos los pedidos pueden pagarse con boleto, deje el campo despejado.
5. Si desea un descuento en su recibo de pago, marque "¿Usar descuento en el recibo?" e ingrese el porcentaje de descuento en el campo "Descuento aplicado".
6. Haga clic en "guardar cambios".

    ![Setting ticket - Loja Integrada](/images/lojaintegrada-ticket-1.gif)

### Configurar tarjetas de crédito

Para operar con tarjetas de crédito, siga estos pasos:

1. Acceda a la configuración del método de pago desde el menú Tienda integrada.
2. Ingrese en el campo "Nombre de la factura del comprador" cómo desea que aparezca su tienda en el extracto de la tarjeta del comprador.
3. Navegue hasta el grupo "Instalación de instalación".
4. Complete los siguientes campos:
- Monto mínimo a plazos: monto mínimo para compras con tarjeta de crédito.
- Plazos máximos: Cantidad máxima de plazos para pagos en modo transparente. (Este campo debe coincidir con la configuración de su cuenta de Mercado Pago).
- Plazos máximos para redireccionamiento: Cantidad máxima de plazos para pagos en modo redirigido. (Este campo debe coincidir con la configuración de su cuenta de Mercado Pago).
- Plazos sin intereses: número de plazos sin intereses para pagos en modo transparente. (Este campo debe coincidir con la configuración de su cuenta de Mercado Pago).
5. Haga clic en "Guardar cambios".

    ![Setting credit card - Loja Integrada](/images/lojaintegrada-credit-card-1.gif)
