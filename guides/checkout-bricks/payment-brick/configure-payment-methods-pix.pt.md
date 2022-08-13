# Configure a integração com Pix

Para configurar a integração do Payment Brick para receber pagamentos com Pix você precisa seguir os passos abaixo:

1. [Criar container](#bookmark_criar_container)
2. [Incluir e configurar a biblioteca MercadoPago.js](#bookmark_incluir_e_configurar_a_biblioteca_mercadopago.js)
3. [Instanciar brick](#bookmark_instanciar_brick)
4. [Renderizar brick](#bookmark_renderizar_brick)
5. [Gerenciar pagamentos com Pix]()

> Os passos são realizados no back-end ou no front-end. As pills **Client-Side** e **Server-Side** localizadas imediatamentamente ao lado do título te ajudam a identificar qual passo é realizado em qual instância. <br/></br>
> <br/></br>
> E, para ajudar, preparamos um [exemplo de codigo](/developers/pt/docs/checkout-bricks/payment-brick/code-example-pix) completo da configuração do Payment Brick, que você pode usar como modelo.

> CLIENT_SIDE
>
> h2
>
> Criar container

Você vai precisar criar um container para definir o local que o brick será inserido na tela. A criação do container é feita inserindo um elemento (por exemplo, uma div) no código HTML da página no qual o brick será renderizado (veja código abaixo). 

> NOTE
>
> Atenção
>
> O valor exibido na propriedade `id` a seguir é apenas um exemplo, e pode ser alterado, mas deve sempre corresponder ao `id` indicado na renderização.

```html
  <div id="PaymentBrick_container"></div>
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
> Instanciar brick

Com o container criado e o SDK JS instalado, o próximo passo é instanciar o brick builder, que permitirá gerar o brick. Para instanciar o brick, insira o código abaixo após a etapa anterior. 

```javascript
const bricksBuilder = mp.bricks();
```

> WARNING
>
> Atenção
>
> Durante a instanciação do brick, é possível que apareçam diferentes erros. Para detalhamento de cada um deles, veja a seção [Possíveis erros](/developers/pt/docs/checkout-bricks/additional-content/possible-errors).

> CLIENT_SIDE
>
> h2
>
> Renderizar brick

Uma vez instanciado, o brick pode ser renderizado e ter todas as suas configurações compiladas de modo que a estrutura final do brick seja gerada.

Para renderizar o brick, insira o código abaixo após o passo anterior e preencha os atributos conforme os comentários destacados neste mesmo código.

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
const bricksBuilder = mp.bricks();
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     amount: 100, // valor do processamento a ser realizado
   },
   customization: {
     paymentMethods: {
       creditCard: 'all',
       debitCard: 'all',
     },
   },
   callbacks: {
     onReady: () => {
       // callback chamado quando o Brick estiver pronto
     },
     onSubmit: ({ paymentType, formData }) => {
       // callback chamado ao clicar no botão de submissão dos dados
      
       if (paymentType === 'credit_card' || paymentType === 'debit_card') {
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
       }
     },
     onError: (error) => {
       // callback chamado para todos os casos de erro do Brick
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

O resultado de renderizar o brick deve ser como na imagem abaixo:

![form](checkout-bricks/payment-brick-pt.png)

> WARNING
>
> Atenção
>
> Para um controle eficaz do Brick, a função enviada no `onSubmit` deve sempre retornar uma Promise. Chame o `resolve()` apenas se o processamento em seu backend ocorreu com sucesso. Chame o `reject()` caso algum erro ocorra. Isso fará com que o brick permita o preenchimento dos campos novamente e viabilize uma nova tentativa de pagamento. Ao chamar o método `resolve()` dentro da Promise do `onSubmit`, o brick não permite novos pagamentos. Caso queira realizar um novo pagamento, deve-se criar uma nova instância do Brick.

> CLIENT_SIDE 
>
> h2
>
> Gerenciar pagamentos com Pix

> WARNING
>
> Importante
> 
> A opção de pagamento com Pix só será exibida se houver uma chave Pix cadastrada no Mercado Pago. Caso ainda não tenha criado, [clique aqui]((https://www.youtube.com/watch?v=60tApKYVnkA)) e veja o passo a passo. </br> 
> <br/> </br> 
> Para já inicializar o formulário do Pix com o campo de e-mail preenchido, [clique aqui](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/initialize-data-on-the-bricks).

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

Para pagar com Pix é necessário que o comprador insira o seu e-mail. É altamente recomendado que o integrador informe esse campo de e-mail na inicialização do brick, assim o comprador não precisará digitar manualmente. Para inicializar o campo de e-mail, basta seguir o exemplo abaixo.

[[[
```Javascript
settings = {
  ...,
  initialization: {
    ...,
    payer: {
      email: 'jose@maria.com',
    }
  }
}

}
```
]]]