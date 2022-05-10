# Exemplo de código

Para facilitar e otimizar o seu processo de integração, veja abaixo um exemplo completo em `html`da integração com o Checkout Bricks.

<!DOCTYPE html>
<html>
    <head>
        <script src="https://beta-sdk.mercadopago.com/gama/js/v2"></script>
    </head>
    <body>
        <div id="cardPaymentBrick_container"></div>
        <script>
            const mp = new MercadoPago('YOUR_PUBLIC_KEY');
            const bricksBuilder = mp.bricks();
            const renderCardPaymentBrick = async (bricksBuilder) => {
            const settings = {
                    initialization: {
                        amount: 100, //valor do processamento a ser realizado
                        payer: {
                        email: 'test@mail.com',
                    },
                    },
                    style: {
                        theme: 'default' // | 'dark' | 'bootstrap' | 'flat'
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
                window.cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
            };
            renderCardPaymentBrick(bricksBuilder);
        </script>
    </body>
</html>

> PREV_STEP_CARD_PT
>
> Enviar pagamento ao Mercado Pago
>
> Após configurar a integração, veja como enviar o pagamento ao Mercado Pago.
>
> [Enviar pagamento ao Mercado Pago](/developers/pt/docs/checkout-bricks-beta/payment-submission)

> NEXT_STEP_CARD_PT
>
> Testar a integração
>
> Veja como realizar testes para garantir o funcionamento correto de sua integração.
>
> [Enviar pagamento ao Mercado Pago](/developers/pt/docs/checkout-bricks-beta/integration-test)