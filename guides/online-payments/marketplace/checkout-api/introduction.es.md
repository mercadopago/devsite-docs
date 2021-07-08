# Introducción

Un **MarketPlace** es un sitio o aplicación que permite a vendedores y compradores relacionarse para efectuar una transacción comercial. El propietario del _Marketplace_ proporciona espacio a los vendedores para mostrar sus bienes o servicios, y se encarga de gestionar todos los aspectos de la transacción. Por ejemplo, Mercado Libre es un _Marketplace_.

Mercado Pago te permite realizar cobros a nombre de los vendedores de tu plataforma y opcionalmente cobrar una comisión por la transacción.

Cuando se genera un pago, el dinero es dividido en el instante entre la cuenta de tu vendedor y la tuya, en caso de cobres una comisión.
_Aclaración: El split del pago sólo se podrá realizar entre dos cuentas (el Marketplace y la cuenta vendedora), no más._

> NOTE
>
> Nota
>
> La comisión de Mercado Pago será descontada de los fondos que reciba el vendedor.
> Primero se descuenta la comisión de Mercado Pago, y sobre el restante se descuenta la comisión del Marketplace. 

_Marketplace_ requiere de 3 pasos:

1. **Crear una aplicación** _Marketplace_.
2. **Conectar** las cuentas de tus vendedores.
3. **Cobrar** en nombre de ellos.

Después de crear la aplicación, sólo es necesario ejecutar el segundo y tercer paso para cada vendedor subsiguiente.

## Credenciales

Las [credenciales]([FAKER][CREDENTIALS][URL]) son las **claves que te proporcionamos para que puedas configurar tu integración**. Para este caso, vas a utilizar una clave pública y otra privada.

* La clave pública, o **Public key**, te sirve para acceder a los recursos que necesita tu frontend. Vas a poder recolectar los datos de las tarjetas de crédito y convertirlos en un token representativo que puedes guardar de forma segura en tus servidores para crear un pago.

* La clave privada, o **Access token**, te va a permitir llamar al resto de las APIs. Por ejemplo, cómo procesar un pago, realizar un reembolso o almacenar tarjetas.

> ¿Tienes dudas? Consulta nuestras [preguntas frecuentes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/resources/faqs/credentials).

## Modo Sandbox y Productivo

Inicialmente tu aplicación sólo podrá interactuar con Mercado Pago en **Modo Sandbox**, una réplica exacta de **Modo Producción**, diseñado con el objetivo de facilitar las pruebas durante la integración.

Te brindaremos [tarjetas de prueba](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/marketplace/checkout-pro/testing-marketplace), para que puedas simular transacciones como si fueran reales.

Una vez que hayas probado tu aplicación, deberás realizar el [proceso de homologación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/marketplace/checkout-api/goto-production) y [activar tus credenciales]([FAKER][CREDENTIALS][URL]).

**Antes de utilizar las credenciales de producción tienes que activarlas.**
Caso contrario se recibirá el error de "Invalid use of live credentials".

Tu aplicación será activada automáticamente. Lo único que debes hacer es reemplazar las claves de _sandbox_ por las productivas en tu código.


[Comenzar a crear mi Marketplace](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/marketplace/checkout-api/create-marketplace).