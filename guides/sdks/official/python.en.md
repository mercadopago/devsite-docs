---
  indexable: false
---
# Mercado Pago SDK module for Payments integration


* [Install](#bookmark_install)
* [Checkout Pro](#bookmark_checkout_pro)
* [Customized checkout](#bookmark_customized_checkout)
* [Generic methods](#bookmark_generic_methods)

### Supported Python Versions:

This SDK supports Python versions 2.x and 3.x

## Install


On Python 3.x

``pip3 install mercadopago``

## Checkout Pro


Configure your credentials


- Get your **ACCESS_TOKEN** in the [Credentials section]([FAKER][CREDENTIALS][URL])


``` python
    import mercadopago

    sdk = mercadopago.SDK("ACCESS_TOKEN")
```

### Preferences


Get an existent Checkout preference



``` python
    def get(self, preference_id, request_options=None):
        preference = self.sdk.preference().get("PREFERENCE_ID")

        return preference
```

Create a Checkout preference

``` python
    def create(self, preference_object, request_options=None):
        preference_object = {
            "items": [
                {
                    "title": "Test",
                    "quantity": 1,
                    "currency_id": "USD",
                    "unit_price": 10.4
                }
            ]
        }

        preference = self.sdk.preference().create(data=preference_object)

        return preference
```
Update an existent Checkout preference


``` python
    def update(self, preference_id, preference_object, request_options=None):
        preference_object = {
            "items": [
                {
                    "title": "Test Modified",
                    "quantity": 1,
                    "currency_id": "USD",
                    "unit_price": 20.4
                }
            ]
        }

        preference = self.sdk.preference().update(data=preference_object)

        return preference
```
### Payments/Collections


Search for payments
``` python
    def search(self, filters, request_options=None):
        filters = {
            "id": None,
            "external_reference": None
        }

        payment_search = self.sdk.payment().search(filters=filters)

        return payment_search
```

Get payment data

``` python
    import mercadopago
    
    def get(self, payment_id, request_options=None):
        sdk = mercadopago.SDK("ACCESS_TOKEN")

        payment_info = self.sdk.payment().get("payment_id")

        if payment_info["status"] == 200:
            return payment_info
        else:
            return None
```

Cancel (only for pending payments)

``` python
    def cancel(self, advanced_payment_id, request_options=None):
        payment_cancel = self.sdk.advanced_payment().cancel("advanced_payment_id")

        # Show result
        return payment_cancel
```

Refund (only for accredited payments)

``` python
    def create(self, payment_id, refund_object, request_options=None):
        payment_refund = self.sdk.refund("payment_id")

        # Show result
        return payment_refund
```

## Customized checkout


Configure your credentials

* Get your **ACCESS_TOKEN** in the [Credentials section]([FAKER][CREDENTIALS][URL])


``` python
    import mercadopago

    sdk = mercadopago.SDK("ACCESS_TOKEN")
```


Create payment

    self.sdk._post ("/v1/payments", data=payment_object, request_options=request_options)

Create customer


    customer_object = {
        "email": "email@test.com"
    }

    self.sdk._post ("/v1/customers", data=customer_object, request_options=request_options)

Get customer


    self.sdk._get ("/v1/customers/" + str(customer_id), request_options=request_options)

* View more Custom checkout related APIs in [API reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference)


### Running tests


On Python 3.x

``python3 -m unittest discover tests/``
