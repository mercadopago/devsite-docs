Esta página explica como configurar el módulo para aceptar pagos con tarjeta de crédito en el Checkout personalizado. En el administrador de tu tienda, ir a *Configuración > Tienda > Pagos*. Hacer click en *Mercado Pago - Checkout personalizado*. Deberías obtener la siguiente página: 

[[/images/custom_config_screenshot.png|Configuración de checkout personalizado]]

### Credenciales de Mercado Pago
  * Aquí se deberían ingresar la *Public Key* y *Access Token* correspondientes. Las credenciales son las que identifican al usuario en Mercado Pago. 

### Opciones de checkout
Cómo se muestra el checkout.
  * *Statement Descriptor*: La descripción se mostrará en el invoice de su cliente;
  * *Modo binario*: Cuando se cobra con tarjeta de crédito, sólo estado [aprobado] o [rechazado] será tomado;
  * *Categoría de tienda*: Define la categoría de la tienda;
  * Identificador de tienda*: Un prefijo para identificar la tienda, cuando se tiene multiples tiendas para una sola cuenta de Mercado Pago;
  * *URL Pagos aprobados*: Customizar una URL para redireccionar cuando un pago es aprobado. Dejar en blanco para redireccionar a la tienda;
  * *URL Pagos pendientes*: Customizar una URL para redireccionar cuando un pago es rechazado. Dejar en blanco para redireccionar a la tienda;

### Opciones de pago
Como se comporta la opción de pago. 
  * *Conversión de moneda*: Habilitar la conversión de la moneda para las ventas con checkout básico. La conversión de la moneda es una funcionalidad que permite setear una moneda no soportada en WP eCommerce mientras se mantiene a Mercado Pago como un método de pago. Se convertirá la moneda no soportada por la moneda establecida en el país local. Este servicio convierte valores en el momento y puede traer demoras en el servidor. 

### Testeo y debug
Se ofrecen herramientas de logging para que se puedan analizar los problemas que puedan estar ocurriendo. Mantener deshabilitado si se está trabajando en producción con un sistema estable.
  * *Habilitar Sandbox*: Habilitar esta opción para activar el modo Sandbox;
  * *Modo Debug*: Habilitar esta opción para ver mensajes de log en tu consola. 