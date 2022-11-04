> CLIENT_SIDE
>
> h1
>
> Modify texts

| - | Brick |
| --- | --- |
| Customization moment  | When rendering the brick  |
| Property  | customization.visual.texts.{ctaGeneralErrorLabel, ctaCardErrorLabel, ctaReturnLabel} |
| Type  | String  |
| Comments  | When sending empty text, the screen will present the text defined by the default layout. On the other hand, when you submit a custom text, it will replace the default text. <br><br> If the custom texts are larger than the available space, the displayed text will be broken up to the maximum size allowed and the excess will be replaced by the "..." symbol.  |

```javascript
const settings = {
   ...,
   customization: {
       visual: {
           texts: {
               ctaGeneralErrorLabel: 'Custom Label',
               ...,
           },
       }
   },
}
```