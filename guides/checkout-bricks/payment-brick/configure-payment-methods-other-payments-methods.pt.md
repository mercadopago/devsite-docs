> CLIENT_SIDE 
>
> h1
>
> Configurar meios de pagamento aceitos

Como o Payment Brick disponibiliza diversos meios de pagamento, é necessário customizar quais serão disponibilizados. Atualmente é possível selecionar até quatro, sendo:

## Meios off

Para incluir os meios de pagamento offline, basta utilizar a seguinte configuração:

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: [ 'pec', 'bolbradesco' ]
    }
  }
}
}
```
]]]

A propriedade `ticket` aceita 2 tipos de variável, `string` e `string[]`. No exemplo acima, serão aceitos pagamentos via **boleto** e **pagamento em lotérica**.
Os métodos permitidos para pagamento offline são: `pec` (pagamento em lotérica) e `bolbradesco` (boleto bancário).

Caso queira selecionar todos os métodos, também é possível passar uma string ao invés do array, como no exemplo abaixo.

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: 'all'
    }
  }
}
}
```
]]]