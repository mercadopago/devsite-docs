# Preferência no envio

Caso prefira, também é possível criar a preferência no momento do clique no botão, ou seja, no envio do formulário. Isso pode ser útil em casos semelhantes aos de _one click_, utilizando o botão diretamente na página do produto a ser comprado.

[[[
```Javascript
const renderWalletBrick = async (bricksBuilder) => {
  const settings = {
    callbacks: {
      onSubmit: (formData) => {
        // callback chamado ao clicar no Wallet Brick
        // isso é possível porque o Brick é um botão
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
 // isso é possível porque o Brick é um botão
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

Nesse caso, não é preciso passar a [preferência na inicialização](/developers/pt/docs/checkout-bricks/wallet-brick/default-rendering).