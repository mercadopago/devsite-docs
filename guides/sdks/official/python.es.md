---
  indexable: false
---
# SDK Mercado Pago para Python


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


``` python
    import mercadopago

    sdk = mercadopago.SDK("ACCESS_TOKEN")
```

### Preferencias


#### Obtén una preferencia de pago existente


``` python
    def get(self, preference_id, request_options=None):
        preference = self.sdk.preference().get("PREFERENCE_ID")

        return preference
```

#### Crea una preferencia de pago

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
#### Actualizar una preferencia de pago existente:


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


#### Buscar pagos:

``` python
    def search(self, filters, request_options=None):
        filters = {
            "id": None,
            "external_reference": None
        }

        payment_search = self.sdk.payment().search(filters=filters)

        return payment_search
```

#### Obtener la información de un pago:

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

#### Cancelar (Sólo para pagos pendientes)

``` python
    def cancel(self, advanced_payment_id, request_options=None):
        payment_cancel = self.sdk.advanced_payment().cancel("advanced_payment_id")

        # Show result
        return payment_cancel
```

#### Refund (sólo para pagos acreditados)

``` python
    def create(self, payment_id, refund_object, request_options=None):
        payment_refund = self.sdk.refund("payment_id")

        # Show result
        return payment_refund
```

## Checkout custom

### Configura tus credenciales

Obtén tu **ACCESS_TOKEN** en la [sección de Credenciales]([FAKER][CREDENTIALS][URL]).


``` python
    import mercadopago

    sdk = mercadopago.SDK("ACCESS_TOKEN")
```


### Crear un pago

``` python
    self.sdk._post ("/v1/payments", data=payment_object, request_options=request_options)
```

### Crear un customer

```python
    customer_object = {
        "email": "email@test.com"
    }

    self.sdk._post ("/v1/customers", data=customer_object, request_options=request_options)
```

### Obtener un customer

```python
    self.sdk._get ("/v1/customers/" + str(customer_id), request_options=request_options)
```

> Para más información visita la sección [API reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference).


### Correr tests


En Python 3.x correr:

``python3 -m unittest discover tests/``
