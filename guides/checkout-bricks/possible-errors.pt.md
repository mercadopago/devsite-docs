# Possíveis erros

Abaixo você encontrará listas de erros que podem ocorrer durante a integração dos Bricks. Sejam eles relacionados ao **envio das variáveis** ou à **comunicação com serviços externos** (APIs Mercado Pago).

> As mensagens de erro da API são retornadas em inglês como padrão. Porém na tabela abaixo você encontra a mensagem original e sua tradução.

## Variáveis passadas pelo integrador 

Durante o processo de integração do Brick, é possível que diferentes erros relacionados ao envio das variáveis sejam exibidos ao integrador **no momento de instanciar o Brick**. Esses erros serão mostrados através de um log no console do navegador (o comprador não recebe qualquer mensagem).

| Erro | Mensagem | Código da causa |
|--- |--- |--- |
| Objeto de configuração vazio | [Initialization error] Settings object is empty, please pass required properties <br><br>  _[Erro de inicialização] O objeto de configurações está vazio, passe as propriedades necessárias._ | settings_empty |
| Ausência da propriedade amount (valor total da compra) | [Initialization error] Amount property is required <br><br>  _[Erro de inicialização] A propriedade Amount é obrigatória._ | missing_amount_property |
| Ausência dos callbacks de onReady e onError | [Initialization error] Callbacks onReady and onError are required <br><br>  _[Erro de inicialização] Callbacks onReady e onError são obrigatórios._ | missing_required_callbacks |
| Ausência do ID de um elemento HTML para servir de container ao Brick | [Initialization error] You must provide an HTML element ID as a container to allow component rendering <br><br>  _[Erro de inicialização] Você deve fornecer um ID de elemento HTML como um contêiner para permitir a renderização do componente._ |missing_container_id |
| Ausência da propriedade locale (idioma desejado) | [Initialization error] Locale property is required <br><br>  _[Erro de inicialização] Propriedade de localidade é obrigatória._ | missing_locale_property |
| Erro genérico ocorrido durante a inicialização do Brick, geralmente alguma validação que falhou por causa de um valor enviado pelo integrador  | [Initialization error] Brick incorrectly initialized: {error} <br><br>  _[Erro de inicialização] Brick inicializado incorretamente._ |incorrect_initialization |

## Comunicação com serviços externos (APIs do Mercado Pago)

Durante o processo de integração do Brick, é possível que diferentes erros relacionados à **comunicação com as APIs do Mercado Pago** aconteçam.

| Erro | Mensagem para o usuário | Mensagem para o integrador | Crítico? |Código da causa |
|--- |--- |--- |--- |--- |
| Impossibilidade de renderização dos Secure Fields dentro do formulário do Brick de Card Payment | Ocorreu um erro. | The integration with Secure Fields failed<br><br>_A integração com o Secure Fields falhou._ | Sim | fields_setup_failed |
| Falha na busca de informações de métodos de pagamentos baseado na public_key do integrador | Ocorreu um erro. Por favor, tente novamente mais tarde. | An error occurred while trying to search for payment methods<br><br>_Ocorreu um erro ao tentar buscar meios de pagamento._ | Não | get_payment_methods_failed |
| Falha na criação do token que representa as informações do cartão | Ocorreu um erro e não foi possível processar o pagamento. Por favor, tente novamente mais tarde. | Failed to create card token<br><br>_Falha ao criar o token do cartão._ | Não | card_token_creation_failed |
| Falha na busca dos tipos de documento de identificação baseado no país definido na SDK MercadoPago.js | Ocorreu um erro. Por favor, tente novamente mais tarde. | Failed to get identification types<br><br> _Falha ao obter tipos de identificação._ | Não | get_identification_types_failed |
| Falha na busca de informações do cartão baseado no bin. | Ocorreu um erro. Por favor, tente novamente mais tarde. | Failed to get payment methods using card bin<br><br>_Falha ao realizar o pagamento utilizando o bin do cartão._ | Não | get_card_bin_payment_methods_failed |
| Falha ao buscar bancos emissores do cartão | Ocorreu um erro. Por favor, tente novamente mais tarde. | Failed to get card issuer(s)<br><br> _Falha ao obter emissor(es) de cartão._ | Não | get_card_issuers_failed |
| Falha ao buscar quantidade e valores das parcelas do pagamento baseado no amount enviado pelo integrador | Ocorreu um erro. Por favor, tente novamente mais tarde. | Failed to get payment installments<br><br> _Falha ao obter parcelas de pagamento._| Não | get_payment_installments_failed |
| Campos do pagamento incompletos por algum motivo (parcelas, emissor do cartão, payment_method_id) | Ocorreu um erro. Por favor, tente novamente mais tarde. | Será retornada uma das seguintes mensagens de acordo com o tipo de erro: <br><br> -The payment method id is missing <br> -The payment installments are missing <br> -The card issuer is missing<br><br> _-Falta o id da forma de pagamento._ <br> _-Faltam as parcelas de pagamento._ <br> _-Falta o emissor do cartão._ |Não|missing_payment_information |

## Como atualizar dados enviados durante a inicialização de um Brick

