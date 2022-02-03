# Tus aplicaciones

Las aplicaciones son las distintas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes, con el fin de tener todo organizado y mantener un control que facilite la gestión.

Cada aplicación tiene un conjunto de credenciales y la posibilidad de configurar sus propias notificaciones.

Cada tarjeta representa una aplicación creada y muestra el **nombre**, la **descripción**, el **ID de la aplicación** y un botón que permite administrar la aplicación.

## Crear nueva aplicación

Para crear una aplicación, sigue los pasos a continuación.

1. Selecciona "Nueva aplicación" o "Crea tu primera aplicación".
2. Ponle un nombre a tu aplicación (límite de 50 caracteres).
3. Elige una solución para integrarte.
4. Acepta nuestros términos y condiciones.
5. Crea la aplicación haciendo clic en el botón "Crear aplicación".

Con cada aplicación creada, se crea automáticamente una nueva tarjeta en la página de inicio del [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/dashboard) que contiene el nombre, la descripción y el ID de la aplicación.

## Detalles de la aplicación

Al hacer clic en la tarjeta de una aplicación, tendrás acceso a los detalles de la aplicación, que incluyen:

* **Nombre e ID de la aplicación**. En esta área puede seleccionar la aplicación que desee en función de su ID. Simplemente haga clic en el número que se muestra y seleccione la identificación deseada.
* **Mis credenciales**. Contraseñas únicas con las que identificamos una integración en tu cuenta. Sirven para capturar pagos en tiendas online y otras aplicaciones. Lee [Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) para obtener más información.
* **Notificaciones de webhook**. Notificaciones que puedes recibir a través de llamadas HTTP POST siempre que haya un evento relacionado con una transacción en tu aplicación. Lee [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/webhooks) para obtener más información.

### ID de aplicación
Los ID se utilizan para identificar sus aplicaciones y se crean automáticamente cada vez que se crea una nueva aplicación.

### Credenciales
Se presentan las credenciales de producción y prueba necesarias para acceder a su aplicación. Las **credenciales de prueba** deben usarse para probar sus integraciones y se pueden usar junto con tarjetas de crédito de prueba para simular recibos de tarjetas, mientras que las **credenciales de producción** se usan para recibir pagos. 

De forma predeterminada, las credenciales de producción estarán deshabilitadas hasta que las habilite haciendo clic en **Habilitar credenciales**, complete la información de su empresa y acepte nuestros Términos y condiciones.

> WARNING
>
> Atención
>
> Si no eres desarrollador, te recomendamos integrar Mercado Pago con tu tienda a través de [plugins y plataformas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/gguides/plugins) y obtén tus credenciales a través de tu cuenta de Mercado Pago en **Tu negocio > Configuración > Gestión y Administración > Credenciales**. Lea Credenciales para obtener más información. Lee [Credenciales](https://www.mercadopago[FAKER][URL][DOMINIO]/developers/en/guides/resources/credentials) para más información.

También existe la posibilidad de compartir las credenciales con otra cuenta de Mercado Pago, solo haz clic en **compartir mis credenciales** y completa el correo electrónico de la cuenta que recibirá la información. 

### Notificaciones de webhook
Configure las URL de producción y prueba desde las que se recibirán las notificaciones de webhook y seleccione los eventos que serán responsables de generar estas notificaciones. Lee [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/webhooks) para más información.

## Administrar aplicación

## Edita una aplicación
Después de crear tu aplicación, puedes hacer clic en el botón "Editar" para ver la configuración avanzada, que incluye los datos de tu aplicación y el producto que se integrará.

* **Los datos de tu aplicación**. Esta sección define los datos básicos de la aplicación e incluye:

  - *Nombre de la aplicación (límite de 50 caracteres)*.
  - *Descripción de la aplicación (límite de 150 caracteres)*.
  - *Permisos de la aplicación*. Este campo muestra las opciones de acceso para tu aplicación, siendo: lectura (read), acceso sin conexión (offline access) y escritura (write). De forma predeterminada, tu aplicación se crea con todos los permisos habilitados. Pero puedes deshabilitar un permiso haciendo clic en la casilla de verificación del que deseas cambiar. 
  - *Redirigir URL*. Este campo define la URL en la que deseas recibir el código de autorización cuando tu integración se configura como Marketplace o se realiza a través de OAuth. Vea [OAuth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/oauth/introduction) para más detalles.

* **Producto a integrar**. Esta sección define el producto que se integrará en tu aplicación. El campo "Productos disponibles" presenta la lista de productos disponibles para integrar. De forma predeterminada, el valor de este campo se completa con el valor ingresado al crear la aplicación, pero puedes cambiar el producto elegido sin tener que reconfigurar la integración. Este campo sirve como campo informativo para el producto al que se refiere la aplicación.

### Elimina una aplicación
Si por alguna razón necesitas eliminar una aplicación, simplemente haz clic en "Eliminar" y confirma la acción en el cuadro de diálogo. 

> WARNING
>
> Atención
>
> Tenga en cuenta que cuando eliminas una aplicación, tu tienda ya no recibirá pagos a través de la integración asociada con la aplicación y se perderán todas las configuraciones, incluidas las credenciales asociadas. Una vez que se elimina una aplicación, no se puede recuperar.
