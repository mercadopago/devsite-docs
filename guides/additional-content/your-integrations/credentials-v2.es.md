# Credenciales

Las credenciales son **contraseñas exclusivas** utilizadas para identificar una integración en tu cuenta. Son necesarias para capturar de forma segura los pagos en tiendas online y otras plataformas. 

Cada aplicación contará con **dos pares de credenciales de producción** y, cuando sea aplicable al producto, **un par de credenciales de prueba**.

## Obtener credenciales

Para obtener las credenciales, sean de producción o de prueba, primero deberás **crear una aplicación** en Mercado Pago. Si aún no creaste ninguna, acceda a la documentación del [Panel del Desarrollador](/developers/es/docs/your-integrations/dashboard#bookmark_criar_nova_aplicação) para más información.

A continuación, conoce cómo obtener las credenciales y en qué situaciones deben ser utilizadas.

### Credenciales de producción

Las **credenciales de producción** son un conjunto de claves que te permiten recibir pagos reales en tiendas en línea y en otras aplicaciones.

Puedes obtener tus credenciales de producción de dos maneras:

1. Ingresando a [**Tus integraciones > "Tu aplicación" > Producción > Credenciales de producción**](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

![Cómo acceder a las credenciales a través de Tus Integraciones](/images/credentials/credentials-prod-mp-es-v2.gif)

2. A través de tu cuenta de Mercado Pago, accediendo a [**Tu negocio > Configuraciones > Gestión y administración > Credenciales**](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

![Cómo acceder a las credenciales a través de Mercado Pago](/images/credentials/credentials-prod-mp-es.gif)

Al acceder a las credenciales de producción, se mostrarán los siguientes pares de credenciales: **Public Key y Access Token**, además de **Client ID y Client Secret**.

#### Public Key y Access Token

La **Public Key** y el **Access Token** son credenciales que serán utilizadas, no necesariamente juntas, en las integraciones realizadas con las soluciones de pago de Mercado Pago, incluyendo:

- Checkout Pro
- Checkout Bricks
- ----[mlb]---- Checkout Transparente----------------[mla, mlu, mlc, mlm, mco, mpe]---- Checkout API------------
- Suscripciones
----[mla, mlb, mlm]----
- Mercado Pago Point

------------
----[mla, mlb, mlc, mlu]----
- Código QR

------------

Estas credenciales también se utilizan en las integraciones del plugin de Mercado Pago con plataformas de e-commerce como, por ejemplo, Shopify, WooCommerce y ----[mla, mlu, mlc, mlm, mco, mpe]----Tiendanube----------------[mlb]----Nuvemshop------------.

> WARNING
>
> Importante
>
> En algunas soluciones de pago, la Public Key y el Access Token también se utilizarán para probar la integración. Sin embargo, en estas situaciones se utilizarán las credenciales de una [cuenta de prueba](/developers/es/docs/your-integrations/test/accounts) previamente creada.

| Tipo | Descripción |
| :--- | :--- |
| Public Key | La clave pública de la aplicación se utiliza generalmente en el frontend. Permite, por ejemplo, acceder a información sobre los medios de pago y cifrar los datos de la tarjeta. |
| Access Token | Clave privada de la aplicación que siempre se debe utilizar en el backend para generar pagos. Es esencial mantener esta información segura en tus servidores. |

Para obtener más información sobre qué credenciales serán necesarias para tu integración, [consulta la documentación específica](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs) de la solución que se está integrando.

#### Client ID y Client Secret

El **Client ID** y el **Client Secret** son credenciales utilizadas en algunas integraciones más antiguas con plataformas de comercio electrónico y, principalmente, en las integraciones que utilizan [OAuth](/developers/es/docs/security/oauth/introduction) como protocolo para obtención de información privada de cuentas de Mercado Pago. En particular, se utilizan durante el flujo (_grant type_) de **Client Credentials**, que permite acceder a un recurso en nombre propio y obtener un Access Token sin interacción del usuario.

| Tipo | Descripción |
| :--- | :--- |
| Client ID | El Client ID es un identificador único que representa tu integración. |
| Client Secret | Clave privada utilizada en algunos complementos para generar pagos. Es extremadamente importante mantener esta información segura en tus servidores y no permitir el acceso a ningún usuario del sistema o intruso. |

> NOTE
>
> Importante
>
> Si por motivos de seguridad o cualquier otra razón relevante necesitas renovar tus credenciales, simplemente haz clic en **Más opciones** (tres puntos al final de la tarjeta) > **Renovar**. Ten en cuenta que tu integración puede verse afectada por el cambio.

### Credenciales de prueba

Las credenciales de prueba son un conjunto de claves que se utilizan para probar la integración. Pueden combinarse con tarjetas de crédito de prueba para simular transacciones y verificar el correcto funcionamiento de las integraciones.

Podrás obtener tus credenciales de prueba, **siempre y cuando estén disponibles para tu integración**, accediendo a [Tus integraciones > "Tu aplicación" > Credenciales de prueba](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

> WARNING
>
> Importante
>
> Estas credenciales **no están disponibles para todos los productos de Mercado Pago**, por lo que sólo estarán activas en las aplicaciones creadas para un producto que las requiera.

![Cómo acceder a las credenciales a través de Tus Integraciones](/images/credentials/credentials-test-panel-es.gif)

#### Credenciales de prueba no disponibles

Si al crear una aplicación seleccionaste un producto de Mercado Pago que no requiere credenciales de prueba, verás la siguiente pantalla:

![Pantalla de cuentas de test bloqueada](/images/credentials/blocked-test-credentials-es-v2.png)

Si estás integrando un producto que no utiliza credenciales de prueba, no podrás utilizarlas. En su lugar, deberás utilizar [cuentas de prueba](/developers/es/docs/your-integrations/test/accounts). 

> Las **cuentas de prueba** no tienen habilitadas las credenciales de prueba. Si utilizas una cuenta de prueba, deberás usar sus credenciales de producción.

## Compartir credenciales

Cuando recibas ayuda en la integración o configuración de tus canales de pago, puedes compartir tus credenciales de forma segura con otra cuenta de Mercado Pago. Para hacerlo, sigue los pasos a continuación.

> WARNING
>
> Importante
>
> Si por cuestiones de seguridad no deseas seguir compartiendo tus credenciales, puedes cancelarlo.

1. Accede a tu cuenta de Mercado Pago.
2. Ve a [Tu negocio > Configuraciones > Gestión y Administración > Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).
3. En esa página, selecciona la opción **Compartir mis credenciales**.
4. Ingresa el correo electrónico de la persona a la que deseas conceder acceso.
5. Asegúrate de que el correo electrónico esté asociado a la cuenta de Mercado Pago de la persona en cuestión.