---
  indexable: false
---
# SDK Mercado Pago para Python


* [Instalação](#bookmark_instalação)
* [Checkout Pro](#bookmark_checkout_pro)
* [Customized checkout](#bookmark_checkout_custom)
* [Generic methods](#bookmark_métodos_genéricos)

### Versões do Python suportadas:

Nosso SDK é compatível com Python versão 2.x e 3.x

## Instalação


Em Python 3.x:

``pip3 install mercadopago``

## Checkout Pro


### Configure suas credenciais


Obtenha seu **CLIENT_ID** e **CLIENT_SECRET** [nos seguintes link]([FAKER][CREDENTIALS][URL]).

``` python
    import mercadopago

    sdk = mercadopago.SDK("ACCESS_TOKEN")
```

### Preferências


Obtenha uma preferência de pagamento existente


``` python
    def get(self, preference_id, request_options=None):
        preference = self.sdk.preference().get("PREFERENCE_ID")

        return preference
```

Crie uma preferência de pagamento

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
Atualize uma preferência de pagamento existente:


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


Busque pagamentos:

``` python
    def search(self, filters, request_options=None):
        filters = {
            "id": None,
            "external_reference": None
        }

        payment_search = self.sdk.payment().search(filters=filters)

        return payment_search
```

Obtenha a informação de um pagamento:

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

Cancelamento (Somente para pagamentos pendentes)

``` python
    def cancel(self, advanced_payment_id, request_options=None):
        payment_cancel = self.sdk.advanced_payment().cancel("advanced_payment_id")

        # Show result
        return payment_cancel
```

Devolução (Somente para pagamentos creditados)

``` python
    def create(self, payment_id, refund_object, request_options=None):
        payment_refund = self.sdk.refund("payment_id")

        # Show result
        return payment_refund
```

## Checkout custom

### Configure suas credenciais

Obtenha seu **ACCESS_TOKEN** na [seção Credenciais]([FAKER][CREDENTIALS][URL]).


``` python
    import mercadopago

    sdk = mercadopago.SDK("ACCESS_TOKEN")
```


### Crie um pagamento

``` python
    self.sdk._post ("/v1/payments", data=payment_object, request_options=request_options)
```

### Crie um customer

```python
    customer_object = {
        "email": "email@test.com"
    }

    self.sdk._post ("/v1/customers", data=customer_object, request_options=request_options)
```

### Obtenha um customer

```python
    self.sdk._get ("/v1/customers/" + str(customer_id), request_options=request_options)
```

> Para mais informações visite a sessão [API reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference).


### Executar testes


Em Python 3.x executar:

``python3 -m unittest discover tests/``
