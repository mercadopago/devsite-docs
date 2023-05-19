# Como obter os detalhes do pagamento utilizando as APIs do Mercado Pago

Na nova integração com a Shopify, houve uma mudança na informação disponível no atributo `payment_id` disponível na consulta da transação relacionada ao pedido obtida através da [API do endpoint do Shopify](https://shopify.dev/docs/api/admin-rest/2023-04/resources/transaction). No atributo `payment_id` presente na reposta da API da Shopify, onde antes era exibido o ID único (`id`) de pagamento do Mercado Pago, passou a ser informado o ID único (`id`) de pagamento da Shopify.

Com a mudança, para obter os detalhes do pagamento utilizando as APIs do Mercado Pago, ao invés de consultar o pagamento diretamente através de seu ID único (`id`), será necessário efetuar uma busca utilizando o seu ID de referência externa (`external_reference`) para retornar uma lista de objetos referentes aos pagamentos.

Para isso, realize um GET enviando o `external_reference` e o `access-token` (obtido na seção de [Credenciais](/developers/pt/docs/shopify/additional-content/credentials) em seu [Dashboard](https://www.mercadopago.com/developers/panel/app) ou na sua conta [Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials)) ao endpoint [/v1/payments/search](/developers/pt/reference/payments/_payments_search/get). 

Exemplo:

```curl
curl --location --request GET 'https://api.mercadopago.com/v1/payments/search?access_token={{AccessToken}}&sort=date_created&criteria=desc&external_reference=njzY7fKb5HH5TgYwXO6jsh2xp&status=approved' \
```

Alternativamente, é possível obter uma lista com apenas os IDs dos pagamentos associados a uma transação do Shopify de uma chamada na [API de busca de pagamentos](/developers/pt/reference/payments/_payments_search/get) utilizando sua referência externa e consultá-lo individualmente através da API de pagamentos. 

Para isso, realize um GET enviando o `external_reference` e o `access-token` (gerado pelo processo de autenticação do OAuth) ao endpoint [/v1/payments/search](/developers/pt/reference/payments/_payments_search/get). 

Exemplo: 

```curl
curl -X GET  \ 
       'https://api.mercadopago.com/v1/payments/search?access_token={{AccessToken}}&sort=date_created&criteria=desc&external_reference=njzY7fKb5HH5TgYwXO6jsh2xp&status=approved&attributes=results.id' \
```

Resposta: 

```response
{
    "results": [
        {
            "id": 12345678909
        }
    ]
}
```

Por fim, cada pagamento retornado na lista pode ser consultado com o `curl` abaixo.

```curl
curl -X GET \
      'https://api.mercadopago.com/v1/payments/56789012345' \
      -H 'Authorization: Bearer {{AccessToken}}'
```