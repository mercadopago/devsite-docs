# Configure a integração com cartões

Para configurar a integração do Payment Brick para receber pagamentos com cartões de crédito e débito você precisa seguir os passos abaixo.

1. [Criar container](#bookmark_criar_container)
2. [Incluir e configurar a biblioteca MercadoPago.js](#bookmark_incluir_e_configurar_a_biblioteca_mercadopago.js)
3. [Instanciar brick](#bookmark_instanciar_brick)
4. [Renderizar brick](#bookmark_renderizar_brick)
5. [Gerenciar cartões de crédito e débito](#bookmark_gerenciar_cartões_de_crédito_e_débito)
6. [Incluir cartões salvos](#bookmark_incluir_cartões_salvos)

> Os passos são realizados no back-end ou no front-end. As pills **Client-Side** e **Server-Side** localizadas imediatamentamente ao lado do título te ajudam a identificar qual passo é realizado em qual instância. <br/></br>
> <br/></br>
> E, para ajudar, preparamos um [exemplo de codigo](/developers/pt/docs/checkout-bricks/payment-brick/code-example/cards) completo da configuração do Payment Brick, que você pode usar como modelo.

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

![payment-brick](checkout-bricks/payment-brick-pt.png)

> WARNING
>
> Atenção
>
> Para um controle eficaz do Brick, a função enviada no `onSubmit` deve sempre retornar uma Promise. Chame o `resolve()` apenas se o processamento em seu backend ocorreu com sucesso. Chame o `reject()` caso algum erro ocorra. Isso fará com que o brick permita o preenchimento dos campos novamente e viabilize uma nova tentativa de pagamento. Ao chamar o método `resolve()` dentro da Promise do `onSubmit`, o brick não permite novos pagamentos. Caso queira realizar um novo pagamento, deve-se criar uma nova instância do Brick.

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