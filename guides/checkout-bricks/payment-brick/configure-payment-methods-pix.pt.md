> CLIENT_SIDE 
>
> h1
>
> Configurar meios de pagamento aceitos

Como o Payment Brick disponibiliza diversos meios de pagamento, é necessário customizar quais serão disponibilizados. Atualmente é possível selecionar até quatro, sendo:

Veja abaixo como configurar cada uma das opções citadas acima.

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