# Cómo migrar la integración a Checkout Bricks

Si actualmente tu integración utiliza otro producto de Mercado Pago que está siendo deprecado o si simplemente deseas migrar a Checkout Bricks, a continuación te compartimos las instrucciones para poder integrarte.

Selecciona el tipo de producto que utilizas actualmente para conocer el paso a paso de cómo migrar.

## Web Tokenize Checkout

Web Tokenize Checkout de Mercado Pago fue un producto que proporcionaba un formulario con el diseño y el front-end listo.

> WARNING
>
> Importante
>
> Este producto fue deprecado en agosto de 2022.

Conoce cómo migrar desde Web Tokenize Checkout V1 o V2 en las siguientes documentaciones:

- [Migrar desde Web Tokenize Checkout V1](/developers/es/docs/checkout-bricks/how-tos/how-to-migrate/web-tokenize-checkout-v1)
- [Migrar desde Web Tokenize Checkout V2](/developers/es/docs/checkout-bricks/how-tos/how-to-migrate/web-tokenize-checkout-v2)

## CardForm

La integración via CardForm se realiza como parte de la integración de ----[mlb]----Checkout Transparente----------------[mla, mlu, mlm, mlc, mco, mpe]----Checkout API------------. En este modo de integración, **MercadoPago.js** se encarga de los flujos necesarios para obtener la información requerida para la generación de un pago. Al inicializarlo, se realiza una búsqueda para recabar los tipos de documentos disponibles para el país correspondiente. 
Para migrar de CardForm a Checkout Bricks, ve a esta documentación:

- [CardForm](/developers/es/docs/checkout-bricks/how-tos/how-to-migrate/card-form)

> NEXT_STEP_CARD_ES
>
> Migrar desde Web Tokenize Checkout V1
>
> Migra tu integración desde Web Tokenize Checkout V1 a Checkout Bricks.
>
> [Web Tokenize Checkout V1](/developers/es/docs/checkout-bricks/how-tos/how-to-migrate/web-tokenize-checkout-v1)


