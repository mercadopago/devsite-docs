---
  indexable: false
---
# Mercado Pago SDK module for Payments integration

> NOTE
>
> Important
>
> This documentation is for internal team use only,  as it has been deprecated or is an exclusive product. For further details, talk to the sales or integrations team.

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


```python
    import mercadopago

    sdk = mercadopago.SDK("ACCESS_TOKEN")
```

### Preferences


Get an existent Checkout preference



```python
    def index(req, **kwargs):
        preference_response = sdk.preference().get("PREFERENCE_ID")

        return json.dumps(preference_response["response"], indent=4)
```

Create a Checkout preference

```python
    def index(req, **kwargs):
        preference_data = {
            "items": [
                {
                    "title": "Test",
                    "quantity": 1,
                    "currency_id": "USD",
                    "unit_price": 10.4
                }
            ]
        }

        preference_response = sdk.preference().create(preference_data)

        return json.dumps(preference_response["response"], indent=4)
```
Update an existent Checkout preference


```python
    def index(req, **kwargs):
        preference_data = {
            "items": [
                {
                    "title": "Test Modified",
                    "quantity": 1,
                    "currency_id": "USD",
                    "unit_price": 20.4
                }
            ]
        }

        preference = sdk.preference().update(id, preference_data)

        return json.dumps(preference_response["response"], indent=4)
```
### Payments/Collections


Search for payments
```python
    def index(req, **kwargs):
        filters = {
            "id": None,
            "external_reference": None
        }

        payments_search = sdk.payment().search(filters=filters)

        return json.dumps(payments_search["response"], indent=4)
```

Get payment data

```python
    import mercadopago
    
    def index(req, **kwargs):
        sdk = mercadopago.SDK("ACCESS_TOKEN")

        payment_info = sdk.payment().get(kwargs["id"])

        if payment_info["status"] == 200:
            return json.dumps(payment_info["response"], indent=4)
        else:
            return None
```

Cancel (only for pending payments)

```python
    def index(req, **kwargs):
        payment_cancel = sdk.payment().update(kwargs["id"], { "status": "cancelled" })

        # Show result
        return json.dumps(payment_cancel["response"], indent=4)
```

Refund (only for accredited payments)

```python
    def index(req, **kwargs):
        payment_refund = sdk.refund().create(kwargs["id"])

        # Show result
        return json.dumps(payment_refund["response"], indent=4)
```

## Customized checkout


Configure your credentials

* Get your **ACCESS_TOKEN** in the [Credentials section]([FAKER][CREDENTIALS][URL])


```python
    import mercadopago

    sdk = mercadopago.SDK("ACCESS_TOKEN")
```


Create payment

```python
    sdk.payment().create(payment_data)
```

Create customer

```python
    customer_data = {
        "email": "email@test.com"
    }

    sdk.customer().create(customer_data)
```

Get customer

```python
    sdk.customer().get(customer_id)
```

* View more Custom checkout related APIs in [API reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference)


### Running tests


On Python 3.x

``python3 -m unittest discover tests/``
