# Cómo migrar a la nueva versión de la app plugin de Mercado Pago

Aprende a instalar la nueva app y desinstalar la antigua para evitar la interrupción del servicio en Shopify.

## Instala la nueva app

1. Ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. Dentro del panel administrativo de la tienda, haz clic en **Configuración**.
3. Una vez allí, selecciona la opción **Pagos**. 
4. En **Formas de pago adicionales**, haz clic en **Agregar formas de pago**.
5. Dirígete a la pestaña "Buscar por proveedor" y busca la nueva app con el nombre **Checkout Mercado Pago**. 
6. Una vez que la hayas encontrado, selecciónala y haz clic en **Activar** y luego **Conectar**.

![migracion a](/images/shopify/migration-a-es.gif)

7. Selecciona **Instalar aplicación** y luego **Gestionar**.
8. Coloca tus **credenciales de producción** (`public key` y `access token`) en los campos que lo solicitan y haz clic en **Guardar**.
9. Para terminar la instalación, selecciona **Activar Checkout Mercado Pago**.

> En este paso, podrás seleccionar las imágenes de los medios de pago que quieras mostrar en tu tienda a modo ilustrativo. También, en caso que lo desees, podrás habilitar el [modo de prueba.](/developers/pt/docs/shopify/sales-processing/integration-test)

![migracion b](/images/shopify/migration-b-es.gif)

> NOTE
>
> Importante
>
> En este exacto momento, vas a tener las dos versiones instaladas en tu sitio. Esto asegurará que tu tienda no se quede sin métodos de pago mientras se realizan los pasos de migración.

## Desactiva la app antigua

Después de instalar la nueva versión, es necesario desinstalar la versión anterior siguiendo el paso a paso a continuación.

1. Ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. Dentro del panel administrativo de la tienda, haz clic en **Configuración**.
3. Una vez allí, selecciona la opción **Pagos**. 
4. Localiza la antigua app con el nombre "Mercado Pago" y selecciona **Gestionar**.
5. Para finalizar, haz clic en **Desactiva Mercado Pago**.

> WARNING
>
> Atención
>
> Ten cuidado de no desinstalar la nueva versión.

![migracion c](/images/shopify/migration-c-es.gif)