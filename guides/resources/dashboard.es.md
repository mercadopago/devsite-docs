# Dashboard
El [Dashboard](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel) es tu entorno de gestión de integración. Es creado automáticamente con una identificación de usuario para tí con solo abrir una cuenta de Mercado Pago. En él puedes crear, editar y eliminar aplicaciones.

Las aplicaciones no son más que las diferentes integraciones que pueden contener una o más tiendas. Puedes crear una aplicación para cada solución que implementes, con el fin de tener todo organizado y mantener un control que te facilite su administración. 

Cada aplicación tiene un conjunto de credenciales y cuenta con la posibilidad de configurar sus propias notificaciones. Lee [Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) y [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/webhooks) para obtener más información.

> WARNING 
> 
> Atención
> 
> Si no eres desarrollador, te recomendamos que integres Mercado Pago a tu tienda a través de [plugins y plataformas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins). Puedes recuperar tus credenciales a través de tu cuenta de Mercado Pago en[Tu negocio> Configuración> Gestión y administración> Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials). Lee [Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) para obtener más información.


## Crea una aplicación
Para crear una aplicación, sigue los pasos a continuación.

1. Selecciona "Nueva aplicación" o "Crea tu primera aplicación".
2. Ponle un nombre a tu aplicación.
3. Elige una solución para integrarte.
4. Acepta nuestros términos y condiciones.
5. Crea la aplicación haciendo clic en el botón "Crear aplicación".

Con cada aplicación creada, se crea automáticamente una nueva tarjeta en la página de inicio del panel de desarrolladores que contiene el nombre, la descripción y el ID de la aplicación.



## Detalles de la aplicación
Al hacer clic en la tarjeta de una aplicación, tendrás acceso a los detalles de la aplicación, que incluyen:

- **Mis credenciales**. Contraseñas únicas con las que identificamos una integración en tu cuenta. Sirven para capturar pagos en tiendas online y otras aplicaciones. Lee [Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) para obtener más información.
- **Notificaciones de webhook**. Notificaciones que puedes recibir a través de llamadas HTTP POST siempre que haya un evento relacionado con una transacción en tu aplicación. Lee [Webhooks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/webhooks) para obtener más información.


## Edita una aplicación
Después de crear tu aplicación, puedes hacer clic en el botón "Editar" para ver la configuración avanzada, que incluye los datos de tu aplicación y el producto que se integrará.
- **Los datos de tu aplicación**. Esta sección define los datos básicos de la aplicación e incluye:
  - **Nombre de la aplicación**.
  - **Descripción de la aplicación**.
  - **Permisos de la aplicación**. Este campo muestra las opciones de acceso para tu aplicación. De forma predeterminada, tu aplicación se crea con todos los permisos habilitados. Pero puedes deshabilitar un permiso haciendo clic en la casilla de verificación del que deseas cambiar. 
  - **Redirigir URL**. Este campo define la URL en la que deseas recibir el código de autorización cuando tu integración se configura como Marketplace o se realiza a través de OAuth.
- **Producto a integrar**. Esta sección define el producto que se integrará en tu aplicación. El campo "Productos disponibles" presenta la lista de productos disponibles para integrar. De forma predeterminada, el valor de este campo se completa con el valor ingresado al crear la aplicación, pero puedes cambiar el producto elegido sin tener que reconfigurar la integración. Este campo sirve como campo informativo para el producto al que se refiere la aplicación.



## Elimina una aplicación
Si por alguna razón necesitas eliminar una aplicación, simplemente haz clic en "Eliminar" y confirma la acción en el cuadro de diálogo. 


>WARNING
>
>Atención
>
>Tenga en cuenta que cuando eliminas una aplicación, tu tienda ya no recibirá pagos a través de la integración asociada con la aplicación y se perderán todas las configuraciones, incluidas las credenciales asociadas. Una vez que se elimina una aplicación, no se puede recuperar.


## Cuentas que integras
Puedes integrar soluciones para cuentas distintas a la tuya. Al integrar soluciones para otras cuentas, puedes solicitar acceso a las credenciales de estas cuentas para mantener la seguridad de los datos. Esta sección contiene las credenciales de estas otras cuentas. Para solicitar acceso, necesitarás seguir estos pasos:
1. Haz clic en el botón "Solicitar credenciales".
2. Completa el correo electrónico de la cuenta para la que se solicitaste las credenciales.
3. Confirma la solicitud de credenciales.
Una vez que se otorgue el acceso a las credenciales, puedes usarlas para integrar soluciones. Cuando se completen las integraciones, elimina los permisos de acceso para las credenciales que se compartieron y cuida la seguridad de los datos.



## ID de integrador
El panel del desarrollador también contiene tu ID de integrador. El ID del integrador es un número único que te identifica como miembro del &lt;dev&gt;program. 

El &lt;dev&gt;program es un programa de beneficios para desarrolladores exclusivo y gratuito, diseñado para que seas parte de nuestra comunidad y recibas beneficios adicionales. Para participar, debes aprobar algunas de las certificaciones oficiales de Mercado Pago. 

Consulta la página del [&lt;dev&gt;program](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/developer-program) y realiza la certificación del producto deseado, recibe tu ID de integrador e introdúcelo en sus integraciones para recibir beneficios adicionales.

