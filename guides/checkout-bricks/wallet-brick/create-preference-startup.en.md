# Preference on startup

If you prefer, you can also add the preference at Brick startup. This can be useful if you already have your payment information when loading Brick. To do this, add the preference ID to Brick's `initialization` object.

[[[
```Javascript
const settings = {
 ...,
 initialization: {
   preferenceId: '<PREFERENCE_ID>',
 },
customization: {
 texts: {
  valueProp: 'smart_option',
 },
};
```
```react-jsx
const initialization = {
  preferenceId: '<PREFERENCE_ID>',
}

const customization = {
texts: {
  valueProp: 'smart_option',
 },
}
```
]]]

In this case, it is not necessary to pass the [preference onSubmit](/developers/en/docs/checkout-bricks/wallet-brick/advanced-features/preferences).