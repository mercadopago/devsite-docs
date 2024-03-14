# Additional callbacks

When initializing the Brick, it is possible to configure additional callbacks that provide the integrator with more information during the execution of the Brick. See below the additional callbacks available for integration.

- **onError**: callback triggered whenever an error occurs in the Brick. The function parameter contains detailed information about what happened.
- **onReady**: callback triggered as soon as the Brick is ready to receive user interactions. This callback has no parameters in this Brick.
- **onSubmit**: callback triggered when the user clicks the button. This callback has no parameters in this Brick.

[[[
```Javascript
const settings = {
   ...,
   callbacks: {
       onError: (error) => {
           // triggered when an error happens
           console.log(error);
       },
       onReady: () => {
           // triggered when brick is ready
       },
       onSubmit: () => {
           // triggered when the button is clicked
       },
   }
};
```
```react-jsx
<Wallet
    ...,
  onError={(error) => {
        // triggered when an error happens
        console.log(error)
    }}
  onReady={() => {
        // triggered when brick is ready
    }}
    onSubmit={() => {
        // triggered when the button is clicked
    }}
/>
```
]]]