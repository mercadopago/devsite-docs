# Mercado Pago SDK para Ruby

* [Instalação](#install)
* [Checkout básico](#basic-checkout)
* [Checkout customizado](#custom-checkout)
* [Métodos genéricos](#generic-methods)

<a name="install"></a>
## Instalação

```gem install mercadopago-sdk```

<a name="basic-checkout"></a>
## Checkout básico

### Configure suas credenciais

* Obtenha seu **CLIENT_ID** e **CLIENT_SECRET** no seguinte endereço:
    * Argentina: [https://www.mercadopago.com/mla/herramientas/aplicaciones](https://www.mercadopago.com/mla/herramientas/aplicaciones)
    * Brazil: [https://www.mercadopago.com/mlb/ferramentas/aplicacoes](https://www.mercadopago.com/mlb/ferramentas/aplicacoes)
    * México: [https://www.mercadopago.com/mlm/herramientas/aplicaciones](https://www.mercadopago.com/mlm/herramientas/aplicaciones)
    * Colombia: [https://www.mercadopago.com/mco/herramientas/aplicaciones](https://www.mercadopago.com/mco/herramientas/aplicaciones)
    * Chile: [https://www.mercadopago.com/mlc/herramientas/aplicaciones](https://www.mercadopago.com/mlc/herramientas/aplicaciones)

```ruby
require 'mercadopago.rb'

$mp = MercadoPago.new('CLIENT_ID', 'CLIENT_SECRET')
```

### Preferências

#### Obtenha uma preferência de Checkout existente

```ruby
preference = $mp.get_preference('PREFERENCE_ID')

puts $preferenceResult
```

#### Crie uma preferência de Checkout

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

#### Atualize uma preferência de Checkout existente

```ruby
preferenceDataToUpdate = Hash["items" => Array(Array["title"=>"testUpdated", "quantity"=>1, "unit_price"=>2])]

preferenceUpdate = $mp.update_preference("PREFERENCE_ID", preferenceDataToUpdate)

puts preferenceUpdate
```

### Payments/Collections

#### Buscar pagamentos

```ruby    
filters = Array["id"=>null, "site_id"=>null, "external_reference"=>null]

searchResult = $mp.search_payment(filters)

puts searchResult
```

#### Obter dados de pagamentos

```ruby
paymentInfo = $mp.get_payment("ID")

puts paymentInfo
```

### Cancelar (apenas para pagamentos pendentes)

```ruby
result = $mp.cancel_payment("ID");

// Show result
puts result
```

### Restituir (apenas para pagamentos creditados)

```ruby
result = $mp.refund_payment("ID");

// Mostrar resultado
puts result
```

<a name="custom-checkout"></a>
## Checkout customizado

### Configure your credentials

* Obtenha seu **ACCESS_TOKEN** no seguinte endereço:
    * Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
    * Brazil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
    * Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
    * Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)

```ruby
require 'mercadopago.rb'

$mp = MercadoPago.new('ACCESS_TOKEN')
```

### Criar pagamentos

```ruby
$mp.post ("/v1/payments", payment_data);
```

### Criar clientes

```ruby
$mp.post ("/v1/customers", Hash["email" => "email@test.com"]);
```

### Obter clientes

```ruby
$mp.get ("/v1/customers/CUSTOMER_ID");
```

* Veja mais APIs relacionadas a Checkout Custom em Developers Site
    * Argentina: [https://www.mercadopago.com.ar/developers](https://www.mercadopago.com.ar/developers)
    * Brazil: [https://www.mercadopago.com.br/developers](https://www.mercadopago.com.br/developers)
    * Mexico: [https://www.mercadopago.com.mx/developers](https://www.mercadopago.com.mx/developers)
    * Colombia: [https://www.mercadopago.com.co/developers](https://www.mercadopago.com.co/developers)

<a name="generic-methods"></a>
## Métodos genéricos
Você pode acessar qualquer recurso da API do Mercado Pago usando métodos genéricos:

```ruby
// Obtenha um recurso com parâmetros de URL opcionais. Além disso, você pode desativar a autenticação de APIs públicas
$mp.get ("/resource/uri", [params], [authenticate=true])

// Crie um recurso com "data" e parâmetros opcionais de URL.
$mp.post ("/resource/uri", data, [params])

// Atualize um recurso com "data" e parâmetros opcionais de URL.
$mp.put ("/resource/uri", data, [params])

// Delete um recurso com parâmetros opcionais de URL.
$mp.delete ("/resource/uri", [params])
```

 Por exemplo, se você deseja obter a lista de sites (sem parâmetros e sem autenticação):

```ruby
$sites = $mp.get ("/sites", null, false)

puts $sites
```