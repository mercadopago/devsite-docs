
);
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