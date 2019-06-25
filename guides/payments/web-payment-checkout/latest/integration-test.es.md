---
sites_supported:
  - mla
---

# Prueba tu Integración

## Usuarios de prueba
Los usuarios de prueba permiten interactuar con el Web Checkout y generar flujos de pagos, en un escenario idéntico a lo que será tu integración en producción.sería en la vida real.

## Tipos de Usuarios de Prueba

Conceptualmente hay dos tipos de usuarios de prueba: comprador y vendedor.

* Vendedor: el que utilizarás para configurar la aplicación y credenciales para cobrar
* Comprador: el que utilizarás para probar el flujo de pago para un usuario registrado

Puedes diferenciar los usuarios de prueba que creaste por rol, uno que actúe como vendedor y otro como comprador. El primero, es el que usarás para configurar las credenciales, y el segundo es el que realizará el flujo de Pago cuando se abra el Web Checkout. 
Como usuario comprador, podrás interactuar con el Web Checkout de dos formas:

1. Como usuario invitado:, solo necesitas ingresar ingresando una dirección de correo electrónico. que recibirá un email con la información del pago realizado.
1. Como usuario registrado(n una cuenta de Mercado Pago):, ingresando usuario y contraseña. En caso de tener disponible dinero en cuenta y/o tarjetas guardadas, se verán  habilitados como medios de pago.

> Para realizar las pruebas es necesario que crees dos usuarios

## Crea usuarios
Genera un usuario de prueba, ejecutando el siguiente curl
[[[
 ```curl
===
Request
===
curl -X POST \
-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=ENV_ACCESS_TOKEN" \
-d '{"site_id":"MLA"}'
```
]]]
[[[
 ```json
===
Response
===
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
}
```
]]]

>WARNING
>
>Importante
>
> * Puedes tener hasta 10 cuentas de usuarios de prueba en simultáneo, por lo cual te recomendamos guardar el email y password de cada uno de los usuarios que generes.
* Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
* Para hacer pagos de prueba usa montos bajos.
* Tanto el comprador como el vendedor deben ser usuarios de prueba.
* No es posible retirar a cuentas bancarias el dinero recibido en las pruebas.

## Prueba el flujo de Pago
## Vendedor

1. Inicia sesión en Mercado Pago con una cuenta de usuario de prueba
1. Configura la aplicación
1. Configura tus credenciales

## Comprador invitado

#### Pruebas con tarjeta de crédito o débito

1. Seleccioná el medio de pago “Tarjeta”
1. Completa los datos con una [tarjeta de prueba](pending)

## Comprador registrado (cuenta de Mercado Pago)

#### Pruebas con tarjeta de crédito o débito

1. Cierra sesión del usuario de prueba vendedor
1. Inicia sesión en Mercado Pago con una cuenta de usuario de prueba comprador
1. Seleccioná el medio de pago “Tarjeta”
1. Completa los datos con una [tarjeta de prueba](pending)

## Completa el formulario de alta

Sólo debes completar el formulario [Quiero ir a producción](https://www.mercadopago.com/mla/account/credentials/), desde la  sección Credenciales.
Al completar los campos, ten en cuenta:

* Documento: refiere al tipo de documento y el número sin puntos o barras, por ejemplo “DNI 12345678”.
* Dirección postal: ingresa un e-mail de contacto del sitio.



