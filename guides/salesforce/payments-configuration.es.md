# Configurar los medios de pago

Para comenzar a recibir pagos con tarjeta de crédito y Pix, sigue los pasos que se describen a continuación.

## Activar los medios de pago

A continuación, te explicamos cómo activar cada medio de pago en tu tienda Salesforce.

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

### Tarjeta de crédito

1. Dentro de tu tienda Salesforce Commerce Cloud, ve al menú **Merchant Tools** y haz clic en la opción **Payment Methods** que se encuentra dentro del grupo de opciones Ordering. También puedes encontrar la opción utilizando el buscador del menú.
2. Para activar el medio de pago de tarjeta de crédito, posiciónate sobre la opción **CREDIT_CARD**. Luego, en la columna "Enabled" y selecciona la opción **Yes** para habilitarlo.

## Elegir la ubicación de los medios de pago

Por defecto, el cartucho de Mercado Pago mostrará primero el medio de pago Pix y luego tarjeta de crédito. 

----[mlb]----
![payment-methods](/images/salesforce/payment-methods.png)
------------

Si deseas modificar este orden, sigue estos pasos.

1. Dentro de tu tienda Salesforce Commerce Cloud, ve al menú **Merchant Tools** y haz clic en la opción **Payment Methods** que se encuentra dentro del grupo de opciones Ordering. También puedes encontrar la opción utilizando el buscador del menú.
2. Dentro del cuadro, busca la columna **Sort Order**. En esta columna, asígnale un orden numérico a los medios de pago de tu tienda para definir el orden en el que quieras mostrarlos. 

