# Erros da integração

| Código | Descrição | Descrição |
| --- | --- | --- |
| 205 | parameter cardNumber can not be null/empty | Digite o número do seu cartão. |
| 208 | parameter expirationMonth can not be null/empty | Escolha um mês. |
| 209 | parameter expirationYear can not be null/empty | Escolha um ano. |
| 212 | parameter identificationType can not be null/empty | Informe seu documento. |
| 214 | parameter identificationNumber can not be null/empty | Informe seu documento. |
| 220 | parameter cardIssuerId can not be null/empty | Informe seu banco emissor. |
| 221 | parameter cardholderName can not be null/empty | Digite o nome e sobrenome. |
| 224 | parameter securityCode can not be null/empty | Digite o código de segurança. |
| E203 | invalid parameter securityCode | Confira o código de segurança. |
| E301 | invalid parameter cardNumber | Há algo de errado com esse número. Digite novamente. |
| 316 | invalid parameter cardholderName | Por favor, digite um nome válido. |
| 322 | invalid parameter identificationType | Confira seu documento. |
| 324 | invalid parameter identificationNumber | Confira seu documento. |
| 325 | invalid parameter expirationMonth | Confira a data. |
| 326 | invalid parameter expirationYear | Confira a data. |
| default | Outro código de erro | Confira os dados. |

## Erros na criação do token do cartão

| Status | `status_detail` | Descrição |
| --- | --- | --- |
| 106 | Cannot operate between users from different countries | Não pode efetuar pagamentos a usuários de outros países. |
| 109 | Invalid number of shares for this payment_method_id | O `payment_method_id` não processa pagamentos parcelados. <br> Escolha outro cartão ou outra forma de pagamento. |
| 126 | The action requested is not valid for the current payment state | Não conseguimos processar seu pagamento. |
| 129 | Cannot pay this amount with this paymentMethod | O `payment_method_id` não processa pagamentos para o valor selecionado. <br> Escolha outro cartão ou outra forma de pagamento. |
| 145 | Invalid users involved | Uma das partes com a qual está tentando realizar o pagamento é um usuário de teste e a outra é um usuário real. |
| 150 | The payer_id cannot do payments currently | Você não pode efetuar pagamentos. |
| 151 | The payer_id cannot do payments with this payment_method_id | Você não pode efetuar pagamentos. |
| 160 | Collector not allowed to operate | Não conseguimos processar seu pagamento. |
| 204 | Unavailable payment_method | O `payment_method_id` não está disponível nesse momento. <br> Escolha outro cartão ou outra forma de pagamento. |
| 801 | Already posted the same request in the last minute | Você realizou um pagamento similar há poucos instantes. <br> Tente novamente em alguns minutos. |
| default | Outro código de erro | Não pudemos processar seu pagamento. |
