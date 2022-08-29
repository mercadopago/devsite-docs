# Requisitos previos para tu integración

Ten en cuenta estos aspectos antes de empezar:

* Accede a una cuenta
* Crea una aplicación
* Genera usuarios de prueba
* Obtén tu Access token
* Identifica tu integración

## 1. Accede a una cuenta

Para poder comenzar la integración, es necesario **contar con una cuenta de Mercado Pago o Mercado Libre**.

Puedes ingresar a una cuenta existente o [Crear una cuenta nueva](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing).

## 2. Crea una aplicación

Para realizar transacciones a través de la integración de Mercado Pago, se debe crear una credencial. Esta credencial tendrá una identificación y un Access token, solo con este token podrás realizar transacciones utilizando una cuenta de Mercado Pago.

Crea una aplicación para obtener credenciales y configurar notificaciones webhooks.

Es fácil, te contamos cómo hacerlo:

1. Ingresa a [Tus integraciones](https://www.mercadopago.com/developers/panel/applications).
2. Selecciona el símbolo dentro del apartado **Tus aplicaciones** para crear una nueva aplicación.
3. Ponle un nombre con el que puedas identificarla más adelante.
4. Acepta nuestros Términos y Condiciones. ¡Y listo!

> NOTE
>
> Nota
>
> En caso de PDV integrador con varias conexiones con cuentas Mercado Pago, ver tema 4 y 5. Atención a la seguridad de tu integración e implementa [Oauth](/developers/es/docs/qr-code/additional-content/security/oauth/introduction).

## 3. Genera usuarios de prueba

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

Una vez creados los usuarios de prueba, ya puedes comenzar con la integración y crear las sucursales y cajas.

## 4. Obtén tu Access token (OAuth)

Si eres un integrador que trabajará con varios comercios para que operen con Mercado Pago, te recomendamos realizar el proceso **OAuth - autenticación entre cuentas**. Este proceso consiste en que el cliente permita que sus datos sean compartidos con un sistema de terceros de forma segura.

El access token no se puede compartir de ninguna otra forma que no sea mediante OAuth.

## 5. Identifica tu integración (Sponsor ID)

Para identificar las órdenes que son realizadas por tu punto de venta, incluye el Sponsor ID, y consulta en nuestra referencia de APIs de [órdenes presenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/get) cómo enviar esta información.

Paso a paso:

> * Crea una cuenta en el portal de Mercado Pago (identificación del Integrador).
> * Obtén la identificación del usuario (Cust ID o User ID) de su cuenta.
> * Incluye el ID de usuario de su cuenta de integrador dentro del sponsor ID del vendedor.
> * Envía el sponsor ID en todas las transacciones QR. [Ver API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post).