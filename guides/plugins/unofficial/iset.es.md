# ISET

## ¿Qué es ISET?

[ISET](https://www.iset.com.br/) es una plataforma de ecommerce que disponibiliza una integración con Mercado Pago como medio de pago.

## ¿Cómo puedo operar con Mercado Pago en ISET?

Adaltech permite operar con Mercado Pago en las siguientes modalidades:

### API

Reciba pagos en su tienda a través de la tarjeta de crédito en modo transparente, es decir, personalice el diseño de pago para su tienda según lo dispuesto por la plataforma ISET.

### Checkout Pro

Reciba pagos en su tienda utilizando el checkout del propio Mercado Pago, en este modelo el usuario (cliente) será redirigido a una página de Mercado Pago para finalizar su compra.

## Cuenta de Mercado Pago

Antes de comenzar la configuración, debe tener una cuenta válida de **Mercado Pago**, si no la tiene, puede registrarse accediendo al [formulario de registro](https://www.mercadopago.com.ar/registration-mp?mode=mp).

Si desea obtener más información sobre **Mercado Pago**, visite nuestra [página principal](https://www.mercadopago.com.ar/).

## ¿Cómo habilitar Mercado Pago en la plataforma?

1. Acceda al administrador de su tienda en la plataforma.

    ![Iset Login Page](/images/iset-img1.png)

2. En el menú lateral en el item **Módulos**, seleccione la opción **Formas de Pagamento**

    ![Configuring Payment Modes - Iset](/images/iset-img2.png)

3. Se cargará una lista con todos los medios de pago disponibles

    ![Payment method page - Iset](/images/iset-img3.png)

4. Haga clic sobre el ícono de configuraciones

    ![Mercado Pago Tool Icon - Iset](/images/iset-img13.png)

5. Se cargará la página de configuración de Mercado Pago

    ![Mercado Pago Payment Methods - Iset](/images/iset-img4.png)

A continuación se detallan las configuraciones disponibles en la plataforma.

### Activando medios de pago

Para habilitar el método de pago, debe seleccionar una opción del campo **STATUS**:

     * Activo: _ Medios de pago habilitados para escritorio y dispositivos móviles_
     * Solo computadora habilitada: _ pago solo de escritorio habilitado_
     * Solo móvil habilitado: _Método de pago habilitado solo móvil_

Seleccione la opción de activos que mejor se adapte a su negocio, le recomendamos que esté habilitada tanto para computadoras de escritorio como para dispositivos móviles, de modo que el mercado de pago como método de pago estará disponible para sus clientes desde la computadora y el dispositivo móvil.

![Device integration configuration](/images/iset-img5.png)

### Seleccionar métodos de pago

En ISET, tiene la flexibilidad de seleccionar qué métodos de pago desea habilitar en su proceso de pago:

     * Recibo bancario
     * Tarjeta de crédito: VISA, MASTER, AMERICAN EXPRESS, DINNERS, ELO, HIPERCARD y Mercado Libre

![Ticket and credit card setup - Iset](/images/iset-img6.png)

### Elegir el tipo de Checkout

Para elegir un pago transparente, seleccione la opción a través de **Plantilla de pago**.

     * Predeterminado: _checkout redirect_
     * Transparente: _checkout transparent_
     * Ambos: _habilita ambos modelos de pago, redirigir y transparente_

![Checkout button template - Iset](/images/iset-img7.png)

### Configuración de credenciales de Mercado Pago

Para acceder a las credenciales, simplemente vaya al [enlace]([FAKER][CREDENTIALS][URL]), para obtener los datos de public_key utilice la pestaña *checkout transparente* y para obtener client_id y client_secret usa la pestaña *checkout básico*:

![Configuring the client Id and client secret - Iset](/images/iset-img14.png)

### Configuraciones avanzadas

#### Estados de pedidos personalizados

Configuración que define estados personalizados para pedidos desde el estado de pago:

![Order Status Setup - Iset](/images/iset-img8.png)

#### Personalización de plazos

Configuración que define la cantidad máxima de cuotas, valores mínimos y aplicación de descuentos en cuotas.

![Setting the number of Installments - Iset](/images/iset-img10.png)

Atención: esta configuración anulará la configuración obtenida por la API de Mercado Pago, si tiene acuerdos de Mercado Pago acordados de manera diferente, la configuración realizada en esta parte debe ser informada por el equipo de Mercado Pago. Si tiene alguna pregunta, contáctenos.(https://www.mercadopago.com.br/developers/pt/support).

#### Textos en checkout

La plataforma permite editar dos mensajes de texto que se mostrarán antes y después de finalizar el pago.

![Setting up texts in Checkout - Iset](/images/iset-img11.png)

### Habilitación de cupones de descuento

La funcionalidad de cupones de descuento es exclusiva en Checkout for Mercado Pago como método de pago; a través de esta configuración, puede usar cupones de descuento promocionados por Mercado Pago o cupones que puede crear a través de su cuenta de Mercado Pago, visite [enlace](https://www.mercadopago.com.br/settings/my-business) en la sección **oferta de descuento**.

![Enabling discount coupon - Iset](/images/iset-img9.png)

**Después de completar la configuración, puede hacer clic en el botón CERRAR y luego en el botón "GUARDAR CAMBIOS"**.

Aparecerá un mensaje de éxito en la parte inferior de la página:
 

![Settings successfully saved - Iset](/images/iset-img15.png)

## Ejemplos

Utilizamos una tienda de demostración de ISET para mostrar el resultado de los tipos de pago a los clientes.
![Payment methods - Iset](/images/iset-checkout.png)

### Apariencia del Checkout básico

**_Tarjeta de Crédito_**

![Visual Transparent Checkout - Iset](/images/iset-checkout-cartao.png)

**_Boleto Bancário_**

![Ticket - Iset](/images/iset-checkout-boleto.png)

### Apariencia del Checkout redirect

![Checkout redirect Visual- Iset](/images/iset-checkout-redirect.png)

Después de hacer clic en **COMPROBAR**, el cliente será redirigido a una página de confirmación de la tienda:

![Successfully created order page - Iset](/images/iset-checkout-redirect2.png)

Para realizar el pago, debe hacer clic en el botón **Realizar pago**, luego el usuario será redirigido a una página de Mercado Pago:

![Finalize the order in Mercado Pago - Checkout Redirect- Iset](/images/iset_gif01.png)
