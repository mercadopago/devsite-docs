---
sites_supported:
  - mla
---

# Prueba tu integración

## Usuarios de prueba

Los usuarios de prueba te permiten interactuar con el Web Checkout y generar flujos de pagos en una copia exacta de tu integración.

## Tipos de Usuarios de Prueba

Hay dos tipos de usuarios de prueba: vendedor y comprador.

* Vendedor: es la cuenta que usas para configurar la aplicación y credenciales para el cobro.
* Comprador: es la cuenta que se usa para probar el proceso de compra.

Como usuario comprador, podrás interactuar con el Web Checkout de dos formas:

1. Como usuario invitado: solo necesitas completar la dirección de correo electrónico.
1. Como usuario registrado: accedes a la cuenta de Mercado Pago con el usuario y contraseña. En caso de tener disponible dinero en cuenta o tarjetas guardadas, estarán habilitadas como medios de pago.

## Cómo crear usuarios
Para realizar las pruebas es necesario que tengas como mínimo dos usuarios: un comprador y un vendedor.

Genera un usuario de prueba ejecutando el siguiente curl:

**Solicitud**

 ```curl
curl -X POST \
-H "Content-Type: application/json" \
"https://api.mercadopago.com/users/test_user?access_token=TEST-7802846747055705-061416-c0c9b443246bef3a3bab6a19f36c93c0-390383281" \
-d '{"site_id":"MLA"}'
```

**Respuesta**

 ```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
}
```

>WARNING
>
>Importante
>
> * Puedes generar hasta 10 cuentas de usuarios de prueba en simultáneo. Por eso, te recomendamos guardar el email y password de cada uno.
> * Los usuarios de prueba caducan luego de 60 días sin actividad en Mercado Pago.
> * Para hacer pagos de prueba te recomendamos usar montos bajos.
> * Tanto el comprador como el vendedor deben ser usuarios de prueba.
> * Usa tarjetas de pruebas, ya que no es posible retirar el dinero.

## Prueba el flujo de Pago
### Vendedor

Configura la preferencia con las [credenciales](https://www.mercadopago.com/mla/account/credentials) del usuario de prueba que quieras usar como vendedor.

### Comprador invitado

#### Pruebas con tarjeta de crédito

1. Selecciona Tarjeta como medio de pago.
1. Ingresa los datos de una [tarjeta de prueba](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/advanced-integration#bookmark_Tarjetas_de_prueba/).
1. Completa el e-mail y ¡listo!

## Comprador registrado (cuenta de Mercado Pago)

#### Pruebas con tarjeta de crédito

1. Cierra sesión del usuario de prueba vendedor.
1. Inicia sesión en Mercado Pago con una cuenta de usuario de prueba comprador.
1. Selecciona Tarjeta como medio de pago.
1. Elige una tarjeta guardada o completa los datos con una nueva y ¡listo!

## Tarjetas de prueba

Tarjeta | Número
------------ | -------------
Mastercard | 5031 7557 3453 0604
Visa | 4170 0688 1010 8020
American Express | 3711 8030 3257 522


## Comenzar a recibir pagos

Para empezar a cobrar, debes completar el formulario [Quiero ir a producción](https://www.mercadopago.com/mla/account/credentials/).

Al completar los campos, ten en cuenta:

* Documento: refiere al tipo de documento y el número sin puntos o barras, por ejemplo “DNI 12345678”.
* Dirección postal: ingresa un e-mail de contacto del sitio.

Al terminar el formulario, verifica que las credenciales en tu integración sean las de la cuenta que reciba el dinero de las ventas.

[Ir a Integración avanzada](https://beta.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/advanced-integration/)
