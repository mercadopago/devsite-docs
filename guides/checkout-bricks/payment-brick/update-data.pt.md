# Atualizar dados

Para atualizar dados no Payment Brick, disponibilizamos o método update através do _Controller_. Ao ser chamado, o método update irá atualizar os dados informados preservando a instância atual do Brick.

Dados disponíveis para atualização:

----[mlb, mla, mlm]----
| Campo | Tipo | Descrição | Validação |
| --- | --- | --- | --- |
| amount | number | Valor do pagamento. <br><br> A atualização do `amount` não afeta os pagamentos via [Conta Mercado Pago e Parcelamento sem cartão](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits) porque seus valores são definidos no backend. | Antes de atualizar o `amount`, o Brick verifica se o novo valor é maior ou igual ao valor mínimo permitido pelo meio de pagamento selecionado pelo usuário. Se a validação for bem-sucedida, o método update irá retornar `true`. Do contrário, irá retornar `false`. |

------------
----[mpe, mco, mlu, mlc]----
| Campo | Tipo | Descrição | Validação |
| --- | --- | --- | --- |
| amount | number | Valor do pagamento. <br><br> A atualização do `amount` não afeta os pagamentos via [Conta Mercado Pago](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/wallet) porque seus valores são definidos no backend. | Antes de atualizar o `amount`, o Brick verifica se o novo valor é maior ou igual ao valor mínimo permitido pelo meio de pagamento selecionado pelo usuário. Se a validação for bem-sucedida, o método update irá retornar `true`. Do contrário, irá retornar `false`. |

------------

```javascript
let amount = 95;
paymentBrickController.update({ amount });
```