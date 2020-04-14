# Mercado Pago SDK module for Payments integration

* [Install](#install)
* [Basic checkout](#basic-checkout)
* [Customized checkout](#customized-checkout)
* [Generic methods](#generic-methods)

<a name="install"></a>
## Install

```
gem install mercadopago-sdk
```

<a name="basic-checkout"></a>

## Basic checkout

### Configure your credentials

* Get your **Access token** in the [Credentials section]([FAKER][CREDENTIALS][URL]).

```ruby
require 'mercadopago.rb'

$mp = MercadoPago.new('ACCESS_TOKEN')
```

### Preferences

#### Get an existent Checkout preference

```ruby
preference = $mp.preference.get('PREFERENCE_ID')

puts $preferenceResult
```

#### Create a Checkout preference

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

#### Update an existent Checkout preference

```ruby
preferenceDataToUpdate = Hash["items" => Array(Array["title"=>"testUpdated", "quantity"=>1, "unit_price"=>2])]

preferenceUpdate = $mp.preference.update("PREFERENCE_ID", preferenceDataToUpdate)

puts preferenceUpdate
```

### Payments/Collections

#### Search for payments

```ruby    
filters = Array["id"=>null, "site_id"=>null, "external_reference"=>null]

searchResult = $mp.payment.search(filters)

puts searchResult
```

#### Get payment data

```ruby
paymentInfo = $mp.payment.get("ID")

puts paymentInfo
```

### Cancel (only for pending payments)

```ruby
result = $mp.payment.cancel("ID");

// Show result
puts result
```

### Refund (only for accredited payments)

```ruby
result = $mp.payment.get_refund("ID");

// Show result
puts result
```

<a name="custom-checkout"></a>

### Customized checkout

### Configure your credentials

* Get your **Access token** in the [Credentials section]([FAKER][CREDENTIALS][URL]).

```ruby
require 'mercadopago.rb'

$mp = MercadoPago.new('ACCESS_TOKEN')
```

> Find all the information about your credentials in our. [FAQs](https://www.mercadopago.com.ar/developers/en/guides/faqs/credentials/). 

### Create payment

```ruby
$mp.payment.create(payment_data);
```

### Create customer

```ruby
$mp.customer.create(Hash["email" => "email@test.com"]);
```

### Get customer

```ruby
$mp.customer.get(CUSTOMER_ID);
```

* View more Custom checkout related APIs in Developers Site
    * Argentina: [https://www.mercadopago.com.ar/developers](https://www.mercadopago.com.ar/developers)
    * Brazil: [https://www.mercadopago.com.br/developers](https://www.mercadopago.com.br/developers)
    * Mexico: [https://www.mercadopago.com.mx/developers](https://www.mercadopago.com.mx/developers)
    * Colombia: [https://www.mercadopago.com.co/developers](https://www.mercadopago.com.co/developers)

<a name="generic-methods"></a>

### Generic methods

You can access any other resource from the Mercado Pago API using the generic methods:

```ruby
// Get a resource, with optional URL params. Also you can disable authentication for public APIs
$mp.genericcall.get ("/resource/uri", [params], [authenticate=true])

// Create a resource with "data" and optional URL params.
$mp.genericcall.post ("/resource/uri", data, [params])

// Update a resource with "data" and optional URL params.
$mp.genericcall.put ("/resource/uri", data, [params])

// Delete a resource with optional URL params.
$mp.genericcall.delete ("/resource/uri", [params])
```

 For example, if you want to get the Sites list (no params and no authentication):

```ruby
$sites = $mp.genericcall.get ("/sites", null, false)

puts $sites
```
