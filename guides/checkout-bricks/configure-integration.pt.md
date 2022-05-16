# Configurar a integração

Para configurar a integração dos bricks você precisa seguir os passos abaixo:

1. [Criar container](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/docs/checkout-bricks-beta/integration/configure-integration#bookmark_criar_container)
2. [Incluir e configurar a biblioteca MercadoPago.js](/developers/pt/docs/checkout-bricks-beta/integration/configure-integration#bookmark_incluir_e_configurar_a_biblioteca_mercadopago.js)
3. [Instanciar brick](/developers/pt/docs/checkout-bricks-beta/integration/configure-integration#bookmark_instanciar_brick)
4. [Renderizar brick](/developers/pt/docs/checkout-bricks-beta/integration/configure-integration#bookmark_renderizar_brick)
5. [Instalar o SDK do Mercado Pago](/developers/pt/docs/checkout-bricks-beta/integration/configure-integration#bookmark_instalar_o_sdk_do_mercado_pago)

Os passos são realizados no back-end ou no front-end. As pills **Client-Side** e **Server-Side** localizadas imediatamentamente ao lado do título te ajudam a identificar qual passo é realizado em qual instância. 

E, para judar, preparamos um [exemplo de codigo](/developers/pt/docs/checkout-bricks-beta/integration/code-example#bookmark_configura_o_da_integra%C3%A7%C3%A3o) completo da configuração dos bricks, que você pode usar como modelo.

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
> O codigo JS pode ser incluido em uma tag `<script>` ou um arquivo JS separado.

Você precisará instalar o SDK adicionando o seguinte em seu código HTML:

```html
<script src="https://beta-sdk.mercadopago.com/gama/js/v2"></script>
```

Em seguida, inicialize o SDK definindo sua [chave pública]([FAKER][CREDENTIALS][URL]) usando código JavaScript:

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
> Durante a instanciação do brick, é possível que apareçam diferentes erros. Para detalhamento de cada um deles, veja a seção [Possíveis erros](/developers/pt/docs/checkout-bricks-beta/additional-content/possible-errors).

> CLIENT_SIDE
>
> h2
>
> Renderizar brick

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
};
renderCardPaymentBrick(bricksBuilder);
```
![cardform](checkout-bricks/card-form-pt.png)

> SERVER_SIDE
>
> h2
>
> Instalar o SDK do Mercado Pago

Instale o [SDKs oficial](developers/pt/guides/sdks) para simplificar sua integração com nossas APIs.

[[[
```php
===
[Instale Composer](https://getcomposer.org/download) para usar o SDK.

Execute o seguinte código na sua linha de comando:
===
php composer.phar require "mercadopago/dx-php"
```
```node
===
Para instalar o SDK execute o seguinte código via linha de comandos do seu terminal usando [npm](https://www.npmjs.com/get-npm):
===
npm install mercadopago
```
```java
===
Para instalar o SDK no seu projeto [Maven](http://maven.apache.org/install.html) adicione a seguinte dependência no seu arquivo pom.xml e em seguida execute 'maven install'.
===
<dependency>
   <groupId>com.mercadopago</groupId>
   <artifactId>sdk-java</artifactId>
   <version>2.0.0</version>
</dependency>
```
```ruby
===
O SDK de Mercado Pago está disponível como [gema](https://rubygems.org/gems/mercadopago-sdk), para instá-la execute o seguinte código na sua linha de comandos:
===
gem install mercadopago-sdk
```
```csharp
===
----[mlb]----
Use [NuGet](https://docs.microsoft.com/pt-br/nuget/reference/nuget-exe-cli-reference) para instalar o SDK .NET de Mercado Pago.
------------
----[mla, mlm, mco, mlc, mlu]----
Use [NuGet](https://docs.microsoft.com/es-es/nuget/reference/nuget-exe-cli-reference) para instalar el SDK .NET de Mercado Pago.
------------
Execute o seguinte comando no seu terminal:
===
nuget install mercadopago-sdk
```
```python
===
O SDK de Mercado Pago está disponível como [pip](https://pypi.org/project/mercadopago/), para instalá-la execute o seguinte código na sua linha de comandos:
===
pip3 install mercadopago
```
]]]

> PREV_STEP_CARD_PT
>
> Temas
>
> Veja mais informações sobre os temas em que o Card Payment Brick pode ser instanciado/renderizado.
>
> [Temas](/developers/pt/docs/checkout-bricks-beta/characteristics/themes)

> NEXT_STEP_CARD_PT
>
> Enviar pagamento ao Mercado Pago
>
> Após configurar a integração, veja como enviar o pagamento ao Mercado Pago.
>
> [Enviar pagamento ao Mercado Pago](/developers/pt/docs/checkout-bricks-beta/integration/payment-submission)