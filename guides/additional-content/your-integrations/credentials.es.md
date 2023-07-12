# Credenciales

Las credenciales son contraseñas exclusivas utilizadas para identificar una integración en tu cuenta. Desempeñan un papel fundamental en la captura segura de pagos en tiendas en línea y otras aplicaciones. Puedes encontrarlas en **Detalles de la aplicación > Credenciales** dentro del [Panel del desarrollador](/developers/panel/app) o en tu cuenta de Mercado Pago, accediendo a [Tu negocio > Configuraciones > Gestión y administración > Credenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

> WARNING
>
> Importante
>
> Si no tienes conocimientos técnicos o no eres un desarrollador, te recomendamos verificar tus credenciales directamente en tu cuenta de Mercado Pago. Y si alguien te está ayudando a configurar las integraciones en tu tienda, puedes compartir tus credenciales con esa persona.

Existen dos tipos diferentes de credenciales:

* **Credenciales de prueba**: Utiliza las credenciales de prueba para probar tus integraciones. Pueden combinarse con tarjetas de crédito de prueba para simular transacciones y verificar el correcto funcionamiento de las integraciones. Se recomienda utilizar estas credenciales antes de pasar a las credenciales de producción.
* **Credenciales de producción**: Utiliza las credenciales de producción para recibir pagos.

Ambos tipos de credenciales constan de dos pares de claves que debes utilizar según el producto elegido. Consulta la documentación específica de cada producto para obtener detalles sobre las claves que debes utilizar.

| Tipo | Descripción |
| :--- | :--- |
| Clave pública | La clave pública de la aplicación se utiliza generalmente en el frontend. Permite, por ejemplo, acceder a información sobre los medios de pago y cifrar los datos de la tarjeta. |
| Token de acceso | Clave privada de la aplicación que siempre se debe utilizar en el backend para generar pagos. Es esencial mantener esta información segura en tus servidores. |

| Tipo | Descripción |
| :--- | :--- |
| ID de cliente | El ID de cliente es un identificador único que representa tu integración. |
| Secreto de cliente | Clave privada utilizada en algunos complementos para generar pagos. Es extremadamente importante mantener esta información segura en tus servidores y no permitir el acceso a ningún usuario del sistema o intruso. |

> NOTE
>
> Observación
>
> Si es necesario, puedes renovar tus credenciales por motivos de seguridad o cualquier otro motivo relevante. Para renovarlas, simplemente haz clic en **Más opciones** > **Renovar**.

## Compartir credenciales

Cuando recibas ayuda en la integración o configuración de tus canales de pago, puedes compartir tus credenciales de forma segura. Para hacerlo, sigue los pasos a continuación:

1. Accede a tu cuenta de Mercado Pago.
2. Navega hasta [Tu negocio > Configuraciones > Gestión y administración > Credenciales](https://www.mercadopago/settings/account/credentials).
3. Dentro de esta página, selecciona la opción "Compartir mis credenciales".
4. Ingresa el correo electrónico de la persona a la que deseas otorgar acceso.
5. Asegúrate de que el correo electrónico esté asociado a la cuenta de Mercado Pago de la persona en cuestión.

> WARNING
>
> Importante
>
> Es importante recordar que una vez que se complete la integración, se recomienda eliminar los permisos de compartir credenciales para garantizar la privacidad y seguridad de tus datos.