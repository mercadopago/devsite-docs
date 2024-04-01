# Mensagens de resposta

Ofereça aos seus clientes informação clara e precisa sobre o resultado da operação efetuada. Isso permite notificá-los sobre que ação podem realizar para solucionar ou comunicar se há algum passo extra a ser realizado.

Por exemplo, se o cartão utilizado não pode ser validado, pode-se recomendar que tente revisar se os dados inseridos estão realmente corretos ou utilizar outro meio de pagamento para completar a operação. Para saber mais sobre os possíveis erros, confira a referência no retorno da API.

Veja a tabela abaixo com as mensagens sugeridas de acordo com o status de cada operação.

| Status | Cenário | Mensagem sugerida |
|---|---|---|
| APPROVED | Cenários em que o cartão está válido | Seu cartão foi validado. |
| REJECTED | Cenários em que o cartão não está válido | Não foi possível validar seu cartão. |

