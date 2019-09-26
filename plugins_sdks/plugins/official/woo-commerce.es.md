# WooCommerce

### Mercado Pago Module (WooCommerce 3.x)

## Introducción

El módulo de Mercado Pago para WooCommerce te permite ampliar las funcionalidades de tu tienda online y ofrecer una experiencia de pago única para tus clientes.

Si ya utilizas WooCommerce para crear sitios e-commerce en WordPress, uno de los gestores de contenidos más populares a nivel mundial, puedes contar con nuestro módulo para sumar un procesador de pagos de confianza en tu página web o la de tus clientes.

> Lleva tus ventas a otro nivel con el procesador de pagos para WooCommerce de Mercado Pago, listo para usar en tu tienda online.

Piensa en grande. Instala nuestra pasarela de pagos en WooCommerce y lleva tus ventas a otro nivel con la mejor experiencia de compra:

* Haz **promociones** y vende en cuotas con la mejor **financiación** posible
* **Medios de pago** principales de cada país en el que operamos
* **Compra con un clic:** recordamos los datos de tus clientes, ellos solo ingresan el código de seguridad de su tarjeta
* **Pago como invitado:** no excluimos a nadie, no hace falta que tus clientes abran una cuenta en Mercado Pago
* **Devolución** de pagos
* **Cancelación** de pagos pendientes
* Rechaza o acepta pagos **de forma automática**
* Cuenta con el **soporte oficial** de Mercado Pago

> **¿Eres desarrollador?** Esta guía también está pensada para que hagas más rápido tu trabajo de instalación, integración y configuración de nuestro módulo en las plataformas de e-commerce más reconocidas a nivel mundial.

Conoce las opciones de pago que desarrollamos para cubrir las necesidades de tu negocio:

| Checkout básico                                                                    | Checkout de pagos con tarjeta                             | Checkout de pagos presenciales           |
|------------------------------------------------------------------------------------|-----------------------------------------------------------|------------------------------------------|
| Ofrece todos los medios de pago.                                                   | Ofrece pagos con tarjetas de débito y crédito.            | Ofrece pagos en efectivo.                |
| Experiencia de pago en el sitio de Mercado Pago.                                   | Experiencia de pago dentro de tu tienda.                  | Experiencia de pago dentro de tu tienda. |
| Tus clientes pueden pagar como invitados o ingresando a su cuenta de Mercado Pago. | Tus clientes pagan como invitados sin salir de tu tienda. | Tus clientes pagan como invitados sin salir de tu tienda. |



## Requisitos de instalación

|                             	| Detalle                                                                  	|
|-------------------------------|---------------------------------------------------------------------------|
| Versiones soportadas        	| WordPress 3.1.x - 4.9.x, WooCommerce 2.6.x - 3.4.x                       	|
| Ambiente                    	| LAMP (Linux, Apache, MySQL y PHP)                                        	|
| Sistema                     	| Linux x86, x86-64                                                        	|
| Servidor Web                	| Apache 2.x                                                               	|
| Version PHP                 	| 5.6 o superior con soporte a curl                                        	|
| Base de datos               	| MySql 5.6 o superior, MariaDB 10.0 o superior                            	|
| Dependencias de extensiones 	| WooComerce                                                               	|
| Configuración adicional     	| safe_mode off, memory_limit mayor que 256 MB                             	|
| SSL                         	| Certificado SSL es pre requisito para usar tarjetas de crédito o boletos 	|

> Es un requisito tener un certificado SSL y el formulario de pago que servido en una página HTTPS. Durante las pruebas en modo sandbox usted puede operar vía HTTP, pero para la homologación usted necesitará adquirir el certificado si no lo tiene.


## Instalación

Puedes instalar Mercado Pago en WordPress de dos formas:

1. De forma automática, desde la sección "Plugins" de WordPress
  * Sigue estos pasos para la instalación:
    * Ve a "Añadir nuevo" y busca "WooCommerce Mercado Pago" entre la oferta de módulos de WordPress.
    * Haz clic en Instalar y luego búscalo en la sección "Plugins Instalados".
    * Actívalo para empezar a configurar el módulo en tu tienda.
    * ¡Y listo!

