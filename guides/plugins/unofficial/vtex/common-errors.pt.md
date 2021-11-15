# Glossário de erros

Os erros mais comuns são os seguintes:



|Mensagem|Significado|
|---|---|
|`unauthorized_use_of_live_credentials`|Isso significa que as credenciais da conta do Mercado Pago não estão ativadas. Você deve ir para a página de [credenciais]([FAKER][CREDENTIALS][URL]) e ativá-las.|
|`invalid installments`|Está sendo feita uma tentativa de processar o pagamento com uma taxa que não está ativada. Você deve acessar a [configuração do método de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros) e definir as taxas como "Automático".|
|`invalid_users`|Você está tentando pagar com o mesmo usuário que está cobrando. Repetir o pagamento com um e-mail de pagador diferente.|
|`Cannot infer Payment Method`|Você está tentando pagar com um cartão que não seja o tipo de cartão selecionado (por exemplo, um número de cartão de crédito foi inserido na opção de cartão de débito).|
|`Invalid users involved`|Ocorre quando é utilizado as credencias produtivas em ambiente de teste ou vice-versa. **Exemplo:** Utilizar um email de teste no nó "payer" quando se está utilizando a credencial de produção de um usuário real.|
----[mlb]----|`Collector user without key enabled for QR render`|Ocorre quando o seller ainda não realizou a criação de uma chave **Pix** junto a conta Mercado Pago.|------------

> WARNING
>
> Importante
>
> Antes de iniciar sua operação em produção, você deve ativar suas credenciais. Caso já tenha realizado este passo o link não será apresentado.

Para mais informação, visite o [site oficial da VTEX](https://help.vtex.com/) e o [site de status da VTEX](https://status.vtex.com/).
