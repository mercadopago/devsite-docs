# Glossário de erros

Os erros mais comuns são os seguintes:

|Mensagem|Significado|
|---|---|
|`unauthorized_use_of_live_credentials`|Isso significa que as credenciais da conta do Mercado Pago não estão ativadas. Você deve ir para a página de credenciais e ativá-las.|
|`invalid installments`|Está sendo feita uma tentativa de processar o pagamento com uma taxa que não está ativada. Você deve acessar a configuração do método de pagamento e definir as taxas como "Automático".|
|`invalid_users`|Você está tentando pagar com o mesmo usuário que está cobrando. Repetir o pagamento com um e-mail de pagador diferente.|
|`Cannot infer Payment Method`|Você está tentando pagar com um cartão que não seja o tipo de cartão selecionado (por exemplo, um número de cartão de crédito foi inserido na opção de cartão de débito).|

> WARNING
>
> Importante
>
> Antes de iniciar sua operação em produção, você deve ativar suas credenciais. Caso já tenha realizado este passo o link não será apresentado.

Para mais informação, visite o [site oficial da VTEX](https://help.vtex.com/) e o [site de status da Vtex](https://status.vtex.com/).
