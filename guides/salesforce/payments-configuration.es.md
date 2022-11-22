# Configurar los medios de pago

Para comenzar a recibir pagos con tarjetas de crédito o débito----[mlb]---- y Pix------------, sigue los pasos que se describen a continuación.

## Activar los medios de pago

A continuación, te explicamos cómo activar cada medio de pago en tu tienda Salesforce.

### Checkout Pro

Checkout Pro es una solución que permite a tus clientes realizar compras a través del formulario web de Mercado Pago. Al pagar con Checkout Pro, el comprador es dirigido a una página de Mercado Pago donde completará la transacción de manera segura y rápida y podrá pagar con los principales métodos de pago disponibles actualmente.

1. Dentro de tu tienda Salesforce Commerce Cloud, ve al menú **Merchant Tools** y haz clic en la opción **Payment Methods** que se encuentra dentro del grupo de opciones Ordering. También puedes encontrar la opción utilizando el buscador del menú.
2. Para activar el medio de pago, posiciónate sobre la opción **Checkout Pro**. Luego, en la columna "Enabled" y selecciona la opción **Yes** para habilitarlo.

----[mlb]----
### Pix

> WARNING
>
> Importante
>
> Para ofrecer pagos con Pix es necesario asegurarse de que las claves Pix han sido creadas. Si aún no las creaste, [haz clic aquí](https://www.youtube.com/watch?v=60tApKYVnkA) y consulta el paso a paso.

1. Dentro de tu tienda Salesforce Commerce Cloud, ve al menú **Merchant Tools** y haz clic en la opción **Payment Methods** que se encuentra dentro del grupo de opciones Ordering. También puedes encontrar la opción utilizando el buscador del menú.
2. Para activar el medio de pago Pix, posiciónate sobre la opción **PIX**. Luego, en la columna "Enabled" y selecciona la opción **Yes** para habilitarlo.
------------

### Tarjetas de crédito o débito

1. Dentro de tu tienda Salesforce Commerce Cloud, ve al menú **Merchant Tools** y haz clic en la opción **Payment Methods** que se encuentra dentro del grupo de opciones Ordering. También puedes encontrar la opción utilizando el buscador del menú.
2. Para activar el medio de pago de tarjeta de crédito o débito, posiciónate sobre la opción **CREDIT_CARD**. Luego, en la columna "Enabled" y selecciona la opción **Yes** para habilitarlo.

## Elegir la ubicación de los medios de pago

Por defecto, el cartucho de Mercado Pago mostrará primero el medio de pago Pix y luego tarjeta de crédito. 

----[mlb]----
![payment-methods](/images/salesforce/payment-methods.png)
------------

Si deseas modificar este orden, sigue estos pasos.

1. Dentro de tu tienda Salesforce Commerce Cloud, ve al menú **Merchant Tools** y haz clic en la opción **Payment Methods** que se encuentra dentro del grupo de opciones Ordering. También puedes encontrar la opción utilizando el buscador del menú.
2. Dentro del cuadro, busca la columna **Sort Order**. En esta columna, asígnale un orden numérico a los medios de pago de tu tienda para definir la posición en la que quieras mostrarlos. 

