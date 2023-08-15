# Atualizar dados

Para atualizar dados no Card Payment Brick, disponibilizamos o método update através do _Controller_. Ao ser chamado, o método update irá atualizar os dados informados preservando a instância atual do Brick.

Dados disponíveis para atualização:

| Campo | Tipo | Descrição | Validação |
| --- | --- | --- | --- |
| amount | number | Valor do pagamento. |

```javascript
let amount = 95;
cardPaymentBrickController.update({ amount });
```