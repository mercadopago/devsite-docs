# Preferencia en el inicio

Si lo prefiere, también puede agregar la preferencia en el inicio de Brick. Esto puede ser útil si ya tiene su información de pago al cargar Brick. Para hacer esto, agregue la ID de preferencia al objeto `initialization` de Brick.

[[[
```react-jsx
const initialization = {
 preferenceId: '<PREFERENCE_ID>',
};
```
```Javascript
const settings = {
 ...,
 initialization: {
   preferenceId: '<PREFERENCE_ID>',
 }
};
```
]]]

En este caso, no es necesario pasar la [preferencia en onSubmit](/developers/es/docs/checkout-bricks/wallet-brick/configure-integration/preference-onsubmit).