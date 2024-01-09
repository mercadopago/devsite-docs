# Assinaturas com pagamento autorizado

Assinaturas com pagamento autorizado permitem que a parcela de uma assinatura seja gerada e cobrada com base na recorrência definida, fazendo com que o mecanismo de assinatura agende e crie os pagamentos automaticamente com base no meio de pagamento definido no ato da criação da assinatura.

Para oferecer **assinaturas sem um plano associado e com pagamento autorizado**, envie um POST com os atributos necessários ao endpoint [/preapproval](/developers/pt/reference/subscriptions/_preapproval/post) e atente-se ao parâmetro `status`, que deverá ser preenchido com o valor `authorized`. Se preferir, utilize o curl disponível abaixo.

[[[
```curl

curl --location --request POST 'https://api.mercadopago.com/preapproval?access_token=APP_USR-????????' \
--header 'Content-Type: application/json' \
--header 'X-scope: stage' \
--data-raw '{
    "back_url": "https://www.google.com",
    "reason": "Test Subscription",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "start_date": "2020-06-02T13:07:14.260Z",
        "end_date": "2022-07-20T15:59:52.581Z",
        "transaction_amount": 10,
        "currency_id": "ARS"
    },
    "payer_email": "test_user+1020927396@testuser.com",
    "card_token_id": "{{EL_CARD_TOKEN_QUE_CREASTE}}",
    "status": "authorized"
}'
```
]]]


> NOTE
>
> Importante
>
> Para comprovar a validade do cartão, realizamos um pagamento com um valor mínimo. Se o pagamento obter sucesso, procedemos com a realização da devolução desse pagamento. O valor pode diferir conforme cada país.

## Lógica de novas tentativas de cobrança

Ao automatizar a recorrência de suas cobranças, são criados pagamentos autorizados que terão uma data de débito configurada com base na periodicidade definida na assinatura. A primeira parcela é cobrada até o período aproximado de uma hora após a assinatura.

### Status de pagamento

----[mlb, mlm]----

Duas alternativas podem surgir na hora em que a parcela é cobrada com base no resultado do seu pagamento:

* __O pagamento é feito com sucesso__ assim a parcela será processada no status `processed` e não ocorrerá uma nova tentativa de cobrança. 

* __O pagamento é recusado__ portanto, a parcela permanecerá em status de `recycling` enquanto a parcela não estiver vencida ou não tiver atingido o número máximo de novas tentativas. Caso contrário, será processada com o status `processed`. 

### Pagamentos recusados

Quando uma parcela permanece no status de `recycling` ela entra em um esquema de nova tentativa com um máximo de 4 possibilidades, no qual a parcela é cobrada novamente. O resultado pode ser qualquer um dos dois pontos mencionados acima.

Se o pagamento for recusado, ele é atualizado para uma nova data de cobrança adicionando 1 das 4 possibilidades dentro de dez dias como uma janela de tempo de nova tentativa à última data disponível.

Por padrão, o pagamento é tentado novamente dentro de uma janela de 10 dias. Caso a parcela tenha uma data de vencimento, a janela de tempo é ajustada a essa data e mantém a lógica de 4 tentativas.

------------

----[mla]----

Três alternativas podem surgir na hora em que a parcela é cobrada com base no resultado do seu pagamento:

* __O pagamento é feito com sucesso__ assim a parcela será processada no status `processed` e não será mais tentado novamente. 

* __O pagamento está sendo processado__ portanto, a parcela permanecerá pendente em status `waiting for gateway` até que o pagamento seja resolvido.

* __O pagamento é recusado__ portanto, a parcela permanecerá em status de `recycling` enquanto a parcela não estiver vencida ou não tiver atingido o número máximo de novas tentativas. Caso contrário, será processada com o status `processed`.


### Pagamentos recusados

Quando uma parcela permanece no status de `recycling` ela entra em um esquema de nova tentativa com um máximo de 4 possibilidades, no qual a parcela é cobrada novamente. O resultado pode ser qualquer um dos três pontos mencionados acima.

Se o pagamento for recusado, ele é atualizado para uma nova data de cobrança adicionando 1 das 4 possibilidades dentro de dez dias como uma janela de tempo de nova tentativa à última data disponível.

Por padrão, o pagamento é tentado novamente dentro de uma janela de 10 dias. Caso a parcela tenha uma data de vencimento, a janela de tempo é ajustada a essa data e mantém a lógica de 4 tentativas.

### Pagamentos em processamento

Se uma parcela está com o status `waiting for gateway` e quando o pagamento é resolvido resulta em rejeitado e a data de vencimento é cumprida, a parcela passará automaticamente a processada com o status `processed`. Caso contrário, entrará no esquema de nova tentativa.

------------

Caso a parcela não possa ser cobrada na quarta tentativa, ela estará automaticamente no status `processed` associada a um pagamento recusado.

Após 3 parcelas com pagamentos recusados a assinatura será automaticamente cancelada e a conta do vendedor será notificada do cancelamento da assinatura por e-mail.

> NOTE
> 
> Importante
> 
> O resultado de uma assinatura não afeta a geração e o processamento das parcelas restantes para a mesma assinatura.
