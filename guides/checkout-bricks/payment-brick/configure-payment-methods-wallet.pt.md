# Configure a integração com Carteira Mercado Pago

Para configurar a integração do Payment Brick para receber pagamentos com a Carteira Mercado Pago você precisa seguir os passos abaixo. 

> NOTE
>
> Importante
>
> Considere que quando um usuário opta por fazer o pagamento utilizando a Carteira Mercado Pago, este será redirecionado para a página do Mercado Pago para concluir o pagamento. Por isso, é necessário configurar as `back_url`s se você quiser retornar ao seu site ao final do pagamento. Para mais informações, visite a seção [Redirecione o comprador para o seu site](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/preferences).

1. [Criar preferência]()
2. [Criar container](#bookmark_criar_container)
3. [Incluir e configurar a biblioteca MercadoPago.js](#bookmark_incluir_e_configurar_a_biblioteca_mercadopago.js)
4. [Instanciar brick](#bookmark_instanciar_brick)
5. [Renderizar brick](#bookmark_renderizar_brick)

> Os passos são realizados no back-end ou no front-end. As pills **Client-Side** e **Server-Side** localizadas imediatamentamente ao lado do título te ajudam a identificar qual passo é realizado em qual instância.<br/></br>
> <br/></br>
> E, para ajudar, preparamos um [exemplo de codigo](/developers/pt/docs/checkout-bricks/payment-brick/code-example/wallet) completo da configuração do Payment Brick, que você pode usar como modelo.

> CLIENT_SIDE
>
> h2
>
> Criar preferência

O primeiro passo para dar ao usuário a possibilidade de pagar utilizando a Carteira Mercado Pago, é criar uma preferência em seu backend. Adicione o [SDK do Mercado Pago](/developers/pt/docs/sdks-library/landing) e as [credenciais](/developers/pt/guides/additional-content/credentials/credentials) necessárias ao seu projeto para habilitar o uso de preferências:

```node
// SDK do Mercado Pago
const mercadopago = require('mercadopago');
// Adicione as credenciais
mercadopago.configure({
 access_token: 'PROD_ACCESS_TOKEN'
});
``` 

Em seguida, configure a preferência de acordo com o seu produto ou serviço:

```node
// Cria um objeto de preferência
let preference = {
 "items": [
   {
     "id": "item-ID-1234",
     "title": "Meu produto",
     "quantity": 1,
     "unit_price": 75.76
   }
 ],
 "back_urls": {
     "success": "https://www.success.com",
     "failure": "http://www.failure.com",
     "pending": "http://www.pending.com"
 },
 "auto_return": "approved",
};
 
mercadopago.preferences.create(preference)
.then(function(response){
// Este valor é o preferenceId que será enviado para o brick na inicialização
 const preferenceId = response.body.id;
}).catch(function(error){
 console.log(error);
});
```

> Para saber mais detalhes de como configurá-la, acesse a seção [Preferências](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/preferences).

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
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
 initialization: {
   amount: 100, // valor do processamento a ser realizado
   preferenceId: 'abcd1234', // preferenceId gerado no backend
 },
 callbacks: {
   onReady: () => {
     // callback chamado quando o Brick estiver pronto
   },
   onSubmit: ({ paymentType, formData }) => {
     // callback chamado ao clicar no botão de submissão dos dados
  
     if (paymentType === 'wallet_purchase') {
       // nesse caso, o usuário foi redirecionado para
       // a página do Mercado Pago para fazer o pagamento
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