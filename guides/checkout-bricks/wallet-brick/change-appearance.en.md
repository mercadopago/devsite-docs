> CLIENT_SIDE
>
> h1
>
> Change appearance

# Style properties

| - | Description |
| --- | --- |
| Customization moment  | When rendering the Brick  |
| Property  | customization.visual.{buttonBackground, buttonHeight, borderRadius, valuePropColor, verticalPadding, horizontalPadding} |
| Type  | String  |
| Comments  | When sending an empty property, the screen will present the text defined by the default layout. On the other hand, when you submit a alternative value, it will replace the default value. To check what the default values are, check out the table below. |

| Key | Available options | Default | Comments |
|--- |--- | --- | --- |
| buttonBackground | default, black, blue, white | default | - |
| buttonHeight | - | 48px | Minimum: 48px. <br> Maximum: free choice. |
| borderRadius | - | 6px | - |
| valuePropColor | grey, white | grey | - |
| verticalPadding | - | 16px | Minimum: 16px. <br> Maximum: free choice. |
| horizontalPadding | - | 0px | Minimum: 0px. <br> Maximum: free choice. |

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

## Hide value proposition text

| - | Description |
| --- | --- |
| Customization moment  | When rendering the Brick  |
| Property  | customization.visual.hideValueProp  |
| Type  | Boolean  |
| Comments  | When `true`, hides the value proposition text (below the button). |

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