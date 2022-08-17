# Vigência da preferência

Vigência é o período de validade definido para determinada preferência de pagamento. Ao definir a vigência da preferência, você escolhe uma data para que ela comece a valer e a data de expiração definindo um limite máximo para pagamento. 


1. Envie um POST com os parâmetros `expires`, `expiration_date_from` e `expiration_date_to`  ao endpoint [/checkout/preferences](/developers/pt/reference/preferences/_checkout_preferences/post).
2. Em "expires", insira `true`.
3. Em "expiration_date_from", insira a data e horário do início da vigência. O valor deve seguir o formato ISO 8601: yyyy-MM-dd'T'HH:mm:sszas.
4. Em "expiration_date_to", insira a data e horário do fim da vigência. O valor deve seguir o formato ISO 8601: yyyy-MM-dd'T'HH:mm:sszas
5. Execute a requisição.


```json
"expires": true,
"expiration_date_from": "2017-02-01T12:00:00.000-04:00",
"expiration_date_to": "2017-02-28T12:00:00.000-04:00"
```

> NOTE
>
> Importante
>
> A data deve seguir o formato `ISO 8601: yyyy-MM-dd'T'HH:mm:ssz`.
