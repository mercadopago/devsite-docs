---
  indexable: false
---
# SDK Mercado Pago para Python

> NOTE
>
> Importante
>
> Esta documentação é apenas para uso interno da equipe porque está obsoleta ou é um produto exclusivo. Para mais detalhes, fale com a equipe de vendas ou de integrações.

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

```python
    import mercadopago

    sdk = mercadopago.SDK("ACCESS_TOKEN")
```

### Preferências


Obtenha uma preferência de pagamento existente


```python
    def index(req, **kwargs):
        preference_response = sdk.preference().get("PREFERENCE_ID")

        return json.dumps(preference_response["response"], indent=4)
```

Crie uma preferência de pagamento

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
Atualize uma preferência de pagamento existente:


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


Busque pagamentos:

```python
    def index(req, **kwargs):
        filters = {
            "id": None,
            "external_reference": None
        }

        payments_search = sdk.payment().search(filters=filters)

        return json.dumps(payments_search["response"], indent=4)
```

Obtenha a informação de um pagamento:

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

Cancelamento (Somente para pagamentos pendentes)

```python
    def index(req, **kwargs):
        payment_cancel = sdk.payment().update(kwargs["id"], { "status": "cancelled" })

        # Show result
        return json.dumps(payment_cancel["response"], indent=4)
```

Devolução (Somente para pagamentos creditados)

```python
    def index(req, **kwargs):
        payment_refund = sdk.refund().create(kwargs["id"])

        # Show result
        return json.dumps(payment_refund["response"], indent=4)
```

## Checkout custom

### Configure suas credenciais

Obtenha seu **ACCESS_TOKEN** na [seção Credenciais]([FAKER][CREDENTIALS][URL]).


```python
    import mercadopago

    sdk = mercadopago.SDK("ACCESS_TOKEN")
```


### Crie um pagamento

```python
    sdk.payment().create(payment_data)
```

### Crie um customer

```python
    customer_data = {
        "email": "email@test.com"
    }

    sdk.customer().create(customer_data)
```

### Obtenha um customer

```python
    sdk.customer().get(customer_id)
```

> Para mais informações visite a sessão [API reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference).


### Executar testes


Em Python 3.x executar:

``python3 -m unittest discover tests/``
