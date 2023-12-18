> CLIENT_SIDE
>
> h1
>
> Cambiar de aspecto

## Propiedades de estilo

| - | Descripción |
| --- | --- |
| Momento de personalización  | Al renderizar el Brick  |
| Propiedad  | customization.visual.{buttonBackground, buttonHeight, borderRadius, valuePropColor, verticalPadding, horizontalPadding} |
| Tipo  | String  |
| Observaciones  | Al enviar una propiedad vacía, la pantalla presentará el aspecto definido por el layout predeterminado que se muestra después de la [renderización del Brick](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering#bookmark_renderizar_o_brick). Por otro lado, al enviar un valor alternativo, reemplazará el valor predeterminado. Para comprobar cuáles son los valores por defecto, consulta la tabla a continuación. |

| Clave | Opciones disponibles | Predeterminado | Observaciones |
|--- |--- | --- | --- |
| buttonBackground | default, black, blue, white | default | - |
| buttonHeight | - | 48px | Mínimo: 48px. <br> Máximo: libre elección. |
| borderRadius | - | 6px | - |
| valuePropColor | grey, white | grey | - |
| verticalPadding | - | 16px | Mínimo: 16px. <br> Máximo: libre elección. |
| horizontalPadding | - | 0px | Mínimo: 0px. <br> Máximo: libre elección. |

[[[
```javascript
const settings = {
    ...,
    customization: {
         visual: {
             buttonBackground: 'black',
             borderRadius: '16px',
         },
    },
}
```
```react-jsx
const customization = {
 visual: {
   buttonBackground: 'black',
   borderRadius: '16px',
 }
};

```
]]]

## Ocultar texto de propuesta de valor

| - | Descripción |
| --- | --- |
| Momento de personalización  | Al renderizar el Brick  |
| Propiedad  | customization.visual.hideValueProp  |
| Tipo  | Boolean  |
| Observaciones  | Cuando es `true`, oculta el texto de la propuesta de valor (debajo del botón). |

[[[
```javascript
const settings = {
    ...,
    customization: {
         visual: {
             hideValueProp: true
         },
    },
}
```
```react-jsx
const customization = {
 visual: {
   hideValueProp: true
 }
};

```
]]]