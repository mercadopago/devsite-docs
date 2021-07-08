# Requisitos previos para integrarte

## Glosario

Sabemos que algunos términos son nuevos. Antes de empezar, te los dejamos a mano. 

| Término | Descripción |
| --- | --- |
| Credenciales (Credentials) | Tus credenciales son las claves que te proporcionamos para que puedas configurar tus integraciones. Para poder encontrarlas, ve a tus [credenciales]([FAKER][CREDENTIALS][URL]) y selecciona las productivas. |
| `ACCESS_TOKEN` | Es la clave privada de la aplicación para generar pagos, dentro de la sección [credenciales]([FAKER][CREDENTIALS][URL]). Debes usarla para identificarte en tus integraciones. Siempre usa las del Modo Producción. |
| `USER_ID` | ID de la cuenta de Mercado Pago. Se compone por los últimos dígitos del `access_token` posteriores al último guión medio. También lo puedes encontrar como _`COLLECTOR_ID`_. |
| `SPONSOR_ID` | Es el `USER_ID` del usuario proveedor del sistema integrado con Mercado Pago. El `SPONSOR_ID` no puede ser igual al `USER_ID`. |
| Sucursal (Store) | Es una **tienda física** en la que tus clientes pueden adquirir tus productos o servicios. Puedes tener varias sucursales en una misma cuenta. |
| Caja (POS) | Es un **punto de venta** que existe en una sucursal o tienda física. Cada caja tendrá vinculado un código QR unívoco. |
| Orden | Es el pedido realizado por tu cliente. Contiene un listado de productos con su monto asociado. |

> Encuentra toda la información sobre tus credenciales en nuestras [preguntas frecuentes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/faqs/credentials).

## Requisitos previos

Ten en cuenta estos aspectos antes de empezar:

### 1. Accede a una cuenta

Para poder comenzar la integración, es necesario **contar con una cuenta de Mercado Pago o Mercado Libre**. 

Puedes [Ingresar](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/pre-requisites) a una cuenta que ya exista o [Crear una cuenta nueva](https://www.mercadopago[FAKER][URL][DOMAIN]).

### 2. Crea una aplicación

Necesitarás crear una aplicación por cada solución para tener todo organizado y llevar un control que te facilite la gestión. Crea una aplicación para obtener credenciales y configurar notificaciones webhooks.

Es fácil, te contamos cómo hacerlo:

1. Ingresa a [Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications).
2. Elige “Nueva aplicación” o “Crear tu primera aplicación”.
3. Ponle un nombre con el que puedas identificarla más adelante.
4. Acepta nuestros Términos y Condiciones. ¡Y listo!

> NOTE
>
> Nota
>
> Si vas a operar en nombre de otros, puedes trabajar con las credenciales de ellos de una forma más fácil y segura por [Marketplace](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/marketplace/checkout-api/introduction).

### 3. Generar usuarios de prueba

Para comenzar la integración es necesario que tengas como mínimo dos usuarios: un comprador y un vendedor.

Ejecuta el siguiente comando para generar un usuario de prueba:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test_user"
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```

> NOTE
> 
> Nota
> 
> Las credenciales que utilices deben ser las productivas de la cuenta con la cual vayas a operar.  

Respuesta:

```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
}
```

> WARNING
> 
> IMPORTANTE
> 
> * Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos guardar el email y password de cada uno.
> * Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
> * Para hacer pagos de prueba te recomendamos usar montos bajos.
> * Tanto el comprador como el vendedor deben ser usuarios de prueba.
> * Usa tarjetas de pruebas, ya que no es posible retirar el dinero.

Una vez creados los usuarios de pruebas, ya puedes comenzar con la integración y crear las sucursales y cajas.

---
### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Sucursales y Cajas
>
> Para realizar la integración, primero debes configurar tus sucursales y cajas.
>
> [Sucursales y Cajas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/stores-pos)
