# Configure a integração  

Para configurar a integração do Card Payment Brick você precisa seguir os passos abaixo:

1. [Criar container](#bookmark_criar_container)
2. [Incluir e configurar a biblioteca MercadoPago.js](#bookmark_incluir_e_configurar_a_biblioteca_mercadopago.js)
3. [Instanciar Brick](#bookmark_instanciar_brick)
4. [Renderizar Brick](#bookmark_renderizar_brick)

> Os passos são realizados no back-end ou no front-end. As pills **Client-Side** e **Server-Side** localizadas imediatamente ao lado do título te ajudam a identificar qual passo é realizado em qual instância. <br/></br>
> <br/></br>
> E, para ajudar, preparamos um [exemplo de código](/developers/pt/docs/checkout-bricks/card-payment-brick/code-example) completo da configuração do Card Payment Brick que você pode usar como modelo.

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
  <div id="cardPaymentBrick_container"></div>
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


Para renderizar o Brick, insira o código abaixo após o passo anterior e preencha os atributos conforme os comentários destacados neste mesmo código.

```javascript
const renderCardPaymentBrick = async (bricksBuilder) => {

  const settings = {
    initialization: {
      amount: 100, // valor total a ser pago
    },
    callbacks: {
      onReady: () => {
        /*
          Callback chamado quando o Brick estiver pronto.
          Aqui você pode ocultar loadings do seu site, por exemplo.
        */
      },
      onSubmit: (cardFormData) => {
        // callback chamado o usuário clicar no botão de submissão dos dados

        // ejemplo de envío de los datos recolectados por el Brick a su servidor
        return new Promise((resolve, reject) => {
            fetch("/process_payment", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cardFormData)
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
  const cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
};
renderCardPaymentBrick(bricksBuilder);
```

O resultado de renderizar o Brick deve ser como na imagem abaixo:

![cardform](checkout-bricks/card-form-pt.png)

> WARNING
>
> Atenção
>
> Para um controle eficaz do Brick, a função enviada no `onSubmit` deve sempre retornar uma Promise. Chame o `resolve()` apenas se o processamento em seu backend ocorreu com sucesso. Chame o `reject()` caso algum erro ocorra. Isso fará com que o Brick permita o preenchimento dos campos novamente e viabilize uma nova tentativa de pagamento. Ao chamar o método `resolve()` dentro da Promise do `onSubmit`, o Brick não permite novos pagamentos. Caso queira realizar um novo pagamento, deve-se criar uma nova instância do Brick.