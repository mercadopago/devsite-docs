# Melhore a aprovação de seus pagamentos

## Por que um pagamento é recusado?

A recusa de pagamentos é uma realidade no mundo das vendas online e pode acontecer por diversas razões. **Um pagamento pode ser recusado por**:
 * um erro com o meio de pagamento;
 * preenchimento incorreto das informações por parte do cliente;
 * cartão sem saldo suficiente;
 * violação de requisitos de segurança necessários;
 * movimentos suspeitos indicando risco de fraude;
 * problemas na comunicação entre adquirentes e subadquirentes.

Você pode encontrar as **informações e checar o estado de um pagamento** via API, através do método [Obter pagamento](/developers/pt/reference/payments/_payments_id/get). O campo `status` indica se o pagamento foi ou não aprovado, enquanto o campo `status_detail` traz mais detalhes, incluindo os motivos de recusa.


```json
{
    "status": "rejected",
    "status_detail": "cc_rejected_insufficient_amount",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

> NOTE
>
> Importante
>
> Também é possível achar mais informações sobre pagamentos na atividade da conta de [Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/activities).

### Recusas devido a erros de preenchimento

Estes motivos de recusa acontecem devido a **erros no momento do checkout**. Isso pode acontecer por diversos motivos, como por exemplo falha de entendimento da tela de pagamento, problemas de experiência do comprador, falta de validação nos campos, ou também erros que o comprador pode cometer na hora de preencher seus dados, principalmente os dados de cartão.
Nestes casos o campo `status_detail` poderá retornar: 
 * `cc_rejected_bad_filled_card_number`
 * `cc_rejected_bad_filled_date`
 * `cc_rejected_bad_filled_other`
 * `cc_rejected_bad_filled_security_code`


### Recusas pelo banco emissor

Ao realizar um **pagamento com cartão de crédito ou débito**, por exemplo, o banco emissor pode recusar a cobrança por diferentes motivos, como a data de validade expirada, saldo ou limite insuficientes, cartão desabilitado ou bloqueado para compras online.
Nestes casos o campo `status_detail` poderá retornar: 
 * `cc_rejected_call_for_authorize`
 * `cc_rejected_card_disabled`
 * `cc_rejected_duplicated_payment`
 * `cc_rejected_insufficient_amount`
 * `cc_rejected_invalid_installments`
 * `cc_rejected_max_attempts`


### Recusas por prevenção contra fraudes

Fazemos o acompanhamento em tempo real das transações procurando **reconhecer recursos e padrões suspeitos** que apontam para uma tentativa de fraude. Isso é feito tanto pelos algoritmos do Mercado Pago quanto pelos bancos, tudo para evitar ao máximo chargebacks.

Quando o nosso sistema de prevenção de fraude detectar um pagamento suspeito, o campo `status_detail` poderá retornar: 
 * `cc_rejected_blacklist`
 * `cc_rejected_high_risk`
 * `cc_rejected_other_reason`

> WARNING
> 
> Atención
>
> A resposta `cc_rejected_other_reason` é um status enviado pelo banco emissor e, embora não especifique o motivo da rejeição, é uma estimativa do risco de fraude. No entanto, há outras razões pelas quais esse status pode ser retornado. Em caso de dúvida, é recomendável escolher outro meio de pagamento ou contactar o banco.
```json
 {
    "status": "rejected",
    "status_detail": "cc_rejected_high_risk",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

