# Configure a integração com outros meios de pagamento

Com o Checkout Bricks do Mercado Pago, é possível oferecer, além de cartão, pagamentos através de **Rapipago** e **Pago Fácil**. Para oferecer pagamentos com **Rapipago** e **Pago Fácil**, siga as etapas abaixo. 

> Caso já tenha integrado pagamentos via cartão, você pode iniciar a integração a partir da **etapa 4**.

1. [Criar container](#bookmark_criar_container)
2. [Incluir e configurar a biblioteca MercadoPago.js](#bookmark_incluir_e_configurar_a_biblioteca_mercadopago.js)
3. [Instanciar Brick](#bookmark_instanciar_brick)
4. [Renderizar Brick](#bookmark_renderizar_brick)
5. [Gerenciar outros meios de pagamento](#bookmark_gerenciar_outros_meios_de_pagamento)

> Os passos são realizados no back-end ou no front-end. As pills **Client-Side** e **Server-Side** localizadas imediatamente ao lado do título te ajudam a identificar qual passo é realizado em qual instância. <br/></br>
> <br/></br>
> E, para ajudar, preparamos um [exemplo de código](/developers/pt/docs/checkout-bricks/payment-brick/code-example/other-payment-methods/argentina) completo da configuração do Payment Brick com **Rapipago** e **Pago Fácil** que você pode usar como modelo.

> CLIENT_SIDE
>
> h2
>
> Criar container

Você vai precisar criar um container para definir o local que o Brick será inserido na tela. A criação do container é feita inserindo um elemento (por exemplo, uma div) no código HTML da página no qual o Brick será renderizado (veja código abaixo). 

> NOTE
>
> Atenção
>
> O valor exibido na propriedade `id` a seguir é apenas um exemplo, e pode ser alterado, mas deve sempre corresponder ao `id` indicado na renderização.

```html
  <div id="paymentBrick_container"></div>
```

> CLIENT_SIDE
>
> h2
>
> Incluir e configurar a biblioteca MercadoPago.js

**Utilize a nossa biblioteca oficial para acessar as funcionalidades do Mercado Pago** com segurança desde seu frontend.

> NOTE
>
> Atenção
>
> O codigo JS pode ser incluido em uma tag `< script >` ou um arquivo JS separado.

Você precisará instalar o SDK adicionando o seguinte em seu código HTML:

```html
<script src="https://sdk.mercadopago.com/js/v2"></script>
```

Em seguida, inicialize o SDK definindo sua [chave pública](/developers/pt/guides/additional-content/credentials/credentials) usando código JavaScript:

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```
> CLIENT_SIDE
>
> h2
>
> Instanciar Brick

Com o container criado e o SDK JS instalado, o próximo passo é instanciar o Brick builder, que permitirá gerar o Brick. Para instanciar o Brick, insira o código abaixo após a etapa anterior. 

```javascript
const bricksBuilder = mp.bricks();
```

> WARNING
>
> Atenção
>
> Durante a instanciação do Brick, é possível que apareçam diferentes erros. Para detalhamento de cada um deles, veja a seção [Possíveis erros.](/developers/pt/docs/checkout-bricks/additional-content/possible-errors)

> CLIENT_SIDE
>
> h2
>
> Renderizar Brick

Uma vez instanciado, o Brick pode ser renderizado e ter todas as suas configurações compiladas de modo que a estrutura final do Brick seja gerada.

> NOTE
>
> Atenção
>
> Caso seja necessário fechar e abrir o Brick novamente (quando um usuário retorna ao carrinho para alterar algum detalhe da compra, por exemplo) é necessário eliminar a instância atual do Brick e criar uma nova quando for preciso mostrar o Brick novamente.
> Para isso, utilize o método `unmount` disponível no controller do Brick, sendo neste caso: `cardPaymentBrickController.unmount()`.

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

![payment-Brick-other-payments-methods-mla](checkout-bricks/payment-brick-other-payments-methods-mla-pt.jpg) 

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

Para incluir pagamento via **Rapipago** e **Pago Fácil**, basta utilizar a seguinte configuração:

> NOTE
>
> Importante
>
> Os meios de pagamento descritos abaixo necessitam que os dados de endereço, nome e documento do comprador sejam preenchidos. Para uma melhor experiência do usuário, é recomendável que o integrador já inicialize esses dados, assim não será necessário preencher manualmente. [Confira aqui](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/initialize-data-on-the-bricks) como inicializar o Brick com esses dados já preenchidos.

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
```
]]]

A propriedade `ticket` aceita 2 tipos de variável, `string` e `string[]`. No exemplo acima, serão aceitos pagamentos via **Rapipago** e **Pago Fácil**.

Caso não queira permitir ambos os meios de pagamento, ao invés da string `all`, você pode passar um array apenas com os IDs desejados. Como no exemplo abaixo, onde é aceito apenas pagamento via **Pago Fácil**.

[[[
```Javascript
settings = {
  ...,
  customization: {
    ...,
    paymentMethods: {
      ...,
      ticket: [ 'pagofacil' ]
    }
  }
}
```
]]]

Nesse caso, como **Pago Fácil** é o único meio disponível, não será exibida a lista para seleção de onde pagar. 

Caso deseje uma lista completa dos IDs que podem ser passados dentro do array, consulte a API de [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get) em nossa API Reference. Para mais informações, consulte a [seção correspondente](/developers/pt/docs/checkout-bricks/additional-content/consult-payment-methods).

> NOTE
>
> Importante
> 
> A resposta da API contém IDs de diversos `payment_type_id`. Os IDs aceitos pela propriedade `ticket` são apenas os que contém `payment_type_id = 'ticket'`.