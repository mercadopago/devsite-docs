# Desativação

Se desejar, você pode desativar uma estrutura, notificação ou evento previamente criados. Para isso, utilize os seguintes endpoints, dependendo do que deseja desativar.

### DELETE Structures
```curl
curl --location --request DELETE 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/structures/{{structure_id}}' \
--header 'Authorization: Bearer {{TOKEN}}' 
```

### DELETE Event
```curl
	curl --location --request DELETE 'https://api.mercadopago.com/v1/reports/marketplace_sellers_sales/events/{{event_id}}' \
--header 'Authorization: Bearer {{TOKEN}}' 
```

### DELETE Notifier
```curl
	curl --location --request DELETE 'https://api.mercadopago.com/v1/reports/{{notifier_id}}' \
--header 'Authorization: Bearer {{TOKEN}}' 
```

> WARNING
>
> Importante
>
> Em caso de sucesso, as solicitações não gerarão uma resposta. Em caso de erro, um código de status 404 será retornado.

> Lembre-se de que, após excluir qualquer um dos elementos mencionados acima, será necessário verificar se os relatórios, sejam eles manuais ou automáticos, continuam funcionando corretamente.