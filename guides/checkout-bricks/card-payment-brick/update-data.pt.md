# Atualizar dados

Para atualizar dados no Card Payment Brick, disponibilizamos o método update através do _Controller_. Ao ser chamado, o método update irá atualizar os dados informados preservando a instância atual do Brick.

Dados disponíveis para atualização:

| Campo | Tipo | Descrição | Validação |
| --- | --- | --- | --- |
| amount | number | Valor do pagamento. | Antes de atualizar o `amount`, o Brick verifica se o novo valor é maior ou igual ao valor mínimo permitido pelo meio de pagamento selecionado pelo usuário. Se a validação for bem-sucedida, o método update irá retornar `true`. Do contrário, irá retornar `false`. |

```javascript
let amount = 95;
cardPaymentBrickController.update({ amount });
```