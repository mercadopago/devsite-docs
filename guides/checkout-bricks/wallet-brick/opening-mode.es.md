# Modo de apertura

El esquema de apertura le permite definir cómo se abrirá la caja para el usuario. Por defecto, Checkout Bricks se abre de forma **redirect**, es decir, con redirección de usuario dentro de la misma página. Sin embargo, es posible personalizar la apertura para que la apertura sea en una página externa, por ejemplo, o definir el modelo **modal**, en el que Checkout Bricks se abre en una ventana dentro del propio sitio, sin redirección.

> WARNING
> 
> Atención
>
> Es **extremadamente importante** prestar atención, al crear la preferencia, a la configuración de `back_urls`, ya que serán responsables de guiar el flujo de retorno a su sitio web cuando se complete el pago. Para obtener más información, consulte la sección [URL de devolución de llamada.]()

# Esquema de redirección a otra página

El cambio del comportamiento de redirección se realiza mediante la propiedad `redirectMode`, que puede asumir los valores `self`, `blank` o `modal`.

| Valor | Descrição | 
|--- |--- | 
| self | Mantiene la redirección en la misma página. | 
| blank | Externaliza la redirección a una página nueva. |
| modal | Abre la experiencia de pago en modo modal. |

Los bloques de código a continuación implementan el pago en modo **redirect** a otra página.

[[[
```Javascript/html
const renderComponent = async (bricksBuilder) => {
 const settings = {
   initialization: {
     preferenceId: '<PREFERENCE_ID>',
     redirectMode: 'blank'
   }
 };
 const brickController = await bricksBuilder.create(
   'wallet',
   'wallet_container',
   settings
 );
};
renderComponent (bricksBuilder);
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'blank' }} />
```
]]]

# Esquema de apertura en modo modal

Para definir el **modelo de apertura modal**, simplemente cambie la propiedad `redirectMode: 'modal'` durante la integración, como en el ejemplo a continuación.

[[[
```Javascript/html
const renderComponent = async (bricksBuilder) => {
 const settings = {
   initialization: {
     preferenceId: '<PREFERENCE_ID>',
     redirectMode: 'modal'
   },
 };
 const brickController = await bricksBuilder.create(
   'wallet',
   'wallet_container',
   settings
 );
};
renderComponent (bricksBuilder);
```
```react-jsx
<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>', redirectMode: 'modal' }} />
```
]]]

La propiedad `redirectMode: 'modal'` indica que la caja debe abrirse en modo **modal** y no **redirect**.