# Introducción

Un **MarketPlace** es un sitio o aplicación que permite a vendedores y compradores relacionarse para efectuar una transacción comercial. El propietario del Marketplace proporciona espacio a los vendedores para mostrar sus bienes o servicios, y se encarga de gestionar todos los aspectos de la transacción. Por ejemplo, Mercado Libre es un Marketplace.

Mercado Pago le permite crear su propio Marketplace, dónde podrá interactuar con las cuentas de Mercado Pago de sus vendedores, para generar transacciones y, opcionalmente, cobrar una comisión por el servicio ofrecido.

Marketplace requiere de 3 pasos:

1. **Crear una aplicación** Marketplace.
2. **Conectar** las cuentas de tus vendedores.
3. **Cobrar** en nombre de ellos.

Después de crear la aplicación, sólo es necesario ejecutar el segundo y tercer paso para cada vendedor subsiguiente.

Es importante que antes de comenzar a desarrollar, conozcas los [requerimientos]() para utilizar este servicio.

## Credenciales

Al igual que con la API de Pagos, cuentas con dos pares de claves para conectarte con la API. Estas claves las encuentras en la sección [credenciales de tu cuenta]().

La **credencial pública**, o *public key*, es la utilizada para acceder a todos los recursos que necesitará tu frontend para recolectar los datos de tarjeta de crédito, y tokenizar.

La **credencial privada**, o *secret key*, se utiliza para todas las otras llamadas a las APIs, como procesar un pago, realizar reembolsos, almacenar tarjetas y más. Las claves privadas deben ser mantenidas **confidencialmente** en tus servidores de backend y nunca deben ser publicadas.

> Haciendo click en el botón "renovar credenciales" obtienes pares nuevos y los anteriores dejan de funcionar. Usa esto sólo cuando creas que tus credenciales privadas han sido vulneradas o por cuestiones de seguridad, similares al cambio de contraseña, cada cierto período de tiempo. Recuerda reemplazar las credenciales en tu aplicación para que siga funcionando.

## Modo Sandbox y Productivo

Inicialmente tu aplicación sólo podrá interactuar con Mercado Pago en **Modo Sandbox**, una réplica exacta de **Modo Producción**, diseñado con el objetivo de facilitar las pruebas durante la integración. El uso de este modo no genera ningún tipo de cargo real, ya que todas las pruebas las puedes realizar con tarjetas que te brindamos.

Una vez tu aplicación esté lista para recibir pagos productivos, deberás habilitar el entorno productivo. Para esto, debes seleccionar la aplicación en [credenciales]() y completar un formulario con información básica sobre tu negocio. Tu aplicación será activada automáticamente, y podrás comenzar a utilizar las claves de producción.



#### [Comenzar a crear mi Marketplace]()
