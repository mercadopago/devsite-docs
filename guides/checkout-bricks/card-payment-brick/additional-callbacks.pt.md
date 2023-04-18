# Callbacks adicionais

Ao inicializar o Brick é possível configurar callbacks adicionais, que fornecem ao integrador mais informação durante a execução do Brick.

## onBinChange

O callback `onBinChange` é utilizado para obter o **bin** do cartão sendo inserido no Brick. Esse callback é chamado em tempo real, sempre que o bin do cartão é atualizado.

[[[
```Javascript
const settings = {
   ...,
   callbacks: {
       ...
       onBinChange: (bin) => {
           // callback chamado sempre que o bin do cartão é alterado
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
> Atenção
>
> O bin do cartão retornado pelo callback `onBinChange` é o mesmo que é inserido pelo usuário no campo número do cartão, ou seja, para cada alteração que o usuário fizer nesse campo, um novo evento será disparado pelo callback. Portanto, somente considere o bin válido e confiável para ser utilizado após o evento de submit ser disparado pelo callback `onSubmit`.