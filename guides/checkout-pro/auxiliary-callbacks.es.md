# Callbacks auxiliares

Para ofrecer más transparencia y posibilidades de actuar en flujos específicos, brindamos la opción de agregar callbacks que se ejecutarán en momentos específicos del flujo.

| Callback | Descrição | Quando utilizar |
| --- |--- | --- | 
| onReady | Callback llamado cuando el botón está completamente cargado. | Aquí puedes ocultar los tiempos de carga de tu sitio, por ejemplo. |
| onSubmit | Callback llamado al hacer clic en el botón. | Este callback podría usarse para indicarle al usuario que el flujo debe completarse en otra pestaña, por ejemplo. **Admitido en modo de redirect.** |

A continuación, ve un ejemplo de cómo integrarlos en tu integración.

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