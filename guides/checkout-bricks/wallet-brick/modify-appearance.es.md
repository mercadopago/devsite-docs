> CLIENT_SIDE
>
> h1
>
> Cambiar de aspecto

# Propiedades de estilo

| - | Descripción |
| --- | --- |
| Momento de personalización  | Al renderizar el Brick  |
| Propiedad  | customization.visual.{buttonBackground, buttonHeight, borderRadius, valuePropColor, verticalPadding} |
| Tipo  | String  |
| Observaciones  | Al enviar una propiedad vacía, la pantalla presentará el texto definido por el layout predeterminado. Por otro lado, al enviar un texto personalizado, reemplazará el texto predeterminado. Para comprobar cuáles son los textos por defecto, consulta la tabla a continuación. |

| Clave | Opciones disponibles | Predeterminado | Observaciones |
|--- |--- | --- | --- |
| buttonBackground | default, black, blue, white | default | - |
| buttonHeight | - | 48px | Mínimo: 48px. <br> Máximo: libre elección. |
| borderRadius | - | 6px | - |
| valuePropColor | grey, white | grey | - |
| verticalPadding | - | 16px | Mínimo: 16px. <br> Máximo: libre elección. |

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

## Ocultar texto de propuesta de valor

| - | Descripción |
| --- | --- |
| Momento de personalización  | Al renderizar el Brick  |
| Propiedad  | customization.visual.hideValueProp  |
| Tipo  | Boolean  |
| Observaciones  | Cuando es `true`, oculta el texto de la propuesta de valor (debajo del botón). |

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