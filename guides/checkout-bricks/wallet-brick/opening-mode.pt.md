# Modo de abertura

O esquema de abertura permite definir como o checkout será aberto para o usuário. Por padrão, o Checkout Bricks é aberto de forma **redirect**, ou seja, com redirecionamento do usuário dentro da mesma página. Contudo, é possível personalizar a abertura para que a abertura seja em uma página externa, por exemplo, ou definir o modelo **modal**, no qual o Checkout Bricks é aberto em uma janela dentro do próprio site, sem redirecionamento. 

> WARNING
> 
> Atenção
>
> É de **extrema importância** que se atente, durante a criação da preferência, para a configuração das `back_urls`, pois elas serão responsáveis por guiar o fluxo de retorno ao seu website quando o checkout for finalizado. Para mais informações, veja a seção de [URLs de retorno.](/developers/pt/docs/checkout-bricks/wallet-brick/advanced-features/preferences#bookmark_redirecione_o_comprador_para_o_seu_site). 

# Esquema de redirecionamento para outra página

A alteração no comportamento do redirecionamento é feita pela propriedade `redirectMode`, a qual pode assumir os valores `self`, `blank` ou `modal`.

| Valor | Descrição | 
|--- |--- | 
| self | Mantém o redirecionamento na mesma página. | 
| blank | Externaliza o redirecionamento para uma nova página. |
| modal | Abre a experiência de checkout em modo modal. |

Os blocos de código abaixo implementam o checkout em modo **redirect** para outra página

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
renderComponent (bricksBuilder);
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'blank' }} />
```
]]]

# Esquema de abertura em modo modal

Para definir o **modelo de abertura modal**, basta alterar a propriedade `redirectMode: 'modal'` durante a integração, como no exemplo abaixo.

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
renderComponent (bricksBuilder);
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'modal' }} />
```
]]]

A propriedade `redirectMode: 'modal'`  indica que o checkout deve abrir em modo **modal** e não **redirect**.