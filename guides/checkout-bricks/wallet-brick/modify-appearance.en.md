> CLIENT_SIDE
>
> h1
>
> Change texts

| - | Description |
| --- | --- |
| Customization moment  | When rendering the Brick  |
| Property  | customization.visual.{buttonBackground, buttonHeight, borderRadius, valuePropColor, verticalPadding} |
| Type  | String  |
| Comments  | When sending an empty property, the screen will present the text defined by the default layout. On the other hand, when you submit a custom text, it will replace the default text. To check what the default texts are, check out the table below. |

| Key | Available options | Default | Comments |
|--- |--- | --- | --- |
| buttonBackground | default, black, blue, white | default | - |
| buttonHeight | - | 48px | Minimum: 48px. <br> Maximum: livre escolha. |
| borderRadius | - | 6px | - |
| valuePropColor | grey, white | grey | - |
| verticalPadding | - | 16px | Minimum: 16px. <br> Maximum: livre escolha. |

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