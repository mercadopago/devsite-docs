# Baixar o relatório

Após gerar o relatório manualmente, você poderá baixá-lo. Execute uma chamada à API utilizando o código abaixo e substitua o `statement_id` pelo valor recebido na resposta da criação do relatório. Certifique-se também de especificar o formato de download desejado, conforme mostrado na tabela abaixo.

> WARNING
>
> Importante
>
> O download de relatórios só está disponível para `statements`; ou seja, relatórios gerados manualmente. Atualmente, o download de relatórios gerados automaticamente (_events_) não está disponível.

```curl
curl --location --request GET 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/statements/{{statement_id}}/download?format=csv' \
--header 'Authorization: Bearer {{TOKEN}}'
```

#### Resposta
```
COLLECTOR;COLLECTOR_NICKNAME;PAYMENT;STATUS_DESCRIPTION;STATUS_DETAIL;PURCHASE_ORDER;PAYMENT_METHOD_TYPE;TRANSACTION_AMOUNT;DATE_CREATED;DATE_APPROVED;MARKETPLACE_FEE_AMOUNT;MERCADOPAGO_FEE_AMOUNT;TOTAL_PAID_AMOUNT;NET_RECEIVED_AMOUNT
{{report rows}}
```

| Campo                   | Descrição                                                                                                          |
|-------------------------|----------------------------------------------------------------------------------------------------------------------|
| `statement_id` (obrigatório) | Identificação do relatório, obtida na resposta à sua criação.                                                    |
| `format` (opcional)        | Formato em que deseja fazer o download do relatório. Pode ser csv ou json. Por padrão, é csv.   |

> Caso haja um erro na criação do relatório, o _status_ retornado será 404 e o corpo da resposta estará vazio.
