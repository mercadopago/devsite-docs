# Crear una aplicación en Tus Integraciones

Para crear una aplicación en Tus Integraciones, sigue los pasos a continuación.

1. Ingresa al [Panel del desarrollador](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es). Una vez allí, haz clic en el botón **Tus integraciones**, ubicado en la esquina superior derecha, y luego en **Crear aplicación**. 

    > NOTE
    >
    > Importante
    >
    > Durante la creación de tu aplicación, es posible que debas realizar una reautenticación de identidad. Si ya has completado el proceso de verificación, se te solicitará reautenticarte. Si aún no lo has realizado, serás redirigido/a para enviar los documentos necesarios. Este paso adicional de autenticación es esencial para proteger tu cuenta y garantizar el cumplimiento de las operaciones. Sigue las instrucciones proporcionadas para crear tu aplicación con éxito.

2. Ingresa un nombre para identificar tu aplicación (tienes un límite de 50 caracteres).
3. Elige la solución de **Pagos Presenciales**.
4. A la hora de elegir el producto a integrar, puedes elegir “CódigoQR” o “PointdeMercadoPago”. El resultado será el mismo independientemente de lo que elijas.
5. Una vez que hayas completado la información solicitada, haz clic en **Crear aplicación** y ¡listo!

> Puedes consultar la [documentación sobre el Panel del Desarrollador](/developers/es/docs/ecosistema-presencial/additional-content/your-integrations/dashboard) si tienes dudas sobre cómo utilizarlo.

## Información importante sobre tu aplicación

Una vez que hayas creado tu aplicación, serás redirigido al sitio de Información General. Ten a mano estos datos para continuar la integración en los próximos pasos. 

| Datos de la aplicación | Definición | Equivalente en la integración del Ecosistema Presencial |
|---|---|---|
| User ID | Número de identificación de usuario, que es creado automáticamente. | `user_id` |
| Número de aplicación | Número de identificación de la aplicación, que es creado automáticamente. | `application.id` |

Además, en el menú ubicado del lado izquierdo del panel de información general de tu aplicación, podrás acceder a más información útil, como se muestra a continuación: 

| Tipo de información | Definición |
|---|---|
| NOTIFICACIÓN > Webhooks | Webhook (también conocido como devolución de llamada web) es un método simple que facilita que una aplicación o sistema proporcione información en tiempo real cada vez que ocurre un evento. Aquí podrás configurar una URL a la cual será notificado el estado final de los `intent`. |
| PRODUCCIÓN > Credenciales de producción | Utiliza las [credenciales](/developers/es/docs/ecosistema-presencial/additional-content/your-integrations/credentials) de producción para recibir pagos. Aquí encontrarás tu `access_token` productivo. |