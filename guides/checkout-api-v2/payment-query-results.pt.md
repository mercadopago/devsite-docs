# Consulta sobre o status de um pagamento

| Status | `status_detail` | Descrição |
| --- | --- | --- |
| approved | `accredited` | Pronto, seu pagamento foi aprovado! No resumo, você verá a cobrança do valor como `statement_descriptor`. |
| approved | `partially_refunded` | O pagamento foi feito com pelo menos um reembolso parcial. |
| authorized | `pending_capture` | O pagamento foi autorizado e aguarda [captura](/developers/pt/docs/checkout-api/payment-management/capture-authorized-payment). |
| in_process | `offline_process` | Por falta de processamento online, o pagamento está sendo processado de maneira offline. |
| in_process | `pending_contingency` | Estamos processando o pagamento.<br/><br/>Não se preocupe, em menos de 2 dias úteis informaremos por e-mail se foi creditado. |
| in_process | `pending_review_manual` | Estamos processando seu pagamento.<br/><br/>Não se preocupe, em menos de 2 dias úteis informaremos por e-mail se foi creditado ou se necessitamos de mais informação. |
| pending | `pending_waiting_transfer` |Nos casos de transferência bancária, o `status_detail` é obtido aguardando que o usuário finalize o processo de pagamento no seu banco. |
| pending | `pending_waiting_payment` | Nos casos de pagamentos offline, o mesmo fica pendente até que o usuário realize o pagamento. |
| pending | `pending_challenge` | Nos casos de pagamentos com cartão de crédito, há uma confirmação pendente por devido a um challenge. |
| cancelled | `expired` | O pagamento foi cancelado após ficar com status pendente por 30 dias.| 
| cancelled | `by_collector` | O pagamento foi cancelado pelo collector.| 
| cancelled | `by_payer` | O pagamento foi cancelado pelo pagador.|
| charged_back | `settled` | O dinheiro foi retido após um processo de estorno. |
| charged_back | `reimbursed` | O dinheiro foi devolvido após um processo de estorno.|
| charged_back | `in_process` | O pagamento está em processo de recuperação pois o pagador desconhece a transação.|
| refunded | `refunded` | O pagamento foi devolvido pelo collector.|
| refunded | `by_admin` | o pagamento foi devolvido.|
| rejected | `bank_error` | Se a forma de pagamento for transferência bancária, o pagamento foi rejeitado devido a um erro com o banco. |
| rejected | `cc_rejected_3ds_challenge` | Pagamento rejeitado por não superar o challenge 3DS. |
| rejected | `cc_rejected_3ds_mandatory` | Pagamento rejeitado por não ter o challenge 3DS quando é obrigatório. |
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
| rejected | `cc_rejected_other_reason` | `payment_method_id` não processa o pagamento. |
| rejected | `cc_amount_rate_limit_exceeded` | O pagamento foi rejeitado porque superou o limite (CAP - Capacidade Máxima Permitida) do meio de pagamento. |
| rejected | `rejected_insufficient_data` | O pagamento foi rejeitado devido à falta de todas as informações obrigatórias necessárias no envio. | 
| rejected | `rejected_by_bank` | Operação recusada pelo banco. |
| rejected | `rejected_by_regulations` | Pagamento recusado devido a regulamentações. |
| rejected | `insufficient_amount` | Pagamento rejeitado por valores insuficientes. | ----[mlb]----
| rejected |  `cc_rejected_card_type_not_allowed` | O pagamento foi rejeitado porque o usuário não tem a função crédito habilitada em seu cartão multiplo (débito e crédito). | ------------