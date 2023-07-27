# Posibles errores

A continuación encontrará listas de errores que pueden ocurrir durante la integración de los Bricks. Ya sean relacionadas con **envío de variables** o **comunicación con servicios externos** (APIs de Mercado Pago).

> Los mensajes de error de la API se devuelven en inglés de forma predeterminada. Sin embargo, en la siguiente tabla puedes encontrar el mensaje original y su traducción.

## Variables pasadas por el integrador

Durante el proceso de integración del Brick, es posible que **al momento de instanciar el Brick** se muestren al integrador diferentes errores relacionados con el envío de variables. Estos errores se mostrarán mediante un log en la consola del navegador (el comprador no recibe ningún mensaje).

| Error  | Mensaje  | Código de causa  |
| --- | --- | --- |
| Objeto de configuración vacío  | [Initialization error] Settings object is empty, please pass required properties <br><br>  _[Error de inicialización] El objeto de configuración está vacío, pase las propiedades requeridas._  | settings_empty  |
| Ausencia de la propiedad amount (monto total de la compra)  | [Initialization error] Amount property is required <br><br>  _[Error de inicialización] Se requiere la propiedad amount._ | missing_amount_property  |
| Ausencia de los callbacks de onReady y onError  | [Initialization error] Callbacks onReady and onError are required <br><br>  _[Error de inicialización] Se requieren los callbacks onReady y onError._ | missing_required_callbacks  |
| Ausencia de un ID de un elemento HTML que sirva como container del Brick | [Initialization error] You must provide an HTML element ID as a container to allow component rendering <br><br>  _[Error de inicialización] Debe proporcionar un ID de elemento HTML como contenedor para permitir la representación de componentes._ | missing_container_id  |
| Ausencia de la propiedad locale (idioma deseado)  | [Initialization error] Locale property is required <br><br>  _[Error de inicialización] Se requiere la propiedad de configuración regional._  | missing_locale_property  |
| Error genérico ocurrido durante la inicialización del Brick, generalmente alguna validación que falló debido a un valor enviado por el integrador  | [Initialization error] Brick incorrectly initialized: {error} <br><br>  _[Error de inicialización] Brick inicializado incorrectamente._  | incorrect_initialization  |

## Comunicación con servicios externos (APIs de Mercado Pago)

| Error  | Mensaje para el usuario  | Mensaje para el integrador  | ¿Crítico?  | Código de causa  |
| --- | --- | --- | --- | --- |
| Incapacidad para generar Secure Fields dentro del formulario del Brick de Card Payment  | Ocurrió un error  | The integration with Secure Fields failed<br><br> _Falló la integración con Secure Fields,_  | Si  | fields_setup_failed  |
| No se pudo obtener la información del medios de pago según la public_key del integrador  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | An error occurred while trying to search for payment methods<br><br>_Ocurrió un error al intentar buscar métodos de pago._  | No | get_payment_methods_failed  |
| No se pudo crear el token que representa la información de la tarjeta  | Ocurrió un error y no se pudo procesar el pago. Por favor, inténtalo de nuevo más tarde.  | Failed to create card token<br><br> _No se pudo crear el token de la tarjeta._  | No  | card_token_creation_failed  |
| Error al buscar tipos de documentos de identificación según el país definido en el SDK de MercadoPago.js  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | Failed to get identification types<br><br>_Error al obtener los tipos de identificación._  | No  | get_identification_types_failed  |
| No se pudo obtener la información de la tarjeta basada en el bin  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | Failed to get payment methods using card bin<br><br>_No se pudo realizar el pago con el bin de la tarjeta._  | No  | get_card_bin_payment_methods_failed  |
| Error al buscar bancos emisores de tarjetas  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | Failed to get card issuer(s)<br><br>_No se pudo obtener el(los) emisor(es) de la tarjeta._   | No  | get_card_issuers_failed  |
| Error al buscar la cantidad y los montos de las cuotas de pago según el amount enviado por el integrador  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | Failed to get payment installments<br><br>_Error al obtener las cuotas de pago._  | No  | get_payment_installments_failed  |
| Campos de pago incompletos por algún motivo (cuotas, emisor de la tarjeta, payment_method_id)  | Ocurrió un error. Por favor, inténtalo nuevamente más tarde.  | Se devolverá uno de los siguientes mensajes según el tipo de error: <br><br> -The payment method id is missing<br> -The payment installments are missing<br> -The card issuer is missing <br><br>_-Falta el id del medio de pago._ <br> _-Faltan las cuotas de pago._ <br> _-Falta el emisor de la tarjeta._ | No  | missing_payment_information  |

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