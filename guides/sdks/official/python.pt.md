# SDK Mercado Pago para Python


* [Instalação](#bookmark_instalação)
* [Checkout Mercado Pago](#bookmark_checkout_mercado_pago)
* [Customized checkout](#bookmark_checkout_custom)
* [Generic methods](#bookmark_métodos_genéricos)

### Versões do Python suportadas:

Nosso SDK é compatível com Python versão 2.x e 3.x

## Instalação


Em Python 2.x:

``pip install mercadopago``

Em Python 3.x:

``pip3 install mercadopago``

## Checkout Mercado Pago


### Configure suas credenciais


Obtenha seu **CLIENT_ID** e **CLIENT_SECRET** [nos seguintes link]([FAKER][CREDENTIALS][URL_BASIC]).

``` python
    import mercadopago
    import json

    mp = mercadopago.MP("CLIENT_ID", "CLIENT_SECRET")
```

### Preferências


Obtenha uma preferência de pagamento existente


``` python
    def index(req, **kwargs):
        preferenceResult = mp.preference.get("PREFERENCE_ID")

        return json.dumps(preferenceResult, indent=4)
```

Crie uma preferência de pagamento

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
Atualize uma preferência de pagamento existente:


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


Busque pagamentos:

``` python
    def index(req, **kwargs):
        filters = {
            "id": None,
            "external_reference": None
        }

        searchResult = mp.payment.search(filters)

        return json.dumps(searchResult, indent=4)
```

Obtenha a informação de um pagamento:

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

Cancelamento (Somente para pagamentos pendentes)

``` python
    def index(req, **kwargs):
        result = mp.payment.cancel("ID")

        // Show result
        return json.dumps(result, indent=4)
```

Devolução (Somente para pagamentos creditados)

``` python
    def index(req, **kwargs):
        result = mp.payment.get_refund("ID")

        // Show result
        return json.dumps(result, indent=4)
```

## Checkout custom

### Configure suas credenciais

Obtenha seu **ACCESS_TOKEN** na [seção Credenciais]([FAKER][CREDENTIALS][URL]).


``` python
    import mercadopago
    import json

    mp = mercadopago.MP("ACCESS_TOKEN")
```


### Crie um pagamento

``` python
    mp.payment.create (payment_data)
```

### Crie um customer

```python
    mp.customer.create ({"email": "email@test.com"})
```

### Obtenha um customer

```python
    mp.customer.get (CUSTOMER_ID)
```

> Para mais informações visite a sessão [API reference]https://www.mercadopago.com.br/developers/pt/reference).

## Métodos genéricos

É possível acessar qualquer outro recurso da API Mercado Pago utilizando métodos genéricos:

```python
    // Obter um recurso com parâmetros opcionais de URL. Também é possível desabilitar a autenticação para APIs públicas.
        mp.genericcall.get ("/resource/uri", [params], [authenticate=true]);
```

```python
    // Criar um recurso com "data" e parâmetros opcionais de URL.
    mp.genericcall.post ("/resource/uri", data, [params]);
```
```python
    // Atualizar um recurso com "data" e parâmetros opcionais de URL.
    mp.genericcall.put ("/resource/uri", data, [params]);
```
```python
    // Eliminar um recurso com "data" e parâmetros opcionais de URL.
    mp.genericcall.delete ("/resource/uri", [params]);
```

Por exemplo, se quiser obter a lista de sites disponíveis (sem parâmetros na autenticação):

```python
    result = mp.genericcall.get ("/sites", null, false);

    print (json.dumps(result, indent=4))
```

### Executar testes


Em Python 2.x executar:

``python setup.py test``

Em Python 3.x executar:

``python3 setup.py test``
