# Mercado Pago SDK module for Payments integration


* [Install](#bookmark_install)
* [Checkout Mercado Pago](#bookmark_checkout_mercado_pago)
* [Customized checkout](#bookmark_customized_checkout)
* [Generic methods](#bookmark_generic_methods)

### Supported Python Versions:

This SDK supports Python versions 2.x and 3.x

## Install


On Python 2.x

``pip install mercadopago``

On Python 3.x

``pip3 install mercadopago``

## Checkout Mercado Pago


Configure your credentials


- Get your **CLIENT_ID** and **CLIENT_SECRET** [in the following link]([FAKER][CREDENTIALS][URL]).


``` python
    import mercadopago
    import json

    mp = mercadopago.MP("CLIENT_ID", "CLIENT_SECRET")
```

### Preferences


Get an existent Checkout preference



``` python
    def index(req, **kwargs):
        preferenceResult = mp.preference.get("PREFERENCE_ID")

        return json.dumps(preferenceResult, indent=4)
```

Create a Checkout preference

``` python
    def index(req, **kwargs):
        preference = {
            "items": [
                {
                    "title": "Test",
                    "quantity": 1,
                    "currency_id": "USD",
                    "unit_price": 10.4
                }
            ]
        }

        preferenceResult = mp.preference.create(preference)

        return json.dumps(preferenceResult, indent=4)
```
Update an existent Checkout preference


``` python
    def index(req, **kwargs):
        preference = {
                "items": [
                    {
                        "title": "Test Modified",
                        "quantity": 1,
                        "currency_id": "USD",
                        "unit_price": 20.4
                    }
                ]
            }

        preferenceResult = mp.preference.update(id, preference)

        return json.dumps(preferenceResult, indent=4)
```
### Payments/Collections


Search for payments
``` python
    def index(req, **kwargs):
        filters = {
            "id": None,
            "external_reference": None
        }

        searchResult = mp.payment.search(filters)

        return json.dumps(searchResult, indent=4)
```

Get payment data

``` python
    import mercadopago
    import json

    def index(req, **kwargs):
        mp = mercadopago.MP("CLIENT_ID", "CLIENT_SECRET")
        paymentInfo = mp.payment.get(kwargs["id"])

        if paymentInfo["status"] == 200:
            return json.dumps(paymentInfo, indent=4)
        else:
            return None
```

Cancel (only for pending payments)

``` python
    def index(req, **kwargs):
        result = mp.payment.cancel("ID")

        // Show result
        return json.dumps(result, indent=4)
```

Refund (only for accredited payments)

``` python
    def index(req, **kwargs):
        result = mp.payment.get_refund("ID")

        // Show result
        return json.dumps(result, indent=4)
```

## Customized checkout


Configure your credentials

* Get your **ACCESS_TOKEN** in the [Credentials section]([FAKER][CREDENTIALS][URL])


``` python
    import mercadopago
    import json

    mp = mercadopago.MP("ACCESS_TOKEN")
```


Create payment

    mp.payment.create (payment_data)

Create customer


    mp.customer.create ({"email": "email@test.com"})

Get customer


    mp.customer.get (CUSTOMER_ID)

* View more Custom checkout related APIs in Developers Site
    * Argentina: `https://www.mercadopago.com.ar/developers <https://www.mercadopago.com.ar/developers>`_
    * Brazil: `https://www.mercadopago.com.br/developers <https://www.mercadopago.com.br/developers>`_
    * Mexico: `https://www.mercadopago.com.mx/developers <https://www.mercadopago.com.mx/developers>`_
    * Colombia: `https://www.mercadopago.com.co/developers <https://www.mercadopago.com.co/developers>`_

## Generic methods


You can access any other resource from the MercadoPago API using the generic methods:



    // Get a resource, with optional URL params. Also you can disable authentication for public APIs
    mp.genericcall.get ("/resource/uri", [params], [authenticate=true]);
    
    // Create a resource with "data" and optional URL params.
    mp.genericcall.post ("/resource/uri", data, [params]);
    
    // Update a resource with "data" and optional URL params.
    mp.genericcall.put ("/resource/uri", data, [params]);
    
    // Delete a resource with optional URL params.
    mp.genericcall.delete ("/resource/uri", [params]);

For example, if you want to get the Sites list (no params and no authentication):


    result = mp.genericcall.get ("/sites", null, false);
    
    print (json.dumps(result, indent=4))

### Running tests


On Python 2.x

``python setup.py test``

On Python 3.x

``python3 setup.py test``
