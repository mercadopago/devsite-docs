# Tus aplicaciones
 
Llamamos aplicaciones a las distintas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes, con el fin de tener todo organizado y mantener un control que facilite la gestión.
 
Cada aplicación tiene un conjunto de credenciales y la posibilidad de configurar sus propias notificaciones. Cada tarjeta representa una aplicación creada y muestra el **nombre**, la **descripción**, el **ID de la aplicación** y un **botón que permite administrar la aplicación**.

> Por defecto, la pantalla muestra solo 3 aplicaciones creadas. Para ver las otras aplicaciones, haz clic en **Ver todas las aplicaciones**.

## Crear nueva aplicación
 
Para crear una aplicación, sigue los pasos a continuación.
 
1. Selecciona "Crear nueva aplicación" o "Crea tu primera aplicación".
2. Ponle un nombre a tu aplicación (límite de 50 caracteres).
3. Elige una solución para integrarte.
   * **Pagos online**. Si estás utilizando una plataforma de e-commerce, selecciona la **plataforma** que utilizarás para la integración. De no ser así, selecciona el **producto de Mercado Pago** que deseas integrar.
   * **Pagos presenciales**. Selecciona el **producto de Mercado Pago** a integrar.
4. Acepta nuestros términos y condiciones.
5. Crea la aplicación haciendo clic en el botón "Crear aplicación".
 
Con cada aplicación creada, se crea automáticamente una nueva tarjeta en la página de inicio del [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel) que contiene el nombre, la descripción y el ID de la aplicación.

## Administrar aplicación
 
### Edita una aplicación
Después de crear tu aplicación, puedes hacer clic en el botón "Editar" para ver la configuración avanzada, que incluye los datos de tu aplicación y el producto que se integrará.
 
* **Los datos de tu aplicación**. Esta sección define los datos básicos de la aplicación e incluye:
 
  - Nombre de la aplicación (límite de 50 caracteres).
  - Solución de pago a integrar.
  - Nombre corto de la aplicación. El nombre corto sirve para identificar personalmente al usuario que crea la aplicación y se mostrará en la herramienta de **medir la calidad de tu aplicación**. Consulta [Calidad de integración](/developers/rd/guides/additional-content/homologator/homologator) para obtener más información.
  - Descripción de la aplicación (límite de 150 caracteres).
  - Permisos de la aplicación. Este campo muestra las opciones de acceso para tu aplicación, las cuales son: lectura (read), acceso sin conexión (offline access) y escritura (write). De forma predeterminada, tu aplicación se crea con todos los permisos habilitados. Pero puedes deshabilitar un permiso haciendo clic en la casilla de verificación del que deseas cambiar.
  - Redirigir URL. Este campo define la URL en la que deseas recibir el código de autorización cuando tu integración se configura como Marketplace o se realiza a través de OAuth. Lee [OAuth](/developers/es/docs/security/oauth/introduction) para más detalles.
  - - Logotipo (formato PNG de 400 x 400 píxeles).
  - Bloqueo de aplicaciones. Si lo hay, indicará el motivo por el cual la aplicación está bloqueada para su uso. Haz clic en **Detalles del bloqueo** para verificar [la solución](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/support/23066) para el bloqueo informado.
  <br/>
 
### Elimina una aplicación
Si necesita eliminar una aplicación en su Dashboard, haz clic en los 3 puntos verticales en la tarjeta de la aplicación, selecciona la opción **Eliminar** y confirma la acción en el cuadro de diálogo.
 
> WARNING
>
> Atención
>
> Ten en cuenta que cuando eliminas una aplicación, tu tienda ya no recibirá pagos a través de la integración asociada con la aplicación y se perderán todas las configuraciones, incluidas las credenciales asociadas. Una vez que se elimina una aplicación, no se puede recuperar.
 
### Detalles de la aplicación
 
Al hacer clic en la tarjeta de una aplicación, tendrás acceso a los detalles de la aplicación, que incluyen:

#### Nombre de la aplicación
En este área, puedes ver el nombre de la aplicación y, si es necesario, editar los datos de la aplicación haciendo clic en el ícono correspondiente.

#### Integración 
Producto o plataforma integrada con la aplicación.

#### Numero de la aplicacion
En este área puedes ver el ID de la aplicación.

#### Puntuación 
El puntaje indica qué tan segura es la configuración de tu aplicación y está en línea con las buenas prácticas de integración de Mercado Pago.

#### Detalles de la puntuación
Botón de acceso a la herramienta donde podrás **medir la calidad de tu aplicación**, podrás identificar puntos de mejora en tu integración y llevarla a los estándares de Mercado Pago. Consulta [Calidad de integración](/developers/rd/guides/additional-content/homologator/homologator) para obtener más información.

----[mla, mlm, mlu, mco, mlc, mpe]---- 
> WARNING
>
> Atención
>
> Por ahora, la herramienta de medición de la calidad de integración solo está disponible para integraciones con [Checkout Pro,](/developers/es/docs/checkout-pro/landing) [Checkout API](/developers/es/docs/checkout-api/landing) y [Checkout Bricks.](/developers/es/docs/checkout-bricks/landing)

------------

----[mlb]---- 
> WARNING
>
> Atención
>
> Por ahora, la herramienta de medición de la calidad de integración solo está disponible para integraciones con [Checkout Pro,](/developers/es/docs/checkout-pro/landing) [Checkout Transparente](/developers/es/docs/checkout-api/landing) y [Checkout Bricks.](/developers/es/docs/checkout-bricks/landing)

------------

#### Mis credenciales
Contraseñas únicas con las que identificamos una integración en tu cuenta, que sirven para capturar pagos en tiendas online y otras aplicaciones.
 
#### Credenciales
Se presentan las credenciales de producción y prueba necesarias para acceder a tu aplicación. Las **credenciales de prueba** deben usarse para probar tus integraciones y se pueden usar junto con tarjetas de crédito de prueba para simular recibos de tarjetas, mientras que las **credenciales de producción** se usan para recibir pagos.
 
De forma predeterminada, las credenciales de producción estarán deshabilitadas hasta que las habilites haciendo clic en **Habilitar credenciales**, completes la información de su empresa y aceptes nuestros términos y condiciones.
 
> NOTE
>
> Importante
>
> Obtén tus credenciales a través de tu cuenta de Mercado Pago en **Tu negocio > Configuración > Gestión y Administración > Credenciales**.  Lee [Credenciales](/developers/es/guides/additional-content/credentials/credentials) para más información.
 
También existe la posibilidad de compartir las credenciales con otra cuenta de Mercado Pago, solo haz clic en **compartir mis credenciales** y completa el correo electrónico de la cuenta que recibirá la información.
 
#### Notificaciones de webhooks
Notificaciones que puedes recibir a través de llamadas HTTP POST siempre que haya un evento relacionado con una transacción en tu aplicación.

Configura las URL de producción y prueba desde las que se recibirán las notificaciones de webhook y selecciona los eventos que serán responsables de generar estas notificaciones. Lee [Webhooks](/developers/es/guides/additional-content/notifications/webhooks/webhooks) para más información.