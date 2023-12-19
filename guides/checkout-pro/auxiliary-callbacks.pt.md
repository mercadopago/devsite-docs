# Callbacks auxiliares

Com o objetivo de oferecer mais transparência e possibilidades de atuação em fluxos específicos, fornecemos a opção de adicionar callbacks que serão executadas em momentos específicos do fluxo.

| Callback | Descrição | Quando utilizar |
| --- |--- | --- | 
| onReady | Callback chamado quando o botão estiver totalmente carregado.  | Aqui você pode ocultar loadings do seu site, por exemplo. |
| onSubmit | Callback chamado ao clicar no botão. | Poderia-se usar esse callback para indicar ao usuário de que deve-se completar o fluxo em outra aba, por exemplo. **Suportado em modo redirect.** |

Veja abaixo um exemplo de como integrá-las em sua integração.

[[[
```Javascript
mp.bricks().create("wallet", "wallet_container", {
   initialization: {
       preferenceId: "<PREFERENCE_ID>",
       redirectMode: "self",
   },
   callbacks: {
       onReady: () => {},
       onSubmit: () => {},
       onError: (error) => console.error(error),
     },
});
```
```react-jsx
<Wallet
  initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'self' }}
  onReady={() => {}}
  onError={() => {}}
  onSubmit={() => {}}
/>
```
]]]