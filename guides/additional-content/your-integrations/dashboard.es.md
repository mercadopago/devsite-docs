# Panel del desarrollador
En el [Panel del desarrollador](/developers/panel/app), encontrarás la lista de tus aplicaciones.

Las aplicaciones son las diferentes integraciones contenidas en una o más tiendas. Puedes crear una aplicación para cada solución que implementes, con el fin de tener todo organizado y facilitar la gestión.

Cada aplicación tiene un conjunto de credenciales y brinda la posibilidad de configurar sus propias notificaciones. Cada *card* representa una aplicación creada, muestra el nombre y el número de la aplicación, y cuenta con un botón que lleva a los **Detalles de la aplicación**, en donde puedes administrarla.

## Crear una nueva aplicación
Crea tu aplicación y obtén tus credenciales para integrarte con Mercado Pago. Sigue los pasos a continuación para crear una aplicación:

1. Haz clic en **Tus integraciones** en la esquina superior derecha de la pantalla.
2. Haz clic en **Crear aplicación**.

![Crear](/images/dashboard/dashboard_01_es.png)

> NOTE
>
> Importante
>
> Durante la creación de tu aplicación, es posible que debas realizar una reautenticación de identidad. Si ya has completado el proceso de verificación, se te solicitará reautenticarte. Si aún no has realizado la verificación, serás redirigido/a para enviar los documentos necesarios. 
>
> Este paso adicional de autenticación es esencial para proteger tu cuenta y garantizar el cumplimiento de las operaciones. Sigue las instrucciones proporcionadas para crear tu aplicación con éxito.

3. Ingresa un nombre para identificar tu aplicación (tienes un límite de 50 caracteres).
4. Elige una solución de pago para integrar, ya sea **Pagos online** o **Pagos presenciales**.
- **Pagos online**: si vas a utilizar una plataforma de comercio electrónico, marca **Sí**. Luego, selecciona la **plataforma** con la que vas a integrar. Por último, selecciona el **producto** que estás integrando. 

Si no estás utilizando una plataforma de comercio electrónico, marca **No** y selecciona el **producto** que estás integrando. Opcionalmente, podrás seeccionar el/los modelos de integración.

   - **Pagos presenciales**: selecciona el **producto** que estás integrando. Si seleccionas la opción Código QR, opcionalmente también podrás eligir el/los modelos de integración.

![Pagos](/images/dashboard/dashboard_02_es.png)

5. Marca la casilla para autorizar el uso de tus datos personales de acuerdo con la [Declaración de Privacidad](https://www.mercadopago.com.br/privacidade) y certificar que tu cuenta utiliza las herramientas de Mercado Pago de acuerdo con los [Términos y Condiciones](https://www.mercadopago.com.br/developers/pt/docs/resources/legal/terms-and-conditions).
6. Marca la casilla de selección "No soy un robot".
7. Haz clic en "Crear aplicación".

![Crear aplicación](/images/dashboard/dashboard_03_es.png)

Cada vez que creas una aplicación, se crea automáticamente una nueva tarjeta con el nombre y el número de la aplicación en el [Panel del desarrollador](/developers/panel/app).

![Card](/images/dashboard/dashboard_04_es.png)

## Acceder a las credenciales de una aplicación que no gestionas
Puedes solicitar acceso a las credenciales de aplicación de otras personas e integrar soluciones para cuentas diferentes a la tuya. Sigue los pasos a continuación para solicitar acceso seguro a las credenciales de una aplicación que no gestionas:

1. En el [Panel del desarrollador](/developers/panel/app), haz clic en el botón **Solicitar acceso a las credenciales**.
2. Ingresa el correo electrónico asociado a la cuenta de la cual deseas solicitar las credenciales.
3. Marca la casilla de selección "No soy un robot".
4. Haz clic en **Solicitar credenciales**.

Una vez que se te haya concedido el acceso a las credenciales, podrás utilizarlas para integrar soluciones. Cuando las integraciones estén completas, asegúrate de revocar los permisos de acceso a las credenciales compartidas y cuidar la seguridad de los datos.

> Al solicitar acceso a otras credenciales, estás solicitando que otras cuentas de Mercado Pago compartan contigo las claves públicas y privadas de las aplicaciones para realizar integraciones. No utilices las credenciales de otras cuentas sin su consentimiento adecuado.