> CLIENT_SIDE
>
> h1
>
> Modificar textos

| - | Brick |
| --- | --- |
| Momento de personalización  | Al renderizar el brick  |
| Propiedad  | customization.visual.texts.{ctaGeneralErrorLabel, ctaCardErrorLabel, ctaReturnLabel} |
| Tipo  | String  |
| Observaciones  | Al enviar texto vacío, la pantalla presentará el texto definido por el layout predeterminado. Por otro lado, al enviar un texto personalizado, reemplazará el texto predeterminado. <br><br>  Si los textos personalizados son más grandes que el espacio disponible, el texto mostrado se interrumpirá hasta el tamaño máximo permitido y el excedente será reemplazado por el símbolo "...".  |

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