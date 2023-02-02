# Exemplo de código 
 
Para facilitar e otimizar o seu processo de integração, veja abaixo um exemplo completo de como mostrar ao comprador o status de uma compra realizada com o Checkout Bricks a partir do Status Screen Brick.

> CLIENT_SIDE
>
> h2
>
> Configurar a integração

> NOTE
>
> Atenção
>
> Caso seja necessário fechar e abrir o Brick novamente (quando um usuário retorna ao carrinho para alterar algum detalhe da compra, por exemplo) é necessário eliminar a instância atual do Brick e criar uma nova quando for preciso mostrar o Brick novamente.
> Para isso, utilize o método `unmount` disponível no controller do Brick, sendo neste caso: `window.statusBrickController.unmount()`.

```html
<html>
   <head>
       <script src="https://sdk.mercadopago.com/js/v2"></script>
   </head>
   <body>
       <div id="statusScreenBrick_container"></div>
       <script>
           const mp = new MercadoPago('YOUR_PUBLIC_KEY');
           const bricksBuilder = mp.bricks();
           const renderStatusScreenBrick = async (bricksBuilder) => {
           const settings = {
                   initialization: {
                       paymentId: '1234567890', // id do pagamento gerado pelo mercado pago
                   },
                   callbacks: {
                       onReady: () => {
                       // callback chamado quando o Brick estiver pronto
                       },
                       onError: (error) => {
                       // callback chamado para todos os casos de erro do Brick
                       },
                   },
               };
               window.statusScreenBrickController = await bricksBuilder.create('statusScreen', 'statusScreenBrick_container', settings);
           };
           renderStatusScreenBrick(bricksBuilder);
       </script>
   </body>
</html>
```