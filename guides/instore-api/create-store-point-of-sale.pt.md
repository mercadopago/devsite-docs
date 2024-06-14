# Criar a loja e a caixa

Para criar uma loja, você deve primeiro fazer uma chamada POST para ao endpoint [Criar loja](/developers/pt/reference/stores/_users_user_id_stores/post).

Lembre-se de substituir os valores `user_id` e `YOUR_ACCESS_TOKEN` pelos obtidos ao criar sua aplicação. Além disso, você precisa modificar as variáveis `name`, `business_hours` e `location` de acordo com o negócio que está criando.

> NOTE
>
> NOTA
>
> A solicitação está configurada com informações para o site da Argentina. Lembre-se de modificar essa configuração de acordo com o país de integração.

Em seguida, você precisará criar uma caixa. Para isso, faça uma chamada POST para ao endpoint [Criar caixa](/developers/pt/reference/pos/_pos/post) .

Observe que você deve primeiro executar a solicitação de criação da loja para que a solicitação de criação da caixa funcione corretamente.

> WARNING
>
> Importante
>
> InStore API é baseada no `external_id` enviado durante a criação da caixa na chamada POST. Lembre-se de que é uma identificação única para a caixa criada e para o usuário. Se você precisar criar mais caixas, deve garantir que todas tenham um `external_id` diferente.
