---
sites_supported:
  - mla
  - mlb
  - mco
  - mlu
  - mlm
  - mlc
---

# Preferencias de pago
<br/>

Encuentra la configuración de las preferencias de pago en los 'Ajustes de WooCommerce' una vez que tengas instalado el módulo. Una vez dentro, ve a la sección 'Payments', activa el checkout que quieras ofrecer y configura las opciones que prefieras para tu pasarela de compra.

> NOTE
>
> Nota
>
> Recuerda que tenemos distintos [tipos de checkout]() que se adaptan a las necesidades de tu negocio y que cada uno tiene ajustes propios.

## Información del negocio

Ingresa el **nombre del negocio** para que aparezca en la factura de tus clientes y les sea más fácil reconocer el pago cuando les llegue un resumen de compras. Selecciona a qué **categoría** pertenecen los productos o servicios que ofrece la tienda y haz otros ajustes según tus necesidades.

![Información básica](/images/woocomerce/es_info_basica.png)

> WARNING
>
> Importante
>
> **¿Eres partner de Mercado Pago?** No olvides ingresar tu Sponsor_ID, así identificamos todas tus transacciones y sabemos cuántas ventas procesa tu cuenta.

## Configuración básica

Activa el checkout que quieras ofrecer a tus clientes según tus preferencias y elige los medios de pago con los que podrán hacer la compra.

1) Activa un tipo de checkout

 * Usa Smart checkout para soportar pagos con tarjetas, en efectivo y dinero en cuenta de Mercado Pago.
 * Usa el Checkout Personalizado para tener control sobre otras configuraciones.

> WARNING
>
> Importante
>
> Ten en cuenta que el [Smart Checkout](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/introduction) es excluyente del Checkout Personalizado y viceversa. Puedes usar los dos checkout personalizados a la vez para ofrecer todos los medios de pago.

2) Elige los [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/) para tus clientes según el país en el que operes y el tipo de checkout que estés configurando. 

3) Establece el máximo de cuotas en el que podrán pagarte.

4) Activa la conversión de moneda con la que tienes en Mercado Pago.

> NOTE
>
> Nota
>
> La opción de activar la conversión de moneda está disponible solo en el checkout personalizado. El Smart Checkout hace la conversión de forma automática.

## Configuración avanzada

Tendrás distintos ajustes disponibles según el tipo de checkout que actives en tu tienda. Personaliza la experiencia de compra con los ajustes avanzados que correspondan a cada uno. 

### Ajustes comunes a todos los checkout

| Configuración                 | Descripción                                                               	                |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| Modo binario     	            | Activa esta opción cuando no quieras dejar pagos en estado pendiente o en revisión. Con el modo binario los pagos se aceptarán o rechazarán de forma automática.|
| Modelo Gateway               	| Si operas con el [modelo gateway](https://www.mercadopago.com.ar/developers/es/guides/gateway/general-considerations/introduction/) como procesador de pagos y tienes tus propios números de comercio puedes configurar descuentos y comisiones a tus clientes por pagar con Mercado Pago.|

### Smart Checkout

#### Experiencias de pago en Smart checkout

Elige qué experiencia de compra tendrán tus clientes a la hora de pagar: 

| Experiencia de pago           | Características                                                              	                                 |
|-------------------------------|----------------------------------------------------------------------------------------------------------------|
| Redirect     	                | Tus clientes serán redirigidos a una página de Mercado Pago con el formulario de pagos para terminar la compra.|
| Modal                       	| Tus clientes accederán al formulario de pagos de Mercado Pago sin salir de tu tienda.                          |

> NOTE
>
> Nota
>
> Consulta la [documentación del Smart Checkout](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/introduction/) para conocer mejor todas sus características y funcionalidades.

| Configuración                 | Descripción                                                               	                  |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| Volver a la tienda     	      | Cuando elijas redirect, siempre tendrás la opción de hacer que tus clientes vuelvan o no a tu tienda una vez finalizado el pago.|
| URLs configurables          	| De éxito, pago rechazado, pago pendiente.|

### Checkout Personalizado

#### Pagos con tarjeta

| Configuración                 | Descripción                                                                 	                |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| Cupon de descuento     	      | Activa esta opción cuando quieras ofrecer descuentos a tus clientes. Aparecerá un campo en el formulario donde podrán ingresar su cupón.|

#### Pagos presenciales

| Configuración                 | Descripción                                                                 	                |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| Cupon de descuento     	      | Activa esta opción cuando quieras ofrecer descuentos a tus clientes. Aparecerá un campo en el formulario donde podrán ingresar su cupón.|
| Reducir inventario     	      | Activa esta opción cuando quieras automatizar la reducción del inventario por cada orden de compra que se aprueba tras un pago con Mercado Pago.|

---

### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Prueba y recibe pagos
>
> Pon a prueba el módulo y verifica que todo funcione bien para empezar a recibir el dinero de tus ventas en Mercado Pago.
>
>
> [Recibir pagos](http://www.mercadopago.com.ar/mla/es/plugins_sdks/plugins/woocommerce/receive-payments/)