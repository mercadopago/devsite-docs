# SDK Mercado Pago para Python


* [Instalación](#bookmark_instalación)
* [Checkout Mercado Pago](#bookmark_checkout_mercado_pago)
* [Customized checkout](#bookmark_checkout_custom)
* [Generic methods](#bookmark_métodos_genéricos)

### Versiones Soportadas:

Nuesto SDK es compatible con las versiones de 2.x y 3.x de Python.

## Instalación


En Python 2.x:

``pip install mercadopago``

En Python 3.x:

``pip3 install mercadopago``

## Checkout Mercado Pago


### Configura tus credenciales


Obtén tu **CLIENT_ID** y **CLIENT_SECRET** [en el siguiente link]([FAKER][CREDENTIALS][URL]).


``` python
    import mercadopago
    import json

    mp = mercadopago.MP("CLIENT_ID", "CLIENT_SECRET")
```

### Preferencias


#### Obtén una preferencia de pago existente


``` python
    def index(req, **kwargs):
        preferenceResult = mp.preference.get("PREFERENCE_ID")

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

        preferenceResult = mp.preference.create(preference)

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

        preferenceResult = mp.preference.update(id, preference)

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

        searchResult = mp.payment.search(filters)

        return json.dumps(searchResult, indent=4)
```

#### Obtener la información de un pago:

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

#### Cancelar (Sólo para pagos pendientes)

``` python
    def index(req, **kwargs):
        result = mp.payment.cancel("ID")

        // Show result
        return json.dumps(result, indent=4)
```

#### Refund (sólo para pagos acreditados)

``` python
    def index(req, **kwargs):
        result = mp.payment.get_refund("ID")

        // Show result
        return json.dumps(result, indent=4)
```

## Checkout custom

### Configura tus credenciales

Obtén tu **ACCESS_TOKEN** en la [sección de Credenciales]([FAKER][CREDENTIALS][URL]).


``` python
    import mercadopago
    import json

    mp = mercadopago.MP("ACCESS_TOKEN")
```


### Crear un pago

``` python
    mp.payment.create (payment_data)
```

### Crear un customer

```python
    mp.customer.create ({"email": "email@test.com"})
```

### Obtener un customer

```python
    mp.customer.get (CUSTOMER_ID)
```

> Para más información visita la sección [API reference]https://www.mercadopago.com.ar/developers/es/reference).

## Métodos genéricos

Puedes acceder a cualquier otro recurso de la API de Mercado Pago utilizando métodos genéricos:

```python
    // Obtener un recurso con URL params opcionales. También puedes deshabilitar la autenticación para APIs públicas.
        mp.genericcall.get ("/resource/uri", [params], [authenticate=true]);
```

```python
    // Crear un recurso con "data"y URL params opcionales.
    mp.genericcall.post ("/resource/uri", data, [params]);
```
```python
    // Actualizar un recurso con "data"y URL params opcionales.
    mp.genericcall.put ("/resource/uri", data, [params]);
```
```python
    // Eliminar un recurso con "data" y URL params opcionales.
    mp.genericcall.delete ("/resource/uri", [params]);
```

Por ejemplo, si quieres obtener la lista de sitios disponibles (sin parámetros ni autenticación):

```python
    result = mp.genericcall.get ("/sites", null, false);

    print (json.dumps(result, indent=4))
```

### Correr tests


En Python 2.x correr:

``python setup.py test``

En Python 3.x correr:

``python3 setup.py test``
