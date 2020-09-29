---
indexable: false
---

# Integrar assinaturas   

## Tipos de integração

Há duas formas de integrar assinaturas: 

* __Com um plano associado__: Use esta forma quando você precisar usar a mesma assinatura em ocasiões diferentes e quiser organizá-las em grupos identificáveis. Por exemplo, para uma assinatura mensal e anual de uma academia.

* __Sem um plano associado__: Use esta forma quando você souber que diferentes assinaturas não compartilharão nenhuma característica porque serão muito específicas ou especializadas para cada pagador. Por exemplo, para uma assinatura de um único mês com um desconto específico.

> NOTE
> 
> Conceitos-chave
> 
> Dúvidas sobre o que é um plano ou outro conceito? Tenha em mãos os <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/subscriptions/introduction" target="_blank">conceitos-chave</a> para revisá-los quando necessário.


## Assinaturas com um plano associado

Se quiser usar uma assinatura com um plano associado, primeiro, você deve criar um plano.

### Criar plano

Ao gerar o plano, você receberá o `preapproval_plan_id` que usará para fazer a assinatura. 

Para criar o plano, faça a seguinte chamada à nossa API com os dados que precisar:

[[[
```curl curl --location --request POST 'https://api.mercadopago.com/preapproval_plan' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
	"back_url":"https://www.mercadopago[FAKER][URL][DOMAIN]",
	"reason":"Plan Pase Mensual Gold",
	"auto_recurring":{
		"frequency":"1",
		"frequency_type":"months",
        "transaction_amount":1100,
		"currency_id":"[FAKER][CURRENCY][ACRONYM]",
		"repetitions":12,
		"free_trial":{
			"frequency_type":"months",
			"frequency":"1"
		}
	}
}'
```
]]]

Atributos

Atributo |	Definição
------------ 	|	--------
`reason (obrigatório)` | Esta é a descrição que o assinante verá quando assinar e o detalhe que será visto na fatura do cartão. |
`auto_recurring.frequency (obrigatório)` | Indica o tempo ou ciclo com base no tipo de frequência. |
`auto_recurring.frequency_type (obrigatório)` | Indica o tipo de frequência. Pode ser por mês (months) ou por dia (days). Juntamente com a frequência, eles definem o ciclo de parcelas que uma assinatura terá. Por exemplo, se a cada quinze dias fosse necessário gerar uma parcela para ser cobrada, seria assim: 
 `auto_recurring.frequency`: 15 y  `auto_recurring.frequency_type`: days |
`auto_recurring.transaction_amount` | Se indicarmos o valor, ele é fixo. Se não preenchermos este campo, entende-se que se trata de uma quantia variável. É permitido um máximo de duas casas decimais separadas por um ponto.|
`auto_recurring.currency_id (obrigatório)` | Identifica a moeda que corresponde ao país. |
`auto_recurring.repetitions` | Indica se a assinatura terá um limite. Se não for especificado, não há limite. Este limite se relaciona com `auto_recurring.frequency` y `auto_recurring.frequency_type`. |
`auto_recurring.free_trial.frequency` | Define um período de teste inicial e retarda a primeira cobrança. Indica o tempo pelo qual o serviço não será cobrado com base no tipo de frequência. Deve ser consistente com `auto_recurring.frequency` |
`auto_recurring.free_trial.frequency_type` | Indica o número de parcelas que não serão cobradas pelo serviço. Deve ser consistente com `auto_recurring.frequency_type` |

#### Resposta
`HTTP Status 200 OK`
```json

{
    "id": "2c938084726e18d60172720000000000",
    "back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]",
    "collector_id": 100200300,
    "application_id": 1234567812345678,
    "reason": "Plan Pase Mensual Gold",
    "status": "active",
    "date_created": "2020-06-01T20:14:35.008-04:00",
    "last_modified": "2020-06-01T20:14:35.008-04:00",
    "init_point": "https://www.mercadopago.com/mlm/debits/new?preapproval_plan_id=2c938084726e18d60172720000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_plan_id=2c938084726e18d60172720000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": 1100,
        "currency_id": "[FAKER][CURRENCY][ACRONYM]",
        "repetitions": 12,
        "free_trial": {
            "frequency": 1,
            "frequency_type": "months"
        }
    }
}

```
Pronto! Agora podemos criar a assinatura e associá-la ao seu plano.


