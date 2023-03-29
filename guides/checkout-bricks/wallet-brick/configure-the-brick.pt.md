# Configurar o Brick

Crie a configuração de inicialização do Brick.

[[[
```Javascript
const renderWalletBrick = async (bricksBuilder) => {
 const settings = {
   callbacks: {
     onReady: () => {
     /*
      Callback chamado quando o Brick estiver pronto.
      Aqui você pode ocultar loadings do seu site, por exemplo.
     */
   },
   onSubmit: (formData) => {
     // callback chamado ao clicar no Wallet Brick
     // isso é possível porque o brick é um botão
     // neste momento de submit, você deve criar a preferência
     const yourRequestBodyHere = {
       items: [
         {
           id: '202809963',
           title: 'Dummy title',
           description: 'Dummy description',
           quantity: 1,
           unit_price: 10,
         },
       ],
       purpose: 'wallet_purchase',
     };
     return new Promise((resolve, reject) => {
       fetch('/create_preference', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
           body: JSON.stringify(formData),
         })
           .then((response) => response.json())
           .then((response) => {
           // resolver a promise com o ID da preferência
           resolve(response.preference_id);
         })
         .catch((error) => {
           // lidar com a resposta de erro ao tentar criar a preferência
           reject();
         });
     });
   },
 },
};
window.walletBrickController = await bricksBuilder.create(
   'wallet',
   'walletBrick_container',
   settings,
  );
 
};
renderWalletBrick(bricksBuilder);
```
```react-jsx
const onSubmit = async (formData) => {
 // callback chamado ao clicar no Wallet Brick
 // isso é possível porque o brick é um botão
 // neste momento de submit, você deve criar a preferência
 const yourRequestBodyHere = {
   items: [
     {
       id: '202809963',
       title: 'Dummy title',
       description: 'Dummy description',
       quantity: 1,
       unit_price: 10,
     },
   ],
   purpose: 'wallet_purchase',
 };
 return new Promise((resolve, reject) => {
   fetch('/create_preference', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(yourRequestBodyHere),
   })
     .then((response) => response.json())
     .then((response) => {
       // resolver a promise com o ID da preferência
       resolve(response.preference_id);
     })
     .catch((error) => {
       // lidar com a resposta de erro ao tentar criar a preferência
       reject();
     });
 });
};


const onError = async (error) => {
 // callback chamado para todos os casos de erro do Brick
 console.log(error);
};


const onReady = async () => {
 /*
   Callback chamado quando o Brick estiver pronto.
   Aqui você pode ocultar loadings do seu site, por exemplo.
 */
};
```
]]]

> WARNING
> 
> Atenção
>
> Caso se faça necessário desmontar e remontar algum Brick, é recomendado destruir a instância atual e gerar uma nova. Para isso, utilize o método *unmount* disponível no *controller* do Brick, sendo neste caso: `window.walletBrickController.unmount()`.

Esse fluxo de criação de [preferência no onSubmit](/developers/pt/docs/checkout-bricks/wallet-brick/configure-integration/preference-onsubmit) é pensado para vendedores que tem fluxos de one click, caso queira, também pode enviar a preferência na inicialização. Veja mais informações na seção de [Preferência na inicialização](/developers/pt/docs/checkout-bricks/wallet-brick/configure-integration/preference-startup).