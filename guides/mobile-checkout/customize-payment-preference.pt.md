# Personalize sua preferência de pagamentos

Se necessário, ao criar a preferência de pagamentos em seu servidor, você poderá especificar restrições e exclusões de meios ou tipos de pagamentos específicos e definir o número máximo de parcelas ou deixar o valor padrão.

## Exclua Meios de Pagamento

Você pode especificar os tipos de meio de pagamento que não quiser aceitar (Boleto ou Cartões de Crédito), excluindo-os ao criar a Checkout Preference.

No conteúdo de sua preferência de pagamentos você pode adicionar os meios de pagamentos que aceita ou os que não aceita.

*Excluir um tipo de meio de pagamento específico:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_types":[
        {"id":"ticket"}
    ]
  },
  ...
}
```

*Excluir mais de um tipo de meio de pagamento:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_types":[
        {"id":"ticket"},
        {"id":"atm"},
        {"id":"debit_card"}
    ]
  },
  ...
}
```

Você pode até mesmo determinar quais meios de pagamento específicos (Visa, Mastercard, etc.) deseja excluir do checkout:

*Excluir um meio de pagamento específico:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_methods":[
        {"id":"visa"}
    ]
  },
  ...
}
```

*Excluir mais de um meio de pagamento:*


```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
    "excluded_payment_methods":[
        {"id":"visa"},
        {"id":"master"}
    ]
  },
  ...
}
```

## Personalize o número de parcelas

Você pode especificar o número máximo de parcelas que deseja permitir para seus meios de pagamento.

```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
  	 "excluded_payment_methods": [
  	   ...
  	 ],
  	 "excluded_payment_types": [
  	   ...
  	 ],
    "installments": 1
  },
  ...
}
```

Você também poderá definir um número de parcelas padrão a ser selecionado automaticamente, caso esteja disponível para o meio de pagamento selecionado pelo usuário. Caso contrário, a tela de parcelas será exibida para que o cliente selecione.

```json
{
  "items": [
    ...
  ],
  "payer": {
    ...
  },
  "payment_methods": {
  	 "excluded_payment_methods": [
  	   ...
  	 ],
  	 "excluded_payment_types": [
  	   ...
  	 ],
    "default_installments": 3
  },
  ...
}
```