# Cómo migrar la integración a Checkout Bricks

Si actualmente tu integración utiliza otro producto de Mercado Pago que está siendo deprecado o si simplemente deseas migrar a Checkout Bricks, a continuación te compartimos las instrucciones para poder integrarte.

Selecciona el tipo de producto que utilizas actualmente para conocer el paso a paso de cómo migrar.

## Web Tokenize Checkout

> WARNING
>
> Importante
>
> Este producto fue deprecado en agosto de 2022.

Web Tokenize Checkout de Mercado Pago fue un producto que proporcionaba un formulario con el diseño y el front-end listo.

Para distinguir qué tipo de versión de Web Tokenize Checkout tienes actualmente en tu integración, verifica lo siguiente:

- La **versión 1** agrega el archivo `src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js"`. 
- En cambio, la **versión 2** agrega el archivo `src="https://sdk.mercadopago.com/js/v2"`.
Identifica cuál de los dos archivos figura en tu integración para poder hacer la migración correctamente.

Conoce cómo migrar desde Web Tokenize Checkout V1 o V2 en las siguientes documentaciones:

* [Migrar desde Web Tokenize Checkout V1](/developers/es/docs/checkout-bricks/how-tos/how-to-migrate/web-tokenize-checkout-v1/clientside)
* [Migrar desde Web Tokenize Checkout V2](/developers/es/docs/checkout-bricks/how-tos/how-to-migrate/web-tokenize-checkout-v2/clientside)

## CardForm

La integración via CardForm se realiza como parte de la integración de ----[mlb]----Checkout Transparente----------------[mla, mlu, mlm, mlc, mco, mpe]----Checkout API------------. En este modo de integración, **MercadoPago.js** se encarga de los flujos necesarios para obtener la información requerida para la generación de un pago. Al inicializarlo, se realiza una búsqueda para recabar los tipos de documentos disponibles para el país correspondiente. 
Para migrar de CardForm a Checkout Bricks, ve a esta documentación:

- [CardForm](/developers/es/docs/checkout-bricks/how-tos/how-to-migrate/cardform/clientside)