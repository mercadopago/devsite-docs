# Crear aplicación

Crea tu aplicación para integrar con la solución de Split de siguiendo los pasos a continuación.

   > NOTE
   >
   > Importante
   >
   > Durante la creación de su aplicación, es posible que sea necesario reautenticar su identidad. Si ya ha completado la verificación, se solicitará la reautenticación. En caso contrario, se le redirigirá para enviar los documentos necesarios. Este paso adicional es esencial para proteger su cuenta y garantizar la conformidad de las operaciones. Puede consultar la [documentación sobre el Panel del desarrollador](/developers/es/docs/split-payment/additional-content/your-integrations/dashboard) si tiene alguna pregunta sobre cómo utilizarlo.

1. Accede a [Tus integraciones](https://www.mercadopago.com.br/developers/panel/app). Una vez allí, haz clic en el botón **Crear aplicación**, ubicado en la esquina superior derecha.
2. Ingresa un nombre para identificar tu aplicación (tienes un límite de 50 caracteres).
3. Elige la solución de **Pagos online**.
4. A la hora de elegir el producto a integrar, puedes elegir “Checkout Pro” o “Checkout API”. 
5. Elige el modelo de integración **Marketplace**.
6. Una vez que hayas completado la información solicitada, haz clic en **Crear aplicación** y ¡listo!

## Configurar el Redirect URL

Después de crear la aplicación, es necesario dirigirse a la pantalla de edición para completar el campo de Redirect URL (en las solicitudes de OAuth se muestra como redirect_uri), el cual debe contener la URL del sitio del marketplace donde se enviará el token del vendedor al completar el proceso de vinculación.

![Redirect URL](/images/split-payment/redirect-url-es.png)
