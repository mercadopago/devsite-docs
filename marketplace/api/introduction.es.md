# Introducción

Un **MarketPlace** es un sitio o aplicación que permite a vendedores y compradores relacionarse para efectuar una transacción comercial. El propietario del Marketplace proporciona espacio a los vendedores para mostrar sus bienes o servicios, y se encarga de gestionar todos los aspectos de la transacción. Por ejemplo, Mercado Libre es un Marketplace.

Mercado Pago te permite realizar cobros a nombre de los vendedores de tu plataforma y opcionalmente cobrar una comisión por la transacción.

Cuando se genera un pago, el dinero es dividido en el instante entre la cuenta de tu vendedor y la tuya, en caso de cobres una comisión.

> _**Nota**_: La comisión de Mercado Pago será descontada de los fondos que reciba el vendedor.

Marketplace requiere de 3 pasos:

1. **Crear una aplicación** Marketplace.
2. **Conectar** las cuentas de tus vendedores.
3. **Cobrar** en nombre de ellos.

Después de crear la aplicación, sólo es necesario ejecutar el segundo y tercer paso para cada vendedor subsiguiente.

## Credenciales

Al igual que con la API de Pagos, cuentas con dos pares de claves para conectarte con la API. Estas claves las encuentras en la sección [credenciales de tu cuenta](https://www.mercadopago.com/mla/account/credentials).

La **credencial pública**, o *public\_key*, es la utilizada para acceder a todos los recursos que necesitará tu frontend para recolectar los datos de tarjeta de crédito, y tokenizar.

La **credencial privada**, o *access\_token*, se utiliza para todas las otras llamadas a las APIs, como procesar un pago, realizar reembolsos, almacenar tarjetas y más. Las claves privadas deben ser mantenidas **confidencialmente** en tus servidores de backend y nunca deben ser publicadas.

> Haciendo click en el botón "renovar credenciales" obtienes pares nuevos y los anteriores dejan de funcionar. Usa esto sólo cuando creas que tus credenciales privadas han sido vulneradas o por cuestiones de seguridad, similares al cambio de contraseña, cada cierto período de tiempo. Recuerda reemplazar las credenciales en tu aplicación para que siga funcionando.

## Modo Sandbox y Productivo

Inicialmente tu aplicación sólo podrá interactuar con Mercado Pago en **Modo Sandbox**, una réplica exacta de **Modo Producción**, diseñado con el objetivo de facilitar las pruebas durante la integración. 

Te brindaremos tarjetas de prueba, para que puedas simular transacciones como si fueran reales.

Una vez que hayas probado tu aplicación, deberás realizar el [proceso de homologación](#) y completar el formulario "Quiero ir a producción" que encontrarás en tus [credenciales](). 

Tu aplicación será activada automáticamente. Lo único que debes hacer es reemplazar las claves de sandbox por las productivas en tu código.


#### [Comenzar a crear mi Marketplace](./create-marketplace.es.md)