Caso seja necessário atualizar os valores enviados durante a inicialização de um Brick, é necessário explicitar a assincronicidade do código e se valer da função de `unmount` disponibilizada no _Controller_ do Brick antes de atualizar os dados. Além disso, o objeto de configurações precisa ser enviado completo, uma vez que se trata de uma renderização

Lembrando que não se deve apenas chamar a função de renderização com os novos valores. Isto levaria a uma duplicação de Brick em tela, sendo que a segunda renderização exibirá um erro.

O exemplo de código abaixo exemplifica o fluxo utilizando a atualização de uma preferência em [Payment Brick](/developers/pt/docs/checkout-bricks/payment-brick/introduction), mas o fluxo em si é válido para atualização necessária em dados de inicialização de qualquer Brick.

```Javascript
//First render
const renderPaymentBrick = async (bricksBuilder) => {
      const settings = {
        initialization: {
          amount: 100,
          preferenceId: "<YOUR_FIRST_PREFERENCE_ID>"
        },
...
window.paymentBrickController = await bricksBuilder.create(
   "payment",
   "paymentBrick_container",
   settings
 );

    };

await renderPaymentBrick(bricksBuilder);

//Second render
window.paymentBrickController.unmount()

const secondRenderPaymentBrick = async (bricksBuilder) => {
      const settings = {
        initialization: {
          amount: 100,
          preferenceId: "<YOUR_SECOND_PREFERENCE_ID>"
        },
...
window.paymentBrickController = await bricksBuilder.create(
   "payment",
   "paymentBrick_container",
   settings
 );

    };

await secondRenderPaymentBrick(bricksBuilder);

...

// Brick Container
<div id="paymentBrick_container"></div>
```

## Erro "Container Not Found"

Para a correta renderização, é necessário que o ID do container no DOM no qual o Brick será renderizado seja informado de maneira idêntica ao da função de criação do Brick. Qualquer string pode ser utilizada como nome, desde que os nomes sejam iguais, este erro não ocorrerá. Note que não são aceitas classes como container para o Brick, é necessário que seja um ID

Outro ponto importante é garantir que ao chamar a função de renderização do Brick o container dele já esteja renderizado em tela. Reforçamos este ponto devido a possibilidade de o container do brick estar dentro de outros contêineres. Essa sequência de renderização é importante para evitar o erro em questão.

Abaixo temos um trecho de código exemplificando o ponto utilizando o [Payment Brick](/developers/pt/docs/checkout-bricks/payment-brick/introduction).

```Javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = { ... };
 window.paymentBrickController = await bricksBuilder.create(
   "payment",
   "paymentBrick_container",
   settings
 );
};

await renderPaymentBrick(bricksBuilder);

...

<div id="paymentBrick_container"></div>
```

## Utilização de Bricks com Next.js

**Next.js** é um framework para criação de interfaces com componentes React. Diante disso, é possível utilizar nossa [SDK React](/developers/pt/docs/sdks-library/client-side/sdk-js-react-installation) para integrar os Bricks, bem como outras soluções fornecidas através da SDK React.

Contudo, nossa SDK foi estruturada para renderização no cliente (_Client Side Rendering_) enquanto via de regra o Next.js atua com _Server Side Rendering_. Assim, ao utilizar nossa SDK é preciso levar isso em consideração. É possível realizar essa integração utilizando a importação da SDK dinamicamente, conforme indicado na [documentação do Next.js](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#nextdynamic).

Abaixo você encontra um exemplo de código de importação dinâmica de um componente disponibilizado em nossa SDK, o `getPaymentMethods`.

Abaixo você encontra um exemplo de código de importação dinâmica de um componente disponibilizado em nossa SDK, o [Payment Brick](/developers/pt/docs/checkout-bricks/payment-brick/introduction).

```react-jsx

//index.tsx

import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const CheckoutMercadoPago = dynamic(() => import("./checkoutMercadoPago"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Checkout Brick + NextJS</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}>
        <CheckoutMercadoPago />
      </main>
    </>
  );
}

```
```react-jsx
//checkoutMercadoPago.tsx

import { initMercadoPago, Payment } from "@mercadopago/sdk-react";

initMercadoPago("<YOUR_PUBLIC_KEY>");

const CheckoutMercadoPago = () => {
  const initialization = {
    amount: <YOUR_AMOUNT>,
    preferenceId: "<YOUR_PREFERENCE_ID>"
  };
  const customization = {
    paymentMethods: {
      ticket: "all",
      bankTransfer: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
  };
  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
   
 // callback chamado ao clicar no botão de submissão dos dados
    return new Promise((resolve, reject) => {
      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          // receber o resultado do pagamento
          resolve();
        })
        .catch((error) => {
          // lidar com a resposta de erro ao tentar criar o pagamento
          reject();
        });
    });
  };
  const onError = async (error) => {
    // callback chamado para todos os casos de erro do Brick
    console.log(error);
  };
  const onReady = async () => {
    /*
    Callback chamado quando o Brick estiver pronto.
    Aqui você pode ocultar loadings do seu site, por exemplo.
  */
  };

  return (
    <Payment
      initialization={initialization}
      customization={customization}
      onSubmit={onSubmit}
      onReady={onReady}
      onError={onError}
    />
  );
};
export default CheckoutMercadoPago;
```