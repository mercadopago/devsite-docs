# Configure a integração  

Para configurar a integração do Status Screen Brick você precisa seguir os passos abaixo:

1. [Criar container](#bookmark_criar_container)
2. [Incluir e configurar a biblioteca MercadoPago.js](#bookmark_incluir_e_configurar_a_biblioteca_mercadopago.js)
3. [Instanciar brick](#bookmark_instanciar_brick)
4. [Renderizar brick](#bookmark_renderizar_brick)

> Os passos são realizados no back-end ou no front-end. As pills **Client-Side** e **Server-Side** localizadas imediatamentamente ao lado do título te ajudam a identificar qual passo é realizado em qual instância. <br/></br>
> <br/></br>
> E, para ajudar, preparamos um [exemplo de codigo](/developers/pt/docs/checkout-bricks/status-screen-brick/code-example) completo da configuração do Status Screen Brick que você pode usar como modelo.

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
 <div id="statusScreenBrick_container"></div>
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
const renderStausScreenBrick = async (bricksBuilder) => {
const settings = {
  initialization: {
    paymentId: '1234567890', // id de pagamento gerado por Mercado Pago
  },
  callbacks: {
    onReady: () => {
      // callback chamado quando o Brick estiver pronto
    },
    onError: (error) => {
      // callback chamado para todos os casos de erro do Brick
    },
  },
};
window.statusBrickController = await bricksBuilder.create(
  'statusScreen',
  'statusScreenBrick_container',
  settings
);
};
renderStausScreenBrick(bricksBuilder);
```

> O `paymentId` que deve ser enviado ao Brick para a sua inicialização é o id retornado pela API de [Pagamentos](/developers/pt/reference/payments/_payments/post) ao se gerar um pagamento com Mercado Pago.

O resultado de renderizar o brick deve ser como na imagem abaixo:

![status-screen-brick](checkout-bricks/status-screen-brick-pt.png)

> NOTE
>
> Importante
>
>  Sempre permita que o usuário retorne ao seu site desde a tela de status de pagamento. Adicione um link para que, caso o pagamento falhe, o usuário possa tentar novamente.