### Criar assinatura

Uma vez que você tenha gerado seu plano e obtido seu `preapproval_plan_id`, crie a assinatura por API do pagador da seguinte forma: 

[[[
```curl curl --location --request POST 'https://api.mercadopago.com/preapproval \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
   "preapproval_plan_id":"2c938084726e18d60172720000000000",
   "card_token_id":"9fca87c7338585abd000111222333444",
   "payer_email":"test_user_XXXX@testuser.com"
   
}'
```
]]]

Atributos

Atributo |	Definição
------------ 	|	--------
`preapproval_plan_id (obrigatório)` | Refere-se ao plano gerado anteriormente.|
`card_token_id (obrigatório)` | LAs informações no cartão serão convertidas em um token para enviar os dados com segurança. |
`payer_email (obrigatório)` | E-mail do pagador. |

> WARNING
> 
> Importante
> 
> Dúvidas sobre como criar o token de pagamento? Encontre todas as informações na seção de __<a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/sdks" target="_blank">Capturar dados do cartão.</a>__.

#### Resposta 
`HTTP Status 200 OK`
```json
{
    "id": "2c938084726e18d60172750000000000",
    "preapproval_plan_id": "2c938084726e18d60170001112223334",
    "payer_id": 100200300,
    "payer_email": "test_user_XXXX@testuser.com",
    "back_url": "http://www.mercadopago[FAKER][URL][DOMAIN]/",
    "collector_id": 10101,
    "application_id": 1234567812345678,
    "status": "authorized",
    "reason": "Plan Pase Mensual Gold",
    "external_reference": "125124513",
    "date_created": "2020-06-02T08:37:42.734-04:00",
    "last_modified": "2020-06-02T08:37:42.735-04:00",
    "init_point":  "https://www.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726e18d60172750000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726e18d60172750000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": 1100,
        "currency_id": "[FAKER][CURRENCY][ACRONYM]",
        "start_date": "2020-07-02T08:37:42.734-04:00",
        "end_date": "2021-07-02T11:59:52.581-04:00"
}
```
>Você pode obter mais informações sobre os campos na <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/" target="_blank">Referência de API.</a>.

Prono! Você criou uma assinatura com um plano associado.


## Assinaturas sem plano associado

Se você quiser usar uma assinatura sem um plano associado, deve primeiro definir o status do pagamento. 

### Criar assinatura com pagamento autorizado

Para criar uma assinatura com status authorized, você deve enviar os dados do seu cartão a associar da seguinte forma:

[[[
```curl curl --location --request POST 'https://api.mercadopago.com/preapproval' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "auto_recurring": {
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "transaction_amount": 1100,
    "frequency": 1,
    "frequency_type": "months",
    "end_date": "2022-07-20T11:59:52.581-04:00"
  },
  "back_url": "http://www.mercadopago[FAKER][URL][DOMAIN]/",
  "collector_id": 100200300,
  "external_reference": "1245AT234562",
  "payer_email": "test_user_XXXX@testuser.com",
  "reason": "Suscripción Pase Mensual Gold - Particular",
  "card_token_id":"9fca87c7338585abdf1edf0000000000",
  "status": "authorized"
}'
```
]]]

#### Resposta 
`HTTP Status 200 OK`
```json

{
    "id": "2c938084726fca480172750000000000",
    "payer_id": 400500600,
    "payer_email": "test_user_XXXX@testuser.com",
    "back_url": "http://www.mercadopago[FAKER][URL][DOMAIN]/",
    "collector_id": 100200300,
    "application_id": 1234567812345678,
    "status": "authorized",
    "reason": "Suscripción Pase Mensual Gold - Particular",
    "external_reference": "23546246234",
    "date_created": "2020-06-02T09:07:14.260-04:00",
    "last_modified": "2020-06-02T09:07:14.263-04:00",
    "init_point": "https://www.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": 1100,
        "currency_id": "[FAKER][CURRENCY][ACRONYM]",
        "start_date": "2020-06-02T09:07:14.260-04:00",
        "end_date": "2022-07-20T11:59:52.581-04:00"
    },
    "payment_method_id": "visa",
    "version": 0
}
```

