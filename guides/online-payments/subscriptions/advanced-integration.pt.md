# Atualização de assinaturas

Para atualizar, pausar, cancelar ou reativar uma assinatura já criada, é necessário usar o `preapproval_id` que retorna após a [criação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/subscriptions/introduction). 

## Busca de uma assinatura

Você pode fazer buscas das suas assinaturas sempre que necessário. 

Os parâmetros a serem adicionados são opcionais e, dependendo dos parâmetros enviados, eles são combinados para buscar uma assinatura. 

Por exemplo, você pode buscar todas as assinaturas pausadas de um cliente: 

```curl
curl --location --request GET 'https://api.mercadopago.com/preapproval/search?status=paused&payer_email=john@yourdomain.com' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
```

## Alterar cartão e valor

Se você quiser alterar um cartão ou o valor de uma assinatura já criada, você deve enviar novamente os campos com os dados atualizados.

Para __alterar o cartão__, você deve indicar o novo token no atributo `card_token_id`. E para __atualizar o valor__, envie o novo valor através do `auto_recurring.transaction_amount` e especifique novamente o `auto_recurring.currency_id`.

Com o `application_id` da assinatura que quiser atualizar, faça a seguinte chamada: 

```curl
curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "application_id": 1234567812345678,
  "auto_recurring": {
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "transaction_amount": 100
  },
  "card_token_id":"1aca87c7338585abdf1edf0000000000"
}'
```

>Observe que o token dura 7 dias e pode ser usado apenas uma vez, portanto, este valor não deve ser salvo.

## Cancelar ou pausar

Para __cancelar uma assinatura__, basta especificar o valor `cancelled` no `status`. Esta ação finaliza a assinatura e faz com que ela não possa ser reativada.

E para __pausar uma assinatura__, você deve indicar  `paused` no `status`. Você pode ativá-la novamente quando quiser. 

```curl
curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "status": "cancelled"
}'
```

![Basic-subscriptions](/images/subscriptions/status-preapproval-pt.png)

## Reativar uma assinatura pausada

### Ativar assinatura com prazo final

Por exemplo, se você quiser cobrar todas as parcelas por um ano com uma frequência mensal que após 6 meses foi pausada por um mês, você deve adicionar um mês a mais ao prazo.

Para isso, atualize o prazo no campo `auto_recurring.end_date` e envie o valor`authorized` no `status`.

Com o `application_id` da assinatura que quiser atualizar, faça a seguinte chamada: 

```curl
curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "application_id": 1234567812345678,
  "auto_recurring": {
    "end_date": "2023-07-20T11:59:52.581-04:00"
  },
  "status": "authorized"
}'
```

### Ativar assinatura sem prazo final

Para reativar uma assinatura, envie o valor `authorized` no `status`. Isso reativará as parcelas conforme sua recorrência a partir da data em que a alteração do status foi feita. 

Com o `application_id` da assinatura que quiser atualizar, faça a seguinte chamada:

```curl
curl --location --request PUT 'https://api.mercadopago.com/preapproval/<PREAPPROVAL_ID>' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--data-raw '{
  "application_id": 1234567812345678,
  "status": "authorized"
}'
```

## Data de cobrança

Para assinaturas com frequência de pagamento mensal, você pode escolher um dia fixo do mês para que sejam feitas as cobranças. Se você não configurar um dia específico, as cobranças serão feitas no mesmo dia do mês em que o assinante aderiu à assinatura. 

Quando uma data de cobrança é definida, você pode escolher se será cobrado ou não um **valor proporcional (pró-rata)** aos clientes que aderirem à assinatura em datas diferentes da que você escolheu.

> NOTE
> 
> Nota
> 
> Apenas para exemplificar, os códigos abaixo exibem o dia 10 como data de cobrança. Qualquer dia entre __1 e 28__ pode ser selecionado, usando o parâmetro `billing_day`.

### Plano com data de cobrança para o dia 10 e com pagamento proporcional

```json
{
"back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]",
	"reason": "Plano Gym Gold",
	"auto_recurring": {
		"frequency": "1",
		"frequency_type": "months",
    "transaction_amount": 1100,
		"currency_id": "[FAKER][CURRENCY][ACRONYM]",
		"repetitions": 12,
    "billing_day": 10,
    "billing_day_proportional": true,
		"free_trial": {
			"frequency_type": "months",
			"frequency": "1"
		}
	}
}
```

Para não cobrar o pagamento proporcional, faça a seguinte chamada: 

### Plano com data de cobrança para o dia 10 e sem pagamento proporcional

```json
{
	"back_url": "https://www.mercadopago[FAKER][URL][DOMAIN]",
	"reason": "Plano Gym Gold",
	"auto_recurring": {
	  "frequency": "1",
		"frequency_type": "months",
    "transaction_amount": 1100,
		"currency_id": "[FAKER][CURRENCY][ACRONYM]",
		"repetitions": 12,
    "billing_day": 10,
    "billing_day_proportional": false,
		"free_trial": {
		  "frequency_type": "months",
		  "frequency": "1"
		}
	}
}
```

> Para saber mais sobre os campos disponíveis, confira as [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval/post).


------------
### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Testes
>
> Verifique se suas assinaturas criadas estão devidamente configuradas com os usuários de teste. 
>
> [Testes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/subscriptions/testing)


> RIGHT_BUTTON
>
> Lógica de novas tentativas de cobrança
>
> Caso você tenha problemas, explicamos a lógica de novas tentativas de cobrança.
>
> [Lógica de novas tentativas de cobrança](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/subscriptions/payment-retry)
