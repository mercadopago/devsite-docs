# Resultados da criação de uma cobrança

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