> CLIENT_SIDE
>
> h1
>
> Change button appearance

It is possible to customize the look of the payment button by defining visual properties with alternative values to the default ones. By default, the payment button renders as in the following image.

[IMAGEM]

To change the default texts, modify the `customization` property during rendering.

| - | Description |
| --- |--- | 
| Customization moment | When rendering. |
| Property | customization |
| Observations | When sending an empty property, the screen will present the value defined by the default layout. On the other hand, when sending alternative text, it will replace the default text. To check which alternative texts are available, see the table below. |

Check below for the visuals available to change and a code example.

| Key | Available options | Default | Observations |
| --- |--- | --- | --- | 
| buttonBackground | default, black, blue, white | default | - |
| buttonHeight | - | 48px | Mínimo: 48px. <br> Maximum: free choice. |
| borderRadius | - | 6px | - |
| valuePropColor | grey, white| grey | - |
| verticalPadding | - | 16px | Mínimo: 8px. <br> Maximum: free choice. |
| horizontalPadding | - | 0px | Mínimo: 0px. <br> Maximum: free choice. |

[[[
```Javascript
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
     borderRadius: '6px',
 },
}
```
]]]

Such customization examples will generate the following result:

[IMAGEM]