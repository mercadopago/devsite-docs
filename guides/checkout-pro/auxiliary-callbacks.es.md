# Callbacks auxiliares

Para ofrecer más transparencia y posibilidades de actuar en flujos específicos, brindamos la opción de agregar callbacks que se ejecutarán en momentos específicos del flujo.

| Callback | Descrição | Quando utilizar |
| --- |--- | --- | 
| onReady | Callback llamado cuando el botón está completamente cargado. | Aquí puede ocultar cargamentos de su sitio, por ejemplo. |
| onSubmit | Callback llamado solicitada al hacer clic en el botón. | Este callback podría usarse para indicarle al usuario que el flujo debe completarse en otra pestaña, por ejemplo. **Admitido en modo de redirect.** |
| onError | Callback llamado para todos los casos de error antes de abrir el modal. | Útil para el manejo de errores, envío de métricas u otros flujos de excepción.  |

Ve a continuación un ejemplo de cómo integrarlos en su integración.

[[[
```Javascript
const renderComponent = async (bricksBuilder) => {
const settings = {
  initialization: {
    preferenceId: '<PREFERENCE_ID>',
    redirectMode: 'self'
  },
  callbacks: {
    onReady: () => {},
    onSubmit: () => {},
    onError: (error) => console.error(error),
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
<Wallet
  initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'self' }}
  onReady={() => {}}
  onError={() => {}}
  onSubmit={() => {}}
/>
```
]]]