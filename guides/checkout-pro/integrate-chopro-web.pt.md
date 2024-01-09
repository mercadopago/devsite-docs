> CLIENT_SIDE
>
> h1
>
> Adicionar checkout

Primeiro, certifique-se de ter **criado a [preferência no seu backend](/developers/pt/docs/checkout-pro/integrate-preferences)**.

Em seguida, instale o SDK de frontend do Mercado Pago no seu projeto para adicionar o botão de pagamento.

A instalação é feita em **duas etapas**:

1. [Adicionar o SDK do Mercado Pago ao projeto com suas credenciais configuradas](/developers/pt/docs/checkout-pro/integrate-checkout-pro/web#bookmark_adicionar_o_sdk_do_mercado_pago_ao_projeto)
2. [Iniciar o checkout a partir da preferência gerada anteriormente](/developers/pt/docs/checkout-pro/integrate-checkout-pro/web#bookmark_iniciar_el_checkout_desde_la_preferencia)

> CLIENT_SIDE
>
> h2
>
> Adicionar o SDK do Mercado Pago ao projeto

Para incluir o SDK do Mercado Pago.js, adicione o seguinte código ao HTML do seu projeto ou instale a biblioteca para ReactJs.

[[[
```html
// SDK MercadoPago.js
<script src="https://sdk.mercadopago.com/js/v2"></script>
```
```node
npm install @mercadopago/sdk-react
```
]]]

Em seguida, inicie a integração configurando sua [chave pública](/developers/pt/docs/checkout-pro/additional-content/your-integrations/credentials) usando o seguinte código JavaScript.

[[[
```Javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
const bricksBuilder = mp.bricks();
```
```react-jsx
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('YOUR_PUBLIC_KEY');
```
]]]

Para integrações JavaScript/HTML, via CDN, você vai precisar ainda criar um container identificador para definir o local que o botão será inserido na tela. A criação do container é feita inserindo um elemento no código HTML da página no qual o componente será renderizado.

```html
 <div id="wallet_container"></div>
```

> NOTE
>
> Atenção
>
> O valor exibido na propriedade ID a seguir é apenas um exemplo e pode ser alterado, mas deve sempre corresponder ao ID indicado na etapa de renderização.

> CLIENT_SIDE
>
> h2
>
> Iniciar o checkout a partir da preferência

Ao finalizar a etapa anterior, **inicialize seu checkout utilizando o ID da preferência previamente criada com o identificador do elemento onde o botão deverá ser exibido**, caso esteja utilizando a integração `Javascript/HTML`, ou instanciando o componente, no caso da biblioteca `React`, conforme os exemplos abaixo.

[[[
```Javascript
mp.bricks().create("wallet", "wallet_container", {
   initialization: {
       preferenceId: "<PREFERENCE_ID>",
   },
customization: {
 texts: {
  valueProp: 'smart_option',
 },
});
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts:{ valueProp: 'smart_option'}}} />
```
]]]

Em seguida, observe o botão de pagamento renderizado em sua página.

<center>

![wallet-render](cow/cow-render-wallet-es.png)

</center>

No exemplo acima, um botão de pagamento será renderizado e ficará responsável por abrir o Checkout Pro. Caso queira que a experiência com Checkout Pro seja feita em uma **aba externa**, veja a seção [Esquema de abertura](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/opening-schema)

## Configurar as back_urls

No final do processo de pagamento, é possível redirecionar o comprador para outro ambiente do site através do atributo `back_urls` que é configurado ao criar a preferência. As `back_urls` serão responsáveis por guiar o fluxo de retorno ao seu site quando o pagamento for concluído. É possível definir três URLs de retorno diferentes que correspondem a cenários de pagamento pendente, sucesso ou erro.

Para obter mais informações, consulte a seção [URL de retorno](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/redirection).

> WARNING
>
> Importante
>
> Não utilize domínios locais no valor `back_urls`, como 'localhost/' ou '127.0.0.1' com ou sem porta especificada. Recomendamos o uso de um servidor com um domínio nomeado (DNS) ou IPs de desenvolvimento para poder retornar ao site após o pagamento. Caso contrário, aparecerá a mensagem "Alguma coisa deu errado" ao finalizar o processo de compra.

## Receber estados de pagamento

Os pagamentos criados possuem os seguintes status: `Pendente`, `Rejeitado` e `Aprovado`. Para acompanhar as atualizações é necessário configurar seu sistema para receber as notificações de pagamentos e outras atualizações de status. Veja [Notificações](/developers/pt/docs/checkout-pro/additional-content/your-integrations/notifications) para mais detalhes.

## Exemplo de implementação

Confira o [exemplo completo de integração](http://github.com/mercadopago/checkout-payment-sample) no GitHub para **PHP** ou **NodeJS** para fazer o _download_ de um projeto básico de implementação rápida do Checkout Pro.