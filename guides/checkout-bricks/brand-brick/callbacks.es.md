# Callbacks

Para simplificar la integración e interacción con Brick, se proporcionan _callbacks_ que pueden utilizarse en diferentes momentos del ciclo de vida para ejecutar funciones en su sitio web.

| Value prop | Momento de uso |
|---|---|
|`onReady` |Al finalizar la carga de Brick.|

[[[
```javascript
const settings = {
   callbacks: {
      onReady: () => {
        /*
          Callback llamado cuando Brick esté listo.
          Aquí puedes ocultar los cargadores de tu sitio, por ejemplo.
        */
      },
    },
};
```
```react-jsx
import { Brand } from '@mercadopago/sdk-react';
const onReady = async () => {
  /*
    Callback llamado cuando Brick esté listo.
    Aquí puedes ocultar los cargadores de tu sitio, por ejemplo.
  */
};

<Brand
   onReady={onReady}
/>
```
]]]