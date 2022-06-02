> CLIENT_SIDE
>
> h1
>
> Definir tema

De forma predeterminada, Card Payment Brick se instancia/renderiza con el tema predeterminado. Sin embargo, es posible seleccionar otro tema configurando el parámetro "theme" al instanciar/renderizar el brick.

```javascript
const bricks = mp.bricks({ theme: 'dark' });
```

Si estableces el tema en la creación de **instancias de la classe bricks**, el cambio de tema se aplicará a todos los bricks que se puedan instanciar. Por otro lado, si el tema está configurado en el **renderización del brick**, los cambios en el tema solo se reflejarán en el brick que se está creando así como el Javascript que se muestra a continuación.

```javascript
const settings = {
    ...,
    customization: {
        visual: {
            style: {
                theme: 'dark' | 'default' | 'bootstrap' | 'flat'
           }
        }
    }    
}
```
> PREV_STEP_CARD_ES
>
> Ejemplo de código
>
> Para facilitar y optimizar el proceso de integración, consulta un ejemplo de integración con Checkout Bricks.
>
> [Enviar pago a Mercado Pago](/developers/es/docs/checkout-bricks/additional-customization/code-example)

> NEXT_STEP_CARD_ES
>
> Modificar variables CSS
>
> Aprende a modificar las variables CSS de Card Payment Brick si así lo deseas.
>
> [Modificar variables CSS](/developers/es/docs/checkout-bricks/additional-customization/modify-css-variables)