# SDK Mercado Pago para Python


* [Instalación](#bookmark_instalación)
* [Web Checkout](#bookmark_web_checkout)
* [Customized checkout](#bookmark_checkout_custom)
* [Generic methods](#bookmark_métodos_genéricos)

## Instalación


En Python 2.x:

``pip install mercadopago``

En Python 3.x:

``pip3 install mercadopago``

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


``` python
    import mercadopago
    import json

    mp = mercadopago.MP("CLIENT_ID", "CLIENT_SECRET")
```

### Preferencias


#### Obtén una preferencia de pago existente


``` python
    def index(req, **kwargs):
        preferenceResult = mp.get_preference("PREFERENCE_ID")

        return json.dumps(preferenceResult, indent=4)
```

#### Crea una preferencia de pago

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

        preferenceResult = mp.create_preference(preference)

        return json.dumps(preferenceResult, indent=4)
```
#### Actualizar una preferencia de pago existente:


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

        preferenceResult = mp.update_preference(id, preference)

        return json.dumps(preferenceResult, indent=4)
```
### Payments/Collections


#### Buscar pagos:

``` python
    def index(req, **kwargs):
        filters = {
            "id": None,
            "external_reference": None
        }

        searchResult = mp.search_payment(filters)

        return json.dumps(searchResult, indent=4)
```

#### Obtener la información de un pago:

``` python
    import mercadopago
    import json

    def index(req, **kwargs):
        mp = mercadopago.MP("CLIENT_ID", "CLIENT_SECRET")
        paymentInfo = mp.get_payment (kwargs["id"])

        if paymentInfo["status"] == 200:
            return json.dumps(paymentInfo, indent=4)
        else:
            return None
```

#### Cancelar (Sólo para pagos pendientes)

``` python
    def index(req, **kwargs):
        result = mp.cancel_payment("ID")

        // Show result
        return json.dumps(result, indent=4)
```

#### Refund (sólo para pagos acreditados)

``` python
    def index(req, **kwargs):
        result = mp.refund_payment("ID")

        // Show result
        return json.dumps(result, indent=4)
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


``` python
    import mercadopago
    import json

    mp = mercadopago.MP("ACCESS_TOKEN")
```


### Crear un pago

``` python
    mp.post ("/v1/payments", payment_data)
```

### Crear un customer

```python
    mp.post ("/v1/customers", {"email": "email@test.com"})
```

### Obtener un customer

```python
    mp.get ("/v1/customers/CUSTOMER_ID")
```

> Para más información visita la sección [API reference](/reference).

## Métodos genéricos

Puedes acceder a cualquier otro recurso de la API de Mercado Pago utilizando métodos genéricos:

```python
    // Obtener un recurso con URL params opcionales. También puedes deshabilitar la autenticación para APIs públicas.
        mp.get ("/resource/uri", [params], [authenticate=true]);
```

```python
    // Crear un recurso con "data"y URL params opcionales.
    mp.post ("/resource/uri", data, [params]);
```
```python
    // Actualizar un recurso con "data"y URL params opcionales.
    mp.put ("/resource/uri", data, [params]);
```
```python
    // Eliminar un recurso con "data" y URL params opcionales.
    mp.delete ("/resource/uri", [params]);
```

Por ejemplo, si quieres obtener la lista de sitios disponibles (sin parámetros ni autenticación):

```python
    result = mp.get ("/sites", null, false);

    print (json.dumps(result, indent=4))
```

### Correr tests


En Python 2.x correr:

``python setup.py test``

En Python 3.x correr:

``python3 setup.py test``
