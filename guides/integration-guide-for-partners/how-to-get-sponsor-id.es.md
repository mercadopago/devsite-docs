# Cómo obtener el Sponsor ID

> NOTE
>
> Nota
>
> En caso de que la plataforma asociada no tenga una cuenta de Mercado Pago a nombre de la propia plataforma, será necesario [crear una cuenta](https://www.mercadopago[FAKER][URL][DOMAIN]/registration-mp?mode=mp) para aplicar su ID de cuenta a las transacciones.

Para obtener el ID de la cuenta de Mercado Pago, siga los siguientes pasos:

1. Accede al panel de credenciales de tu cuenta. Si no tienes ninguna aplicación creada, verás un botón para crear una nueva aplicación.
![Tus integraciones](/images/integration-guide-for-partners/partners-guide-1.png)

2. Después de crear la aplicación, haz clic para acceder a ella.
![Aplicación creada](/images/integration-guide-for-partners/partners-guide-2.png)

3. En la sección de **Credenciales de producción**, podrás ver tus claves de integración.

4. Localiza el Access Token y observa los últimos caracteres de la clave privada. Estos caracteres corresponden al ID de tu cuenta de Mercado Pago.

A continuación, puedes ver un ejemplo de cómo visualizar el ID de la cuenta de Mercado Pago:

![ID de la cuenta de Mercado Pago](/images/integration-guide-for-partners/partners-guide-32.png)

Puedes utilizar este ID de cuenta en tus integraciones y solicitudes de pago junto al campo `sponsor_id` para asociar las transacciones a tu cuenta de Mercado Pago.
