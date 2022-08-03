> CLIENT_SIDE 
>
> h1
>
> Configurar meios de pagamento aceitos

Como o Payment Brick disponibiliza diversos meios de pagamento, é necessário customizar quais serão disponibilizados. Atualmente é possível selecionar até quatro, sendo:

----[mlm, mpe, mco, mlu, mlc]----
* Cartão de crédito
* Cartão de débito
------------

----[mla, mlb]----
* Cartão de crédito
* Cartão de débito
* Meios off
* Pix
------------

Veja abaixo como configurar cada uma das opções citadas acima.

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

----[mla, mlb]----
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

## Pix

Para incluir o Pix, basta utilizar a seguinte configuração:

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      bankTransfer: [ 'pix' ]
    }
  }
}
}
```
]]]

A propriedade `bankTransfer` aceita 2 tipos de variável, `string` e `string[]`. Por enquanto, o único meio aceito para `bankTransfer` é **Pix**, então passar o array `['pix']` ou a string `all` traz o mesmo resultado.

------------

### Callback onSubmit

Para permitir diferentes endpoints de pagamento para diferentes meios de pagamento, o **callback de onSubmit** para o Brick de Payment recebe, além dos dados do formulário, também o tipo de pagamento. Veja o exemplo abaixo.

[[[
```Javascript
settings = {
 ...,
 callbacks: {
   ...,
   onSubmit: ({ paymentType, formData }) => {
     // callback chamado ao clicar no botão de submissão dos dados
     return new Promise((resolve, reject) => {
       fetch("/processar-pago", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData)
       })
         .then((response) => {
           // receber o resultado do pagamento
           resolve();
         })
         .catch((error) => {
           // lidar com a resposta de erro ao tentar criar o pagamento
           reject();
         })
     });
   },
 },
};
}
```
]]]

> PREV_STEP_CARD_PT
>
> Customers & Cards
>
> Saiba como configurar a funcionalidade de Customers & Cards, que permite o uso de cartões salvos nos pagamentos em seu site. 
>
> [Customers & Cards](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/customers-cards) 

> NEXT_STEP_CARD_PT
>
> Definir tema 
>
> Caso deseje, veja como selecionar outro tema ao instanciar/renderizar o Payment Brick.
>
> [Definir tema](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/set-theme) 