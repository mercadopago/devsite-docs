> CLIENT_SIDE
>
> h1
>
> Configurar URLs de redirecionamento

Com o Brick de Status Screen, é possível redirecionar seu usuário para outra página de seu site através dos botões de redirecionamento, para que o usuário possa fazer uma nova compra, ou, em caso de erro de pagamento, para que possa tentar realizar um novo pagamento. Para configurar as URLs de retorno, é preciso enviar as URLs desejadas na configuração do Brick:

> NOTE
>
> Atenção
>
> Somente serão aceitas pelo Brick URLs do mesmo domínio que a página na qual o Brick de Status Screen for carregado. URLs pertencentes a outros domínios ou subdomínios serão ignoradas.

```javascript
const settings = {
 initialization: {
   paymentId: 100, // id de pago generado por Mercado Pago
 },
 callbacks: {
   onReady: () => {
     // callback llamado cuando Brick está listo
   },
   onError: (error) => {
     // callback llamado para todos los casos de error de Brick
   },
 },
 customization: {
   backUrls: {
       error: 'URL',
	return: 'URL'
   }
 }
};
```

A URL 'error' será mostrado ao usuário somente quando um pagamento falha. Já a URL 'return' será mostrada ao usuário em todos os estados de pagamento.

> NOTE
>
> Atenção
>
> É possível customizar os textos dos botões que contém as URL de retorno via configuração de textos do Brick. As chaves dos textos dos botões são: `ctaGeneralErrorLabel`, para erros no pagamento; `ctaCardErrorLabel`, para erros no preenchimento de dados do cartão; e `ctaReturnLabel`, para a URL de retorno, que será mostrada em todos os estados.

![configure-redirect-urls](checkout-bricks/configure-redirect-urls-es.png)