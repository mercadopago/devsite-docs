# Passo a passo da integração

## Criar container

Você vai precisar criar um container para definir o local que o brick será inserido na tela. A criação do container é feita inserindo um elemento (por exemplo, uma div) no código HTML da página no qual o brick será renderizado (veja código abaixo). 

> NOTE
>
> Atenção
>
> O valor exibido na propriedade `id` a seguir é apenas um exemplo, e pode ser alterado, mas deve sempre corresponder ao `id` indicado na renderização.

```html
  <div id="cardPaymentBrick_container"></div>
```

## Inclua e configure a biblioteca MercadoPago.js

**Utilize a nossa biblioteca oficial para acessar as funcionalidades do Mercado Pago** com segurança desde seu frontend.

Você precisará instalar o SDK adicionando o seguinte em seu código HTML:

```html
<script src="https://beta-sdk.mercadopago.com/gama/js/v2"></script>
```

Em seguida, inicialize o SDK definindo sua [chave pública]([FAKER][CREDENTIALS][URL]) usando código JavaScript:

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```

## Instanciar brick

Com o container criado e o SDK JS instalado, o próximo passo é instanciar o brick builder, que permitirá gerar o brick. Para instanciar o brick, insira o código abaixo após a etapa anterior.

```javascript
const bricksBuilder = mp.bricks();
```

> WARNING
>
> Atenção
>
> Durante a instanciação do brick, é possível que apareçam diferentes erros. Para detalhamento de cada um deles, veja a seção [Possíveis erros](/developers/pt/docs/checkout-bricks-beta/additional-content/possible-errors).

# Renderizar brick

Uma vez instanciado, o brick pode ser renderizado e ter todas as suas configurações compiladas de modo que a estrutura final do brick seja gerada.

Para renderizar o brick, insira o código abaixo após o passo anterior e preencha os atributos conforme os comentários destacados neste mesmo código.

```javascript
const renderCardPaymentBrick = async (bricksBuilder) => {

  const settings = {
    initialization: {
      amount: 100, //valor do processamento a ser realizado
    },
    callbacks: {
      onReady: () => {
        // callback chamado quando o Brick estiver pronto
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
      },
    },
  };


  cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
  https://github.com/meliguicarvalho/sdk-js

};

renderCardPaymentBrick(bricksBuilder);

```