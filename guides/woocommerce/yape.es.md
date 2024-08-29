# Yape

Yape es una aplicación móvil que simplifica el proceso de transferencias bancarias al permitir a los usuarios realizar transacciones de manera fácil y rápida directamente desde su teléfono móvil, después de asociar su tarjeta de débito MultiRed a la aplicación.

> WARNING
>
> Importante
>
> Para activar este medio de pago, asegúrate de que el plugin de Mercado Pago esté actualizado con la **versión 7.7** o superior. De lo contrario, no será posible habilitar Yape en tu tienda.

# Configurar el medio de pago

Para configurar Yape en tiendas WooCommerce, sigue los pasos a continuación:
1. Dirígete a las configuraciones del panel de WooCommerce (**WooCommerce > Mercado Pago**).
2. Haz clic en **3. Active y configure los medios de pago**.
3. En la opción "Yape", haz clic en **Configurar**.

![Configura](/images/woocomerce/api-configure-yape-es.png)

4. Haz clic en el botón deslizante dentro de la opción **Activar checkout**, que te permitirá habilitar el checkout en la tienda.
5. En el campo **Título en el checkout de la tienda**, ingresa el nombre que se mostrará para identificar esta forma de pago, como "Yape", por ejemplo.

![Activar](/images/woocomerce/api-active-yape-es.png)

6. Active la opción **Convertir moneda** para que el valor de la moneda configurada en WooCommerce sea compatible con el valor de la moneda utilizada en Mercado Pago.

![Convertir moneda](/images/woocomerce/api-active-convert-es.png)

Para guardar los cambios en las configuraciones, haz clic en el botón **Finalizar configuración**.

## Configuración avanzada

Es posible personalizar las opciones en la sección de configuraciones avanzadas de la forma de pago, proporcionando una experiencia más personalizada en la tienda. Para acceder a estas opciones, haz clic en el título **Configuraciones avanzadas** y se mostrarán las opciones descritas a continuación:
 1. **Descuento en los checkouts de Mercado Pago**: esta opción permite ofrecer un descuento para los clientes que paguen con la forma de pago que está siendo configurada. Para activarlo, ingresa un porcentaje de descuento y marca la opción **Activar y mostrar esta información en el checkout de Mercado Pago**. 
 2. **Comisión en los checkouts de Mercado Pago**: esta opción permite ingresar un valor porcentual adicional que se cobrará como comisión a los clientes que opten por esta forma de pago. Para activarlo, ingrese un porcentaje de comisión y marque la opción **Activar y mostrar esta información en el checkout de Mercado Pago**.

![Configuración avanzada](/images/woocomerce/api-advanced-settings-yape-es.png)

Para guardar los cambios en las configuraciones, haz clic en el botón **Finalizar configuración**.