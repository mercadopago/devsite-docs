# Configuración de integración
 
Para integrar Mercado Pago a tu Tiendanube, sigue los procedimientos a continuación.

----[mlb, mlm, mla]----
> WARNING
>
> Atención
>
> Si estás usando la versión anterior del plugin de Mercado Pago, consulta la [documentación](/developers/es/docs/nuvemshop/how-tos/migration) para saber cómo migrar a la versión actual.

1. Accede a la [Tienda de aplicaciones](https://www.tiendanube.com/mx/tienda-aplicaciones-nube) y busca "Mercado Pago" en la barra de búsqueda en la parte superior de la página.
2. Selecciona el plugin de Mercado Pago de entre los resultados de la búsqueda, y haz clic en **Instalar aplicación**.
3. Deberás otorgar los permisos necesarios para la aplicación. Haz clic en **Aceptar y empezar a usar**.
4. Serás redirigido a la página de Mercado Pago, donde deberás iniciar sesión con tus datos. Ten en cuenta que **la integración se llevará a cabo automáticamente desde la cuenta de Mercado Pago abierta en el navegador durante la instalación**, por lo que deberás verificar si ya has iniciado sesión previamente.
5. Lee con atención la información sobre los permisos solicitados. Marca la casilla de verificación para aceptarlos y haz clic en **Continuar**.
6. Revisa nuevamente los permisos y, si estás seguro, haz clic en **Autorizar esta aplicación** para autorizar la conexión.

------------
----[mlm, mla]----
<center>

![Integration - Nuvemshop](/images/nuvemshop/plugin-mp-es.gif)

</center>
------------
----[mpe, mco, mlu, mlc]----
1. Crea una [cuenta vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) en Mercado Pago si todavía no tienes una.
1. Instala la aplicación dentro de la tienda.
1. Configura las formas de pago con Mercado Pago.

## Activa Mercado Pago en tu tienda

Para **vincular tu cuenta de Mercado Pago a Tiendanube**, sigue estos pasos:

1. Accede a las [configuraciones de medios de pago](https://mitiendanube.com/admin/payments/) en el menú de tu tienda.
2. Busca en la lista de medios de pago a Mercado Pago.
3. Haz clic en "Configurar" y luego en "Activar".
4. Vas a ser redirigido a Mercado Pago para que ingreses con los datos de tu cuenta. Para autorizar la conexión, haz clic en "Permitir".

------------
----[mlc, mlu, mpe, mco]----
![Payments Connect - Nuvem Shop](/images/nuvemshop/mx_tientanube_connect.gif)

------------
Una vez que hayas realizado esta configuración inicial, configura también las experiencias de pago de tu tienda de acuerdo con el tipo de pago seleccionado.

> WARNING
>
> Importante
>
> Por defecto, Tiendanube va a tomar información de la cuenta que está recibiendo el pago, como la **configuración de correo electrónico**, **país** y la **moneda correspondiente a tu cuenta de Mercado Pago**.

## Cambiar cuenta de Mercado Pago

Si quieres cambiar la cuenta de Mercado Pago asociada a tu tienda, es necesario cerrar y reinstalar la aplicación. Para hacerlo, sigue los pasos a continuación.
----[mlm, mla, mlb]----
1. Si todavía estás conectado a tu cuenta de Mercado Pago en un navegador, desconéctate accediendo al "Menú de opciones" y, luego, haz clic en **Salir**.
   ![Salir](/images/nuvemshop/desc-es.gif)
2. En el Panel Administrativo de tu Tiendanube, accede a **Mis aplicaciones > Ver todas las aplicaciones**. 
3. Busca el plugin de Mercado Pago, localízalo en la lista de métodos de pago y haz clic en **Desinstalar**.
   ![Desinstalar](/images/nuvemshop/desin-es.gif)
4. Localiza el plugin Mercado Pago en la lista de aplicaciones y haz clic en **Instalar**.
5. Finalmente, vas a ser redirigido a Mercado Pago para que ingreses con los datos de tu cuenta. Para autorizar la conexión, haz clic en **Permitir**.

------------
----[mpe, mco, mlu, mlc]----
1. Cierra tu cuenta de Mercado Pago si la tienes abierta en tu navegador.
2. Selecciona "Salir" en el menú de opciones.
3. Accede a las [configuraciones de medios de pago](https://mitiendanube.com/admin/payments/) en el menú de tu tienda, busca "Mercado Pago" y selecciona "Editar".
4. Finalmente, haz clic en "Cambiar usuario" para desvincular tu cuenta actual.
5. ¡Y listo! La desvinculación fue exitosa y ahora puedes **agregar una nueva cuenta**.

------------

¡Y listo! La instalación fue exitosa y ahora puedes recibir pagos.