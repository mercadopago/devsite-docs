# Auxiliary callbacks

In order to offer more transparency and possibilities of acting in specific flows, we provide the option to add callbacks that will be executed in specific moments of the flow.

| Callback | Description | When to use |
| --- |--- | --- |
| onReady | Callback called when the button is fully loaded. | Here you can hide loadings from your site, for example. |
| onSubmit | Callback called on button click. | This callback could be used to indicate to the user that the flow must be completed in another tab, for example. **Supported in redirect mode.** |

See below for an example of how to integrate them into your integration.

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