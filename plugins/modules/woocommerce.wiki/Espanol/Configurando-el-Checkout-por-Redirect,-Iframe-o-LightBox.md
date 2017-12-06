En esta página se explica cómo configurar el módulo para aceptar pagos con el Checkout Básico en Redireccionamiento, Iframe o Lightbox. En la administración de su tienda, vaya a la ficha *WooCommerce > Configuración > Checkout*. En *Opciones de Checkout*, haga clic en *Mercado Pago - Checkout Básico*. Usted debe obtener la siguiente página:

[[/images/wiki3/basic_checkout_config.png|Checkout Básico]]

Si ha configurado correctamente sus credenciales en <a href="https://github.com/mercadopago/cart-woocommerce/wiki/Configuraciones-Generales-de-Mercado-Pago">Configuraciones Generales de Mercado Pago</a>, puede ahora personalizar su checkout por Checkout Básico:

### Interface de Checkout
Cómo se muestra el pago.
  * *Título*: Este es el título de la opción de pago que se mostrará a sus clientes;
  * *Descripción*: Esta es la descripción de la opción de pago que se mostrará a sus clientes.
  * *Medio de Integración*: Cómo sus clientes interactúan con Mercado Pago para pagar sus pedidos;
  * *Ancho del iFrame*: El ancho, en píxeles, del iFrame (utilizado sólo con el Medio de Integración de iFrame);
  * *Altura del iFrame*: La altura, en píxeles, del iFrame (utilizado sólo con el Medio de Integración de iFrame).

### Navegación del Checkout
Cómo se comportarán las navegaciones de pago.
  * *Retorno Automático*: Si habilitado, la plataforma volverá a su tienda cuando se apruebe el pago;
  * *URL de Éxito*: Personaliza una URL que se redirigirá cuando se apruebe un pago. Deje en blanco para redirigir a la tienda;
  * *URL de Error*: Personaliza una URL para ser redirigida cuando un pago ha fallado. Deje en blanco para redirigir a la tienda;
  * *URL para Pendiente*: Personaliza una URL para ser redirigida cuando hay un pago pendiente. Deje en blanco para redirigir a la tienda.

### Opciones de Pago
Cómo se comporta la opción de pago.
  * *Cuota Maxima*: Lo máximo de cuotas permitidas para sus clientes;
  * *Excluir Medios de Pago*: Seleccione los medios de pago que desea no trabajar con Mercado Pago;
  * *Descuento por Gateway*: Ofrece un descuento porcentual para sus clientes si utilizan Checkout Básico como medio de pago;
  * *Modo de Dos Tarjetas*: Permite que sus clientes paguen con dos tarjetas diferentes.