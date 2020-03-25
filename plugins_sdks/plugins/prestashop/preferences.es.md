# Preferencias de pago


Encuentra la configuración de las preferencias de pago en la opción *Configurar* una vez que tengas instalado el módulo. Una vez dentro, activa el checkout que quieras ofrecer y configura las opciones que prefieras.

> NOTE
>
> Nota
>
> Recuerda que tenemos distintos [tipos de checkout](https://www.mercadopago.com.ar/developers/es/plugins_sdks/plugins/prestashop/introduction/#bookmark_tipos_de_checkout) que se adaptan a las necesidades de tu negocio y que cada uno tiene ajustes propios.

## Información del negocio

Ingresa el nombre del negocio para que aparezca en la factura de tus clientes y les sea más fácil reconocer el pago cuando les llegue un resumen de compras. Selecciona a qué categoría pertenecen los productos o servicios que ofrece la tienda y haz otros ajustes según tus necesidades.

![Información básica](/images/prestashop/preferences_es.jpg)

> WARNING
>
> Importante
>
> **¿Eres partner de Mercado Pago?** No olvides ingresar tu Integrator_ID, así identificamos todas tus transacciones y sabemos cuántas ventas procesa tu cuenta.

<span></span>

> NOTE
>
> Nota
>
> Todos nuestros módulos cuentan con una licencia de código abierto. ¿Quieres participar en su construcción? [Sugiere mejoras y ediciones en Github](https://github.com/mercadopago/cart-prestashop-7).

## Configuración básica

* Define la experiencia que tendrán tus clientes:
 * Usa el **Checkout de Mercado Pago** para soportar pagos con tarjetas, en efectivo y dinero en cuenta. Le brindará seguridad y comodidad al usuario. ¡Y ahora también podrás configurarlo como modal para que se abra en tu tienda!
 * Usa el Checkout Personalizado y el Ticket Checkout para tener control sobre otras configuraciones. Activa los dos para ofrecer todos los medios de pago.

> WARNING
>
> Importante
>
> Si bien puedes activar todos los checkouts, te recomendamos seleccionar solo una de las experiencias para no confundir a tus clientes.

* Elige los [medios de pago disponibles](https://www.mercadopago.com.ar/developers/es/guides/localization/payment-methods/) para tus clientes según el país en el que operes y el tipo de checkout que estés configurando. 

* Establece el máximo de cuotas en el que podrán pagarte.

* Indica el vencimiento de los pagos presenciales (solo en Ticket Checkout).

## Configuración avanzada

Tendrás distintos ajustes disponibles según el tipo de checkout que actives en tu tienda. Personaliza la experiencia de compra con los ajustes avanzados que correspondan a cada uno.

### Ajustes comunes a todos los checkouts

| Configuración | Descripción                                                               	                |
|---------------|-----------------------------------------------------------------------------------------------|
| Modo binario  | Activa esta opción cuando no quieras dejar pagos en estado pendiente o en revisión. Con el modo binario los pagos se aceptarán o rechazarán de forma automática.|

> WARNING
>
> Importante
>
> Activar el modo binario puede afectar a la prevención de fraude. Déjalo inactivo para que podamos cuidar tus cobros.

### Checkout Mercado Pago

| Configuración                   | Descripción                                                              	                                   |
|---------------------------------|----------------------------------------------------------------------------------------------------------------|
| Volver a la tienda              | Cuando elijas redirect, siempre tendrás la opción de hacer que tus clientes vuelvan o no a tu tienda una vez finalizado el pago.|
| Guarda las preferencias de pago | Cuando el usuario accede a nuestro checkout, generamos un link de pago con la información de esa compra. Aquí puedes configurar el tiempo en que guardamos esa preferencia. |

Elige qué experiencia de compra tendrán tus clientes a la hora de pagar: 

| Experiencia de pago           | Características                                                              	                                 |
|-------------------------------|----------------------------------------------------------------------------------------------------------------|
| Redirect     	                | Tus clientes serán redirigidos a una página de Mercado Pago con el formulario de pagos para terminar la compra.|
| Modal **(NUEVO)**               | Tus clientes accederán al formulario de pagos de Mercado Pago sin salir de tu tienda. Si lo desactivas, serán redirigidos a otra página. |

> NOTE
>
> Nota
>
> Consulta la [documentación del Checkout Mercado Pago](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/introduction/) para conocer mejor todas sus características y funcionalidades.

### Checkout Personalizado

| Configuración                   | Descripción                                                                      |
|---------------------------------|----------------------------------------------------------------------------------|
| Descuento por compra            | Ofrece un descuento especial para alentar a que tus clientes realicen la compra. |

### Último paso

> LEFT_BUTTON_REQUIRED_ES
>
> Prueba y recibe pagos
>
> Pon a prueba el módulo y verifica que todo funcione bien para empezar a recibir el dinero de tus ventas en Mercado Pago.
>
>
> [Recibir pagos](https://www.mercadopago.com.ar/developers/es/plugins_sdks/plugins/prestashop/receive-payments/)