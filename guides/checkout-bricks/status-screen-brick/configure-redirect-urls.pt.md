> CLIENT_SIDE
>
> h1
>
> Configurar URLs de redirecionamento

Com o Brick de Status Screen, é possível redirecionar seu usuário para outra página de seu site através dos botões de redirecionamento, assim este usuário poderá fazer uma nova compra ou, em caso de erro de pagamento, tentar realizar um novo pagamento. Para configurar as URLs de retorno, é preciso enviar as URLs desejadas na configuração do Brick.

> NOTE
>
> Atenção
>
> Somente serão aceitas pelo Brick URLs do mesmo domínio que a página na qual o Brick de Status Screen for carregado. URLs pertencentes a outros domínios ou subdomínios serão ignoradas.

[[[
```Javascript
const settings = {
   initialization: {
       paymentId: 100, // id de pagamento gerado por Mercado Pago
   },
   callbacks: {
       onReady: () => {
           // callback chamado quando o Brick estiver pronto
       },
       onError: (error) => {
           // callback chamado para todos os casos de erro do Brick
       },
   },
   customization: {
       backUrls: {
           'error': '<http://<seu dominio>/error>',
           'return': '<http://<seu dominio>/homepage>'
       }
   }
};
```
```react-jsx
const customization = {
 backUrls: {
   error: '<http://<your_domain>/error>',
   return: '<http://<your_domain>/homepage>',
 },
};
```
]]]

O endereço fornecido na propriedade `return` do objeto `backUrls` será exibido como um link ao usuário sempre que o brick de Status Screen for exibido, enquanto o endereço fornecido na propriedade `error` será exibido como um link ao usuário quando houver algum erro no processamento do pagamento.

> NOTE
>
> Atenção
>
> É possível customizar os textos dos botões que contém as URL de retorno via configuração de textos do Brick. As chaves dos textos dos botões são: `ctaGeneralErrorLabel` (para erros no pagamento),  `ctaCardErrorLabel` (para erros no preenchimento de dados do cartão) e `ctaReturnLabel` (para a URL de retorno, que será mostrada em todos os estados).

![configure-redirect-urls](checkout-bricks/configure-redirect-urls-pt.jpg)
