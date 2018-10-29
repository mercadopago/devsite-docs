# SDK Mercado Pago para Ruby


* [Instalación](#bookmark_instalación)
* [Web Checkout](#bookmark_web_checkout)
* [Customized checkout](#bookmark_checkout_custom)
* [Generic methods](#bookmark_métodos_genéricos)


## Instalación

```gem install mercadopago-sdk```


## Web Checkout

### Configura tus credenciales


Obtén tu **CLIENT_ID** y **CLIENT_SECRET** en los siguientes links:

* Argentina: [https://www.mercadopago.com/mla/herramientas/aplicaciones](https://www.mercadopago.com/mla/herramientas/aplicaciones)
* Brazil: [https://www.mercadopago.com/mlb/ferramentas/aplicacoes](https://www.mercadopago.com/mlb/ferramentas/aplicacoes)
* México: [https://www.mercadopago.com/mlm/herramientas/aplicaciones](https://www.mercadopago.com/mlm/herramientas/aplicaciones)
* Colombia: [https://www.mercadopago.com/mco/herramientas/aplicaciones](https://www.mercadopago.com/mco/herramientas/aplicaciones)
* Chile: [https://www.mercadopago.com/mlc/herramientas/aplicaciones](https://www.mercadopago.com/mlc/herramientas/aplicaciones)
* Perú: [https://www.mercadopago.com/mpe/herramientas/aplicaciones](https://www.mercadopago.com/mpe/herramientas/aplicaciones)
* Uruguay: [https://www.mercadopago.com/mlu/herramientas/aplicaciones](https://www.mercadopago.com/mlu/herramientas/aplicaciones)

```ruby
require 'mercadopago.rb'

$mp = MercadoPago.new('CLIENT_ID', 'CLIENT_SECRET')
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

## Checkout custom

### Configura tus credenciales

Obtén tu **ACCESS_TOKEN** en los siguientes links:

* Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
* Brasil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
* México: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
* Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
* Perú: [https://www.mercadopago.com/mpe/account/credentials](https://www.mercadopago.com/mpe/account/credentials)
* Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
* Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)


```ruby
require 'mercadopago.rb'

$mp = MercadoPago.new('ACCESS_TOKEN')
```

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

> Para más información visita la sección [API reference](/reference).

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
