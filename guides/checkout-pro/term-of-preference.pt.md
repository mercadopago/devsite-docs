## Vigência da preferência

Vigência é o período de validade definido para determinada preferência de pagamento. Ao definir a vigência da preferência, você escolhe uma data para que ela comece a valer e a data de expiração, dessa forma, ao expirar o período escolhido, a preferência perderá a validade e não poderá ser utilizada. 

1. Envie um POST com os parâmetros `expires`, `expiration_date_from` e `expiration_date_to`  ao endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post).
2. Em "expires", insira `true`.
3. Em "expiration_date_from", insira a data e horário do início da vigência. O valor deve seguir o formato ISO 8601: yyyy-MM-dd'T'HH:mm:sszas.
4. Em "expiration_date_to", insira a data e horário do fim da vigência. O valor deve seguir o formato ISO 8601: yyyy-MM-dd'T'HH:mm:sszas
5. Execute a requisição.
