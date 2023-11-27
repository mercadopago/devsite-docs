# Criar promessa de desconto sem cupom pré-adicionado

A promessa de desconto sem um cupom pré-adicionado é um método no qual o desconto é aplicado a uma transação sem a necessidade de um cupom já vinculado à conta ou transação do usuário. 

Neste caso, o desconto pode ser aplicado automaticamente com base em certos critérios ou ações, como fidelidade do cliente, valor total da compra, ou participação em uma promoção específica.

Diferente da abordagem com cupom pré-adicionado, na qual o desconto é garantido através de um código já inserido, aqui o desconto é assegurado por meio de regras ou condições definidas pela plataforma ou pelo vendedor. Essa estratégia permite que os clientes se beneficiem de descontos sem a necessidade de inserir códigos.

Para **criar uma promessa de desconto sem um cupom pré-adicionado**, utilize o _curl_ abaixo e insira os parâmetros de acordo com a tabela descritiva a seguir.



| Parâmetro  | Descrição  | Exemplo  |
| --- | --- | --- |
| Authorization  | Token de autorização do usuário (Access token). Esta informação pode ser obtida através do menu [suas integrações](/developers/pt/docs/wallet-connect/additional-content/your-integrations/credentials).  | APP_USR-123456-test-access-t0ken  |
| x-payer-token  | Este é um token específico do pagador, substitua <PAYER_TOKEN> pelo token correspondente. Esta informação é obtida ao finalizar o  [fluxo de vinculação de contas](/developers/pt/docs/wallet-connect/account-linking-flow/create-agreement)  | payer1-token2-test3-example4  |
| amount  | Valor total da transação.  | 550.50  |


[[[
```curl

curl -X POST \
'https://api.mercadopago.com/v2/wallet_connect/payment/discounts' \
--header 'Authorization: Bearer <YOUR_ACCESS_TOKEN>' \
--header 'x-payer-token: <PAYER_TOKEN>' \
--header 'Content-Type: application/json' \
-d '{
    "amount": 550
}'

```
]]]