2. De forma manual
  * Instala el módulo siguiendo estos pasos:
    * Descarga el archivo [.zip](https://github.com/mercadopago/cart-woocommerce/archive/master.zip) ahora o desde el [directorio](https://br.wordpress.org/plugins/woocommerce-mercadopago/) de módulos de WordPress
    * Descomprime la carpeta y cambia el nombre a "woocommerce-mercadopago"
    * Copia el archivo "woocommerce-mercadopago" en tu directorio de WordPress, dentro de la carpeta "Plugins"
    * ¡Y listo!

Si lo instalaste correctamente, lo verás en escritorio de WordPress, dentro de "Plugins instalados". Actívalo y pasemos a la integración de tu cuenta y los pasos de configuración.


## Integración

Sigue estos pasos para integrar tu cuenta de Mercado Pago con el módulo y recibir los cobros de tus ventas:

1. Crea una [cuenta vendedor](https://www.mercadopago.com.ar/registration-company?confirmation_url=https%3A%2F%2Fwww.mercadopago.com.ar%2Fcomo-cobrar) en Mercado Pago si todavía no tienes una.
2. Obtén tus [credenciales](https://www.mercadopago.com.ar/developers/es/guides/localization/credentials), son las claves que te identifican de forma única dentro de la plataforma. Pégalas en los campos correspondientes para integrar el módulo con tu cuenta.
3. Configura las preferencias de pago del checkout que quieras ofrecer y haz otros ajustes avanzados si quieres cambiar las opciones que vienen por defecto.
4. Homologa tu cuenta para [ir a Producción](https://www.mercadopago.com.ar/developers/es/guides/payments/api/goto-production/) y recibir pagos reales.


## Configuración del módulo

Ingresa información básica de tu negocio para empezar a configurar el módulo:

* Escribe el nombre de tu tienda, aparecerá en las facturas que enviemos a tus clientes por cada compra.
* Selecciona a qué categoría pertenecen tus productos.
* Carga un número o un prefijo para identificar pedidos y pagos de tu tienda.

> **Avanzado:** Edita ajustes avanzados cuando quieras configurar las [notificaciones IPN](https://www.mercadopago.com.ar/developers/es/guides/notifications/ipn/) y registra la información sobre las operaciones entre WooCommerce y Mercado Pago en nuestros archivos de cambio con los modos debug y log. Si eres quien integra el módulo, esto te será útil si hay problemas en los pagos con Mercado Pago.


## Recibir pagos

Pon en forma los checkout que quieras usar para ofrecer nuestras opciones de pago en la pasarela de compra.

Cuando actives el plugin, la plataforma te llevará a los Ajustes de WooCommerce y, de allí, a la sección "Payments", donde tendrás a mano los tipos de checkout que ofrecemos para tu tienda online: Checkout Básico, Checkout Personalizado para pagos online y Checkout Personalizado para pagos en efectivo.

![Checkouts Mercado Pago](/images/woocommerce/es_woo_payments.png)

El checkout básico y el checkout personalizado son excluyentes entre sí. Por eso, si usas el checkout básico no podrás usar las opciones personalizadas y viceversa.

Deberás tomar una decisión para activar las distintas experiencias de compra:

* ¿Quieres ofrecer **todos los medios de pago** de una forma preestablecida? Activa y configura el checkout básico.
* ¿Quieres permitir **solo pagos en efectivo?** Activa el checkout personalizado de pagos en efectivo.
* ¿Permitirás **pagos con tarjeta de débito y crédito** a tu medida? Activa el checkout personalizado de pagos online.
* ¿Quieres ofrecer **todos los medios de pago de una forma personalizada?** Activa tanto el checkout personalizado para pagos online y el checkout personalizado para pagos en efectivo.

Ahora revisa las opciones que todos los checkout tienen en común y configura cada campo, abajo vas a encontrar el detalle de cada uno:

|           |                                  | Checkout Básico para todos los medios de pago | Checkout Personalizado para pagos online | Checkout Personalizado para pagos en efectivo |
|-----------|----------------------------------|-----------------------------------------------|------------------------------------------|-----------------------------------------------|
| Básicas   | Activar CHO                      | ✔                                             | ✔                                        | ✔                                             |
|           | Medios de pago On                | ✔                                             | ✔                                        |                                               |
|           | Medios de pago Off               | ✔                                             |                                          | ✔                                             |
|           | Máximo de cuotas                 | ✔                                             | ✔                                        | ✔                                             |
|           | Días de caducidaded              |                                               |                                          | ✔                                             |
| Avanzadas | Experiencia de pago redirect     | ✔                                             |                                          |                                               |
|           | Experiencia de pago modal        | ✔                                             |                                          |                                               |
|           | Cupones de descuentos            | ✔                                             | ✔                                        | ✔                                             |
|           | Volver a la tienda               | ✔                                             |                                          |                                               |
|           | Reducir inventario               |                                               |                                          | ✔                                             |
|           | URL de éxito                     | ✔                                             |                                          |                                               |
|           | URL de pago rechazado            | ✔                                             |                                          |                                               |
|           | URL de pago pendiente            | ✔                                             |                                          |                                               |
|           | Modo binario                     | ✔                                             | ✔                                        | ✔                                             |
|           | Descuentos por compra con **MP** | ✔                                             | ✔                                        | ✔                                             |
|           | Comision por compra con **MP**   | ✔                                             | ✔                                        | ✔                                             |


#### **1. Configuración básica**

Activa el checkout cuando quieras usarlo como opción de pago en tu tienda online, selecciona los medios de pago disponibles para tus clientes y define el máximo de cuotas en el que podrán pagarte.

![Configuración básica](/images/woocommerce/es_woo_basico.png)

Como habrás visto en el cuadro comparativo, los checkout tienen algunas configuraciones avanzadas en común y otras configuraciones propias de lo que cada uno ofrece:

- Opciones por compra con MP

  - Podrás configurar descuentos y comisiones para tus compradores cada vez que paguen con Mercado Pago en tu tienda online.

 ![Descuento y comisiones](/images/woocommerce/es_woo_comdesc.png)

- Modo binario

  - Algunos comercios, por su lógica de negocio, pueden necesitar de un proceso instantáneo de aprobación o rechazo de pagos en la experiencia de compra, es decir, evitar la instancia de pagos pendientes.
  - Para operar de esa forma, puedes habilitar el **modo binario** en los ajustes avanzados y, así, definir la aprobación o el rechazo de cada pago al instante. Si deshabilitas el modo binario podrás llegar a tener cobros pendientes que estemos analizando con nuestra herramienta de prevención de fraude.

Revisa los ajustes avanzados propios de cada checkout para no dejarte nada en el camino:

Checkout básico para todos los medios de pago

1. Experiencia de pago
  - Define cómo será la experiencia de pago que tendrán tus clientes: si saldrán o no de tu sitio para pagar. ‘Redirect’ los sacará de tu tienda para que paguen en nuestra pasarela de pagos. La opción Modal abrirá el formulario de pago dentro de tu tienda online, sin salir de ella para terminar el proceso de compra.

2. Volver a la tienda
  - Aquí podrás elegir si quieres que tus compradores vuelvan a tu tienda. Si es así, los llevaremos directamente una vez terminado el pago.

3. URLs configurables solo en el checkout básico
  - de éxito: informa a tus compradores cada vez que un pago sea aprobado llevándolos a una página que comunique el resultado. Es una buena práctica ya que así le darás confianza sobre la operación que acaba de hacer. La URL que ingreses en este campo cumplirá esa función.
  - de pago rechazado: igual que el punto anterior, pero para cuando las cosas no salen del todo bien. Crea una página que sirva para informar a tus compradores cuando un pago es rechazado y cuéntale qué pasos puede seguir en adelante. En este campo podrás insertarla.
  - de pago pendiente: ingresa la URL de una página en la que cuentes a tus compradores que tienen un pago pendiente y lo significa: que el pago aún no está confirmado. Mejorarás la experiencia de compra siempre que des la información correcta y des a tus compradores conocimiento sobre el proceso.

Checkout personalizado para pagos con tarjetas de débito y crédito

* Cupones de descuento
  - Algunos comercios pueden querer trabajar con cupones de descuento. Si es tu caso, activa de forma simple esta opción seleccionando ‘Sí’ en el campo de configuración:

![Descuento Mercado Pago en el checkout](/images/woocommerce/es_woo_cupon.png)

Checkout personalizado para pagos en efectivo

* Reducir inventario
  - Activa esta opción para reducir tu stock durante la creación de un pedido, independientemente de si el cliente termina o no la compra. Desactiva esta opción para reducirlo solo cuando estén aprobados los pagos


#### **2. Prueba el módulo**

Haz pruebas hasta asegurarte que todo funciona bien.

* Simula pagos como si fueras uno de tus clientes comprando en el sitio.
* Asegúrate de que el flujo funcione correctamente y sea fácil de usar.
* ¿Ves que todo va bien? Desactiva el modo pruebas y ¡empieza a recibir pagos reales!

Podrás activar o desactivar este modo desde aquí:

![Modo Sandbox](/images/woocommerce/es_woo_sandbox.png)

> Por defecto, desactivamos Producción. Activa Producción cuando tengas la cuenta homologada y hayas comprobado que tanto el flujo de compra como la recepción de los pagos de prueba funcionan bien.

#### **3. Ir a producción (‘Go live!’)**

Activa el modo Producción solo cuando estés listo para vender. Podrás hacerlo desde aquí:

![Modo Producción](/images/woocommerce/es_woo_produccion.png)

Antes de salir a cobrar, necesitamos que pases por el proceso de homologación. En él te pediremos que completes un formulario con información relacionada a tu negocio.

> Consulta los [requisitos para ir a producción](https://www.mercadopago.com.ar/developers/es/guides/payments/api/goto-production/).

¿Ya lo hiciste? Entonces podrás activar ‘Producción’ desde el panel de configuración de Mercado Pago.

**¡Y listo!** Ahora podrás maximizar tu conversión o la de tus clientes con la experiencia de compra online de Mercado Pago.
