# Credenciales

Las credenciales son **claves de acceso exclusivas** utilizadas para identificar una integración en tu cuenta. Son necesarias para capturar de forma segura los pagos en tiendas online y otras plataformas. 

Cada aplicación contará con **dos pares de credenciales de producción** y, cuando sea aplicable al producto, **un par de credenciales de prueba**.

## Obtener credenciales

Para obtener las credenciales, sean de producción o de prueba, primero deberás **crear una aplicación** en Mercado Pago. Si aún no creaste ninguna, accede a la documentación del [Panel del Desarrollador](/developers/es/docs/your-integrations/dashboard#crearunanuevaaplicacin) para más información.

A continuación, conoce cómo obtener las credenciales y en qué situaciones deben ser utilizadas.

### Credenciales de producción

Las **credenciales de producción** son un conjunto de claves que permiten recibir pagos reales en tiendas y en otras aplicaciones.

Puedes obtener tus credenciales de producción de dos maneras:

1. Ingresando a [**Tus integraciones > "Tu aplicación" > Producción > Credenciales de producción**](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) a través del [Panel del desarrollador](/developers/es/docs/checkout-bricks/additional-content/your-integrations/dashboard).

![Cómo acceder a las credenciales a través de Tus Integraciones](/images/credentials/credentials-prod-panel-es.gif)

2. A través de tu cuenta de Mercado Pago, accediendo a [**Tu negocio > Configuraciones > Gestión y administración > Credenciales**](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

![Cómo acceder a las credenciales a través de Mercado Pago](/images/credentials/credentials-prod-mp-es.gif)

Al acceder a las credenciales de producción, se mostrarán los siguientes pares de credenciales: **Public Key y Access Token**, además de **Client ID y Client Secret**.

### Public Key y Access Token

La **Public Key** y el **Access Token** son credenciales que serán utilizadas, no necesariamente juntas, en las integraciones realizadas con las soluciones de pago de Mercado Pago, incluyendo:

- [Checkout Pro](/developers/es/docs/checkout-pro/landing)
- [Checkout Bricks](/developers/es/docs/checkout-bricks/landing)
- ----[mlb]---- [Checkout Transparente](/developers/es/docs/checkout-api/landing)----------------[mla, mlu, mlc, mlm, mco, mpe]---- [Checkout API](/developers/es/docs/checkout-api/landing)------------
- [Assinaturas](/developers/es/docs/subscriptions/landing)
----[mla, mlb, mlm]----
- [Mercado Pago Point](/developers/es/docs/mp-point/landing)
------------
----[mla, mlb, mlc, mlu]----
- [Código QR](/developers/es/docs/qr-code/landing)
------------

Estas credenciales también se utilizan en las integraciones del plugin de Mercado Pago con [plataformas de e-commerce](/developers/es/docs#platform-list).

> WARNING
>
> Importante
>
> En algunas soluciones de pago, la Public Key y el Access Token también se utilizarán para probar la integración. Sin embargo, en estas situaciones se utilizarán las credenciales de una [cuenta de prueba](/developers/es/docs/your-integrations/test/accounts) previamente creada.

| Tipo | Descripción |
| :--- | :--- |
| Public Key | La clave pública de la aplicación se utiliza generalmente en el frontend. Permite, por ejemplo, acceder a información sobre los medios de pago y cifrar los datos de la tarjeta. |
| Access Token | Clave privada de la aplicación que siempre se debe utilizar en el backend para generar pagos. Es esencial mantener esta información segura en tus servidores. |

Para obtener más información sobre qué credenciales serán necesarias para tu integración, consulta la [documentación específica](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs) de la solución que se está integrando.

### Client ID y Client Secret

El **Client ID** y el **Client Secret** son credenciales utilizadas en algunas integraciones más antiguas con plataformas de comercio electrónico y, principalmente, en las integraciones que utilizan [OAuth](/developers/es/docs/security/oauth/introduction) como protocolo para obtención de información privada de cuentas de Mercado Pago. En particular, se utilizan durante el flujo (_grant type_) de **Client Credentials**, que permite acceder a un recurso en nombre propio y obtener un Access Token sin interacción del usuario.

| Tipo | Descripción |
| :--- | :--- |
| Client ID | Identificador único que representa tu integración. |
| Client Secret | Clave privada utilizada en algunos complementos para generar pagos. Es extremadamente importante mantener esta información segura en tus servidores y no permitir el acceso a ningún usuario del sistema o intruso. |

### Credenciales de prueba

Las credenciales de prueba son un conjunto de claves que se utilizan para probar la integración. Pueden combinarse con tarjetas de crédito de prueba para simular transacciones y verificar el correcto funcionamiento de las integraciones.

Podrás obtener tus credenciales de prueba, **siempre y cuando estén disponibles para tu integración**, accediendo a [Tus integraciones > "Tu aplicación" > Credenciales de prueba](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

> WARNING
>
> Importante
>
> Estas credenciales **no están disponibles para todos los productos de Mercado Pago**, por lo que sólo estarán activas en las aplicaciones creadas para un producto que las requiera.

![Cómo acceder a las credenciales a través de Tus Integraciones](/images/credentials/credentials-test-panel-es.gif)

Si al crear una aplicación seleccionaste un producto de Mercado Pago **que no requiere credenciales de prueba**, no podrás utilizarlas. En su lugar, deberás utilizar [cuentas de prueba](/developers/es/docs/your-integrations/test/accounts) para probar tu integración correctamente. 

> Las **cuentas de prueba** no tienen habilitadas las credenciales de prueba. Si utilizas una cuenta de prueba, deberás usar sus credenciales de producción.

Cuando estés integrando un producto que no utiliza credenciales de prueba, verás la siguiente pantalla:

![Credenciales de prueba no disponibles](/images/credentials/blocked-test-credentials-es-v2.png)

## Compartir credenciales

Cuando recibas ayuda en la integración o configuración de tus canales de pago, puedes compartir tus credenciales de forma segura con otra cuenta de Mercado Pago. Para hacerlo, puedes hacerlo de dos maneras:

**A través de Tus integraciones en Mercado Pago Developers:**

1. Accede a [Tus integraciones](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) y accede a la aplicación deseada
2. Ve a la sección **Pruebas** o **Producción**, según el tipo de credencial que desees compartir.
3. Una vez seleccionas las credenciales, dirígete a la sección *Comparte las credenciales con un desarrollador* y haz clic en el botón **Compartir Credenciales**.
4. Ingresa el correo electrónico de la persona a la que deseas concederle acceso. Recuerda que es obligatorio que el correo electrónico esté asociado a una cuenta de Mercado Pago.

![Compartir credenciales en Tus Integraciones](/images/credentials/share-credentials-panel-es.gif)

**A través de Mercado Pago:**

1. Accede a tu cuenta de Mercado Pago.
2. Ve a [Tu negocio > Configuración > Gestión y Administración > Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).
3. En esa página, selecciona las credenciales de producción o las credenciales de prueba, según lo que desees compartir.
4. Una vez seleccionas las credenciales, dirígete a la sección *Comparte las credenciales con un desarrollador* y haz clic en el botón **Compartir credenciales**.
5. Selecciona la aplicación de la que quieres compartir tus credenciales e Ingresa el correo electrónico de la persona a la que deseas concederle acceso. Recuerda que es obligatorio que el correo electrónico esté asociado a una cuenta de Mercado Pago.

![Compartir credenciales en Mercado Pago](/images/credentials/share-credentials-mp-es.gif)

> WARNING
>
> Importante
>
> Puedes compartir las credenciales **hasta un máximo de 10 veces** con otras cuentas de Mercado Pago. Si alcanzas este límite, deberás eliminar permisos antiguos, sin impacto en las integraciones ya configuradas.
> <br><br>
> Además, si por cuestiones de seguridad no deseas seguir compartiendo tus credenciales, puedes cancelar el acceso.

## Renovar credenciales

Si por motivos de seguridad o cualquier otra razón relevante necesitas renovar tus credenciales, haz clic en **Más opciones** (tres puntos al final de la tarjeta) > **Renovar**. 

> WARNING
> 
> Atención
>
> Ten en cuenta que si las credenciales que vas a renovar están siendo usadas en alguna de tus integraciones, estás se verán afectadas y deberás reemplazarlas por las nuevas credenciales que obtengas tras la renovación.

![Cómo renovar tus credenciales](/images/credentials/renew-credentials-es.gif)