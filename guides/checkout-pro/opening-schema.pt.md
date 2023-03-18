# Esquema de abertura

O esquema de abertura permite definir como o checkout será aberto para o usuário. Por padrão, o checkout pro é aberto de forma **Modal**, ou seja, em uma janela dentro do próprio site, sem redirecionamento a uma página externa para concluir o pagamento.

Contudo, é possível personalizar a abertura e definir o modelo **redirect**, no qual o Checkout Pro é aberto em uma janela dentro do próprio site, sem redirecionamento. 

> NOTE
>
> Atenção
> 
> É de extrema importância que se atente, durante a criação da preferência, para a configuração das `back_urls` porque elas serão responsáveis por guiar o fluxo de retorno ao seu website quando o checkout for finalizado. Para mais informações, veja a seção de [URLs de retorno](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/redirection).

## Esquema de redirecionamento para outra página

A alteração no comportamento do redirecionamento é feita pela propriedade `redirectMode`, a qual pode assumir os valores `self`, `blank` ou `modal`.

| Valor | Descrição |
| --- |--- | 
| self | Mantém o redirecionamento na mesma página. |
| blank | Externaliza o redirecionamento para uma nova página. |
| modal | Abre a experiência de checkout em modo modal. |

Os blocos de código abaixo implementam o checkout em modo **redirect** para outra página.

[[[
```Javascript
const renderComponent = async (bricksBuilder) => {
 const settings = {
   initialization: {
     preferenceId: '<PREFERENCE_ID>',
     redirectMode: 'blank'
   }
 };
 const brickController = await bricksBuilder.create(
   'wallet',
   'wallet_container',
   settings
 );
};
renderComponent(bricksBuilder);
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'blank' }} />
```
]]]

## Esquema de abertura em modo modal

Para definir o modelo de abertura modal, basta alterar a propriedade `redirectMode: 'modal'` durante a integração, como no exemplo abaixo.

[[[
```Javascript
const renderComponent = async (bricksBuilder) => {
 const settings = {
   initialization: {
     preferenceId: '<PREFERENCE_ID>',
     redirectMode: 'modal'
   },
 };
 const brickController = await bricksBuilder.create(
   'wallet',
   'wallet_container',
   settings
 );
};
renderComponent(bricksBuilder);
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'modal' }} />
```
]]]

A propriedade `redirectMode: 'modal'` indica que o checkout deve abrir em modo modal e não redirect.

## Esquema de abertura direto

Também é possível realizar a integração através de chamadas via backend diretamente para a [API de Preferências](/developers/pt/reference/preferences/_checkout_preferences/post). Neste modelo, você obterá o link do Checkout Pro no atributo `init_point`, na resposta à requisição da API. A partir daí, basta utilizá-lo para redirecionar o comprador ao checkout.

Para definir o modelo de redirect direto, insira o código abaixo em seu projeto informando o `init_point`, campo o qual é retornado na criação da preferência gerada anteriormente.

```html
<!doctype html>
<html>
 <head>
   <title>Pagar</title>
 </head>
 <body>
   <a href="YOUR_INIT_POINT"> // Indique o init_point retornado na criação da preferência
     <button>
       Pagar com Mercado Pago
     </button>
   </a>
 </body>
</html>
```