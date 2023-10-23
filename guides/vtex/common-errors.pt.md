# Erros ao configurar a integração

Al configurar a integração do Mercado Pago em lojas VTEX, você pode encontrar alguns erros comuns. Abaixo, listamos alguns relacionados especificamente ao Mercado Pago, suas explicações e possíveis soluções.

| Mensagem | Descrição |
| --- | --- |
|`unauthorized_use_of_live_credentials`|Isso significa que as credenciais da conta do Mercado Pago não estão ativadas. Você deve ir para a página de [credenciais](/developers/pt/docs/vtex/additional-content/your-integrations/credentials) e ativá-las.|
|`invalid installments`|Está sendo feita uma tentativa de processar o pagamento com uma taxa que não está ativada. Você deve acessar a [configuração do método de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros) e definir as taxas como "Automático".|
|`invalid_users`|Você está tentando pagar com o mesmo usuário que está cobrando. Tente novamente com um e-mail de pagador diferente.|
|`Cannot infer Payment Method`|Você está tentando pagar com um cartão diferente do tipo de cartão selecionado (por exemplo, um número de cartão de crédito foi inserido na opção de cartão de débito).Tente novamente com o cartão correto. |
|`Invalid users involved`|Ocorre quando as credenciais de produção são utilizadas em ambiente de teste ou vice-versa. <br> **Exemplo:** Utilizar um email de teste no "payer" quando se está utilizando a credencial de produção em um usuário real.|
----[mlb]----|`Collector user without key enabled for QR render`|Ocorre quando o seller ainda não realizou a criação de uma chave **Pix** junto a conta Mercado Pago.|------------

> WARNING
>
> Importante
>
> Antes de iniciar sua operação em produção, você deve ativar suas [credenciais](/developers/pt/docs/vtex/additional-content/your-integrations/credentials).

Caso você encontre um erro que não está listado, recomendamos consultar o [site oficial da VTEX](https://help.vtex.com/) para ver os erros mais comuns dentro da plataforma, e o [site de status da VTEX](https://status.vtex.com/), para conhecer os incidentes reportados em tempo real.
