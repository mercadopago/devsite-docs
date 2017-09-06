# Introducción

Un **MarketPlace** es un sitio o aplicación que permite a vendedores y compradores relacionarse para efectuar una transacción comercial. El propietario del _Marketplace_ proporciona espacio a los vendedores para mostrar sus bienes o servicios, y se encarga de gestionar todos los aspectos de la transacción. Por ejemplo, Mercado Libre es un _Marketplace_.

Mercado Pago te permite realizar cobros a nombre de los vendedores de tu plataforma y opcionalmente cobrar una comisión por la transacción.

Cuando se genera un pago, el dinero es dividido en el instante entre la cuenta de tu vendedor y la tuya, en caso de cobres una comisión.

> NOTE
>
> Nota
>
> La comisión de Mercado Pago será descontada de los fondos que reciba el vendedor.

_Marketplace_ requiere de 3 pasos:

1. **Crear una aplicación** Marketplace.
2. **Conectar** las cuentas de tus vendedores.
3. **Cobrar** en nombre de ellos.

Después de crear la aplicación, sólo es necesario ejecutar el segundo y tercer paso para cada vendedor subsiguiente.


## Credenciales

Al igual que con el Checkout de Pagos, cuentas con un par de claves privadas para conectarte con la API. Estas claves las encuentras en la sección [credenciales de tu cuenta](https://www.mercadopago.com.ar/account/credentials).

Las **credenciales privadas** (también llamada `access_token`), se utilizan para todas las llamadas a las APIs, como procesar un pago, realizar reembolsos, y más. Las claves privadas deben ser mantenidas **confidencialmente** en tus servidores de _backend_ y nunca deben ser publicadas.


#### [Comenzar a crear mi Marketplace](/guides/markeplace/web-checkout/create-marketplace.es.md)
