# Requisitos previos

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

Crea una aplicación para obtener credenciales y configurar notificaciones Webhooks.

Es fácil, te contamos cómo hacerlo:

1. Ingresa a [Tus integraciones](https://www.mercadopago.com/developers/panel/app) y haz clic en **Crear aplicación**.
2. Ponle un nombre con el que puedas identificarla más adelante.
3. Selecciona la opción **Pagos presenciales**, y luego **CódigoQR**.
4. Opcionalmente, puedes seleccionar el modelo de integración, sea **atendido** o **dinámico**.
5. Acepta nuestros Términos y Condiciones, y haz clic en **Crear aplicación**. ¡Listo!

> NOTE
>
> Nota
>
> En caso de que la caja integrada tenga varias conexiones con cuentas Mercado Pago, dirígete a los puntos 4 y 5 dentro de esta misma sección. Presta atención a la seguridad de tu integración e implementa [Oauth.](/developers/es/docs/qr-code/additional-content/security/oauth/introduction)

## 3. Genera usuarios de prueba

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

Una vez creados los usuarios de prueba, ya puedes comenzar con la integración y crear las sucursales y cajas.

## 4. Obtén tu Access Token (OAuth)

Si eres un integrador que trabajará con varios comercios para que operen con Mercado Pago, te recomendamos realizar el proceso **OAuth - autenticación entre cuentas**. Este proceso consiste en que el cliente permita que sus datos sean compartidos con un sistema de terceros de forma segura.

El Access Token se podrá compartir solamente mediante OAuth. Consulta la [documentación](/developers/es/docs/qr-code/additional-content/security/oauth/introduction) para obtener más información.

## 5. Identifica tu integración (Sponsor ID)

Cuando una cuenta Mercado Pago es creada, se le asigna un User ID, en caso de ser usuarios, o un Cust ID, en caso de ser vendedor. Ambas son identificaciones únicas que se generan automáticamente, y que permitirán asociar las integraciones a cada cuenta al incluirlos en los llamados a la API. 

Cuando realizas integraciones para terceros, el parámetro `sponsor_id` te permitirá identificar las órdenes que son realizadas por tu punto de venta. Deberás enviar el Sponsor ID en los llamados a la [API de órdenes presenciales](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put). Sigue las instrucciones a continuación para saber cómo obtenerlo e incluirlo:

1. Si todavía no lo has hecho, crea una cuenta Mercado Pago Developers.
2. Obtén la identificación del usuario (Cust ID o User ID) de tu cuenta accediento a los [detalles de la aplicación](/developers/es/docs/qr-code/additional-content/your-integrations/application-details) que creaste anteriormente.
3. Incluye el ID de tu cuenta de integrador dentro del Sponsor ID del vendedor.
4. Envía el Sponsor ID en todas las transacciones QR, tal como se muestra en nuestra [Referencia de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post).