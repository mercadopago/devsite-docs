# Configuración de integración

Una vez instalado el Plugin de Mercado Pago, deberás configurarlo para poder cobrar utilizando nuestras soluciones.

> WARNING
>
> Importante
>
> Hemos lanzado nuestro último plugin para Adobe Commerce (Magento), con más funcionalidades y total compatibilidad con las últimas actualizaciones de la plataforma. Si está utilizando versiones entre **3.5 y 3.19**, recomendamos la actualización para aprovechar las mejoras del **nuevo plugin**.
>
> **Las versiones más antiguas ya no recibirán actualizaciones, nuevas funcionalidades ni fixes.**
>
> Para obtener información sobre cómo actualizar el plugin a la nueva versión, consulta la documentación [Cómo actualizar al nuevo plugin de Adobe Commerce](/developers/es/docs/adobe-commerce/upgrade-to-the-new-plugin).

----[mlb]----
La configuración básica del plugin se realiza en 3 pasos: **Integración con Mercado Pago**, **Nombre de la tienda**, **Categoría e ID del Integrador** y **API Integración**, seguida de la **Configuración de pagos** (Checkout Transparente y Checkout Pro).

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
La configuración básica del plugin se realiza en 3 pasos: **Integración con Mercado Pago**, **Nombre de la tienda**, **Categoría e ID del Integrador** y **API Integración**, seguida de la **Configuración de pagos** (Checkout API y Checkout Pro).

------------
Sigue los pasos descriptos en esta documentación para configurar el plugin de Mercado Pago en la tienda Adobe Commerce (Magento).

> NOTE
>
> Importante
>
> Para realizar ventas reales o probar la tienda, es necesario tener a mano las credenciales de producción y/o prueba. Si aún no has creado tus credenciales, accede a la documentación [Credenciales](/developers/es/guides/additional-content/your-integrations/credentials) y aprende cómo crearlas antes de seguir con los siguientes pasos.


## Integración con Mercado Pago

1. En el Panel de Control de la tienda, ve a **Stores > Configuration > Sales > Payment Methods**.
2. En **Other payment methods**, haz clic en **Configure** en el plugin de Mercado Pago.
3. Haz clic en **Basic Settings > Mercado Pago Integration**.
4. En **Checkout operation mode**, selecciona **Production** si deseas comenzar a recibir ventas reales, o **Sandbox**, si deseas realizar pruebas antes de salir a producción.
5. Si has seleccionado **Production**, ingresa tu _Public key_ y tu _Access Token_ de producción. Si has seleccionado **Sandbox**, ingresa tu _Public Key_ y tu _Access Token_ de Sandbox.
6. Haz clic en **Save Configuration** en la esquina superior derecha de la pantalla.

Al finalizar estos pasos, la información básica para la integración con el plugin estará concluida. Sigue los siguientes pasos para continuar el proceso de configuración de la integración.


## Nombre de la tienda, Categoría e ID del Integrador

En esta etapa de configuración es necesario ingresar la información de la tienda y, opcionalmente, el `integrator_id`, que permite hacer un seguimiento de las integraciones realizadas por cada integrador.

1. Haz clic en **Store Name, Category and Integrator ID** y, en el campo **Store Name**, ingresa el nombre que se mostrará en la factura del comprador.
2. En **Category of your store**, define la categoría de los productos que se venden, por ejemplo, "Cell Phones & Accessories".
3. En **Integrator ID**, ingresa tu _integrator_id_ para poder registrar cuántas ventas se procesaron con tu cuenta. Si no tienes uno, puedes dejar el campo en blanco.

![Store Name, Category and Integrator ID](/images/adobe-commerce/nome_cat_id.png)


## API Integración

En la etapa de **API Integration** podrás definir si deseas o no recibir notificaciones de reembolso. Al seleccionar "Yes", tu tienda recibirá la notificación de reembolso procesando un "Credit Note".

![API Integration](/images/adobe-commerce/api_integracao.png)


## Soporte para desarrolladores

En esta etapa, es posible definir el comportamiento de registro de los logs de las transacciones. Para ello, sigue los pasos a continuación de acuerdo con la descripción de cada opción.

1. En **Debug**, selecciona "Yes" o "No". Este campo permite registrar las comunicaciones de la tienda con Mercado Pago para ofrecer un soporte aún mejor (no utilices el modo debug con la tienda en modo de producción).
2. En **Rewrite Notification URL**, puedes ingresar una URL alternativa para recibir la notificación de reembolso. Esta función es exclusiva para desarrolladores.

![Support](/images/adobe-commerce/suporte_para_devs.png)

----[mlb]----
Al finalizar todas las etapas, la integración con el plugin de Mercado Pago estará finalizada y lista para configurar los pagos (Checkout Pro y Checkout Transparente).

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
Al finalizar todas las etapas, la integración con el plugin de Mercado Pago estará finalizada y lista para configurar los pagos (Checkout Pro y Checkout API).

------------