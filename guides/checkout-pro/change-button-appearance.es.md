> CLIENT_SIDE
>
> h1
>
> Cambiar la apariencia del botón

Es posible personalizar el aspecto del botón de pago definiendo propiedades visuales con valores alternativos a los predeterminados. De forma predeterminada, el botón de pago se muestra como en la siguiente imagen.

<center>

![cow-visual-wallet-default](cow/cow-visual-wallet-default.es.png)

</center>

Para cambiar los textos predeterminados, modifique la propiedad `customization` durante el renderizado.

| - | Descripción |
| --- |--- | 
| Momento de personalización | Al renderizar. |
| Propiedad | customization |
| Observaciones | Al enviar una propiedad vacía, la pantalla presentará el valor definido por el diseño predeterminado. Por otro lado, al enviar texto alternativo, reemplazará el texto predeterminado. Para comprobar qué textos alternativos están disponibles, consulte la siguiente tabla. |

Consulte los elementos visuales disponibles para cambiar y un ejemplo de código.

| Clave | Opciones disponibles | Predeterminado | Observaciones |
| --- |--- | --- | --- | 
| buttonBackground | default, black, blue, white | default | - |
| buttonHeight | - | 48px | Mínimo: 48px. <br> Máxima: libre elección. |
| borderRadius | - | 6px | - |
| valuePropColor | grey, white| grey | - |
| verticalPadding | - | 16px | Mínimo: 8px. <br> Máxima: libre elección. |
| horizontalPadding | - | 0px | Mínimo: 0px. <br> Máxima: libre elección. |

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

Estos ejemplos de personalización generarán el resultado siguiente:

<center>

![cow-visual-wallet](cow/cow-visual-wallet.es.png)

</center>