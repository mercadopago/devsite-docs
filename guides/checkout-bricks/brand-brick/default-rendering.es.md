# Renderizado por defecto

Antes de realizar la renderización del Brand Brick, primero ejecute los [pasos de inicialización](/developers/es/docs/checkout-bricks/common-initialization) compartidos entre todos los Bricks. A partir de esto, a continuación se presentan las informaciones necesarias para que configures y renderices el Brand Brick.

> NOTE
>
> Nota
>
> Para consultar los tipos y especificaciones de los parámetros y respuestas de las funciones del Brick, consulte la [documentación técnica](https://github.com/mercadopago/sdk-js/blob/main/API/bricks/brand.md).

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

> WARNING
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

![brand-brick-en](checkout-bricks/brick-brand-es.gif)