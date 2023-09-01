# Mensagens de resposta

Ofereça aos seus clientes informação clara e precisa sobre os possíveis erros na inserção de dados de cartão ou o estado dos pagamentos realizados. Isso permite notificá-los sobre que ação podem realizar para solucionar ou comunicar se há algum passo extra a ser realizado.

Por exemplo, se o cartão não possui saldo suficiente para a compra, pode-se recomendar que se tente pagar novamente com outro meio de pagamento para completar a operação. Para saber mais sobre os possíveis erros, confira a [Referência de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference).

> WARNING
>
> Importante
>
> Você pode configurar o envio de e-mails aos clientes com mensagens de status dos pedidos como, por exemplo, de pagamento aprovado. Porém, a configuração deste envio deve ser feita em suas respectivas plataformas. Veja as documentações de [WooComerce](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/woocommerce/integration), [PrestaShop](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/prestashop/email-customization) e [Magento 2](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/magento-two/notifications-configuration) para mais detalhes.

## Resultados da criação de uma cobrança

| Estado | `status_detail` | Mensagem sugerida |
| --- | --- | --- |
| approved | `accredited` | Pronto, seu pagamento foi aprovado! No resumo, você verá a cobrança do valor como `statement_descriptor`. |
| in_process | `pending_contingency` | Estamos processando o pagamento.<br/><br/>Não se preocupe, em menos de 2 dias úteis informaremos por e-mail se foi creditado. |
| in_process | `pending_review_manual` | Estamos processando seu pagamento.<br/><br/>Não se preocupe, em menos de 2 dias úteis informaremos por e-mail se foi creditado ou se necessitamos de mais informação. |
| rejected | `cc_rejected_bad_filled_card_number` | Revise o número do cartão. |
| rejected | `cc_rejected_bad_filled_date` | Revise a data de vencimento. |
| rejected | `cc_rejected_bad_filled_other` | Revise os dados. |
| rejected | `cc_rejected_bad_filled_security_code` | Revise o código de segurança do cartão. |
| rejected | `cc_rejected_blacklist` | Não pudemos processar seu pagamento. |
| rejected | `cc_rejected_call_for_authorize` | Você deve autorizar ao `payment_method_id` o pagamento do valor ao Mercado Pago. |
| rejected | `cc_rejected_card_disabled` | Ligue para o `payment_method_id` para ativar seu cartão. O telefone está no verso do seu cartão. |
| rejected | `cc_rejected_card_error` | Não conseguimos processar seu pagamento. |
| rejected | `cc_rejected_duplicated_payment` | Você já efetuou um pagamento com esse valor. Caso precise pagar novamente, utilize outro cartão ou outra forma de pagamento. |
| rejected | `cc_rejected_high_risk` | Seu pagamento foi recusado.<br/><br/>Escolha outra forma de pagamento. Recomendamos meios de pagamento em dinheiro. |
| rejected | `cc_rejected_insufficient_amount` | O `payment_method_id` possui saldo insuficiente. |
| rejected | `cc_rejected_invalid_installments` | O `payment_method_id` não processa pagamentos em `installments` parcelas. |
| rejected | `cc_rejected_max_attempts` | Você atingiu o limite de tentativas permitido.<br/><br/>Escolha outro cartão ou outra forma de pagamento. |
| rejected | `cc_rejected_other_reason` | `payment_method_id` não processa o pagamento. | ----[mlb]----
| rejected |  `cc_rejected_card_type_not_allowed` | O pagamento foi rejeitado porque o usuário não tem a função crédito habilitada em seu cartão multiplo (débito e crédito). | ------------

> CLIENT_SIDE
>
> h2
>
> Erros de inserção de dados


| Código | Descrição | Mensagem sugerida |
| --- | --- | --- |
| 205 | parameter cardNumber can not be null/empty | Digite o número do seu cartão. |
| 208 | parameter cardExpirationMonth can not be null/empty | Escolha um mês. |
| 209 | parameter cardExpirationYear can not be null/empty | Escolha um ano. |
| 212 | parameter docType can not be null/empty | Informe seu documento. |
| 213 | The parameter cardholder.document.subtype can not be null or empty | Informe seu documento. |
| 214 | parameter docNumber can not be null/empty | Informe seu documento. |
| 220 | parameter cardIssuerId can not be null/empty | Informe seu banco emissor. |
| 221 | parameter cardholderName can not be null/empty | Digite o nome e sobrenome. |
| 224 | parameter securityCode can not be null/empty | Digite o código de segurança. |
| E203 | invalid parameter securityCode | Confira o código de segurança. |
| E301 | invalid parameter cardNumber | Há algo de errado com esse número. Digite novamente. |
| 316 | invalid parameter cardholderName | Por favor, digite um nome válido. |
| 322 | invalid parameter docType | Confira seu documento. |
| 323 | invalid parameter cardholder.document.subtype | Confira seu documento. |
| 324 | invalid parameter docNumber | Confira seu documento. |
| 325 | invalid parameter cardExpirationMonth | Confira a data. |
| 326 | invalid parameter cardExpirationYear | Confira a data. |
| default | Outro código de erro | Confira os dados. |

## Erros na criação do token de cartão

| Estado | `status_detail` | Mensagem sugerida |
| --- | --- | --- |
| 106 | Cannot operate between users from different countries | Não pode efetuar pagamentos a usuários de outros países. |
| 109 | Invalid number of shares for this payment_method_id | O `payment_method_id` não processa pagamentos parcelados. <br/><br/> Escolha outro cartão ou outra forma de pagamento. |
| 126 | The action requested is not valid for the current payment state | Não conseguimos processar seu pagamento. |
| 129 | Cannot pay this amount with this paymentMethod | O `payment_method_id` não processa pagamentos para o valor selecionado.<br/><br/>Escolha outro cartão ou outra forma de pagamento. |
| 145 | Invalid users involved | Uma das partes com a qual está tentando realizar o pagamento é um usuário de teste e a outra é um usuário real. |
| 150 | The payer_id cannot do payments currently | Você não pode efetuar pagamentos. |
| 151 | The payer_id cannot do payments with this payment_method_id | Você não pode efetuar pagamentos. |
| 160 | Collector not allowed to operate | Não conseguimos processar seu pagamento. |
| 204 | Unavailable payment_method | O `payment_method_id` não está disponível nesse momento.<br/><br/>Escolha outro cartão ou outra forma de pagamento. |
| 801 | Already posted the same request in the last minute | Você realizou um pagamento similar há poucos instantes.<br/><br/>Tente novamente em alguns minutos. |
| default | Outro código de erro | Não pudemos processar seu pagamento. |

---
### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Integração avançada
>
> Otimize sua integração e melhore a gestão das suas vendas.
>
> [Integração avançada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/advanced-integration)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> Referências de API
>
> Encontre toda a informação necessária para interagir com nossas APIs.
>
> [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference)
