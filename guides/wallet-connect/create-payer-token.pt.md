# Criar payer token

Com o _agreement_ criado e a aprovação do comprador concedida, é preciso criar o _payer token_. O _payer token_ é responsável por armazenar os dados do comprador e garantir a segurança da transação, além de ser um atributo mandatório para criar transações durante todo o período de validade do `agreement` criado anteriormente.

Confira o diagrama abaixo que ilustra como funciona o fluxo de criação de um payer token.

![Criar payer token](/images/wallet-connect/create-payer-token.pt.png)

Para criar um _payer token_, envie um **POST** com todos os atributos necessários ao endpoint [/v2/wallet_connect/agreements/{agreementId}/payer_token](/developers/pt/reference/wallet_connect/_wallet_connect_agreements_agreement_id_payer_token/post) e execute a requisição ou, se preferir, utilize o `curl` disponível abaixo.

[[[
```curl

curl -X POST \
      'https://api.mercadopago.com/v2/wallet_connect/agreements/{agreement_id}/payer_token?client.id=<CLIENT.ID>&caller.id=<CALLER.ID>' \
      -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
      -H 'Content-Type: application/json' \ 
      -H 'x-platform-id: YOUR_ACCESS_TOKEN' \
      -d '{
  "code": "aeecea3e11f2545d1e7790eb6591ff68df74c57930551ed980239f4538a7e530"
}'
```
]]]

Com o payer token criado, o fluxo de integração de contas com o Wallet Connect terá sido concluída com sucesso. Siga para a seção [Advanced Payments](/developers/pt/docs/wallet-connect/advanced-payments) para realizar o fluxo de pagamentos.

