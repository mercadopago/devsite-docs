# Prueba tu integración

[TXTSNIPPET][/guides/snippets/test-integration/type-of-test-users]

## Crea usuarios de prueba

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

> Existen dos formas de hacer el pago: como **usuario invitado**, completando la dirección de correo electrónico deseado, y como **usuario registrado**, accediendo a una cuenta de Mercado Pago con usuario y clave. En este último escenario se habilitarán como medio de pago las tarjetas previamente guardadas y el saldo disponible en la cuenta.

## Prueba el flujo de pago

### 1. Configura el checkout con los datos de tu usuario vendedor

Genera una preferencia con las [credenciales]([FAKER][CREDENTIALS][URL]) del usuario de prueba que quieras usar como vendedor.

### 2. Realiza un pago con tu usuario comprador

#### Comprar como usuario invitado

Al abrir el checkout creado con los datos de tu usuario vendedor:

1. Selecciona `Tarjeta` como medio de pago.
2. Ingresa los datos de una [tarjeta de prueba](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/test-integration#bookmark_tarjetas_de_prueba).
3. Completa el e-mail deseado.

#### Comprar como usuario registrado 

Al abrir el checkout creado con los datos de tu usuario vendedor:

1. Inicia sesión en una cuenta Mercado Pago con el usuario de prueba comprador.
2. Selecciona `Tarjeta` como medio de pago.
3. Elige una tarjeta guardada o ingresa los datos de una [tarjeta de prueba](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/test-integration#bookmark_tarjetas_de_prueba).


>WARNING
>
>Importante
>
> * Usa montos bajos para hacer pagos de prueba.
> * Usa siempre tarjetas de pruebas, ya que no es posible retirar el dinero.

### Tarjetas de prueba

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

## Recibe los pagos

Para empezar a cobrar, debes [activar tus credenciales]([FAKER][CREDENTIALS][URL]).

Antes de activarlas, verifica si las credenciales utilizadas en tu integración son las de la cuenta que debería recibir el dinero de las ventas.

---

### Próximo paso

> LEFT_BUTTON_REQUIRED_ES
>
> Configuración de preferencias
>
> Configura los atributos de tus preferencias y adapta el Checkout Pro a tu modelo de negocio.
>
> [Configuración de preferencias](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/configurations)
