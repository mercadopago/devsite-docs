# Criar agreement

A primeira etapa para integrar o Wallet Connect é a criação de um _agreement_, um link de autorização que o comprador acessa para conceder ao vendedor o acesso à sua carteira do Mercado Pago no momento em que um pagamento for realizado. 

O _agreement_ armazena os meios de pagamento selecionados pelo pagador e permite a alteração dessas configurações sem a intervenção do vendedor, tornando esta etapa transparente durante o fluxo de pagamento.

Confira o diagrama abaixo que ilustra como funciona o fluxo de criação do agreement.

![Criar agreement](/images/wallet-connect/new-create-agreement.pt.png)

Para criar um _agreement_, envie um **POST** com os atributos necessários ao endpoint [/v2/wallet_connect/agreements](/developers/pt/reference/wallet_connect/_wallet_connect_agreements/post) e execute a requisição ou, se preferir, utilize o `curl` abaixo e atente-se à resposta da requisição que retornará **dois parâmetros** obrigatórios para obter a aprovação do pagador: `agreement_uri` e `return_uri`. 

[[[
```curl

curl -X POST \
      'https://api.mercadopago.com/v2/wallet_connect/agreements?client.id=2451675580092619' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \ 
      -H 'x-platform-id: YOUR_ACCESS_TOKEN' \
      -d '{
  "return_url": "https://www.mercadopago.com/",
  "external_flow_id": "EXTERNAL_FLOW_ID",
  "external_user": {
    "id": "usertest",
    "description": "Test account"
  },
  "agreement_data": {
    "validation_amount": 3.14,
    "description": "Test agreement"
  }
}'
```
]]]


> WARNING
>
> Importante
>
> Um usuário pode ter apenas um agreement ativo por integração. Caso queira criar um novo agreement, é preciso cancelar o anterior. Para cancelar um agreement, envie um DELETE ao endpoint [/v2/wallet_connect/agreements/{agreement_id}](/developers/pt/reference/wallet_connect/_wallet_connect_agreements_agreement_id/delete) e execute a requisição.

