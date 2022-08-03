 CLIENT_SIDE
>
> h1
>
> Definir tema 

De forma predeterminada, Checkout Bricks se instancia/renderiza con el tema predeterminado. Sin embargo, es posible seleccionar otro tema configurando el parámetro "theme" al instanciar/renderizar el brick.

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