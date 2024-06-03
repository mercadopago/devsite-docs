# Integrar o Device ID

O **Device ID** é uma informação importante para garantir uma melhor segurança e, consequentemente, uma melhor taxa de aprovação de pagamentos. Ele representa um **identificador único para cada dispositivo do comprador** no momento da compra.

Caso um comprador frequente faça uma compra a partir de um dispositivo diferente do habitual, isso pode representar um comportamento atípico. A partir do ID do dispositivo, conseguimos refinar a avaliação e impedir a rejeição de pagamentos legítimos.


## Obter e enviar o Device ID

Você pode adicionar o código de segurança do Mercado Pago substituindo o valor `view` pelo nome da seção do seu site na qual deseja adicioná-lo.


> NOTE
>
> Importante
>
> Caso não tenha um valor disponível para a seção, você pode deixá-la vazia.

## Utilizar informações do Device ID na web

Para usar o Device ID na web e evitar possíveis compras fraudulentas, é preciso seguir os passos abaixo:

### 1. Adicione o script de segurança do Mercado Pago
Para implementar a criação do device ID em seu site, adicione o seguinte código na sua página de Checkout:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

### 2.Obtendo o Device ID
Uma vez que você tenha adicionado o código de segurança do Mercado Pago em seu site, uma variável global de javascript é criada automaticamente com o nome `MP_DEVICE_SESSION_ID`, cujo valor é o Device ID.

Se você preferir atribuí-lo a outra variável, indique o nome adicionando o atributo output ao script de segurança, como no exemplo a seguir:

```html
  <script src="https://www.mercadopago.com/v2/security.js" view="checkout" output="deviceId"></script>
```

Você também pode **criar sua própria variável**. Para isso, adicione uma tag HTML no seu site com o identificador `id="deviceID"`, como no exemplo abaixo.

```html
  <input type="hidden" id="deviceId">
```

### 3. Utilizando o Device ID
Uma vez que você tenha o valor de Device ID, é preciso que você **o envie aos nossos servidores** ao criar um pagamento. Para isso, basta acrescentar o seguinte **cabeçalho (*header*)** à requisição:

```http
X-meli-session-id: device_id
```

> WARNING
> 
> Atenção
>
> Lembre-se de substituir `device_id` pelo nome da variável que contém o seu valor de Device ID.