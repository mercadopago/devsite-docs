# Renderizar brick

Una vez instanciado el builder, nuestro brick puede ser renderizado y tener todas sus configuraciones compiladas para que la estructura final sea generada.

Para renderizar el brick, inserta el código a continuación del paso anterior y completa los atributos de acuerdo con los comentarios destacados en este mismo código.

```javascript
const renderCardPaymentBrick = async (bricksBuilder) => {

  const settings = {
    initialization: {
      amount: number, //valor del pago a realizar
    },
    callbacks: {
      onReady: () => {
        // callback llamado cuando Brick esté listo
      },
      onSubmit: (cardFormData) => {
        // callback llamado cuando el usuario haga clic en el botón enviar los datos

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
                // recibir el resultado del pago
                resolve();
            })
            .catch((error) => {
                // tratar respuesta de error al intentar crear el pago
                reject();
            })
          });
      },
      onError: (error) => { 
        // callback llamado para todos los casos de error de Brick
      },
    },
  };

  const cardPaymentBrick = await bricksBuilder.create('cardPayment', settings);
  window.cardPaymentBrickController = await cardPaymentBrick.render('cardPaymentBrick_container');
};

renderCardPaymentBrick(bricksBuilder);

```

> WARNING
>
> Importante
>
> Es necesario enviar la información recolectada por el Card Payment Brick a Mercado Pago desde tu backend para completar el pago de manera segura. Consulta la sección [Envía el pago a Mercado Pago](/developers/es/docs/checkout-api/payment-methods/receiving-payment-by-card#bookmark_env_a_el_pago_a_mercado_pago) de la documentación de Checkout API para obtener instrucciones.
