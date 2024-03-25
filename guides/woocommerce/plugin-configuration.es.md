# Configuración de la integración

Una vez instalado el plugin de Mercado Pago para WooCommerce, es necesario configurarlo. Para ello, sigue estos pasos:

1. Accede a tu cuenta de [Wordpress](https://wordpress.com/).
2. Ve al panel de tu cuenta y haz clic en **Plugins > Plugins instalados**.

![Agregar plugin](/images/woocomerce/installed-plugins-es.png)

3. Busca **Mercado Pago** en la barra de búsqueda a la derecha.
4. El resultado de la búsqueda mostrará el plugin de Mercado Pago. Haz clic en **Configurar plugin**.

![Plugin MP](/images/woocomerce/mp-plugin-es.png)

> NOTA
>
> Continuamos mejorando constantemente el plugin para brindar la mejor experiencia posible. Para aprovechar las últimas funcionalidades y garantizar la seguridad y el buen funcionamiento del plugin, recomendamos mantenerlo siempre actualizado haciendo clic en **Activar las actualizaciones automáticas** en el paso anterior.

A continuación, explicaremos cómo configurar cada elemento del plugin.

## Integrar la tienda con Mercado Pago

1. Haz clic en **1. Integra la tienda con Mercado Pago**.
2. Ahora, debes vincular tu cuenta de Mercado Pago a tu tienda utilizando tus credenciales. En el panel de administración de Mercado Pago, accede a **[Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** y selecciona tu aplicación. Si aún no has creado una aplicación, consulta la [documentación del Panel del desarrollador](/developers/es/docs/woocommerce/additional-content/your-integrations/dashboard) para obtener más información.

> WARNING
>
> Importante
>
> Las credenciales son responsables de identificar la cuenta receptora de pagos que recibirás en tu tienda. Si no introduces tus credenciales en el panel de administración de la tienda, se te redirigirá automáticamente para configurar este paso. **Recuerda que la activación de los medios de pago solo será posible después de la inserción exitosa de tus credenciales**.

3. Haz clic en **Credenciales de producción** en el menú de la izquierda. Copia el `access_token` y la `public_key`.

![Credenciales de producción](/images/woocomerce/test-prod-credentials-api-es.png)

4. Introduce tus credenciales de producción `access_token` y `public_key` en el campo **Credenciales de producción**, cuidando de **no invertir los campos al copiar y pegar las credenciales**.

5. En tu aplicación, haz clic en **Credenciales de prueba** en el menú de la izquierda. Copia el `access_token` y la `public_key`.

![Credenciales de prueba](/images/woocomerce/test-test-credentials-api-es.png)

6. También introduce las credenciales de prueba `access_token` y `public_key` en el campo **Credenciales de prueba**, cuidando de **no invertir los campos al copiar y pegar las credenciales**.

![Panel](/images/woocomerce/test-woo-es.png)

7. Haz clic en **Guardar y continuar**.

> NOTE
>
> Nota
>
> Renueva tus credenciales según sea necesario, consultando la [documentación](/developers/es/docs/woocommerce/additional-content/best-practices/credentials-best-practices/secure-credentials) correspondiente como guía. Después de la renovación, es esencial actualizarlas en el panel de WooCommerce. Recuerda: al cambiar la contraseña de tu cuenta de Mercado Pago, **debes renovar tus credenciales**. Para ello, elimina las credenciales antiguas del panel, copia las nuevas e insértalas en el panel de administración de la tienda.

## Personalizar negócio

En la sección **2. Personalizar información de tu tienda**, tienes la opción de proporcionar detalles específicos sobre tu tienda, brindando una experiencia más completa a los clientes con información adicional.

* **Nombre de tu tienda en la factura de los clientes**: Ingresa el nombre de tu tienda. Si este campo está vacío, la compra del cliente se identificará como "Mercado Pago" en la factura.
* **Identificación en Actividades de Mercado Pago**: En las Actividades de Mercado Pago, verás el término ingresado en este campo antes del número del pedido.
* **Categoría de la tienda**: Ingresa la categoría de los productos de tu tienda. Si no encuentras una categoría adecuada, selecciona "Other categories".

![Panel](/images/woocomerce/customization-es.png) 

### Opciones avanzadas

En **Opciones avanzadas de integración**, haz clic en **Ver opciones avanzadas** y configura las opciones relacionadas con la integración de tu tienda con Mercado Pago.

* **URL para IPN**: Ingresa la URL para recibir notificaciones de pagos.
* **Integrator ID**: Ingresa tu `integrador_id` de socio del **&lt;dev&gt;program** de Mercado Pago. Si aún no eres miembro del programa, visita la [página](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/developer-program) para obtener más información.
* **Modo de depuración y registro**: Habilita esta opción para permitir el registro de actividades de tu tienda, lo que permite un soporte más eficiente y una mejor depuración de problemas técnicos.

![Panel](/images/woocomerce/advanced-settings-es.png) 

Por último, haz clic en **Guardar y continuar**.