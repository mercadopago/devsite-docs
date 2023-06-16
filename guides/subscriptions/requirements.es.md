# Requisitos previos

Para realizar la integración de suscripciones, debes cumplir con los requisitos que se enumeran a continuación.

| Requisitos | Descripción |
|---|---|
| Aplicación  | Las aplicaciones son las diversas integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes a fin de tener todo organizado y mantener un control que facilite la gestión. Consulta [Panel del desarrollador](/developers/es/docs/subscriptions/additional-content/your-integrations/introduction) para obtener más información sobre cómo crear una aplicación. |
| Cuenta de vendedor Mercado Pago o Mercado Libre | Para integrar suscripciones en tu sitio web, necesitas una cuenta de vendedor en Mercado Pago o Mercado Libre. Si aún no la tienes, [haz clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crearla. |
| Credenciales | Contraseñas únicas con las que identificamos una integración en su cuenta. Para realizar las integraciones se requerirá la _Public key_ y el _Access token_. [haz clic aquí](/developers/pt/guides/additional-content/your-integrations/credentials) para obtener más información. |
| Integración con Javascript SDK - Card token ID | La integración con Javascript SDK de Mercado Pago te permite crear un token con los datos de la tarjeta y enviarlo a tu backend para ser utilizado en los pagos. Para obtener más información, [haz clic aquí](/developers/es/docs/checkout-api/integration-configuration/card/integrate-via-cardform).|
| Monto mínimo de transacción | ----[mlb]---- El monto mínimo permitido para crear una suscripción es de R$ 1,00 y el máximo de R$ 500,00 ------------ ----[mla]---- El monto mínimo permitido para crear una suscripción es de $5,00 y el máximo de $250.000,00 ------------ ----[mlm]---- El monto mínimo permitido para crear una suscripción es de $100.00 y el máximo de $200,000.00 ------------ ----[mlc]---- El monto mínimo permitido para crear una suscripción es de $950,00 y el máximo de $350.000,00 ------------ ----[mco]---- El monto mínimo permitido para crear una suscripción es de $1.600,00 y el máximo de $30.000.000 ------------ ----[mpe]---- El monto mínimo permitido para crear una suscripción es de $2,00 y el máximo de $1.500 ------------ ----[mlu]---- El monto mínimo permitido para crear una suscripción es de $15,00 y el máximo de $300.000 ------------ |
 
Si se cumplieron todos los requisitos previos, podrás realizar la integración de la suscripción.
