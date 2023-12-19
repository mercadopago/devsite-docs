# Crear aplicación

1. Accede a [Tus integraciones](https://www.mercadopago.com.br/developers/panel/app). Una vez allí, haz clic en el botón **Crear aplicación**, ubicado en la esquina superior derecha.

   > WARNING
   >
   > Importante
   >
   > Durante la creación de tu aplicación, es posible que debas realizar una reautenticación de identidad. Si ya has completado el proceso de verificación, se te solicitará reautenticarte. Si aún no lo has realizado, serás redirigido/a para enviar los documentos necesarios. Este paso adicional de autenticación es esencial para proteger tu cuenta y garantizar el cumplimiento de las operaciones. Sigue las instrucciones proporcionadas para crear tu aplicación con éxito.

2. Ingresa un nombre para identificar tu aplicación (tienes un límite de 50 caracteres).
3. Elige la solución de **Pagos online**.
4. A la hora de elegir el producto a integrar, puedes elegir “Checkout Pro” o “Checkout API”. 
5. Elige el modelo de integración **Marketplace**.
6. Una vez que hayas completado la información solicitada, haz clic en **Crear aplicación** y ¡listo!

> Puedes consultar la [documentación sobre el Panel del Desarrollador](/developers/es/docs/split-payment/additional-content/your-integrations/dashboard) si tienes dudas sobre cómo utilizarlo.

## Configurar el Redirect URL

Después de crear la aplicación, es necesario dirigirse a la pantalla de edición para completar el campo de Redirect URL (en las solicitudes de OAuth se muestra como redirect_uri), el cual debe contener la URL del sitio del marketplace donde se enviará el token del vendedor al completar el proceso de vinculación.

![Redirect URL](/images/split-payment/redirect-url-pt.png)
