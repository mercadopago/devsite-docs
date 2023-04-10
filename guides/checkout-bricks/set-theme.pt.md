> CLIENT_SIDE
>
> h1
>
> Definir tema  

Por padrão, o Checkout Bricks é instanciado/renderizado com o tema padrão. Contudo, é possível selecionar outro tema definindo o parâmetro "theme" ao instanciar a classe `Bricks`.

```Javascript
const bricks = mp.bricks({ theme: 'dark' });
```

Se você definir o tema na **instanciação da classe Bricks**, a alteração do tema será aplicada em todos os Bricks que porventura forem instanciados. Por outro lado, se o tema for definido na **renderização do Brick**, as mudanças no tema serão refletidas somente no Brick que estiver sendo criado conforme o `JavaScript` mostrado abaixo.

[[[
```Javascript
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
```react-jsx
const customization = {
 visual: {
   style: {
     theme: 'dark' | 'default' | 'bootstrap' | 'flat'
   }
 }
};
```
]]]