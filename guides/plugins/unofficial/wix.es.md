# Wix

[Wix](https://pt.wix.com/) es una plataforma de comercio electrónico que te permite crear, diseñar y administrar tu tienda online, donde puedes ofrecer a tus clientes la posibilidad de realizar pagos a través de Mercado Pago o directamente en la página de tu tienda. 

Al integrar **Mercado Pago** en tu tienda Wix, tus pagos serán procesados ​​por [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/introduction), en el cual el comprador es dirigido a una página de Mercado Pago para completar el pago, o por [Checkout API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-api/introduction), que permite al comprador realizar el pago dentro del entorno de tu tienda.

Antes de integrar Mercado Pago con tu tienda Wix, verifica los requisitos previos y asegúrate de que se cumplan todos.

# Requisitos previos

En la siguiente tabla, puedes encontrar los requisitos necesarios para integrar Mercado Pago a tu tienda Wix. Es importante asegurarse de que se cumplan todos para que el proceso de integración funcione correctamente.

| Requisitos | Descripción |
|---|---|
| Cuenta en la plataforma Wix | Para realizar la integración, debes tener una cuenta Wix activa. Si no es así, [ve a esta página de Wix](https://users.wix.com/signin) para crear. |
| Cuenta de vendedor de Mercado Pago | Para realizar ventas, necesitas una cuenta de vendedor en Mercado Pago. Si aún no lo tiene, [vaya a esta página de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) para crearlo. |
| Credenciales de producción y prueba | Credenciales son contraseñas únicas con las que identificamos una integración en su cuenta y se utilizan para capturar pagos de forma segura en tiendas virtuales y otras aplicaciones. [Acceda a nuestra documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/credentials) para obtener más información sobre cómo obtener sus credenciales. | 
----[mlb]----| Clave Pix | Para configurar Pix en su integración con Mercado Pago, se debe configurar su clave Pix. Para obtener más información sobre cómo configurarlo, [consulte nuestra documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/17843). |------------

Si se cumplen todos los requisitos previos, continúe con el paso de integrar Checkout Pro y / o Checkout API en su tienda.



# Integración del Checkout 

Una vez cumplidos todos los requisitos previos, podrá integrar Checkout Pro y / o Checkout API en su tienda. Puede integrar uno de los dos o ambos, según los requisitos de su negocio.

En las siguientes secciones, encontrará todos los pasos necesarios para la integración completa de los modelos mencionados. Para hacer esto, siga los pasos a continuación.


## Checkout Pro

Cuando ofreces Checkout Pro, tu comprador es redirigido a una página de Mercado Pago donde debes seleccionar el método de pago que deseas y completar el pago de tu compra directamente en el entorno de Mercado Pago.

Para obtener más información sobre los métodos de pago disponibles y los principales beneficios que ofrece Checkout Pro, [haga clic aquí](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/checkout-pro/introduction) y acceda a nuestra documentación.

Para instalar el Checkout Pro en su tienda, siga los pasos a continuación.


1. Conecta el _plugin_ Mercado Pago como se describe [en esta documentación de](https://support.wix.com/es/article/conectando-mercadopago-como-provedor-de-pagamento) Wix. Automáticamente será llevado a la página de configuración del _plugin_.
2. En la página de configuración, complete los campos con sus **credenciales de prueba** (_Public Key_ y _Access Token_) para que pueda probar la integración.
3. En _Enable sandbox mode_, haga clic para habilitar. Esto le permitirá realizar compras de prueba para evaluar la funcionalidad de la integración.

¡Listo! Con el Checkout Pro instalado en su tienda, realice una prueba de compra y asegúrese de que la integración funcione correctamente.


### Prueba de compras

[TXTSNIPPET][/guides/snippets/test-integration/wix-test-purchase]

### Activación del modo producción

[TXTSNIPPET][/guides/snippets/test-integration/wix-production-mode.es.md

----[mlb, mlm]----
## Checkout API

A diferencia de Checkout Pro, al instalar el Checkout API, todo el proceso de pago se completará en el entorno de su tienda. Esto significa que el comprador no será redirigido a una página de Mercado Pago para realizar el pago.

Para integrar el Checkout API en su tienda, siga los pasos a continuación.

1. Accede a tu [panel de control de Wix](https://manage.wix.com/dashboard/) y selecciona la tienda que deseas configurar.
2. En el menú principal, haga clic en **Opciones** > **Acepta pagos**.
3. En la parte inferior de la página, haz clic en **Ver más opciones de pago**.
4. En la sección **Tarjetas de crédito/débito de terceros**, haga clic en **Ver opciones**.
5. En **Mercado Pago** haga clic en **Conectar**.
6. En la página de configuración, complete los campos con sus credenciales de prueba (_Public Key_ y _Access Token_) para que pueda probar la integración.
7. En _Enable sandbox mode_, haga clic para habilitar. Esto le permitirá realizar compras de prueba para evaluar la funcionalidad de la integración.
8. Haga clic en **Conectar**.
------------

----[mla, mpe, mco, mlu, mlc]---- 
## Checkout API

A diferencia de Checkout Pro, la instalación del Checkout API completará todo el proceso de pago en el entorno de su tienda . Esto significa que el comprador no será redirigido a una página de Mercado Pago para realizar el pago.

Para integrar el Checkout API en su tienda, siga los pasos a continuación.

1. Ve a tu [panel de control de Wix](https://manage.wix.com/dashboard/) y selecciona la tienda que deseas configurar.
2. En el menú principal, haga clic en **Configuración** > **Aceptar pagos**.
3. En **Mercado Pago** haga clic en **Conectar**.
4. En la página de configuración, complete los campos con sus credenciales de prueba (Public Key y Access Token) para que pueda probar la integración.
5. En _Enable sandbox mode_, haga clic para habilitar. Esto le permitirá realizar compras de prueba para evaluar la funcionalidad de la integración.
6. Haga clic en **Conectar**.
------------

¡Listo! Con el Checkout API integrado en su tienda, realice una compra de prueba y asegúrese de que la integración se realizó correctamente.


### Prueba de compras

[TXTSNIPPET][/guides/snippets/test-integration/wix-test-purchase.es.md

### Activación del modo producción

[TXTSNIPPET][/guides/snippets/test-integration/wix-production-mode]
