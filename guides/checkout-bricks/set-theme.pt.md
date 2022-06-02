> CLIENT_SIDE
>
> h1
>
> Definir tema 

Por padrão, o Card Payment Brick é instanciado/renderizado com o tema padrão. Contudo, é possível selecionar outro tema definindo o parâmetro "theme" ao instanciar a classe `bricks`.

```javascript
const bricks = mp.bricks({ theme: 'dark' });
```

Se você definir o tema na **instanciação da classe bricks**, a alteração do tema será aplicada em todos os bricks que porventura forem instanciados. Por outro lado, se o tema for definido na **renderização do brick**, as mudanças no tema serão refletidas somente no brick que estiver sendo criado conforme o Javascript mostrado abaixo.

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

> PREV_STEP_CARD_PT
>
> Exemplo de código
>
> Para facilitar e otimizar o seu processo de integração, veja um exemplo completo integração com o Checkout Bricks.
>
> [Exemplo de código](/developers/pt/docs/checkout-bricks/integration/code-example)

> NEXT_STEP_CARD_PT
>
> Alterar variáveis CSS 
>
> Caso deseje, saiba como alterar as variáveis CSS do Card Payment Brick.
>
> [Alterar variáveis CSS](/developers/pt/docs/checkout-bricks/additional-customization/modify-css-variables)