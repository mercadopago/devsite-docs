# Credenciales

Las credenciales son **contraseñas exclusivas** utilizadas para identificar una integración en tu cuenta. Son necesarias para capturar de forma segura los pagos en tiendas online y otras plataformas. 

Para obtener las credenciales, primero deberás **crear una aplicación** dentro de Mercado Pago. Si aún no creaste ninguna, puedes aprender cómo hacerlo en la documentación de [Panel del desarrollador](/developers/es/docs/checkout-pro/additional-content/your-integrations/dashboard#bookmark_crear_una_nueva_aplicaci%C3%B3n).

Cada aplicación contará con **dos pares de credenciales de producción** y, cuando sea aplicable al producto, **un par de credenciales de test**.

## Obtener credenciales

A continuación, conoce cómo obtener tus credenciales y en qué situaciones debes utilizarlas.

### Credenciales de producción

Las **credenciales de producción** son un conjunto de claves que te permiten recibir pagos reales en tiendas en línea y en otras aplicaciones.

Puedes obtener tus credenciales de producción de dos maneras:


1. Ingresando a [Tus integraciones > "Tu aplicación" > Producción > Credenciales de producción](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

----[mlb]----
![Como acessar as credenciais através das Suas Integrações](/images/credentials/credentials-prod-panel-pt.gif)
------------

----[mla, mlu, mlc, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/credentials/credentials-prod-panel-es.gif)
------------

2. A través de tu cuenta de Mercado Pago, accediendo a Tu negocio > Configuraciones > Gestión y administración > Credenciales.

----[mlb]----
![Como acessar as credenciais através do Mercado Pago](/images/credentials/credentials-prod-mp-pt.gif)
------------

----[mla, mlu, mlc, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Mercado Pago](/images/credentials/credentials-prod-mp-es.gif)
------------

Al acceder a tus credenciales de producción, podrás ver los siguientes pares de credenciales:

| Tipo | Descripción |
| :--- | :--- |
| Public Key | La clave pública de la aplicación se utiliza generalmente en el frontend. Permite, por ejemplo, acceder a información sobre los medios de pago y cifrar los datos de la tarjeta. |
| Access token | Clave privada de la aplicación que siempre se debe utilizar en el backend para generar pagos. Es esencial mantener esta información segura en tus servidores. |

La **Public Key** y el **Access Token** son credenciales que serán utilizadas, no necesariamente juntas, en las integraciones realizadas con las soluciones de pago de Mercado Pago (Checkout Pro, Checkout Bricks,----[mlb]---- Checkout Transparente------------ ----[mla, mlu, mlc, mlm, mco, mpe]----Checkout API------------ ----[mla, mlb, mlc, mlu]----, Suscripciones y Código QR------------ ----[mco, mlm, mpe]---- y Suscripciones------------) y en las integraciones del plugin de Mercado Pago con plataformas de e-commerce como, por ejemplo, Shopify, WooCommerce y Tiendanube.

En algunas soluciones de pago, la Public Key y el Access Roken también se utilizarán para probar la integración. Sin embargo, en estas situaciones se utilizarán las credenciales de una [cuenta de prueba](/developers/es/docs/your-integrations/test/accounts) que haya sido creado.

Para obtener más información acerca de cuáles credenciales se utilizarán en tu integración, [consulta la documentación correspondiente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs) de la solución que estás integrando.

| Tipo | Descripción |
| :--- | :--- |
| Client ID  | El ID de cliente es un identificador único que representa tu integración. |
| Client secret | Clave privada utilizada en algunos complementos para generar pagos. Es extremadamente importante mantener esta información segura en tus servidores y no permitir el acceso a ningún usuario del sistema o intruso. |

El **Client ID** y el **Client Secret** son credenciales utilizadas en algunas integraciones más antiguas del plugin de Mercado Pago con plataformas de comercio electrónico, y principalmente en la obtención del Access Token a partir del flujo (grant type) de **Client Credentials**. Este flujo se utiliza cuando se van a utilizar las credenciales para acceder a un recurso en nombre propio, es decir, se utiliza para obtener un Access Token sin interacción del usuario.

Accede a la documentación de [OAuth](/developers/es/docs/security/oauth/introduction) para más información.

> NOTE
>
> Nota
>
> Si por motivos de seguridad o cualquier otro motivo relevante necesitas renovar tus credenciales, simplemente haz clic en **Más opciones** (tres puntos al final de la tarjeta) > **Renovar**. Ten en cuenta que tu integración puede verse afectada por el cambio.

### Credenciales de prueba

Las credenciales de prueba son un conjunto de claves que **no están disponibles en todas las aplicaciones**, solo en los productos en que estas claves se utilizarán para testear la respectiva integración.

Estas credenciales pueden ser combinadas con tarjetas de crédito de prueba para simular transacciones y verificar el correcto funcionamiento de las integraciones.

Podrás obtener tus credenciales de prueba accediendo a [Tus integraciones > "Tu aplicación" > Credenciales de prueba](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

> WARNING
>
> Importante
>
> Si por cuestiones de seguridad no deseas seguir compartiendo tus credenciales, puedes cancelarlo.