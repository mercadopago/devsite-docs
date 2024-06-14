# Mensageria de Pagamentos automáticos

A Mensageria de Pagamentos automáticos, ou **Mensageria de subscrição**, envolve informações dos pagamentos recorrentes (ID de pagamentos anteriores, ID da subscrição, número de vezes que o pagamento será gerado e POI com `type = SUBSCRIPTIONS`) que são enviadas para a [API de Pagamentos](/developers/pt/reference/payments/_payments/post) com o intuito de aumentar a taxa de aprovação para pagamentos deste tipo.

> WARNING
>
> Importante
>
> No caso de operações com pagamentos recorrentes da bandeira _Visa_, será necessário enviar o identificador de transação da bandeira (TID) às transações de mensageria. Para mais informações sobe como enviar o TID, acesse a documentação [Network Transaction ID - TID](/developers/pt/docs/automatic-payments/recurring-charges/network-transaction-id).

## Configuração

Veja abaixo como enviar as informações dos pagamentos recorrentes à [requisição de criar pagamento](/developers/pt/reference/payments/_payments/post).

### Processar primeiro pagamento

Para o **primeiro pagamento** na mensageria de recorrência, será preciso enviar as informações abaixo ao endpoint [v1/payments](/developers/pt/reference/payments/_payments/post), através do parâmetro `point_of_interaction`.

- Indicar que o tipo é subscrição (`type = SUBSCRIPTIONS`);
- Indicar que é a primeira transação (`first_time_use = TRUE`);
- Indicar qual é o `subscription_id` do pagamento (sugerimos colocar o `collector` + um `ID` de subscrição único por usuário);
- Número de parcelas (`subscription_sequence`);
- Periodicidade das cobranças (`invoice_period`);
- Data da cobrança (`billing_date`).

Exemplo:

```json
"point_of_interaction": {
    "type": "SUBSCRIPTIONS",
    "transaction_data": {
        "first_time_use": true,
        "subscription_id": "COLLECTORPADRE-SUBSCRIPCION_ID",
        "subscription_sequence": {
            "number": 1,
            "total": 12
        },
        "invoice_period": {
            "period": 1,
            "type": "monthly"
        },
        "billing_date": "2024-03-16"
    }
}
```

### Processar pagamentos subsequentes 

Para os **pagamentos subsequentes** na mensageria de recorrência, será preciso reenviar as informações do primeiro pagamento ao endpoint [v1/payments](/developers/pt/reference/payments/_payments/post), através do parâmetro `point_of_interaction`, alterando os dados apresentados abaixo.

- Indicar que **não é a primeira** transação (`first_time_use = FALSE`);
- Indicar qual é o `subscription_id` do pagamento (sugerimos colocar o `collector` + um `ID` de subscrição único por usuário);
- Número da parcela atual (`subscription_sequence = number`);
- Número total de parcelas (`subscription_sequence = total`);
- Periodicidade das cobranças (`invoice_period`);
- Data da cobrança (`billing_date`);
- User está presente ao realizar o pagamento (`user_present`);
- Número de referência do primeiro pagamento (`payment_reference`).

> WARNING
>
> Atenção
> 
> No `payment_reference.id` deverá permanecer o ID do primeiro pagamento da sequência.

Exemplo:

```json
"point_of_interaction": {
    "type": "SUBSCRIPTIONS",
    "transaction_data": {
        "first_time_use": true,
        "subscription_id": "COLLECTORPADRE-SUBSCRIPCION_ID",
        "subscription_sequence": {
            "number": 2,
            "total": 12
        },
        "invoice_period": {
            "period": 2,
            "type": "monthly"
        },
        "payment_reference": {
            "id": "20792195335"
        },
	  "user_present": true/false,
        "billing_date": "2024-04-16"
    }
}
```

| Parâmetro  | Tipo  | Descrição  | Exemplo |
| --- | --- | --- | --- |
| type | string | Indica o tipo de 'poi' | SUBSCRIPTIONS |
| first_time_use| boolean | Indica se é o primeiro pagamento da assinatura | true/false |
| subscription_id | string | Identificador de assinatura | "COLLECTORPADRE-SUBSCRIPCION_ID" |
| subscription_sequence.number |integer | Indica o número do pagamento subsequente.  | 3 |
| subscription_sequence.total |integer | Indica o total da assinatura. Para assinaturas permanentes, definir como 'null' | 12 |
| invoice_period.period |integer | Indica a frequência do pagamento recorrente | 1 |
| invoice_period.type | string | Indica o tipo de período de pagamento recorrente | daily, monthly ou yearly |
| user_present | boolean | Indica se houve intervenção do usuário no momento da criação do pagamento |true/false |
| billing_date | string | Data de cobrança | 2024-03-16 |
| payment_reference.id | string | ID do pagamento de validação ok | 20792195335 |
| transaction_amount | number | Valor do pagamento |100 |
| token | string | Token do cartão | 12346622341 |
| description | string | Descrição do pagamento | "Pagamento de teste" |
| payment_method_id | string | Indica o identificador do meio de pagamento selecionado para efetuar o pagamento | master |
| payer.email | string | E-mail do pagador | buyer@examplemail.com |
| payer.type | string | Tipo de identificação do pagador associado | guest |