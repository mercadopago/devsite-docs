# Esquema de abertura

O esquema de abertura permite definir como o checkout será aberto para o usuário. Por padrão, o Checkout Pro é aberto de forma **redirect**, ou seja, com redirecionamento do usuário dentro da mesma página. 

Contudo, é possível personalizar a abertura para que a abertura seja em uma página externa, por exemplo, ou definir o modelo **modal**, no qual o Checkout Pro é aberto em uma janela dentro do próprio site, sem redirecionamento. 

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

Os blocos de código abaixo implementam o checkout em modo **redirect** para outra página.

[[[
```Javascript
mp.bricks().create("wallet", "wallet_container", {
   initialization: {
       preferenceId: "<PREFERENCE_ID>",
       redirectMode: "blank"
   },
});
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'blank' }} />
```
]]]

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