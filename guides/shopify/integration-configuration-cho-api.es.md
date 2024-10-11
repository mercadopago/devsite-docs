----[mlb]----
# Cartões

**Mercado Pago Cartões** ([Checkout Transparente](/developers/es/docs/checkout-api/landing)) es una app que permite pagos transparentes con tarjetas de débito o crédito, en la que el proceso de finalización de compra se realiza dentro del entorno de la tienda online, sin necesidad de redireccionamiento a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, reduce el abandono del carrito y aumenta la posibilidad de conversión.

Para integrar el Mercado Pago Cartões, instala la aplicación a través del [panel de Shopify](/developers/es/docs/shopify/integration-configuration/checkout-cards#instalarvapaneldeshopify) o a través del [Marketplace](/developers/es/docs/shopify/integration-configuration/checkout-cards#instalarvamarketplace). Después de la instalación, podrás [configurar meses sin intereses](/developers/es/docs/shopify/integration-configuration/checkout-cards#bookmark_configura_meses_sin).

> WARNING
>
> Atención
>
> Esta nueva aplicación es exclusiva para pagos con tarjetas. Para configurar pagos con Pix, consulta la [documentación correspondiente](/developers/es/docs/shopify/integration-configuration/pix). Para pagos con boleto bancário, utiliza [Mercado Pago Checkout Pro](/developers/es/docs/shopify/integration-configuration/checkout-pro). 

------------
----[mlm, mco]----
# Tarjetas

**Mercado Pago Tarjetas** ([Checkout API](/developers/es/docs/checkout-api/landing)) es una app que permite pagos transparentes con tarjetas de débito o crédito, en la que todo el proceso de finalización de compra se realiza dentro del entorno de la tienda online, sin necesidad de redireccionamiento a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, reduce el abandono del carrito y aumenta la posibilidad de conversión.

Para integrar el Mercado Pago Cartões, instala la aplicación a través del [panel de Shopify](/developers/es/docs/shopify/integration-configuration/checkout-cards#instalarvapaneldeshopify) o a través del [Marketplace](/developers/es/docs/shopify/integration-configuration/checkout-cards#instalarvamarketplace). Después de la instalación, podrás [configurar meses sin intereses](/developers/es/docs/shopify/integration-configuration/checkout-cards#bookmark_configura_meses_sin).

------------

## Instalar vía panel de Shopify

----[mlb]----

Para instalar Mercado Pago Cartões a través del panel administrativo de Shopify, sigue los pasos a continuación:

------------
----[mlm, mco]----

Para instalar Mercado Pago Tarjetas a través del panel administrativo de Shopify, sigue los pasos a continuación:

------------

1. Ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. En el panel administrativo, haz clic en **Configuraciones** en la esquina inferior izquierda de la página.
3. Una vez allí, selecciona la opción **Pagos** en el menú al lado izquierdo de la página.
4. En "Proveedores de pago", haz clic en **Seleccionar un proveedor**.

![installation panel 1](/images/shopify/installation-cards-panel.1-es.png)

5. En la pantalla de "Provedoores de pago externos", busca la aplicación "Mercado Pago Tarjetas".

![installation panel 2](/images/shopify/installation-cards-panel-2-es.png)

6. Después de localizarla, selecciónala y haz clic en **Instalar**. Lee atentamente la información sobre los permisos solicitados y haz clic en **Instalar** otra vez.

![installation cards 3](/images/shopify/installation-cards-2-es.png)

7. Después de aceptar los permisos, haz clic en **Gestionar cuenta** para incluir tus credenciales y vincular tu cuenta de Mercado Pago a la tienda.

> Las credenciales son responsables de identificar la cuenta receptora de los pagos que recibirás en tu tienda.

![installation cards 3](/images/shopify/installation-cards-3-es.png)

8. En el panel de administración de Mercado Pago, accede a **[Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** y selecciona tu aplicación. Si aún no has creado una, consulta la [documentación del Panel del desarrollador](/developers/es/guides/additional-content/your-integrations/dashboard) para aprender cómo hacerlo.
9. Haz clic en **Credenciales de producción** en el menú de la izquierda. Copia la `public_key` y el `access_token`.

![installation cards 4](/images/shopify/installation-cards-4-es.png)

10. Regresa a las configuraciones de su tienda en Shopify y ingresa tus credenciales de producción (`access_token` y `public_key`) en los campos correspondientes, teniendo cuidado de no invertir los campos al copiar y pegar las credenciales.
11. Haz clic en **Guardar credenciales**.

![installation cards 5](/images/shopify/installation-cards-5-es.png)

> NOTE
>
> Nota
>
> Una vez ingresadas, las credenciales no serán solicitadas en futuras instalaciones de aplicaciones de Mercado Pago para Shopify.
> <br><br>
> Recuerde que, al cambiar la contraseña de Shopify, **es necesario renovar sus credenciales**. Para hacerlo, siga las instrucciones en la documentación de [Buenas prácticas de seguridad para tus credenciales](/developers/es/docs/shopify/best-practices/credentials-best-practices/secure-credentials). Luego, para actualizarlas en su cuenta de Shopify, haga clic en **Administrar cuenta** y llene los campos correspondientes con tu `access_token` y `public_key`, **teniendo cuidado de no intercambiar los campos al copiar y pegar las credenciales**.

12. Por último, haz clic en la opción **Revisar activación** de Mercado Pago Tarjetas, ve a la sección de "Configuraciones" de Shopify y haz clic en **Activar** para activar la app y finalizar la instalación.

![installation cards 6](/images/shopify/installation-cards-6-es.png)

13. Después de completar la instalación, regresa al panel administrativo de la tienda y haz clic en **Configuraciones > Pagos**.
14. En "Método de captura de pago", asegúrate de que el campo **De forma automática al pagar** esté habilitado para garantizar que los pagos se capturen cuando se realice el pedido.

![installation cards 7](/images/shopify/installation-cards-7-es.png)

15. Aún en las "Configuraciones" del panel administrativo de la tienda, haz clic en **Checkout > Método de contacto del cliente** y asegúrate de que el campo **Correo electrónico** esté seleccionado como el método de contacto que los clientes deberán indicar para recibir notificaciones del pedido.

> WARNING
>
> Atención
>
> El uso del **correo electrónico** como forma de contacto es obligatorio para el procesamiento de pagos con Mercado Pago.

![installation cards 8](/images/shopify/installation-cards-8-es.png)

¡Listo! El checkout **Mercado Pago Tarjetas** está listo para recibir pagos.

----[mlm, mco]----
> WARNING
>
> Importante
>
> Después de finalizar la instalación de Mercado Pago Tarjetas, te recomendamos complementar instalando la aplicación **Mercado Pago Antifraude Plus**, instalando la aplicación **Mercado Pago Antifraude Plus**, que cuenta con la tecnología **3DS 2.0 (3-D Secure)** para **reforzar la seguridad de tu tienda y aumentar la tasa de aprobación de pagos**. Para más información, accede a la documentación de [Cómo prevenir fraudes en los pagos con tarjeta](/developers/es/docs/shopify/how-tos/antifraude-plus).

------------
----[mlb]----
> WARNING
>
> Importante
>
> Después de finalizar la instalación de Mercado Pago Tarjetas, te recomendamos complementar instalando la aplicación **Mercado Pago Antifraude Plus**, instalando la aplicación **Mercado Pago Antifraude Plus**, que cuenta con la tecnología **3DS 2.0 (3-D Secure)** para **reforzar la seguridad de tu tienda y aumentar la tasa de aprobación de pagos**. Para más información, accede a la documentación de [Cómo prevenir fraudes en los pagos con tarjeta](/developers/es/docs/shopify/how-tos/antifraude-plus).
> <br><br>
> Con Mercado Pago Tarjetas, los campos de "Número da Casa" y "Bairro" no se mostrarán automáticamente en el formulario de datos de entrega del pedido. Para que estos campos se muestren, simplemente contacta al equipo de soporte de la plataforma Shopify y haz la solicitud.

------------

## Instalar vía Marketplace

----[mlb]----
Para instalar Mercado Pago Cartões a través del Marketplace, sigue los pasos a continuación:

1. Accede a la [página de la aplicación **Mercado Pago Tarjetas**](https://apps.shopify.com/mercado-pago-cartoes?locale=pt-BR) en el Marketplace y haz clic en **Instalar**. Si aún no lo has hecho, inicia sesión con tu cuenta de Shopify.

------------
----[mlm]----
Para instalar Mercado Pago Tarjetas a través del Marketplace, sigue los pasos a continuación:

1. Accede a la [página de la aplicación **Mercado Pago Tarjetas**](https://apps.shopify.com/mercado-pago-tarjetas-mx) en el Marketplace y haz clic en **Instalar**. Si aún no lo has hecho, inicia sesión con tu cuenta de Shopify.

------------
----[mco]----
Para instalar Mercado Pago Tarjetas a través del Marketplace, sigue los pasos a continuación:

1. Accede a la [página de la aplicación **Mercado Pago Tarjetas**](https://apps.shopify.com/mercado-pago-tarjetas-co) en el Marketplace y haz clic en **Instalar**. Si aún no lo has hecho, inicia sesión con tu cuenta de Shopify.

------------
![installation mkplace 0](/images/shopify/installation-cards-mkplace-0-es.png)

2. Lee atentamente la información sobre los permisos solicitados y haz clic nuevamente en **Instalar**.

![installation cards 3](/images/shopify/installation-cards-2-es.png)

3. Después de aceptar los permisos solicitados, haz clic en **Gestionar cuenta** para incluir tus credenciales y vincular tu cuenta de Mercado Pago a la tienda.

> Las credenciales son responsables de identificar la cuenta receptora de los pagos que recibirás en tu tienda.

![installation cards 3](/images/shopify/installation-cards-3-es.png)

4. En el panel de administración de Mercado Pago, accede a **[Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** y selecciona tu aplicación. Si aún no has creado una, consulta la [documentación del Panel del desarrollador](/developers/es/guides/additional-content/your-integrations/dashboard) para aprender cómo hacerlo.
5. Haz clic en **Credenciales de producción** en el menú de la izquierda. Copia la `public_key` y el `access_token`.

![installation cards 4](/images/shopify/installation-cards-4-es.png)

6. Regresa a las configuraciones de su tienda en Shopify y ingresa tus credenciales de producción (`access_token` y `public_key`) en los campos correspondientes, teniendo cuidado de no invertir los campos al copiar y pegar las credenciales.

![installation cards 5](/images/shopify/installation-cards-5-es.png)

> NOTE
>
> Nota
>
> Una vez ingresadas, las credenciales no serán solicitadas en futuras instalaciones de aplicaciones de Mercado Pago para Shopify.
> <br><br>
> Recuerde que, al cambiar la contraseña de Shopify, **es necesario renovar sus credenciales**. Para hacerlo, siga las instrucciones en la documentación de [Buenas prácticas de seguridad para tus credenciales](/developers/es/docs/shopify/best-practices/credentials-best-practices/secure-credentials). Luego, para actualizarlas en su cuenta de Shopify, haga clic en **Administrar cuenta** y llene los campos correspondientes con tu `access_token` y `public_key`, **teniendo cuidado de no intercambiar los campos al copiar y pegar las credenciales**.

7. Haz clic en **Guardar credenciales**.
8. Por último, haz clic en la opción **Revisar activación** de Mercado Pago Tarjetas, ve a la sección de *Configuraciones* de Shopify y haz clic en **Activar** para activar la app y finalizar la instalación.

![installation cards 6](/images/shopify/installation-cards-6-es.png)

9. Después de completar la instalación, regresa al panel administrativo de la tienda y haz clic en **Configuraciones > Pagos**.
10. En "Método de captura de pago", asegúrate de que el campo **De forma automática al pagar** esté habilitado para garantizar que los pagos se capturen cuando se realice el pedido.

![installation cards 7](/images/shopify/installation-cards-7-es.png)

11. Aún en las "Configuraciones" del panel administrativo de la tienda, haz clic en **Checkout > Método de contacto del cliente** y asegúrate de que el campo **Correo electrónico** esté seleccionado como el método de contacto que los clientes deberán indicar para recibir notificaciones del pedido.

> WARNING
>
> Atención
>
> El uso del **correo electrónico** como forma de contacto es obligatorio para el procesamiento de pagos con Mercado Pago.

![installation cards 8](/images/shopify/installation-cards-8-es.png)

¡Listo! El checkout **Mercado Pago Tarjetas** está listo para recibir pagos.

----[mlm, mco]----
> WARNING
>
> Importante
>
> Después de finalizar la instalación de Mercado Pago Tarjetas, te recomendamos complementar instalando la aplicación **Mercado Pago Antifraude Plus**, instalando la aplicación **Mercado Pago Antifraude Plus**, que cuenta con la tecnología **3DS 2.0 (3-D Secure)** para **reforzar la seguridad de tu tienda y aumentar la tasa de aprobación de pagos**. Para más información, accede a la documentación de [Cómo prevenir fraudes en los pagos con tarjeta](/developers/es/docs/shopify/how-tos/antifraude-plus).

------------
----[mlb]----
> WARNING
>
> Importante
>
> Después de finalizar la instalación de Mercado Pago Tarjetas, te recomendamos complementar instalando la aplicación **Mercado Pago Antifraude Plus**, instalando la aplicación **Mercado Pago Antifraude Plus**, que cuenta con la tecnología **3DS 2.0 (3-D Secure)** para **reforzar la seguridad de tu tienda y aumentar la tasa de aprobación de pagos**. Para más información, accede a la documentación de [Cómo prevenir fraudes en los pagos con tarjeta](/developers/es/docs/shopify/how-tos/antifraude-plus).
> <br><br>
> Con Mercado Pago Tarjetas, los campos de "Número da Casa" y "Bairro" no se mostrarán automáticamente en el formulario de datos de entrega del pedido. Para que estos campos se muestren, simplemente contacta al equipo de soporte de la plataforma Shopify y haz la solicitud.

------------

## Configura meses sin intereses

Después de instalar y activar la aplicación **Mercado Pago Tarjetas**, configura la opción de ofrecer a tus clientes pagos en meses sin intereses con cualquier tarjeta de crédito. Para ello, sigue los pasos a continuación.

1. Inicia sesión en tu [cuenta de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/home).
2. Ve a la sección **Tu negocio > Costos** y selecciona la opción **Checkout**.

![configure installments 1](/images/shopify/configure-installments-1-es.png)

3. En "Meses sin intereses", haz clic en **Configurar meses**.

![configure installments 2](/images/shopify/configure-installments-2-es.png)

4. Activa la opción **Ofrecer MSI con tarjeta de crédito** y luego elige hasta cuantos meses quieres ofrecer.

![configure installments 3](/images/shopify/configure-installments-3-es.png)

5. Después de configurar las opciones meses sin intereses, ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
6. En el panel administrativo, haz clic en **Configuraciones** en la esquina inferior izquierda de la página.

![configure installments 4](/images/shopify/configure-installments-4-es.png)

7. Una vez allí, selecciona la opción **Pagos** en el menú al lado izquierdo de la página.
8. En "Mercado Pago Tarjetas", haz clic en **Gestionar**.

![configure installments 5](/images/shopify/configure-installments-5-es.png)

9. Luego, haz clic en **Más acciones > Gestionar**.

![configure installments 6](/images/shopify/configure-installments-6-es.png)

10. Finalmente, haz clic en **Sincronizar** para que las configuraciones de meses sin intereses se sincronicen con tu tienda.

![configure installments 7](/images/shopify/configure-installments-7-es.png)

> WARNING
>
> Atención
>
> Siempre que se cambien las configuraciones de meses sin intereses, será necesario **sincronizar** los cambios con su tienda.