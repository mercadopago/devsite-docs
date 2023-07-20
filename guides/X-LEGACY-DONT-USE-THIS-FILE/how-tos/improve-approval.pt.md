# Melhore a aprovação de seus pagamentos

Ao realizar um pagamento online, a transação passa por uma análise criteriosa para minimizar riscos de fraude e garantir que o processamento ocorra sem erros.

Nesta documentação você encontrará informações sobre o que leva um pagamento a ser recusado e algumas recomendações para evitar que isso aconteça.

## Por que um pagamento é recusado?

Um pagamento pode ser recusado por um **erro com o meio de pagamento ou porque não preenche os requisitos de segurança necessários**. Por exemplo, se o cartão não tiver saldo suficiente ou se houver uma movimentação não usual da conta.

## Motivos de recusa

A recusa de pagamentos é uma realidade no mundo das vendas online e pode acontecer por diversas razões: preenchimento incorreto das informações por parte do cliente, tentativa de fraude, problema na comunicação entre adquirentes e subadquirentes, entre muitas outras questões. 

Você pode encontrar as informações e checar o estado de um pagamento via API, através do método [Obter pagamento](/developers/pt/reference/payments/_payments_id/get). O campo `status` indica se o pagamento foi ou não aprovado, enquanto o campo `status_detail` traz mais detalhes, incluindo os motivos de recusa.

> NOTE
>
> Importante
>
> Também é possível achar mais informações sobre pagamentos na atividade da conta de [Mercado Pago.](https://www.mercadopago[FAKER][URL][DOMAIN]/activities)

### Erros de preenchimento pelo comprador

Este é um dos principais motivos para que um pagamento seja recusado. Muitas vezes o comprador pode errar na hora de preencher seus dados, principalmente os de **endereço, CPF e números do cartão**.

Nestes casos o campo `status_detail` poderá retornar: `cc_rejected_bad_filled_date`, `cc_rejected_bad_filled_other`, `cc_rejected_bad_filled_security_code`.

### Pagamentos recusados pelo banco

Ao realizar um pagamento com cartão de crédito ou débito, por exemplo, o banco emissor pode recusar a cobrança por diferentes motivos como a data de validade expirada, saldo ou limite insuficientes, cartão desabilitado ou bloqueado para compras online. 

Nestes casos o campo `status_detail` poderá retornar: `cc_rejected_call_for_authorize`, `cc_rejected_card_disabled`, `cc_rejected_duplicated_payment`, `cc_rejected_insufficient_amount`.

### Prevenção contra fraudes

Ao realizar um pagamento, uma série de verificações é feita tanto pelo banco quanto pelo Mercado Pago, e caso nosso sistema antifraudes detecte algum tipo de movimentação incomum ou que caracterize algum tipo de golpe ou fraude, ele é bloqueado. 

Nestes casos o campo `status_detail` poderá retornar: `cc_rejected_blacklist`, `cc_rejected_high_risk`.

> WARNING
> 
> Recusa sem motivo
>
> É importante considerar que se o emissor do cartão de crédito não indicar o motivo da recusa, você verá o detalhe do pagamento como `cc_rejected_other_reason`. Nesse caso, é recomendável alterar o meio de pagamento ou entrar em contato com o banco para resolver o problema.
