# Possible erros

Below you will find lists of errors that may occur during Brick integration. Whether they are related to **sending variables** or **communication with external services** (Mercado Pago APIs).

## Variables passed by the integrator

During the Brick integration process, it is possible that **when the Brick is instantiated**, different errors related to sending variables may be shown to the integrator. These errors will be shown through a log in the browser console (the buyer does not receive any message).

| Error  | Message  | Cause code  |
| --- | --- | --- |
| Empty configuration object  | [Initialization error] Settings object is empty, please pass required properties  | settings_empty  |
| Absence of the property amount (total amount of the purchase)  | [Initialization error] Amount property is required  | missing_amount_property  |
| Absence of the callbacks of onReady and onError  | [Initialization error] Callbacks onReady and onError are required  | missing_required_callbacks  |
| Absence of an ID of an HTML element that serves as the container of the Brick  | [Initialization error] You must provide an HTML element ID as a container to allow component rendering  | missing_container_id  |
| Absence of the property locale (preferred language)  | [Initialization error] Locale property is required  | missing_locale_property  |
| Generic error occurred during Brick initialization, usually some validation that failed due to a value sent by the integrator  | [Initialization error] Brick incorrectly initialized: {error}  | incorrect_initialization  |

## Communication with external services (Mercado Pago APIs)

| Error | Message for the user | Message for the integrator | Critical? | Cause code |
| --- | --- | --- | --- | --- |
| Inability to generate Secure Fields within the Card Payment Brick form  | An error occurred  | The integration with Secure Fields failed  | Yes  | fields_setup_failed  |
| It wasn’t possible to get the payment method information according to the integrator's public_key  | An error occurred. Please try again later.  | An error occurred while trying to search for payment methods  | No  | get_payment_methods_failed  |
| It wasn’t possible to create the token that represents the card information  | An error occurred and the payment could not be processed. Please try again later.  | Failed to create card token  | No  | card_token_creation_failed  |
| Error when searching for types of identification documents according to the country defined in the MercadoPago.js SDK  | An error occurred. Please try again later.  | Failed to get identification types  | No  | get_identification_types_failed  |
| Failed to get bin based card information  | An error occurred. Please try again later.  | Failed to get payment methods using card bin  | No  | get_card_bin_payment_methods_failed  |
| Error searching card issuing banks  | An error occurred. Please try again later.  | Failed to get card issuer(s)  | No  | get_card_issuers_failed  |
| Error when searching the amount and the values of the payment installments according to the _amount_ sent by the integrator  | An error occurred. Please try again later.  | Failed to get payment installments  | No  | get_payment_installments_failed  |
| Incomplete payment fields for some reason (fees, card issuer, _payment_method_id_)  | An error occurred. Please try again later.  | SOne of the following messages will be returned according to the type of error: * The payment method id is missing * The payment installments are missing * The card issuer is missing  |  No  | missing_payment_information  |

## Como atualizar dados enviados durante a inicialização de um Brick

Caso seja necessário atualizar os valores enviados durante a inicialização de um Brick, é necessário explicitar a assincronicidade do código e se valer da função de unmount disponibilizada no Controller do Brick antes de atualizar os dados. Além disso, o objeto de configurações precisa ser enviado completo, uma vez que se trata de uma renderização

Lembrando que não se deve apenas chamar a função de renderização com os novos valores. Isto levaria a uma duplicação de Brick em tela, sendo que a segunda renderização exibirá um erro.

O código incompleto exemplifica o fluxo utilizando a atualização de uma preferência em Payment Brick, mas o fluxo em si é válido para atualização necessária em dados de inicialização de qualquer brick.

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

Para a correta renderização, é necessário que o ID do container no DOM no qual o Brick será renderizado seja informado de maneira idêntica ao da função de criação do Brick. Qualquer string pode ser utilizada como nome, desde que os nomes sejam iguais, este erro não ocorrerá.

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

Contudo, nossa SDK foi estruturada para renderização no cliente (_Client Side Rendering_) enquanto via de regra o Next.js atua com _Server Side Rendering_. Assim, ao utilizar nossa SDK é preciso levar isso em consideração. É possível realizar essa integração utilizando a importação da SDK dinamicamente - conforme indicado na [documentação do Next.js](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#nextdynamic).

Abaixo você encontra um exemplo de código de importação dinâmica de um componente disponibilizado em nossa SDK, o `getPaymentMethods`.

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