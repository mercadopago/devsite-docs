# SDK Mercado Pago para Ruby


* [Instalación](#bookmark_instalación)
* [Checkout Pro](#bookmark_checkout_de_mercado_pago)
* [Checkout personalizado](#bookmark_checkout_personalizado)
* [Métodos genéricos](#bookmark_métodos_genéricos)


## Instalación

```gem install mercadopago-sdk```


## Checkout Pro

### Configura tus credenciales


Obtén tu **Access token** en la [sección de Credenciales]([FAKER][CREDENTIALS][URL]).


```ruby
require 'mercadopago.rb'

$mp = MercadoPago.new('ACCESS_TOKEN')
```

### Preferencias

#### Obtén una preferencia de pago existente

```ruby
preference = $mp.get_preference('PREFERENCE_ID')

puts $preferenceResult
```

#### Crea una preferencia de pago

```ruby

preference_data = {
            "items": [
                {
                    "title": "testCreate",
                    "quantity": 1,
                    "unit_price": 10.2,
                    "currency_id": "[FAKER][CURRENCY][ACRONYM]"
                }
            ]
        }
preference = $mp.create_preference(preference_data)

puts preference
```

#### Actualizar una preferencia de pago existente:

```ruby
preferenceDataToUpdate = Hash["items" => Array(Array["title"=>"testUpdated", "quantity"=>1, "unit_price"=>2])]

preferenceUpdate = $mp.update_preference("PREFERENCE_ID", preferenceDataToUpdate)

puts preferenceUpdate
```

### Payments/Collections

#### Buscar pagos:

```ruby    
filters = Array["id"=>null, "site_id"=>null, "external_reference"=>null]

searchResult = $mp.search_payment(filters)

puts searchResult
```

#### Obtener la información de un pago:

```ruby
paymentInfo = $mp.get_payment("ID")

puts paymentInfo
```

#### Cancelar (Sólo para pagos pendientes)

```ruby
result = $mp.cancel_payment("ID");

// Show result
puts result
```

### Refund (only for accredited payments)

```ruby
result = $mp.refund_payment("ID");

// Show result
puts result
```

## Checkout personalizado

### Configura tus credenciales

Obtén tu **Access token** en la sección de [Credenciales]([FAKER][CREDENTIALS][URL]).


```ruby
require 'mercadopago.rb'

$mp = MercadoPago.new('ACCESS_TOKEN')
```

> Encuentra toda la información sobre tus credenciales en nuestras [preguntas frecuentes](https://www.mercadopago.com.ar/developers/es/guides/faqs/credentials/). 


### Crear un pago

```ruby
$mp.post ("/v1/payments", payment_data);
```

### Crear un customer

```ruby
$mp.post ("/v1/customers", Hash["email" => "email@test.com"]);
```

### Obtener un customer

```ruby
$mp.get ("/v1/customers/CUSTOMER_ID");
```

> Para más información visita la sección [API reference]https://www.mercadopago.com.ar/developers/es/reference).

## Métodos genéricos

Puedes acceder a cualquier otro recurso de la API de Mercado Pago utilizando métodos genéricos:

```ruby
// Obtener un recurso con URL params opcionales. También puedes deshabilitar la autenticación para APIs públicas.
$mp.get ("/resource/uri", [params], [authenticate=true])

// Crear un recurso con "data"y URL params opcionales.
$mp.post ("/resource/uri", data, [params])

// Actualizar un recurso con "data"y URL params opcionales.
$mp.put ("/resource/uri", data, [params])

// Eliminar un recurso con "data" y URL params opcionales.
$mp.delete ("/resource/uri", [params])
```

Por ejemplo, si quieres obtener la lista de sitios disponibles (sin parámetros ni autenticación):

```ruby
$sites = $mp.get ("/sites", null, false)

puts $sites
```
