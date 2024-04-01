# Preference on submit

If you prefer, you can also create the preference at the moment of clicking the button. This can be useful in cases similar to one-click, using the button directly on the product page to be purchased.

[[[
```Javascript
const renderWalletBrick = async (bricksBuilder) => {
  const settings = {
    callbacks: {
      onSubmit: (formData) => {
        // callback called when clicking on Wallet Brick
        // this is possible because Brick is a button
        // at this submission moment, you should create the preference
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
              // resolve the promise with the preference ID
              resolve(response.preference_id);
            })
            .catch((error) => {
              // handle the error response when attempting to create the preference
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
 // callback called when clicking on Wallet Brick
 // this is possible because Brick is a button
 // at this submission moment, you should create the preference
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
       // resolve the promise with the preference ID
       resolve(response.preference_id);
     })
     .catch((error) => {
       // handle the error response when attempting to create the preference
       reject();
     });
 });
};


const onError = async (error) => {
 // callback called for all Brick error cases
 console.log(error);
};


const onReady = async () => {
 /*
   Callback called when Brick is ready.
   Here, you can hide loadings on your website, for example.
 */
};
```
]]]

In this case, it is not necessary to pass the [preference on startup](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering).