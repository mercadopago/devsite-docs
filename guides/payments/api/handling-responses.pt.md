# Manipulação de respostas para a criação de pagamentos e card tokens

Ofereça aos seus clientes informações claras e precisas diante de possíveis erros na inclusão dos dados do cartão e sobre o status do pagamento realizado. Isso permitirá melhorar a conversão do seu checkout, pois o usuário estará ciente de que precisa corrigir alguma informação ou fazer algo para concluir o processo de pagamento com sucesso.

> NOTE
>
> Nota
>
> Ajudamos você a melhorar a experiência de seus clientes e evitar pagamentos recusados com as nossas recomendações para [melhorar a aprovação de seus pagamentos](https://www.mercadopago.com.ar/developers/pt/guides/manage-account/payment-rejections).

## Realização de cobranças

### Resultados da criação de uma cobrança: `HTTP Status 201 OK`

|   status   |            status_detail               |                                                        Mensagem sugerida                                                            |
| :--------- | :------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| approved   | `accredited`                           | Pronto, seu pagamento foi aprovado! No resumo, você verá a cobrança do valor como `statement_descriptor`                            |
| in_process | `pending_contingency`                  | Estamos processando o pagamento. Em até 2 dias úteis informaremos por e-mail o resultado.                                                 |
| in_process | `pending_review_manual`                | Estamos processando o pagamento. Em até 2 dias úteis informaremos por e-mail se foi aprovado ou se precisamos de mais informações.  |
| rejected   | `cc_rejected_bad_filled_card_number`   | Confira o número do cartão.                                                                                                         |
| rejected   | `cc_rejected_bad_filled_date`          | Confira a data de validade.                                                                                                         |
| rejected   | `cc_rejected_bad_filled_other`         | Confira os dados.                                                                                                                   |
| rejected   | `cc_rejected_bad_filled_security_code` | Confira o código de segurança.                                                                                                      |
| rejected   | `cc_rejected_blacklist`                | Não conseguimos processar seu pagamento.                                                                                            |
| rejected   | `cc_rejected_call_for_authorize`       | Você deve autorizar ao `payment_method_id` o pagamento do valor ao Mercado Pago.                                                    |
| rejected   | `cc_rejected_card_disabled`            | Ligue para o `payment_method_id` para ativar seu cartão. O telefone está no verso do seu cartão.                                    |
| rejected   | `cc_rejected_card_error`               | Não conseguimos processar seu pagamento.                                                                                            |
| rejected   | `cc_rejected_duplicated_payment`       | Você já efetuou um pagamento com esse valor. Caso precise pagar novamente, utilize outro cartão ou outra forma de pagamento.        |
| rejected   | `cc_rejected_high_risk`                | Seu pagamento foi recusado. Escolha outra forma de pagamento. Recomendamos meios de pagamento em dinheiro.                          |
| rejected   | `cc_rejected_insufficient_amount`      | O `payment_method_id` possui saldo insuficiente.                                                                                    |
| rejected   | `cc_rejected_invalid_installments`     | O `payment_method_id` não processa pagamentos parcelados.                                                                           |
| rejected   | `cc_rejected_max_attempts`             | Você atingiu o limite de tentativas permitido. Escolha outro cartão ou outra forma de pagamento.                                    |
| rejected   | `cc_rejected_other_reason`             | O `payment_method_id` não processou seu pagamento.                                                                                  |

> NOTE
>
> Nota
>
> A expiração de um pagamento no estado `pending` ou `in_process` ocorre após 30 dias e o cancelamento é automático, o status final deles será `cancelled/expired`. 

### Erro de inserção de dados: HTTP Status 400 Bad Request

|  Código |                            Descrição                               |              Mensagem sugerida                      |
| :------ | :----------------------------------------------------------------- | :-------------------------------------------------- |
| 205     | parameter cardNumber can not be null/empty                         | Digite o número do seu cartão.                      |
| 208     | parameter cardExpirationMonth can not be null/empty                | Escolha um mês.                                     |
| 209     | parameter cardExpirationYear can not be null/empty                 | Escolha um ano.                                     |
| 212     | parameter docType can not be null/empty                            | Informe seu documento.                              |
| 213     | The parameter cardholder.document.subtype can not be null or empty | Informe seu documento.                              |
| 214     | parameter docNumber can not be null/empty                          | Informe seu documento.                              |
| 220     | parameter cardIssuerId can not be null/empty                       | Informe seu banco emissor.                          |
| 221     | parameter cardholderName can not be null/empty                     | Digite o nome e sobrenome.                          |
| 224     | parameter securityCode can not be null/empty                       | Digite o código de segurança.                       |
| E301    | invalid parameter cardNumber                                       | Há algo de errado com esse número. Digite novamente.|
| E302    | invalid parameter securityCode                                     | Confira o código de segurança.                      |
| 316     | invalid parameter cardholderName                                   | Por favor, digite um nome válido.                   |
| 322     | invalid parameter docType                                          | Confira seu documento.                              |
| 323     | invalid parameter cardholder.document.subtype                      | Confira seu documento.                              |
| 324     | invalid parameter docNumber                                        | Confira seu documento.                              |
| 325     | invalid parameter cardExpirationMonth                              | Confira a data.                                     |
| 326     | invalid parameter cardExpirationYear                               | Confira a data.                                     |
| default | (qualquer outro código de erro )                                   | Confira os dados.                                   |

## Erros na criação do token do cartão

Se houver algum erro nos dados do cartão, iremos informá-lo com os seguintes códigos, para que possa informar aos seus usuários o status e como corrigi-lo.

| status  |                      status_detail                              |                                                     Mensagem sugerida                                                             |
| :------ | :---------------------------------------------------------------| :-------------------------------------------------------------------------------------------------------------------------------- |
| 106     | Cannot operate between users from different countries           | Não pode efetuar pagamentos a usuários de outros países.                                                                          |
| 109     | Invalid number of shares for this payment\_method\_id           | O payment\_method\_id não processa pagamentos parcelados. <br/><br/> Escolha outro cartão ou outra forma de pagamento.            |
| 126     | The action requested is not valid for the current payment state | Não conseguimos processar seu pagamento.                                                                                          |
| 129     | Cannot pay this amount with this paymentMethod                  | payment\_method\_id não processa pagamentos para o valor selecionado.<br/><br/> Escolha outro cartão ou outra forma de pagamento. |
| 145     | Invalid users involved                                          | Não conseguimos processar seu pagamento.                                                                                          |
| 150     | The payer\_id cannot do payments currently                      | Você não pode efetuar pagamentos.                                                                                                 |
| 151     | The payer\_id cannot do payments with this payment\_method\_id  | Você não pode efetuar pagamentos.                                                                                                 |
| 160     | Collector not allowed to operate                                | Não conseguimos processar seu pagamento.                                                                                          |
| 204     | Unavailable payment\_method                                     | O payment\_method\_id não está disponível neste momento.  <br/><br/> Escolha outro cartão ou outra forma de pagamento.            |
| 801     | Already posted the same request in the last minute              | Você efetuou um pagamento no mesmo valor alguns minutos atrás. <br/><br/> Tente novamente em alguns minutos.                      |
| default | (qualquer outro código de erro)                                 | Não conseguimos processar seu pagamento.                                                                                          |
