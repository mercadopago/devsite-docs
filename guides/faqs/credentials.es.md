# Credenciales

## Qué son mis credenciales y dónde puedo encontrarlas

Las credenciales son las claves que te proporcionamos para que puedas hacer tus integraciones.

Tus credenciales son:

| Clave | Descripción |
| --- |--- |
| Public key  | Clave pública de la aplicación que usarás normalmente en el frontend y te permitirá, por ejemplo, conocer los medios de pago y cifrar datos de tarjeta.|
| Access token | Clave privada de la aplicación que usarás normalmente en el backend para generar pagos. Es muy importante que este dato quede protegido en tus servidores y no sea accesible por ningún usuario del sistema o atacante. |

Están disponibles en el panel de [Credenciales]([FAKER][CREDENTIALS][URL]) o desde tu cuenta de Mercado Pago en [Tu Negocio > Configuraciones > Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

Te recomendamos usar primero tus credenciales de prueba, o las de un usuario de prueba, para comprobar que todo funcione correctamente en Sandbox y luego podrás utilizar las productivas para comenzar a recibir pagos.

## Cómo compartir mis credenciales

Comparte tus credenciales de forma segura con quienes te ayuden a integrar o configurar tus canales de cobro.

En [Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials), elige la opción “Compartir mis credenciales” e ingresa el e-mail de la persona a la que quieres darle acceso. Ten en cuenta que su dirección de correo debe estar registrada en Mercado Pago o Mercado Libre.

> Desde tus credenciales compartidas, puedes [eliminar los permisos](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials) cuando tu integración ya esté terminada.

## Solicitar acceso a claves de otras cuentas

Puedes pedir acceso a los datos de otra cuenta para hacer una integración con Mercado Pago cuando lo necesites y tener a mano toda la información desde tu panel.

En [Credenciales > Otras credenciales](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials/share), haz clic en “Solicitar credenciales” y completa el e-mail de la cuenta de la que necesitas los datos. Ten en cuenta que la dirección de correo debe estar registrada en Mercado Pago o Mercado Libre.

Al finalizar las integraciones, elimina los permisos de acceso a las credenciales que te compartieron para cuidar la seguridad de los datos.

## Dónde encuentro las credenciales compartidas

Encuentra las claves que te compartieron en [Credenciales > Otras credenciales](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials/share).

Puedes ver el listado de cuentas que te dieron acceso, las que todavía están pendientes de aprobación y la opción de eliminar los permisos que ya no necesites.

## Ya estoy integrado e hice pruebas, ¿cómo implemento en producción?

Para ir a producción, tienes que [activar tus credenciales]([FAKER][CREDENTIALS][URL]).

> Si ya se encuentran activas, no tienes que hacer nada.

## Quiero actualizar mis credenciales, ¿cómo puedo renovarlas?

Puedes renovar tus claves desde tus [Credenciales]([FAKER][CREDENTIALS][URL]).

Por motivos de seguridad excepcionales, puede suceder que las credenciales necesiten actualizarse. Pero no te preocupes, las puedes renovar todas las veces que sea necesario.<br>

Ten en cuenta que tienes que reemplazar las credenciales que ya usabas por las nuevas en tu integración.