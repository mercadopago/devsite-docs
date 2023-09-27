# Desativação

Caso queira desativar uma estrutura, notificação ou evento criados anteriormente, utilize os _endpoints_ correspondentes listados a seguir.

> WARNING
>
> Importante
>
> Se a solicitação for bem-sucedida, não haverá resposta. Se houver um erro, será retornado o código de _status_ 404. Após remover qualquer um dos elementos citados, é essencial confirmar se os relatórios ainda operam adequadamente. Tenha em mente que **não é possível** desativar relatórios gerados manualmente (_statements_).

## DELETE Structure

```curl
curl --location --request DELETE 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/structures/{{structure_id}}' \
--header 'Authorization: Bearer {{TOKEN}}' 
```

## DELETE Event
```curl
	curl --location --request DELETE 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/events/{{event_id}}' \
--header 'Authorization: Bearer {{TOKEN}}' 
```

## DELETE Notifier
```curl
	curl --location --request DELETE 'https://api.mercadopago.com/v1/reports/{{notifier_id}}' \
--header 'Authorization: Bearer {{TOKEN}}' 
```