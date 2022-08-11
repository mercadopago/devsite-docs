# Como migrar a integração para o Checkout Bricks

Se sua integração atualmente usa outro produto do Mercado Pago que está sendo descontinuado ou se você simplesmente deseja migrar para o Checkout Bricks, compartilhamos as instruções abaixo para poder integrar.

Selecione o tipo de produto que você usa atualmente para aprender o passo a passo de como migrar.

## Web Tokenize Checkout

O Web Tokenize Checkout do Mercado Pago foi um produto que disponibilizou um formulário com o design e o frontend prontos.

> WARNING
>
> Importante
>
> Este produto foi descontinuado em agosto de 2022.

Aprenda como migrar do Web Tokenize Checkout V1 ou V2 nas seguintes documentações:

- [Migrar do Web Tokenize Checkout V1](/developers/en/docs/checkout-bricks/how-tos/how-to-migrate/web-tokenize-checkout-v1/clientside)
- [Migrar do Web Tokenize Checkout V2](/developers/en/docs/checkout-bricks/how-tos/how-to-migrate/web-tokenize-checkout-v2/clientside)

## CardForm

A integração via CardForm é feita como parte da integração do ----[mlb]----Checkout Transparente----------------[mla, mlu, mlm, mlc, mco, mpe]----Checkout API------------. Neste modo de integração, o **MercadoPago.js** é responsável pelos fluxos necessários para obtenção das informações obrigatórias para a criação de um pagamento. Quando inicializado, uma busca é realizada para recolher os tipos de documentos disponíveis para o país em questão.
Para migrar do CardForm para o Checkout Bricks, acesse esta documentação:

- [Migrar do CardForm](/developers/en/docs/checkout-bricks/how-tos/how-to-migrate/cardform/clientside)
