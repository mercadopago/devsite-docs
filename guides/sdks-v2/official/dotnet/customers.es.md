## Crear cliente

Es posible crear clientes utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Crear Cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers/post).

[[[
```dotnet

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";

var customerRequest = new CustomerRequest
{
    Email = "test_payer_12345@testuser.com",
};
var customerClient = new CustomerClient();
Customer customer = await customerClient.CreateAsync(customerRequest);

var cardRequest = new CustomerCardCreateRequest
{
    Token = "9b2d63e00d66a8c721607214cedaecda"
};
CustomerCard card = await customerClient.CreateCardAsync(customer.Id, cardRequest);

```
]]]

## Buscar clientes

Es posible buscar clientes utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Buscar en Clientes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers_search/get).

[[[
```dotnet

var searchRequest = new SearchRequest
{
    Filters = new Dictionary<string, object>
    {
        ["email"] = "test_payer_12345@testuser.com",
    },
};
ResultsResourcesPage<Customer> results = await customerClient.SearchAsync(searchRequest);
IList<Customer> customers = results.Results;

```
]]]

## Actualizar cliente

Es posible actualizar clientes utilizando lo SDK a continuación. Para obtener detalles sobre los parámetros de solicitud, consulte la API [Actualizar Cliente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference/customers/_customers_id/put).

[[[
```dotnet

MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
var phoneRequest = new PhoneRequest
{
  AreaCode = "[FAKER][PHONE_NUMBER][AREA_CODE]",
  Number = "001234567"
};

var identificationRequest = new IdentificationRequest
{
  Type = "[FAKER][IDENTIFICATION][TYPE]",
  Number = "12341234"
};

var addressRequest = new AddressRequest
{
  ZipCode = "[FAKER][ADDRESS][ZIP_CODE]",
  StreetName = "[FAKER][ADDRESS][STREET_NAME]",
  StreetNumber = "2"
};

var customerRequest = new CustomerRequest
{
    Email = "test_payer_12345@testuser.com",
    FirstName = "john",
    LastName = "wagner",
    DefaultAddress = "home",
    Description = "Informações do cliente",
    DefaultCard = "None",
    Phone = phoneRequest,
    Identification = identificationRequest,
    Address = addressRequest

};
var customerClient = new CustomerClient();
Customer customer = await customerClient.Update(customerRequest);

```
]]]