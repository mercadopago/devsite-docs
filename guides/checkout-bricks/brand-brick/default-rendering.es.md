# Renderizado por defecto

> WARNING
>
> Importante
>
> Para realizar el renderizado de Brand Brick, primero realice los [pasos de inicialización](/developers/es/docs/checkout-bricks/common-initialization) compartidos entre todos los Bricks. 

## Configurar el Brick

Creae la configuración de inicio de Brick

```javascript
bricksBuilder.create(
    "brand",
    "brandBrick_container"
  );
};
```

## Renderizar el Brick

Una vez creadas las configuraciones, ingrese el código a continuación para renderizar el Brick. 

> NOTE
>
> Importante
>
> El id `brandBrick_container` de la _div html_ abajo debe corresponder que el valor enviado en el metodo create() de la etapa anterior.

[[[
```html
<div id="brandBrick_container"></div>
```
```react-jsx
import { Brand } from '@mercadopago/sdk-react';

<Brand />
```
]]]

El resultado de renderizar el Brick debería parecerse a la imagen de abajo.

<center>

![brand-brick-es](checkout-bricks/brand-brick-es.gif)

</center> 