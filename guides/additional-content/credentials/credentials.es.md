# Credenciales

Las credenciales son contraseñas únicas con las que identificamos una integración en tu cuenta. Sirven para capturar pagos en tiendas online y otras aplicaciones de forma segura. Puedes encontrarlas en el [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) o en tu cuenta de Mercado Pago en [Tu Negocio> Configuración> Gestión y Administración> Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

> WARNING 
> 
> Importante
> 
> Si no eres desarrollador, te recomendamos que verifiques tus credenciales en tu cuenta de Mercado Pago. Y, si alguien te está ayudando a configurar las integraciones de tu tienda, puedes compartirle tus credenciales.

Hay dos tipos diferentes de credenciales:

* **Credenciales de prueba**. Las credenciales de prueba deben usarse para probar tus integraciones y pueden ser utilizadas junto con tarjetas de crédito de prueba para simular recibos de tarjetas. Se recomienda utilizarlas antes de las credenciales de producción para garantizar que las integraciones funcionen correctamente.
* **Credenciales de producción**. Las credenciales de producción se utilizan para recibir pagos.

Ambos tipos de credenciales se componen de dos pares de llaves que debes usar según el producto que elijas. 
 Te recomendamos consultar la documentación de cada producto para obtener detalles sobre qué llaves usar.

 | Tipo | Descripción |
| :--- | :--- |
| Public key | Llave pública de la aplicación que normalmente se utiliza en el frontend y permite, por ejemplo, conocer los métodos de pago y cifrar los datos de la tarjeta. |
| Access token | Llave privada que se utiliza en algunos plugins para generar pagos. Es muy importante que estos datos estén protegidos en tus servidores y no sean accesibles por ningún usuario o atacante. |

| Type | Descripción |
| :--- | :--- |
| Client ID | ID único que identifica tu integración. |
| Client secret | Llave privada que se utiliza en algunos complementos para generar pagos. Es muy importante que estos datos estén protegidos en tus servidores y no sean accesibles por ningún usuario o atacante. |

> NOTE
> 
> Nota
>
>Tienes la opción de renovar tus credenciales por razones de seguridad o por el motivo que necesites. Para renovarlas, simplemente haz clic en Más opciones > Renovar.

## Compartir credenciales

Comparte tus credenciales de forma segura con quien te ayude a integrar o configurar tus canales de pago. Para hacerlo, accede a tu cuenta de Mercado Pago y en [Tu negocio> Configuraciones> Gestión y Administración> Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials), elige la opción “Compartir mis credenciales” e ingresa el correo electrónico de la persona a la que quieres darle acceso. 
Recuerda que el correo electrónico de la persona debe estar asociado a una cuenta de Mercado Pago. 

> WARNING 
> 
> Importante
>
> Una vez que tu integración esté completa, elimina los permisos para compartir credenciales para garantizar la privacidad y la seguridad.