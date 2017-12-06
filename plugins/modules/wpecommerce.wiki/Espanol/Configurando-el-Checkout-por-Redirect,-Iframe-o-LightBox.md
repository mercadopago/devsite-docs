Esta página explicará como configurar el módulo para poder aceptar pagos con el Checkout básico en Redirect, Iframe or Lightbox. En el administrador de su tienda, ir a *Settings > Store > Payments*. Hacer click en *Mercado Pago - Basic Checkout*. Se debería obtener la siguiente página: 

[[/images/basic_config_screenshot.png|Basic Checkout]]

### Credenciales de Mercado Pago 
  * Aquí se deberían ingresar el *Client ID* y *Client ID*, las credenciales que identifican a los usuarios en MaercadoPago. 

### Opciones de checkout
Como se muestra el Checkout.
  * *Description*: Esta es la descripción de la opción de pago que se le mostrará al cliente. 
  * *Store Category*: Define la categoría de la tienda;
  * *Store Identificator*: Un prefijo para identificar tu tienda, cuando se tienen multiples tiendas para una sola cuenta de MercadoPago. ;
  * *Integration Method*: como tus clientes van a interactuar con MercadoPago para pagar sus ordenes;
  * *iFrame Width*: El ancho, en pixeles del iFrame (usar solo con iFrame);
  * *iFrame Height*: La altura, en pixels del iFrame (usar solo con iFrame);
  * *Auto Return*: Si está definido, la plataforma volverá a tu tienda cuando el pago es aprovado;
  * *URL Approved Payment*: Customizar la URL a ser redireccionado una vez que el pago es aprobado. Dejar en blanco para redireccionar a la tienda.;
  * *URL Pending Payment*: Customizar la URL a ser redireccionado cuando el pago es rechazado. Dejar en blanco para redireccionar a la tienda.

### Opciones de pago
Como se comportan las opciones de pago.
  * *Max Installments*: La máxima cantidad de cuotas permitidas para tu cliente;
  * *Currency conversion*: Habilitar el modo de conversión de moneda para ventas conCheckout Básico. La conversión de moneda es una funcionalidad que te permite definir un tipo de moneda no soportada en WP eCommerce manteniendo a MercadoPago como método de pago. Se convertirá el tipo de moneda "no soportada" por la moneda que se utiliza en tu país. Un dato a tener en cuenta es que el servicio de conversión se hace en el momento, por lo que podría traer demoras adicionales a su servidor. 
  * *Exclude Payment Methods*: Seleccionar los medios de pago que no quieres que funcionen con MercadoPago.

### Testeo y debug
Se ofrecen herramientas de logging que permiten analizar el problema que pueda llegar a estar ocurriendo. mantener deshabilitado si se está trabajando en producción con un sistema estable.
  * *Enable Sandbox*: Seleccionar esto para activar el modo de testeo de Sandbox;
  * *Debug mode*: Habilitar para ver los mensajes de log en tu consola. 
