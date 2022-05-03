# Conversão de anúncios

A análise da conversão de anúncios possibilita avaliar a relevância e retorno dos anúncios criados. Por isso, o Checkout Pro oferece integração com as plataformas Facebook Ads e Google Ads permitindo associar os pagamentos às campanhas de negócio.

> NOTE
>
> Importante
>
> Só serão associados os pagamentos aprovados instantaneamente com cartões de crédito e débito, dinheiro no Mercado Pago ou Mercado Créditos.

## Facebook Ads

A integração do Checkout Pro com o Facebook Ads é feita através da API de Preferências adicionando o `pixel_id`  dos seus anúncios ou através dos nossos SDKs.

Para integrar o Checkout Pro com o Facebook Ads via API, siga as etapas abaixo ou, se preferir, veja [SDKs](/developers/pt/guides/sdks-v2/official/landing)) para realizar a integração utilizando nossas bibliotecas.

1. Envie um POST com o parâmetro "tracks" com os atributos "type" e "values" ao endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post).
2. Em "type" insira 'facebook_ad'.
3. Em "value" insira o Pixel ID, que pode ser encontrado no painel de gerenciamento de anúncios do Facebook.
4. Execute a requisição.

Ao concluir a configuração, um evento `Purchase` será associado ao pixel especificado quando um pagamento encaminhado pelo seu anúncio for aprovado.

## Google Ads

A integração do Checkout Pro com o Google Ads é feita através da API de Preferências enviando as informações de identificação da conta do Google Ads no parâmetro `tracks` no body da requisição ou através dos nossos SDKs.

Para integrar o Checkout Pro com o Google Ads via API, siga as etapas abaixo ou, se preferir, veja [SDKs](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/sdks) para realizar a integração utilizando nossas bibliotecas.

1. Envie o parâmetro `tracks` com os atributos `type`, `conversion_id` e `conversion_label` ao endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post). 
2. Em `type`, insira `google_ad`.
3.  Em `CONVERSION_ID` e  `CONVERSION_LABEL`, insira o seu ID de conversão e o Rótulo de conversão disponíveis na conta do Google Analytics.
4. Execute a requisição.

Ao concluir a configuração, uma conversão será associada à tag especificada quando um pagamento encaminhado pelo seu anúncio for aprovado.