# OpenCart

#### Mercado Pago Module (Opencart v1.4.9, 1.5.x, 2.x - 2.2, 2.3, 3.x)

## Funcionalidades

El módulo de Mercado Pago para Opencart tiene las siguientes funcionalidades:

| Funcionalidades                                           | Checkout Básico   | Checkout Transparente   |
|---------------------------------------------------------- |-------------------|-------------------------|
| Pago con tarjeta de crédito                               | ✔                 | ✔                       |
| Otros medios de pago                                      | ✔                 | ✔                       |
| Interfaz provista por Mercado Pago                        | ✔                 |                         |
| Calculadora de cuotas                                     | ✔                 | ✔                       |
| IPN y webhooks                                            | ✔                 | ✔                       |
| Descuentos con cupones de Mercado Pago                    | ✔                 |                         |
| Log y herramientas de debug                               | ✔                 | ✔                       |
| Conversión de moneda                                      |                   | ✔                       |
| Status de credenciales y de la plataforma                 | ✔                 | ✔                       |


### El checkout para tu negocio:

Mercado Pago ofrece dos métodos de checkout que facilitan el procesamiento de pagos en tu tienda online:

**Checkout Básico**

Ideal para vendedores que buscan rapidez y agilidad en la integración. Sus principales características son:

* Fácil de integrar en la tienda, no es necesario programar.
* Control limitado de la experiencia de compra - muestra la ventana de checkout como redirección, modal o iframe.
* Almacene la tarjeta del comprador para mejorar la experiencia de compra.
* Acepta otros medios de pago como boletos, además de tarjetas.
* Acepta los cupones de descuento de Mercado Pago.

*Disponible para Argentina, Brasil, Chile, Colômbia, México, Peru e Uruguai*

**Checkout Transparente**

Ofrezca un checkout personalizado a su experiencia de marca con nuestra API de pagos simple de usar:

* Integración perfecta - no es necesario codificar, a menos que usted quiera.
* Control total de la experiencia de pago.
* Almacene la tarjeta del comprador para mejorar la experiencia de compra.
* Acepta otros medios de pago como boletos, además de tarjetas.
* Mejore la tasa de conversión.

* Disponible para Argentina, Brasil, Colombia, México e Perú *


## Requisitos

| Requisito                 | Detalle                                                       |
|---------------------------|---------------------------------------------------------------|
| Sistema Operativo         | Linux x86-64                                                  |
| Servidor Web              | Apache 2.x, Nginx 1.7.x                                       |
| Base de Datos             | MySQL 5.6 (Oracle or Percona)                                 |
| Versión de PHP            | PHP 5.4.x / 5.5.x                                             |
| Extensiones               | PDO_MySQL, simplexml, mcrypt, hash, GD, DOM, iconv, curl      |
| SSL                       | SSL es necesario para el procesamiento de tarjetas de crédito |

>Es un requisito que cuentes con un certificado SSL y que el formulario de pago que sea servido bajo HTTPS. Durante las pruebas en modo sandbox usted puede operar vía HTTP, pero para la homologación usted necesitará adquirir el certificado si no lo tiene.


## Versiones

| Versión del plugin                                                                          | Status                    | Versiones Compatibles   |
|-----------------------------------------------------------------------------------------|---------------------------|-----------------------|
| [v1.4.9](https://github.com/mercadopago/cart-opencart/tree/master/v1.4.9)               | Deprecada (Old Versión)  | OpenCart v1.4.9       |
| [v1.5.x](https://github.com/mercadopago/cart-opencart/tree/master/v1.5.x)               | Deprecada (Old Versión)  | OpenCart v1.5.x       |
| [v2.x - v2.2](https://github.com/mercadopago/cart-opencart/tree/master/v2.x%20-%202.2)  | Deprecada (Old Versión)  | OpenCart v2.x - v2.2  |
| [v2.3](https://github.com/mercadopago/cart-opencart-2/archive/master.zip)                                  | Estable (Current Versión)  | OpenCart v2.3     |
| [v3.x](https://github.com/mercadopago/cart-opencart-3/archive/master.zip/archive/master.zip)                                  | Estable (Current Versión)  | OpenCart v3.x     |


## Instalación

1. Descargue el módulo de Mercado Pago

  * [OpenCart 2.3](https://github.com/mercadopago/cart-opencart-2/archive/master.zip)
  * [OpenCart 3.x](https://github.com/mercadopago/cart-opencart-3/archive/master.zip)

2. Copie las carpetas **admin**, **catalog** y **image** a la raíz de su instalación de OpenCart. Asegúrese de mantener la estructura de carpetas OpenCart intactas.

> **Importante**: Si está utilizando OpenCart 2.0, usted encontrará 3 tipos diferentes de checkout dentro de la carpeta OpenCart 2.x: Standard, Custom y Ticket. Usted puede utilizarlas juntas o individualmente, sin ningún problema o dependencia entre ellas. Cada una de estas carpetas tiene sus propias carpetas Admin, Catalog e Image y el proceso de instalación es el mismo descrito anteriormente.

3. En el panel administrativo de su tienda, vaya a **extensions> payments> MercadoPago** y haga clic en **Install**.


## Configuración

1. De nuevo en **Extensions> Payments> MercadoPago**, haga clic en **Edit** para configurar su cuenta de Mercado Pago:

 [Open cart configuration page] (https://raw.github.com/brunocodeman/cart-opencart/master/README.img/MPAccount.png)

2. Configure su **CLIENT_ID** y **CLIENT_SECRET**, o **PUBLIC_KEY** y **ACCESS_TOKEN** (dependiendo de qué módulo está utilizando). [Obtenga sus credenciales] ([FAKER][CREDENTIALS][URL]).

3. Si está utilizando **Checkout Transparente** o **Checkout Básico**, seleccione el país relacionado con su cuenta de ** MercadoPago **. Si está utilizando **Ticket Checkout**, no es necesario configurar el país.

4. Otras configuraciones generales:

  * **Category of your store**: Configura la categoría de tu tienda.
  * **Choose the status of approved orders**: Establece el estado de la orden cuando se aprueban los pagos.
  * **Choose the status of refunded orders**:  Establece el estado de la orden cuando se devuelven los pagos.
  * **Choose the status when payment is pending**: Establece el estado de la orden cuando el pago queda pendiente.
  * **Choose the status when client open a mediation**: Establece el estado de la orden cuando el cliente inicia una mediación.
  * **Choose the status when payment was reject**: Establece el estado de la orden cuando se rechaza un pago.
  * **Choose the status when payment was canceled**: Establece el estado de la orden cuando se canelan los pagos.
  * **Choose the status when payment was chargeback**:Establece el estado de la orden cuando se devuelven los pagos.
  * **Logs**: Habilita/desabilita logs.
  * **Debug Mode**: Si está habilitado, muestra la respuesta cruda de la API en lugar de un mensaje amigable.
  * **Enabled**: Habilita/desabilita esta solución de pago.
  * **Type Checkout (you're using Standard Checkout)**: Define los tipos de checkout, las opciones son:
  * *Iframe*: Abre una URL de OpenCart con el iframe como contenido.
  * *Redirect*: Redirecciona la URL del Mercado Pago.
  * *Lightbox*: Similar a la opción de Iframe pero abre una lightbox en lugar de un iframe.


## Notificaciones

Su tienda se sincronizará automáticamente con MercadoPago. La URL de notificación se enviará en cada pago.


### Actualización

Siga los mismos pasos que para [instalar el módulo](##bookmark_instalación).
