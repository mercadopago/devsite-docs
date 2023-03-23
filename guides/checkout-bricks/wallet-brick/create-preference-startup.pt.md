# Preferência na inicialização

Caso prefira, também é possível adicionar a preferência na inicialização do Brick. Isso pode ser útil caso você já tenha as informações de pagamento ao carregar o Brick. Para isso, adicione o ID da preferência no objeto de `initialization` do Brick.

[[[
```Javascript
const settings = {
 ...,
 initialization: {
   preferenceId: '<PREFERENCE_ID>',
 }
};
```
```react-jsx
const initialization = {
 preferenceId: '<PREFERENCE_ID>',
};
```
]]]

Nesse caso, não é preciso passar a [preferência no onSubmit](/developers/pt/docs/checkout-bricks/wallet-brick/configure-integration/preference-onsubmit).