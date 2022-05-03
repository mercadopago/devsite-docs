## Criar preferência

É possível criar uma preferência utilizando o SDK abaixo. Para detalhamento dos parâmetros de requisição, verifique a API [Criar preferência](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/preferences/_checkout_preferences/post).

----[mla, mlb, mlu, mpe, mlm]----

[[[
```dotnet
// SDK do Mercado Pago
using MercadoPago.Config;
using MercadoPago.Client.Preference;
using MercadoPago.Resource.Preference;

// Configure as credenciais
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";

// Crie o objeto de request da preferência
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75.56m,
        },
    },
};

// Crie a preferência usando o client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
]]]

------------

----[mlc, mco]----

[[[
```dotnet
// SDK do Mercado Pago
using MercadoPago.Config;
using MercadoPago.Client.Preference;
using MercadoPago.Resource.Preference;

// Configure as credenciais
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";

// Crie o objeto de request da preferência
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Title = "Meu produto",
            Quantity = 1,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 75m,
        },
    },
};

// Crie a preferência usando o client
var client = new PreferenceClient();
Preference preference = await client.CreateAsync(request);
```
]]]

------------