### Criar assinatura com pagamento pendente

Você pode criar uma assinatura com status `pending` e nenhum meio de pagamento associada. 

Para o cadastro, os detalhes do cartão devem ser informados usando nosso formulário. Somente o link retornado na propriedade `init_point` deve ser compartilhado com o pagador:

[[[
```curl curl --location --request POST 'https://api.mercadopago.com/preapproval' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "auto_recurring": {
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "transaction_amount": 1100,
    "frequency": 1,
    "frequency_type": "months",
    "end_date": "2022-07-20T11:59:52.581-04:00"
  },
  "back_url": "http://www.mercadopago[FAKER][URL][DOMAIN]/",
  "collector_id": 100200300,
  "external_reference": "1245AT234562",
  "payer_email": "test_user_XXXX@testuser.com",
  "reason": "Suscripción Pase Mensual Gold - Particular",
  "status": "pending"
}'
```
]]]


#### Resposta
`HTTP Status 200 OK`
```json

{
    "id": "2c938084726fca480172750000000000",
    "payer_id": 400500600,
    "payer_email": "test_user_XXXX@testuser.com",
    "back_url": "http://www.mercadopago[FAKER][URL][DOMAIN]/",
    "collector_id": 100200300,
    "application_id": 1234567812345678,
    "status": "pending",
    "reason": "Suscripción Pase Mensual Gold - Particular",
    "external_reference": "23546246234",
    "date_created": "2020-06-02T09:07:14.260-04:00",
    "last_modified": "2020-06-02T09:07:14.263-04:00",
    "init_point": "https://www.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "sandbox_init_point": "https://sandbox.mercadopago.com/mlm/debits/new?preapproval_id=2c938084726fca480172750000000000",
    "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "transaction_amount": 1100,
        "currency_id": "[FAKER][CURRENCY][ACRONYM]",
        "start_date": "2020-06-02T09:07:14.260-04:00",
        "end_date": "2022-07-20T11:59:52.581-04:00"
    },
    "version": 0
}
```

> Você pode obter mais informações sobre os campos na <a href="https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/" target="_blank">Referência de API.</a>.


Atributos

Atributo |	Definção
------------ 	|	--------
`reason (obrigatório)` | Esta é a descrição que o assinante verá quando assinar e o detalhe que será visto na fatura do cartão. |
`status (obrigatório)` | Status da assinatura. Pode ser `pending` ou `authorized`. |
`auto_recurring.frequency (obrigatório)` | Indica o tempo ou ciclo com base no tipo de frequência. |
`auto_recurring.frequency_type (obrigatório)` | Indica o tipo de frequência. Pode ser por mês (months) ou dias (days). Juntamente com a frequência, definem o ciclo de parcelas que uma assinatura terá. Por exemplo, se a cada duas semanas fosse necessário gerar uma parcela para ser cobrada, ficaria da seguinte forma: `auto_recurring.frequency`: 15 y  `auto_recurring.frequency_type`: days |
`auto_recurring.transaction_amount (obrigatório)` | Valor aplicado à assinatura. |
`auto_recurring.currency_id (obrigatório)` | Identifica a moeda que corresponde ao país. |
`auto_recurring.end_date` | Indica se a assinatura terá um limite. Se não especificado, não há limite. |
`auto_recurring.free_trial.frequency` | Indica o tempo pelo qual o serviço não será cobrado. Deve ser consistente com  `auto_recurring.frequency` |
`auto_recurring.free_trial.frequency_type` | Indica o número de parcelas que não serão cobradas pelo serviço. Deve ser consistente com `auto_recurring.frequency_type` |
`collector_id (obrigatório)` | Identificador do vendedor. |
`payer_email (obrigatório)` | E-mail do pagador.  |
`card_token_id (obrigatório)` | Se a assinatura já foi autorizada, as informações do cartão serão convertidas em um token para enviar os dados com segurança. |


------------
### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Testes
>
> Verifique se suas assinaturas estão configuradas corretamente com os usuários de teste. 
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/subscriptions/testing/)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Integração avançada
>
> Atualize, altere ou cancele suas assinaturas.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/online-payments/subscriptions/advanced-integration/)
