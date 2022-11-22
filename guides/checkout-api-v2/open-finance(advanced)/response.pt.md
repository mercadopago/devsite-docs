# Mensagens de resposta
Ofereça aos seus clientes informações claras e precisas sobre os possíveis erros na Iniciação de Transação de Pagamento ou o estado dos pagamentos realizados. Isso permite notificá-los sobre que ação podem realizar para solucionar ou comunicar se há algum passo extra a ser realizado.

Por exemplo, se a conta escolhida para iniciação de pagamento não possui saldo suficiente para a compra, pode-se recomendar que se tente pagar novamente com outro meio de pagamento para completar a operação. Para saber mais sobre os possíveis erros, confira a referência no retorno da API.

> WARNING
> 
> Importante
> 
> Lembre-se de que o Banco Central do Brasil obriga que toda transação iniciada via Iniciador de Transação de Pagamentos expire depois de 60 minutos.

**Status de Pagamento**
| Status   | Cenário                                    | Mensagem sugerida                    |
|----------|--------------------------------------------|--------------------------------------|
| PENDING  | Cenários em que o pagamento está pendente. | Seu pagamento está sendo processado. |
| APPROVED | Cenários em que o pagamento está aprovado. |      Seu pagamento foi aprovado.     |
| REJECTED |  Cenários em que o pagamento é rejeitado.  |     Seu pagamento foi rejeitado.     |

**Motivos de rejeição**

| Status                     | Cenário                                                                                       | Mensagem sugerida                                                                                                                         |
|----------------------------|-----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
|   REJECTED_ACCOUNT_ERROR   | Cenários em que há algum tipo de erro na conta do usuário.                                    | Não foi possível realizar a transação devido a um problema na sua conta. Entre em contato com o seu banco e tente novamente.              |
|     INSUFFICIENT_AMOUNT    |        Cenários em que usuário pagador não tem saldo em conta para efetuar o pagamento.       | Saldo insuficiente na conta que você escolheu. Escolha outra conta e tente novamente.                                                     |
|    REJECTED_CAP_EXCEEDED   |                   Cenários em que o limite de valores do Pix é ultrapassado.                  | Esse valor excede o seu limite diário de Pix. Volte para a {{instituição detentora}} e escolha um valor menor, ou tente novamente amanhã. |
| REJECTED_SETTLEMENT_FAILED | Cenários onde o cliente não autorizou o pagamento e/ou teve algum erro durante a autorização. | No momento, não é possível realizar essa transação. Pedimos desculpas por isso. Tente novamente mais tarde.                               |