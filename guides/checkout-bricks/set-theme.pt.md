## Definir tema

Por padrão, o Card Payment Brick é instanciado/renderizado com o tema padrão. Contudo, é possível selecionar outro tema definindo o parâmetro "theme" ao instanciar/renderizar o brick.


[[[
```javascript
const bricks = mp.bricks({theme: 'dark'});
```
]]]

Se você definir o tema na **instanciação do brick**, a alteração do tema será aplicada em todos os bricks que porventura forem instanciados. Por outro lado, se o tema for definido na **renderização**, as mudanças no tema serão refletidas somente no brick que estiver sendo criado**. 


