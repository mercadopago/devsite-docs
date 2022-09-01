# Exemplo de código 
 
Para facilitar e otimizar o seu processo de integração, veja abaixo um exemplo completo de como incluir a Carteira Mercado Pago como meio de pagamento com o Payment Brick e de como, após realizar a integração, enviar o pagamento ao Mercado Pago.

> SERVER_SIDE
>
> h2
>
> Crie sua preferência

```node
// SDK do Mercado Pago
const mercadopago = require ('mercadopago');
// Adicione as credenciais
mercadopago.configure({
 access_token: 'PROD_ACCESS_TOKEN'
});
 
// Cria um objeto de preferência
let preference = {
 items: [
   {
     title: 'Meu produto',
     unit_price: 100,
     quantity: 1,
   }
 ]
};
```

> CLIENT_SIDE
>
> h2
>
> Configurar integração do Brick

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bricks</title>
</head>
<body>
<div id="paymentBrick_container"></div>
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
  const mp = new MercadoPago('YOUR_PUBLIC_KEY');
  const bricksBuilder = mp.bricks();
  const renderPaymentBrick = async (bricksBuilder) => {
    const settings = {
      initialization: {
        amount: 100, // valor do processamento a ser realizado
        preferenceId: 'abcd1234', // preferenceId gerado no backend
      },
      callbacks: {
        onReady: () => {
          // callback chamado quando o Brick estiver pronto
        },
        onSubmit: ({ paymentType, formData }) => {
          // callback chamado ao clicar no botão de submissão dos dados
        
          if (paymentType === 'wallet_purchase') {
            // nesse caso, o usuário foi redirecionado para
            // a página do Mercado Pago para fazer o pagamento
          }
        },
        onError: (error) => {
          // callback chamado para todos os casos de erro do Brick
        },
      },
    };
    window.paymentBrickController = await bricksBuilder.create(
      'payment',
      'paymentBrick_container',
      settings
    );
  };
  renderPaymentBrick(bricksBuilder);
</script>
</body>
</html>
```

> Após o usuário ser redirecionado para a página do Mercado Pago para realizar o pagamento, você poderá ser notificado sobre o resultado da transação se cadastrar as `back_urls`, como explicado nas [Preferências](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/preferences).