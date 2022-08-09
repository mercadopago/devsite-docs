> CLIENT_SIDE 
>
> h1
>
> Configurar meios de pagamento aceitos

Como o Payment Brick disponibiliza diversos meios de pagamento, é necessário customizar quais serão disponibilizados. Atualmente é possível selecionar até quatro, sendo:

## Cartão de crédito

Para incluir o cartão de crédito como meio de pagamento, basta utilizar a seguinte configuração:

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      creditCard: [ 'master', 'visa' ]
    }
  }
}
}
```
]]]

A propriedade `creditCard` aceita 2 tipos de variável, `string` e `string[]`. No exemplo acima, apenas pagamentos com os cartões **MASTER** e **VISA** serão aceitos. Os métodos permitidos para cartão de crédito são: `visa`, `master`, `hipercard`, `amex` e `elo`.

Caso queira selecionar todos os métodos, também é possível passar uma string ao invés do array, como no exemplo abaixo.

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      creditCard: 'all'
    }
  }
}
}
```
]]]

## Cartão de débito

Para incluir o cartão de débito como meio de pagamento, basta utilizar a seguinte configuração:

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      debitCard: [ 'master', 'visa' ]
    }
  }
}
}
```
]]]

A propriedade `debitCard` aceita 2 tipos de variável, `string` e `string[]`. No exemplo acima, apenas pagamentos com os cartões **MASTER** e **VISA** serão aceitos. Os métodos permitidos para cartão de débito são os mesmos que existem para cartão de crédito, ou seja: `visa`, `master`, `hipercard`, `amex` e `elo`.

Caso queira selecionar todos os métodos, também é possível passar uma string ao invés do array, como no exemplo abaixo.

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      debitCard: 'all'
    }
  }
}
}
```
]]]