Na nova integração com a Shopify houve uma mudança na informação disponível no atributo payment_id disponível na consulta da transação relacionada a order obtida através da API do endpoint do Shopify /admin/orders/{{order_id}}/transactions.json

Onde antes era informado o identificador único de pagamento do Mercado Pago, passa a ser informado o identificador único de pagamento da Shopify.  

Com essa mudança, para obter os detalhes do pagamento utilizando as APIs do Mercado Pago, ao invés de consultar o pagamento diretamente através de seu ID único (id), será necessário efetuar uma busca utilizando o seu ID de referência externa (external_reference), onde os detalhes do pagamento serão retornados em uma lista. 

Referência da API: 
https://www.mercadopago.com.ar/developers/en/reference/payments/_payments_search/get


Exemplo: 

curl --location --request GET 'https://api.mercadopago.com/v1/payments/search?access_token={{AccessToken}}&sort=date_created&criteria=desc&external_reference=njzY7fKb5HH5TgYwXO6jsh2xp&status=approved' \


Alternativamente, é possível obter o ID do pagamento através de uma chamada na API de search de pagamentos usando sua referência externa e consultá-lo individualmente através da API de pagamentos: 

Referência da API: 
https://www.mercadopago.com.ar/developers/en/reference/payments/_payments_id/get

Exemplo: 

curl -X GET  \ 
       'https://api.mercadopago.com/v1/payments/search?access_token={{AccessToken}}&sort=date_created&criteria=desc&external_reference=njzY7fKb5HH5TgYwXO6jsh2xp&status=approved&attributes=results.id' \

Response: 

{
    "results": [
        {
            "id": 56789012345
        }
    ]
}

curl -X GET \
      'https://api.mercadopago.com/v1/payments/56789012345' \
      -H 'Authorization: Bearer {{AccessToken}}'