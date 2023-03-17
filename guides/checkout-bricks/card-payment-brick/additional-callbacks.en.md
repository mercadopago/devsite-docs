# Additional callbacks

When initializing Brick it is possible to configure additional callbacks, which provide the integrator with more information during the Brick execution.

## onBinChange

The `onBinChange` callback is used to get the **bin** of the card being inserted into the Brick. This callback is called on the fly whenever the card bin is updated.

[[[
```Javascript
const settings = {
   ...,
   callbacks: {
       ...
       onBinChange: (bin) => {
           // allback called whenever card bin is changed
           console.log(bin);
       },
   }
};
```
```react-jsx
<Card
 ...,
 onBinChange={bin => {
   console.log(bin);
 }}
/>
```
]]]

> WARNING
>
> Attention
>
> The card bin returned by the `onBinChange` callback is the same as the one entered by the user in the card number field, that is, for each change the user makes in this field, a new event will be triggered by the callback. Therefore, only consider the bin valid and reliable to be used after the submit event is fired by the `onSubmit` callback.