# Callbacks

Para simplificar a integração e interação com o Brick, são disponibilizados _callbacks_ que podem ser utilizados em diferentes momentos do ciclo de vida para executar funções em seu site.

| Value prop | Momento de uso |
|---|---|
|`onReady` |Ao finalizar o carregamento do Brick.|

[[[
```javascript
const settings = {
   callbacks: {
      onReady: () => {
        /*
          Callback chamado quando o Brick estiver pronto.
          Aqui você pode ocultar loadings do seu site, por exemplo.
        */
      },
    },
};
```
```react-jsx
import { Brand } from '@mercadopago/sdk-react';
const onReady = async () => {
  /*
    Callback chamado quando o Brick estiver pronto.
    Aqui você pode ocultar loadings do seu site, por exemplo.
  */
};

<Brand
   onReady={onReady}
/>
```
]]]