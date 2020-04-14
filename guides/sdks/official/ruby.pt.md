# Mercado Pago SDK para Ruby

* [Instalação](#install)
* [Checkout básico](#basic-checkout)
* [Checkout customizado](#checkout-customizado)
* [Métodos genéricos](#generic-methods)

<a name="install"></a>
## Instalação

```gem install mercadopago-sdk```

<a name="basic-checkout"></a>
## Checkout básico

### Configure suas credenciais

* Obtenha seu **Access token** na [seção "Credenciais"]([FAKER][CREDENTIALS][URL]).

```ruby
require 'mercadopago.rb'

$mp = MercadoPago.new('ACCESS_TOKEN')
```

### Preferências

#### Obtenha uma preferência de Checkout existente

```ruby
preference = $mp.preference.get('PREFERENCE_ID')

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
preference = $mp.preference.create(preference_data)

puts preference
```

#### Atualize uma preferência de Checkout existente

```ruby
preferenceDataToUpdate = Hash["items" => Array(Array["title"=>"testUpdated", "quantity"=>1, "unit_price"=>2])]

preferenceUpdate = $mp.preference.update("PREFERENCE_ID", preferenceDataToUpdate)

puts preferenceUpdate
```

### Payments/Collections

#### Buscar pagamentos

```ruby    
filters = Array["id"=>null, "site_id"=>null, "external_reference"=>null]

searchResult = $mp.payment.search(filters)

puts searchResult
```

#### Obter dados de pagamentos

```ruby
paymentInfo = $mp.payment.get("ID")

puts paymentInfo
```

### Cancelar (apenas para pagamentos pendentes)

```ruby
result = $mp.payment.cancel("ID");

// Show result
puts result
```

### Restituir (apenas para pagamentos creditados)

```ruby
result = $mp.payment.get_refund("ID");

// Mostrar resultado
puts result
```

<a name="custom-checkout"></a>
## Checkout customizado

### Configure suas credenciais

* Obtenha seu **Access token** na seção [Credenciais]([FAKER][CREDENTIALS][URL]).

```ruby
require 'mercadopago.rb'

$mp = MercadoPago.new('ACCESS_TOKEN')
```

> Encontre toda a informação sobre suas credenciais em nossas [perguntas frequentes](https://www.mercadopago.com.br/developers/pt/guides/faqs/credentials/).

### Criar pagamentos

```ruby
$mp.payment.create (payment_data);
```

### Criar clientes

```ruby
$mp.customer.create (Hash["email" => "email@test.com"]);
```

### Obter clientes

```ruby
$mp.customer.get (CUSTOMER_ID);
```

* Veja mais APIs relacionadas a Checkout Custom em Developers Site
    * Argentina: [https://www.mercadopago.com.ar/developers](https://www.mercadopago.com.ar/developers)
    * Brazil: [https://www.mercadopago.com.br/developers](https://www.mercadopago.com.br/developers)
    * Mexico: [https://www.mercadopago.com.mx/developers](https://www.mercadopago.com.mx/developers)
    * Colombia: [https://www.mercadopago.com.co/developers](https://www.mercadopago.com.co/developers)

<a name="generic-methods"></a>

### Métodos genéricos

Você pode acessar qualquer recurso da API do Mercado Pago usando métodos genéricos:

```ruby
// Obtenha um recurso com parâmetros de URL opcionais. Além disso, você pode desativar a autenticação de APIs públicas
$mp.genericcall.get ("/resource/uri", [params], [authenticate=true])

// Crie um recurso com "data" e parâmetros opcionais de URL.
$mp.genericcall.post ("/resource/uri", data, [params])

// Atualize um recurso com "data" e parâmetros opcionais de URL.
$mp.genericcall.put ("/resource/uri", data, [params])

// Delete um recurso com parâmetros opcionais de URL.
$mp.genericcall.delete ("/resource/uri", [params])
```

 Por exemplo, se você deseja obter a lista de sites (sem parâmetros e sem autenticação):

```ruby
$sites = $mp.genericcall.get ("/sites", null, false)

puts $sites
```
