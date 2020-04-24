# XTECH

## ¿Qué es XTECH?

[XTECH](https://www.xtechcommerce.com/) es una plataforma de ecommerce que disponibiliza una integración con Mercado Pago como medio de pago.

## ¿Cómo puedo operar con Mercado Pago en XTECH?

Adaltech permite operar con Mercado Pago en las siguientes modalidades:

### API

Reciba pagos en su tienda a través de la tarjeta de crédito en modo transparente, es decir, personalice el diseño de pago para su tienda según lo dispuesto por la plataforma XTECH.

### Checkout de Mercado Pago

Reciba pagos en su tienda utilizando el checkout del propio Mercado Pago, en este modelo el usuario (cliente) será redirigido a una página de Mercado Pago para finalizar su compra.

## Cuenta de Mercado Pago

Antes de comenzar la configuración, debe tener una cuenta válida de **Mercado Pago**, si no la tiene, puede registrarse accediendo al [formulario de registro](https://www.mercadopago.com.ar/registration-mp?mode=mp).

Si desea obtener más información sobre **Mercado Pago**, visite nuestra [página principal](https://www.mercadopago.com.ar/).

## ¿Cómo habilitar Mercado Pago?

1. Acceda al administrador si su tienda está en la plataforma.
2. Desde el menú Herramientas, seleccione la opción **MÓDULOS DE PAGAMENTO**

    ![Enabling Mercado Pago in Xtech](/images/xtech_config01.png)

3. Haga clic en el botón **INSTALAR** en el cuadro de Mercado Pago

    ![Mercado Pago installation page at Xtech](/images/xtech_config02.png)

4. Será redirigido a una página de Mercado Pago para poder permitir la conexión entre XTECH Plataforma y su cuenta de Mercado Pago, haciendo todas las configuraciones necesarias.

    ![Xtech authorization message](/images/xtech_config03.png)

5. Después de hacer clic en **PERMITIR**, se lo redirigirá a la sección administrativa de la plataforma en la pantalla de configuración del módulo Mercado Pago.

    ![Xtech Configuration Page](/images/xtech_config04.png)

Mercado Pago está instalado pero **deshabilitado**, siga los pasos a continuación para configurar el módulo.

### Configuración de Mercado Pago

Después de seguir los pasos anteriores, el módulo Mercado Pago en la plataforma ya está habilitado, ahora debe configurarlo de acuerdo con el tipo de pago que desea usar.

#### Habilitar medios de pago

Para habilitar el método de pago, debe seleccionar la opción **ACTIVADO** en el campo **STATUS**.

![Activating payment method](/images/xtech_config06.png)

#### Elegir el tipo de Checkout

Para elegir un pago transparente, debe seleccionar la opción **ACTIVADO** de **Checkout transparente**.

![Choice of checkout type](/images/xtech_config07.png)

Para elegir redireccionar el pago, debe seleccionar ** DESACTIVADO ** en el campo **Checkout transparente**.

![Transparent checkout disabled](/images/xtech_config08.png)

#### Comprender el formulario de configuración XTECH

![Understanding Xtech Configuration Page](/images/xtech_config05.png)

A continuación se muestra la descripción de cada campo del formulario de configuración en el panel de administración de la plataforma:

Item | Valores | Descripción
---------|----------|---------
Status | Activo / Inactivo | Indica si el método de pago está habilitado / deshabilitado en la página de pago
Nombre de pestaña de pago |  | Indica el nombre de la pestaña para el método de pago
Descuento de boleto (%) |  | Cantidad a descontar cuando el método de pago seleccionado es un recibo bancario
Cupón de pago del mercado | Encendido / Apagado | Habilite el cupón de descuento exclusivo de Marketplace pagado
Pago transparente | Encendido / Apagado | Indica el tipo de pago. Encendido habilita el pago transparente mientras que deshabilitado habilita el pago de redireccionamiento
Nombre de factura de tarjeta de crédito | | Indica el nombre que aparecerá en la factura del cliente, sugiero usar el nombre de la tienda. Límite máximo de 11 caracteres.
Formas de pago | Tarjeta de crédito / transferencia bancaria | Habilita los métodos de pago que aparecerán en la página de pago.
Número de cuotas | | Indica la cantidad máxima de cuotas que se aceptarán al finalizar la compra.
Valor mínimo de la cuota | | Indica la cantidad más pequeña que puede tener el paquete.

## Ejemplos

Utilizamos una tienda de demostración XTECH para mostrar el resultado de los tipos de pago a los clientes.

### Apariencia del Checkout Transparente

**Tarjeta de Crédito_**

![Setting up payment method - Credit card](/images/xtech_config12.png)

**_Boleto Bancário_**

![Setting up payment method - Ticket](/images/xtech_config11.png)

### pariencia del Checkout Redirect

![Checkout redirect visual](/images/xtech_config10.png)

Después de hacer clic en **FINALIZAR LA COMPRA**, el cliente será redirigido a una página de Mercado Pago para finalizar su compra:

![Checkout page - Checkout redirect](/images/xtech_gif01.png)
