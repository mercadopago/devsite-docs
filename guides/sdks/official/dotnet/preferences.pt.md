## Criar preferência

É possível criar uma preferência utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post).


[[[
```dotnet
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Id = "1234",
            Title = "Blue shirt",
            Quantity = 10,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = [FAKER][COMMERCE][PRICE]m,
        },
    },
    Payer = new PreferencePayerRequest
    {
        Email = "john@yourdomain.com",
    },
};
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);

```
]]]