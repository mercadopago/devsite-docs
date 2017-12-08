# OpenCart - Modulo Mercado Pago (v1.4.9, 1.5.x, 2.x - 2.2, 2.3)

* [Funciones](#features)
* [Versiones disponibles](#versions)
* [Instalación](#installation)
* [Configuración de Custom](#configuration_custom)
* [Configuración de Standard](#configuration_standard)
* [Configuración de Ticket](#configuration_ticket)
* [Suporte](#feedback)

<a name="features"></a>
## Funciones:

Opciones de pago para su negocio:
Ofrecemos dos métodos de pago que facilitan la aceptación segura de pagos de cualquier persona, en cualquier lugar.

* [Checkout básico (Redireccionado, Iframe o Lightbox)](https://www.mercadopago.com.br/developers/es/solutions/payments/basic-checkout/receive-payments/)
    * Pago con dos tarjetas
    * [Mercado de envíos](https://www.mercadopago.com.br/developers/es/solutions/payments/basic-checkout/receive-payments/)
    * [Devolución de Pagos](https://www.mercadopago.com.br/developers/es/solutions/payments/basic-checkout/refund-cancel#refund)
    * [Firma (Recurrencia)](https://www.mercadopago.com.br/developers/es/solutions/payments/basic-checkout/subscriptions/)

* Checkout transparente
    * [Pago con tarjeta de crédito](https://www.mercadopago.com.br/developers/es/solutions/payments/basic-checkout/receive-payments/)
    * [Pago con un clic (Clientes y Tarjetas)](https://www.mercadopago.com.br/developers/es/solutions/payments/custom-checkout/one-click-charges/javascript/)
    * [Pago con otros medios (Boleto)](https://www.mercadopago.com.br/developers/es/solutions/payments/custom-checkout/charge-with-other-methods/)
    * Pago con dos tarjetas
    * [Devolución de Pagos](https://www.mercadopago.com.br/developers/es/solutions/payments/custom-checkout/refund-cancel#refund)

<a name="versions"></a>
## Versiones disponibles:
<table>
  <thead>
    <tr>
      <th>Versión de plugin</th>
      <th>Status</th>
      <th>Versiones compatibles</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v1.4.9">v1.4.9</a></td>
      <td>Obsoleto (Versión antigua)</td>
      <td>OpenCart v1.4.9</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v1.5.x">v1.5.x</a></td>
      <td>Obsoleto (Versión antigua)</td>
      <td>OpenCart v1.5.x</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v2.x%20-%202.2">v2.x - v2.2</a></td>
      <td>Estable (Versión actual)</td>
      <td>OpenCart v2.x - v2.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mercadopago/cart-opencart/tree/master/v2.3">v2.3</a></td>
      <td>Estable (Versión actual)</td>
      <td>OpenCart v2.3</td>
    </tr>
  </tbody>
</table>

## Requisitos:

**Sistema operativo**

* Linux x86-64

**Servidor web**

* Apache 2.x
* Nginx 1.7.x

**Base de datos**

* MySQL 5.6 (Oracle o Percona)

**PHP**

* PHP 5.4.x / 5.5.x
* Extensiones requeridas: PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl

**Certificado SSL**

Es un requisito que usted tiene un certificado SSL, y el formulario de pago que se proporcionará en una página HTTPS.
Durante las pruebas del modo de prueba de seguridad, puede operar a través de HTTP, pero para la homologación necesitará adquirir el certificado en caso de que no lo tenga.

<a name="installation"></a>
## Instalación:

1. Descargar el módulo de Mercado Pago:
    * OpenCart 1.4.9
    * OpenCart 1.5.x
    * OpenCart 2.x - 2.2
    * OpenCart 2.3

2. Copie las carpetas **admin**, **catalog** y **image** a su instalación de raíz de OpenCart. Asegúrese de mantener intacta la estructura de carpetas de OpenCart.
  
**Importante**: 
  Si está utilizando OpenCart 2.x, encontrará 3 tipos diferentes de comprobación dentro de la carpeta OpenCart 2.x: Standard, Custom y Ticket. Puede utilizarlos todos juntos o individualmente, sin ningún problema o dependencia entre ellos. Cada una de estas carpetas tiene sus propias carpetas Admin, Catalog y Image y el proceso de instalación es el mismo descrito anteriormente.

<a name="configuration_custom"></a>
## Configuración de Custom

1. En la administración de su tienda, ir en **extensions > payments > Mercado Pago Custom** y haga clic en **Edit**.

  ![Cuenta de Mercado Pago](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/custom/1.gif?raw=true)

2. Establezca **PUBLIC_KEY** y **ACCESS_TOKEN** y haga las otras configuraciones de su tienda:

 ![Mercado Pago Account](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/custom/2.gif?raw=true)

3.  Configure el estado de las nofitas que desea para su tienda. Por último, haga clic en el botón Guardar. Listo! La configuración del Mercado Pago Custom para tu tienda está hecha!
  
![Mercado Pago Account](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/custom/3.gif?raw=true)


<a name="configuration_standard"></a>
## Configuración de Standard

1. En la administración de su tienda, ir en **extensions > payments > Mercado Pago Standard** y haga clic en **Edit**.

  ![Cuenta de Mercado Pago](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/standard/1.gif?raw=true)

2. Establezca **CLIENT_ID** and **CLIENT_SECRET** y haga las otras configuraciones de su tienda:

 ![Mercado Pago Account](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/standard/2.gif?raw=true)

3.  Configure el estado de las nofitas que desea para su tienda. Por último, haga clic en el botón Guardar. Listo! La configuración del Mercado Pago Custom para tu tienda está hecha!
  
![Mercado Pago Account](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/standard/3.gif?raw=true)


<a name="configuration_ticket"></a>
## Configuración de Ticket

1. En la administración de su tienda, ir en **extensions > payments > Mercado Pago Ticket** y haga clic en **Edit**.

  ![Cuenta de Mercado Pago](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/ticket/1.gif?raw=true)

2. Establezca **ACCESS_TOKEN** y haga las otras configuraciones de su tienda:

 ![Mercado Pago Account](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/ticket/2.gif?raw=true)

3.  Configure el estado de las nofitas que desea para su tienda. Por último, haga clic en el botón Guardar. Listo! La configuración del Mercado Pago Custom para tu tienda está hecha!

  
![Mercado Pago Account](https://github.com/flaviofat/devsite-mp-frontend/blob/master/plugins/modules/README.img/opencart/ticket/3.gif?raw=true)
<a name="notifications"></a>
## Notificaciones

Su tienda se sincronizará automáticamente con MercadoPago. La URL de notificación se enviará en cada pago.

<a name="Feedback"></a>
## Suporte ##

Si tiene alguna duda, problema o error tenemos un canal de atención. Envíe un correo electrónico a modulos@mercadopago.com con la siguiente información:

 * Email da su conta Mercado Pago.
 * Detalles sobre su duda, problema o error.
 * Los archivos que pueden ayudar en el entendimiento (Print-Screen, Video, Archivos de registro, etc).
 * Versión de Opencart.
 * Versión de Modulo, si se utiliza.