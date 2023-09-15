# Baixar o relatório

> WARNING
>
> Importante
>
> O download de relatórios só está disponível para _statements_; ou seja, relatórios gerados manualmente. Atualmente, o download de relatórios gerados automaticamente (_events_) não está disponível.

Após gerar o relatório manualmente, você poderá fazer o download dele. Para isso, faça uma chamada à API conforme mostrado abaixo, substituindo _statement_id_ pelo valor obtido na resposta à geração do relatório. Além disso, lembre-se de indicar o formato no qual deseja realizar o download, conforme indicado na tabela abaixo.

```
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
| statement_id (obrigatório) | Identificação do relatório, obtida na resposta à sua criação.                                                    |
| format (opcional)        | Formato em que deseja fazer o download do relatório. Pode ser csv ou json. Por padrão, é csv.   |

> Se ocorrer um erro durante a geração do relatório, você receberá um status 404 e o _body_ da resposta estará vazio.
