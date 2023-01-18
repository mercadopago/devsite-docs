# Pix

Pix é um meio de pagamento eletrônico instantâneo oferecido pelo Banco Central do Brasil a pessoas físicas e jurídicas. Através do Checkout Bricks, é possível oferecer esta opção de pagamento a partir de um **código QR** ou um **código de pagamento**.

> WARNING
>
> Importante
> 
> A opção de pagamento com Pix só será exibida se houver uma chave Pix cadastrada no Mercado Pago. Caso ainda não tenha criado, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) e veja o passo a passo. <br/></br>
> <br/></br>
> Para já inicializar o formulário do Pix com o campo de e-mail preenchido, [clique aqui.](/developers/pt/docs/checkout-bricks/payment-brick/additional-customization/initialize-data-on-the-bricks)<br/></br>
> <br/></br>
> E, para ajudar, preparamos um [exemplo de código](/developers/pt/docs/checkout-bricks/payment-brick/code-example/pix) completo da configuração do Payment Brick com Pix que você pode usar como modelo.

Para configurar a integração do Payment Brick para receber pagamentos com Pix você precisa seguir o passo abaixo. 

> CLIENT_SIDE
>
> h2
>
> Renderizar Brick

Uma vez instanciado, o Brick pode ser renderizado e ter todas as suas configurações compiladas de modo que a estrutura final do Brick seja gerada.

Para renderizar o Brick, insira o código abaixo após o passo anterior e preencha os atributos conforme os comentários destacados neste mesmo código.

```javascript
const renderPaymentBrick = async (bricksBuilder) => {
 const settings = {
   initialization: {
     amount: 100, // valor total a ser pago
   },
   customization: {
     paymentMethods: {
       bankTransfer: ['pix'],
     },
   },
   callbacks: {
     onReady: () => {
       /*
         Callback chamado quando o Brick estiver pronto.
         Aqui você pode ocultar loadings do seu site, por exemplo.
       */
     },
     onSubmit: ({ selectedPaymentMethod, formData }) => {
       // callback chamado ao clicar no botão de submissão dos dados
      
         return new Promise((resolve, reject) => {
           fetch("/processar-pago", {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(formData)
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
       console.error(error);
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
```

O resultado de renderizar o Brick deve ser como na imagem abaixo:

![payment-Brick-pix](checkout-bricks/payment-brick-pix-pt.png)

> WARNING
>
> Atenção
>
> Para um controle eficaz do Brick, a função enviada no `onSubmit` deve sempre retornar uma Promise. Chame o `resolve()` apenas se o processamento em seu backend ocorreu com sucesso. Chame o `reject()` caso algum erro ocorra. Isso fará com que o Brick permita o preenchimento dos campos novamente e viabilize uma nova tentativa de pagamento. Ao chamar o método `resolve()` dentro da Promise do `onSubmit`, o Brick não permite novos pagamentos. Caso queira realizar um novo pagamento, deve-se criar uma nova instância do Brick.

Para pagar com Pix é necessário que o comprador insira o seu e-mail. É altamente recomendado que o integrador informe esse campo de e-mail na inicialização do Brick, assim o comprador não precisará digitar manualmente. Para inicializar o campo de e-mail, basta seguir o **exemplo abaixo**.

```Javascript
settings = {
  ...,
  initialization: {
 ...,
 payer: {
   email: 'jose@maria.com'
 }
}
```