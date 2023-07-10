---
  indexable: false
---
# SDK Mercado Pago para Python

> NOTE
>
> Importante
>
> Esta documentación es solo para uso por parte del equipo interno, ya que fue deprecada o es un producto exclusivo. Para más detalles, hablar con el equipo comercial o de integraciones.

* [Instalación](#bookmark_instalación)
* [Checkout Pro](#bookmark_checkout_pro)
* [Customized checkout](#bookmark_checkout_custom)
* [Generic methods](#bookmark_métodos_genéricos)

### Versiones Soportadas:

Nuesto SDK es compatible con las versiones de 2.x y 3.x de Python.

## Instalación


En Python 3.x:

``pip3 install mercadopago``

## Checkout Pro


### Configura tus credenciales


Obtén tu **ACCESS_TOKEN** [en el siguiente link]([FAKER][CREDENTIALS][URL]).


```python
    import mercadopago

    sdk = mercadopago.SDK("ACCESS_TOKEN")
```

### Preferencias


#### Obtén una preferencia de pago existente


```python
    def index(req, **kwargs):
        preference_response = sdk.preference().get("PREFERENCE_ID")

        return json.dumps(preference_response["response"], indent=4)
```

#### Crea una preferencia de pago

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
#### Actualizar una preferencia de pago existente:


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


#### Buscar pagos:

```python
    def index(req, **kwargs):
        filters = {
            "id": None,
            "external_reference": None
        }

        payments_search = sdk.payment().search(filters=filters)

        return json.dumps(payments_search["response"], indent=4)
```

#### Obtener la información de un pago:

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

#### Cancelar (Sólo para pagos pendientes)

```python
    def index(req, **kwargs):
        payment_cancel = sdk.payment().update(kwargs["id"], { "status": "cancelled" })

        # Show result
        return json.dumps(payment_cancel["response"], indent=4)
```

#### Refund (sólo para pagos acreditados)

```python
    def index(req, **kwargs):
        payment_refund = sdk.refund().create(kwargs["id"])

        # Show result
        return json.dumps(payment_refund["response"], indent=4)
```

## Checkout custom

### Configura tus credenciales

Obtén tu **ACCESS_TOKEN** en la [sección de Credenciales]([FAKER][CREDENTIALS][URL]).


```python
    import mercadopago

    sdk = mercadopago.SDK("ACCESS_TOKEN")
```


### Crear un pago

```python
    sdk.payment().create(payment_data)
```

### Crear un customer

```python
    customer_data = {
        "email": "email@test.com"
    }

    sdk.customer().create(customer_data)
```

### Obtener un customer

```python
    sdk.customer().get(customer_id)
```

> Para más información visita la sección [API reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference).


### Correr tests


En Python 3.x correr:

``python3 -m unittest discover tests/``
