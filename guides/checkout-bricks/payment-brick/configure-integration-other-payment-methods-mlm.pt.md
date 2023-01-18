# Outros meios de pagamento

Com o Checkout Bricks do Mercado Pago, é possível oferecer, além de cartão, **pagamentos com dinheiro via ticket**.

> NOTE
>
> Importante
> 
> Para facilitar a visualização dos pagamentos em dinheiro pelo comprador, o Brick mostra os pontos de pagamento (Exemplo: **7 Eleven**, **Santander**, **OXXO**, etc.) ao usuário, ao invés de mostrar diretamente os métodos de pagamento (**Citibanamex**, **Paycash**, **BBVA** e **OXXO**). Isso permite que o usuário tenha uma seleção mais clara de onde pode pagar o ticket e melhorar a conversão.

1. [Renderizar Brick](#bookmark_renderizar_brick)
2. [Gerenciar outros meios de pagamento](#bookmark_gerenciar_outros_meios_de_pagamento)

> Os passos são realizados no back-end ou no front-end. As pills **Client-Side** e **Server-Side** localizadas imediatamente ao lado do título te ajudam a identificar qual passo é realizado em qual instância. <br/></br>
> <br/></br>
> E, para ajudar, preparamos um [exemplo de código](/developers/pt/docs/checkout-bricks/payment-brick/code-example/other-payment-methods/mexico) completo da configuração do Payment Brick com **pagamento em dinheiro** que você pode usar como modelo.

> CLIENT_SIDE
>
> h2
>
> Renderizar Brick

Uma vez instanciado, o Brick pode ser renderizado e ter todas as suas configurações compiladas de modo que a estrutura final do Brick seja gerada.

Para renderizar o Brick, insira o código abaixo após o passo anterior e preencha os atributos conforme os comentários destacados neste mesmo código.

```javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     amount: 100, // valor total a ser pago
   },
   customization: {
     paymentMethods: {
       ticket: 'all',
     },
   },
   callbacks: {
     onReady: () => {
        /*
          Callback chamado quando o Brick estiver pronto.
          Aqui você pode ocultar loadings do seu site, por exemplo.
        */
     },
     onSubmit: ({ selectedPaymentMethod, formData }) => {
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
     onError: (error) => {
       // callback chamado para todos os casos de erro do Brick
       console.error(error);
     },
   },
 };
 window.paymentBrickController = await bricksBuilder.create(
   'payment',
   'paymentBrick_container',
   settings
 );
};
renderPaymentBrick(bricksBuilder);
```

O resultado de renderizar o Brick deve ser como na imagem abaixo:

![payment-Brick-other-payments-methods-mlm](checkout-bricks/payment-brick-other-payments-methods-mlm-pt.jpg)

> WARNING
>
> Atenção
>
> Para um controle eficaz do Brick, a função enviada no `onSubmit` deve sempre retornar uma Promise. Chame o `resolve()` apenas se o processamento em seu backend ocorreu com sucesso. Chame o `reject()` caso algum erro ocorra. Isso fará com que o Brick permita o preenchimento dos campos novamente e viabilize uma nova tentativa de pagamento. Ao chamar o método `resolve()` dentro da Promise do `onSubmit`, o Brick não permite novos pagamentos. Caso queira realizar um novo pagamento, deve-se criar uma nova instância do Brick.

> CLIENT_SIDE 
>
> h2
>
> Gerenciar outros meios de pagamento

Para incluir **pagamento em dinheiro via ticket**, basta utilizar a seguinte configuração:

> NOTE
>
> Importante
>
> Os meios de pagamento descritos abaixo necessitam que os dados de endereço, nome e documento do comprador sejam preenchidos. Para uma melhor experiência do usuário, é recomendável que o integrador já inicialize esses dados, assim não será necessário preencher manualmente. [Confira aqui](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/initialize-data-on-the-bricks) como inicializar o Brick com esses dados já preenchidos. 

```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: 'all',
      atm: 'all'
    }
  }
}
```

As propriedades `ticket` (para pagamento em dinheiro por ticket impresso) e `atm`_*_ (para pagamento por caixa eletrônico) aceitam 2 tipos de variável, `string` e `string[]`. No exemplo acima, serão aceitos pagamentos com **todos os tickets disponíveis no México**.

> _*Automatic Teller Machine_

Caso não queira permitir ambos os meios de pagamento, ao invés da string `all`, você pode passar um array apenas com os IDs desejados. Como no exemplo abaixo, onde é aceito apenas pagamento via **OXXO**.

```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: [ 'oxxo' ]
    }
  }
}
```

Nesse caso, como **OXXO** é o único meio disponível, não será exibida a lista para seleção de onde pagar.

Atualmente, esses são os IDs que podem ser passados dentro do array:

| Tipo de pagamento | IDs |
|---|---|
| Tickets | `oxxo` e `paycash` |
| ATM | `bancomer` e `banamex` |

> NOTE
>
> Importante
> 
> A resposta da API contém IDs de diversos `payment_type_id`. Os IDs aceitos pela propriedade `ticket` são apenas os que contém `payment_type_id = 'ticket'` e a propriedade `atm` aceita `payment_type_id = 'atm'`.