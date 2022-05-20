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

> WARNING
> 
> Importante
>
> É necessário enviar as informações coletadas pelo Card Payment Brick ao Mercado Pago de seu backend para concluir o pagamento com segurança. Para isso, veja a seção [Envie o pagamento ao Mercado Pago](/developers/pt/docs/checkout-api/payment-methods/receiving-payment-by-card#bookmark_envie_o_pagamento_ao_mercado_pago) da documentação Checkout Transparente para instruções.
