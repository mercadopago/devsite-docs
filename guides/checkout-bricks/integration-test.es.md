> CLIENT_SIDE
>
> h1
>
> Crear usuarios de prueba

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

</br>

> CLIENT_SIDE
>
> h1
>
> Prueba el flujo de pago

## 1. Configura la integración con los datos de tu usuario vendedor

Configura la [public key de producción]([FAKER][CREDENTIALS][URL]) de tu **usuario de prueba vendedor** en el frontend de tu aplicación y el [access token de producción]([FAKER][CREDENTIALS][URL]) en el backend.

## 2. Realiza un pago con tu usuario comprador

### Pruebas con tarjeta de crédito

Inicia tu integración configurada con las credenciales de tu usuario de prueba vendedor:

1. Completa los datos de una [tarjeta de prueba](/developers/es/guides/additional-content/testing/test-cards).
1. Ingresa el e-mail de tu usuario de prueba comprador.
1. Confirma la compra, ¡y listo!