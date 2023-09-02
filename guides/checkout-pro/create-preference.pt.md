# Criar preferências

Preferências são conjuntos de informações sobre um produto e/ou serviço que permitem definir o nome, meio de pagamento e outros atributos necessários para obter a URL para iniciar o fluxo de pagamento no checkout.

> WARNING
>
> Importante
>
> Lembre-se que é preciso instalar o SDK do Mercado Pago antes da criação de uma preferência, por isso, garanta que a instalação dos SDKs do Mercado Pago já tenha sido concluída. Veja [SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/sdks) para instruções.

Para criar uma preferência via API, utilize o endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post) preenchendo os atributos necessários para execução da requisição ou, se preferir, veja [SDKs](/developers/pt/docs/sdks-library/landing)  para criar as preferências utilizando nossas bibliotecas.

Ao criar a preferência você terá acesso a um campo chamado `id` que retornará um número de identificação desta preferência. **Esta informação é mandatória para adicionar o Checkout Pro ao seu site**.