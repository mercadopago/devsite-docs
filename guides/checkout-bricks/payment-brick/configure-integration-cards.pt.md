# Cartões

Para configurar a integração do Payment Brick para receber pagamentos com cartões de crédito e débito você precisa seguir os passos abaixo.

1. [Renderizar Brick](#bookmark_renderizar_brick)
2. [Gerenciar cartões de crédito e débito](#bookmark_gerenciar_cartões_de_crédito_e_débito)
3. [Incluir cartões salvos](#bookmark_incluir_cartões_salvos)

> Os passos são realizados no back-end ou no front-end. As pills **Client-Side** e **Server-Side** localizadas imediatamente ao lado do título te ajudam a identificar qual passo é realizado em qual instância. <br/></br>
> <br/></br>
> E, para ajudar, preparamos um [exemplo de código](/developers/pt/docs/checkout-bricks/payment-brick/code-example/cards) completo da configuração do Payment Brick com cartões que você pode usar como modelo.

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
       creditCard: 'all',
       debitCard: 'all',
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

![payment-Brick](checkout-bricks/payment-brick-pt.png)

> WARNING
>
> Atenção
>
> Para um controle eficaz do Brick, a função enviada no `onSubmit` deve sempre retornar uma Promise. Chame o `resolve()` apenas se o processamento em seu backend ocorreu com sucesso. Chame o `reject()` caso algum erro ocorra. Isso fará com que o Brick permita o preenchimento dos campos novamente e viabilize uma nova tentativa de pagamento. Ao chamar o método `resolve()` dentro da Promise do `onSubmit`, o Brick não permite novos pagamentos. Caso queira realizar um novo pagamento, deve-se criar uma nova instância do Brick.

> CLIENT_SIDE 
>
> h2
>
> Gerenciar cartões de crédito e débito

O trecho de código responsável por incluir o cartão de crédito e débito como meio de pagamento é o seguinte:

```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      creditCard: 'all',
      debitCard: 'all'
    }
  }
}
```

As propriedades `creditCard` e `debitCard` aceitam 2 tipos de variável, `string` e `string[]`. No exemplo acima, serão aceitos pagamentos com cartões de crédito e débito de qualquer bandeira aceita pelo Mercado Pago.

Caso queira selecionar as bandeiras, ao invés da string `all`, você pode passar um array apenas com os IDs desejados. Como no exemplo abaixo, onde apenas serão aceitos os cartões de crédito **MASTER** e **VISA** e os cartões de débito **ELO**.

```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      creditCard: [ 'master', 'visa' ],
      debitCard: [ 'debelo' ]
    }
  }
}
```

Para uma lista completa dos IDs que podem ser passados dentro do array, consulte a API de [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get) em nossa API Reference.

> NOTE
>
> Importante
> 
> A resposta da API contém IDs de diversos `payment_type_id`. Os IDs aceitos pela propriedade `creditCard` são apenas os que contém `payment_type_id = 'credit_card'` e os IDs aceitos pela propriedade `debitCard` são apenas os que contém `payment_type_id = 'debit_card'`.

## Incluir cartões salvos

No Payment Brick é possível disponibilizar cartões salvos para os seus clientes. Para saber como incluir os cartões salvos, consulte a seção [Incluir cartões salvos](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/customers-cards).