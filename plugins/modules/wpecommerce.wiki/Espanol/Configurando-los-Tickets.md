Esta página explicará como configurar el módulo para poder aceptar pagos con Tickets en el Checkout personalizado. En el administrador de su tienda, ir a *Settings > Store > Payments*. Hacer click en *Mercado Pago - Ticket*. Se debería obtener la siguiente página: 

[[/images/ticket_config_screenshot.png|Ticket Checkout Config]]

### Credenciales de Mercado Pago 
  * Aquí se debería ingresar el *Access Token*, la credenciales que identifica a los usuarios en MaercadoPago. 

### Opciones de checkout
Como se muestra el Checkout.
  * *Store Category*: Define la categoría de la tienda;
  * *Store Identificator*: Un prefijo para identificar tu tienda, cuando se tienen multiples tiendas para una sola cuenta de MercadoPago. ;
  * *URL Approved Payment*: Customizar la URL a ser redireccionado una vez que el pago es aprobado. Dejar en blanco para redireccionar a la tienda.;
  * *URL Pending Payment*: Customizar la URL a ser redireccionado cuando el pago es rechazado. Dejar en blanco para redireccionar a la tienda.

### Opciones de pago
Como se comportan las opciones de pago.
  * *Currency conversion*: Habilitar el modo de conversión de moneda para ventas conCheckout Básico. La conversión de moneda es una funcionalidad que te permite definir un tipo de moneda no soportada en WP eCommerce manteniendo a MercadoPago como método de pago. Se convertirá el tipo de moneda "no soportada" por la moneda que se utiliza en tu país. Un dato a tener en cuenta es que el servicio de conversión se hace en el momento, por lo que podría traer demoras adicionales a su servidor. 

### Testeo y debug
Se ofrecen herramientas de logging que permiten analizar el problema que pueda llegar a estar ocurriendo. mantener deshabilitado si se está trabajando en producción con un sistema estable. 
  * *Debug mode*: Habilitar para ver los mensajes de log en tu consola. 