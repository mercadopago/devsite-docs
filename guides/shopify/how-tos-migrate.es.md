# Cómo migrar a la nueva versión del plugin de Mercado Pago

Aprende a migrar a la versión actual del plugin de Mercado Pago para Shopify.

1. Ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. Dentro del panel administrativo de la tienda, haz clic en **Configuración**.
3. Una vez allí, selecciona la opción **Pagos**. 
4. En **Métodos de pago adicionales**, haz clic en **Agregar métodos de pago**.
5. Haz clic en la pestaña **Buscar por proveedor**, luego escribe "Checkout Mercado Pago" en la barra de búsqueda. Una vez que lo encuentres, haz clic en la opción **disponible**.
6. Coloca tus **credenciales de producción** (`public key` y `access token`) en los campos que lo solicitan. Recuerda tener a mano tus [credenciales](/developers/es/docs/shopify/additional-content/credentials). 
7. En el siguiente paso, podrás seleccionar las imágenes de los medios de pago que deseas mostrar en la tienda. **Importante: estas imágenes son sólo para fines ilustrativos y no implican la activación del método de pago seleccionado**.
8. Por último, la tienda te ofrecerá la opción de **habilitar el modo de prueba**. Al activar esta opción, los pedidos completados con Checkout Pro **no serán pedidos reales**. Es decir, serán pedidos de prueba que, aun siendo completados, no tendrán su estado actualizado en la plataforma y no aparecerán en el panel de Mercado Pago en la cuenta del vendedor.
9. Al finalizar, haz clic en **Activar Mercado Pago**. 

> NOTE
>
> Importante
>
> En este exacto momento, vas a tener las dos versiones instaladas en tu sitio. Esto asegurará que su tienda no se quede sin métodos de pago mientras se realizan los pasos de migración.

Después de instalar la nueva versión, es necesario desinstalar la versión anterior siguiendo el paso a paso a continuación.

1. Ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. Dentro del panel administrativo de la tienda, haz clic en **Configuración**.
3. Una vez allí, selecciona la opción **Pagos**. 
4. Localiza el antiguo plugin de Mercado Pago y desactívalo.

> WARNING
>
> Atención
>
> Ten cuidado de no desinstalar la nueva versión.