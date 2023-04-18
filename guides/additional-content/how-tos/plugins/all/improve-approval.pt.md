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
> Também é possível achar mais informações sobre pagamentos na atividade da conta de [Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/activities).


