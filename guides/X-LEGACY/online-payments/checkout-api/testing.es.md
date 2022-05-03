# Prueba tu integración

Te explicamos cómo utilizar nuestras tarjetas y usuarios de prueba para verificar que tus pagos sean creados correctamente y que los mensajes que quieras comunicar sean efectivos.

## Cómo probar tu integración

[TXTSNIPPET][/guides/snippets/test-integration/type-of-test-users]

## Cómo crear usuarios

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

## Prueba el flujo de pago

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Configura la integración con los datos de tu usuario vendedor

Configura la [public key de producción]([FAKER][CREDENTIALS][URL]) de tu **usuario de prueba vendedor** en el frontend de tu aplicación y el [access token de producción]([FAKER][CREDENTIALS][URL]) en el backend.

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Realiza un pago con tu usuario comprador

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pruebas con tarjeta de crédito

Inicia tu integración configurada con las credenciales de tu usuario de prueba vendedor:

1. Completa los datos de una [tarjeta de prueba](#bookmark_tarjetas_de_prueba).
1. Ingresa el e-mail de tu usuario de prueba comprador.
1. Confirma la compra, ¡y listo!

## Tarjetas de prueba

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

> WARNING
>
> Importante
>
> Ten en cuenta que no es posible probar el flujo completo para medios de pago en efectivo.

## Comenzar a recibir pagos

Para empezar a cobrar, debes cumplir los [requisitos para salir a producción](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/goto-production) y [activar tus credenciales]([FAKER][CREDENTIALS][URL]).

Antes de activarlas, verifica que las credenciales en tu integración sean las de la cuenta que reciba el dinero de las ventas.<br/>

---

### Próximos pasos

> LEFT_BUTTON_REQUIRED_ES
>
> Mensajes de respuesta
>
> Ayuda a tus clientes a completar sus pagos sin errores.
>
> [Mensajes de respuesta](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/handling-responses)

> RIGHT_BUTTON_RECOMMENDED_ES
>
> Referencias de API
>
> Encuentra toda la información necesaria para interactuar con nuestras APIs.
>
> [Referencias de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference)
