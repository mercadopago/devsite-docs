# Callbacks adicionales

Al inicializar Brick, es posible configurar callbacks adicionales, que brindan al integrador más información durante la ejecución de Brick.

## onBinChange

El callback `onBinChange` se usa para obtener el **bin** de la tarjeta que se inserta en el Brick. Este callback se realiza sobre la marcha cada vez que se actualiza el bin de tarjetas.

```Javascript
const settings = {
   ...,
   callbacks: {
       ...
       onBinChange: (bin) => {
           // callback llamado cada vez que se cambia el bin de la tarjeta
           console.log(bin);
       },
   }
};
```

```react-jsx
<Payment
 ...,
 onBinChange={bin => {
   console.log(bin);
 }}
/>
```

> WARNING
>
> Atención
>
> El bin de tarjeta devuelto por el callback `onBinChange` es el mismo que el usuario ingresó en el campo del número de tarjeta; es decir, por cada cambio que el usuario haga en este campo, el callback activará un nuevo evento. Por lo tanto, solo considera que el bin es válido y confiable para ser utilizado después de que el evento de envío sea activado por el callback `onSubmit`.