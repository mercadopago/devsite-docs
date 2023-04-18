# Melhore a aprovação de seus pagamentos

## Por que um pagamento é recusado?

Um pagamento pode ser recusado por um erro com o meio de pagamento ou porque não preenche os requisitos de segurança necessários. Por exemplo, se o cartão não tiver saldo suficiente, o carregamento for realizado de forma deficiente ou se houver uma movimentação não usual da conta.

Para evitar perdas de receitas de seu negócio e melhorar a experiência de seus clientes, trabalhamos com os emissores responsáveis de cada meio de pagamento e utilizamos as últimas tecnologias para evitar a fraude e aumentar a quantidade de pagamentos aprovados.

## Pagamentos recusados pelo banco

Ao oferecer um pagamento com cartão de crédito ou débito, o emissor pode recusar a cobrança por diferentes motivos. Por exemplo, a expiração da data de validade do cartão, se não tiver fundos suficientes ou os dados não forem corretos.

Você pode ver o estado do pagamento na resposta do API como `rejected` e o motivo de recusa no campo `status_detail`.

```json
{
    "status": "rejected",
    "status_detail": "cc_rejected_insufficient_amount",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

E também poderá achar mais informações sobre o detalhe do pagamento na [atividade da conta de Mercado Pago](https://www.mercadopago.com.br/activities) em que os pagamentos são recebidos.

> WARNING
>
> Recusa sem motivo
>
>É importante levar em consideração que se o emissor do cartão de crédito não indicar o motivo da recusa, você verá o detalhe do pagamento como `cc_rejected_other_reason`. Nesse caso, é recomendável alterar o meio de pagamento ou entrar em contato com o banco para resolver o problema.

## Pagamentos recusados para prevenir fraude

Fazemos o acompanhamento em tempo real das transações e temos validações de segurança para reconhecer pagamentos que não foram autorizados pelo titular do cartão e evitar estornos.

Quando o nosso sistema de prevenção de fraude detectar um pagamento suspeito, você poderá ver o estado do pagamento na resposta do API `rejected` e o motivo de recusa como `cc_rejected_high_risk`.

```json
{
    "status": "rejected",
    "status_detail": "cc_rejected_high_risk",
    "id": 47198050,
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    ...
}
```

## Recomendações para melhorar sua aprovação

Para evitar que um pagamento real seja recusado por não atender as validações de segurança, é necessário somar todas as informações possíveis na hora de realizar a operação.

Ajudamos você a detectar comportamentos infrequentes dos clientes com o nosso código de segurança e device ID para prevenir a fraude. E não se preocupe, cuidamos dos dados de seus clientes e não os compartilhamos com ninguém.

> NOTE
>
> Nota
>
> Se você usa o Checkout Pro ou Web Tokenize Checkout, você já implementou nossos métodos de segurança para evitar fraudes.

### Adicione o nosso código de segurança em seu website

É muito simples. Adicione o script, configure a seção de seu website onde estiver e pronto! Você apenas deverá substituir o valor de `view` pelo nome do website onde quiser adicioná-lo.

```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

#### Possíveis valores para VIEW

| Valor | Seção |
| --- | --- |
| *home* | Página principal de seu website. |
| *search* | Página de busca ou lista de produtos. |
| *item* | Página de um produto específico. |

> NOTE
>
> Nota
>
> Se não tiver um valor disponível para a seção, poderá deixá-lo em branco.

### Implementação do device ID em sua web

Para implementar a geração do dispositivo em seu site, adicione o seguinte código:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

É importante que você envie o `device_id` gerado por esse código ao seu servidor e que, ao criar o pagamento, adicione o seguinte header à request:

```http
X-meli-session-id: device_id
```
#### Você pode obter o device ID de duas formas:

- Uma variável global de javascript é criada automaticamente com o nome `MP_DEVICE_SESSION_ID`, cujo o valor é o `device_id`. Se você preferir atribuí-lo a outra variável, indique o nome adicionando o atributo `output`.

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout" output="deviceId"></script>
````

- Se você quiser criar sua própria variável, você pode adicionar uma tag HTML no seu site com o identificador `id="deviceId"`, e o código atribuirá automaticamente o valor `device_id`.

```html
<input type="hidden" id="deviceId">
```

### Implementação do device ID em sua aplicaçaõ móvel nativa

Se você possui uma aplicação nativa, pode capturar a informação do dispositivo com nosso SDK e enviar no momento de criar o token. Siga estas etapas:

#### 1. Adicione a dependência

[[[
```ios
===
Adicionar o seguinte código no arquivo **Podfile**.
===
use_frameworks!
pod ‘MercadoPagoDevicesSDK’
```
```android
===
Você precisa adicionar o repositório e a dependência no arquivo **build.gradle**.
===
repositories {
    maven {
        url "https://artifacts.mercadolibre.com/repository/android-releases"
    }
}
dependencies {
   implementation 'com.mercadolibre.android.device:sdk:3.0.5'
}
```
]]]

#### 2. Inicialize o módulo

[[[
```swift
===
Recomendamos realizar a inicialização no envento didFinishLaunchingWithOptions do AppDelegate.
===
import MercadoPagoDevicesSDK
...
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        ...        
        MercadoPagoDevicesSDK.shared.execute()
        ...
}
```
```objective-c
===
Recomendamos realizar a inicialização no envento didFinishLaunchingWithOptions do AppDelegate.
===
@import ‘MercadoPagoDevicesSDK’;
...
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    ...
    [[MercadoPagoDevicesSDK shared] execute];
    ...
}
```
```java
===
Recomendamos realizar a inicialização na classe MainApplication.
===
import com.mercadolibre.android.device.sdk.DeviceSDK;


DeviceSDK.getInstance().execute(this);
```
]]]

#### 3. Capture a informação

Execute alguma das funções abaixo para obter a informação no formato que precisar.

[[[
```swift
MercadoPagoDevicesSDK.shared.getInfo() // Devolve um objeto Device que é Codificável
MercadoPagoDevicesSDK.shared.getInfoAsJson() // Devolve um objeto em JSON
MercadoPagoDevicesSDK.shared.getInfoAsJsonString() // Devolve o JSON em formato de String
MercadoPagoDevicesSDK.shared.getInfoAsDictionary() // Devolve um objeto Dictionary<String,Any>
```
```objective-c
[[[MercadoPagoDevicesSDK] shared] getInfoAsJson] // Devolve um objeto em JSON
[[[MercadoPagoDevicesSDK] shared] getInfoAsJsonString] // Devolve o JSON em formato de String
[[[MercadoPagoDevicesSDK] shared] getInfoAsDictionary] // Deolve um objeto Dictionary<String,Any>
```
```java
Device device = DeviceSDK.getInstance().getInfo() // Devolve um objeto Device, que é serializável
Map deviceMap = DeviceSDK.getInstance().getInfoAsMap()  // Devolve um Map<String, Object>
String jsonString = DeviceSDK.getInstance().getInfoAsJsonString() // Devolve uma String no formato JSON
```
]]]

#### 4. Envie a informação

Por último, envie a informação obtida no campo `device` ao criar o `card_token`.

```
{
	...,
	 "device":{
	  "fingerprint":{
	     "os":"iOS",
	     "system_version":"8.3",
	     "ram":18446744071562067968,
	     "disk_space":498876809216,
	     "model":"MacBookPro9,2",
	     "free_disk_space":328918237184,
	     "vendor_ids":[
	        {
	           "name":"vendor_id",
	           "value":"C2508642-79CF-44E4-A205-284A4F4DE04C"
	        },
	        {
	           "name":"uuid",
	           "value":"AB28738B-8DC2-4EC2-B514-3ACF330482B6"
	        }
	     ],
	     "vendor_specific_attributes":{
	        "feature_flash":false,
	        "can_make_phone_calls":false,
	        "can_send_sms":false,
	        "video_camera_available":true,
	        "cpu_count":4,
	        "simulator":true,
	        "device_languaje":"en",
	        "device_idiom":"Phone",
	        "platform":"x86_64",
	        "device_name":"iPhone Simulator",
	        "device_family":4,
	        "retina_display_capable":true,
	        "feature_camera":false,
	        "device_model":"iPhone Simulator",
	        "feature_front_camera":false
	     },
	     "resolution":"375x667"
	  }
}
```

### Detalhe todas as informações sobre o pagamento

Para otimizar a validação de segurança dos pagamentos e melhorar as aprovações, você poderá enviar para nós os dados do comprador e do item para que os analisemos. Por exemplo, se você enviar essas informações para nós, poderemos detectar se esse comprador realizou pagamentos suspeitos em outro momento e preveni-lo.

#### Dados do comprador

[[[
```php
<?php
  // ...
  $payer = new MercadoPago\Payer();
  $payer->name = "Charles";
  $payer->surname = "Luevano";
  $payer->email = "charles@hotmail.com";
  $payer->date_created = "2018-06-02T12:58:41.425-04:00";
  $payer->phone = array(
    "area_code" => "",
    "number" => "949 128 866"
  );
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  $payer->identification = array(
    "type" => "DNI",
    "number" => "12345678"
  );
  ------------
  $payer->address = array(
    "street_name" => "Cuesta Miguel Armendáriz",
    "street_number" => 1004,
    "zip_code" => "11020"
  );
  // ...
?>
```
```node
// ...
var payer = {
  name: "Charles",
  surname: "Luevano",
  email: "charles@hotmail.com",
  date_created: "2015-06-02T12:58:41.425-04:00",
  phone: {
    area_code: "",
    number: "949 128 866"
  },
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  identification: {
    type: "DNI",
    number: "12345678"
  },
  ------------
  address: {
    street_name: "Cuesta Miguel Armendáriz",
    street_number: "1004",
    zip_code: "11020"
  }
}
// ...
```
```java
// ...
Payer payer = new Payer();
payer.setName("Charles")
     .setSurname("Luevano")
     .setEmail("charles@hotmail.com")
     .setDateCreated("2018-06-02T12:58:41.425-04:00")
     .setPhone(new Phone()
        .setAreaCode("")
        .setPhoneNumber("949 128 866"))
     ----[mla, mlb, mlu, mco, mlc, mpe]----
     .setIdentification(new Identification()
        .setType("DNI")
        .setNumber("12345678"))
     ------------
     .setAddress(new Address()
        .setStreetName("Cuesta Miguel Armendáriz")
        .setBuildingNumber("1004")
        .setZipCode("11020"));
// ...
```
```ruby
# ...
payer = {
  name: "Charles",
  surname: "Luevano",
  email: "charles@hotmail.com",
  date_created: Time.now,
  ----[mla, mlb, mlu, mco, mlc, mpe]----
  identification: {
    type: "DNI",
    number: "12345678"
  },
  ------------
  address: {
    street_name: "Cuesta Miguel Armendáriz",
    street_number: "1004",
    zip_code: "11020"
  }
}
# ...
```
```csharp
using System.Collections.Generic;
using MercadoPago.Client.Common;
using MercadoPago.Client.Preference;
// ...
var payer = new PreferencePayerRequest
{
    Name = "Charles",
    Surname = "Luevano",
    Email = "charles@hotmail.com",
    Phone = new PhoneRequest
    {
        AreaCode = "",
        Number = "949 128 866",
    },
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    Identification = new IdentificationRequest
    {
        Type = "DNI",
        Number = "12345678",
    },
    ------------
    Address = new AddressRequest
    {
        StreetName = "Cuesta Miguel Armendáriz",
        StreetNumber = "1004",
        ZipCode = "11020",
    },
};
// ...
```
```python
# ...
payer_data = {
    "name": "Charles",
    "surname": "Luevano",
    "email": "charles@hotmail.com",
    "date_created": "2015-06-02T12:58:41.425-04:00",
    ----[mla, mlb, mlu, mco, mlc, mpe]----
    "identification": {
        "type": "DNI",
        "number": "12345678"
    },
    ------------
    "address": {
        "street_name": "Cuesta Miguel Armendáriz",
        "street_number": "1004",
        "zip_code": "11020"
    }
}
# ...
```
]]]

### Dados do item

[[[
```php
<?php
  $item = new MercadoPago\Item();
  $item->id = "1234";
  $item->title = "Heavy Duty Plastic Table";
  $item->quantity = 7;
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = 75.56;
  // ...
?>
```
```node
// ...
items: [
    {
      id: '1234',
      title: 'Lightweight Paper Table',
      quantity: 3,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: 55.41
    }
  ]// ...
```
```java
// ...
Item item = new Item();
item.setId("1234")
    .setTitle("Lightweight Paper Table")
    .setQuantity(3)
    .setCurrencyId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float) 55.41);
// ...
```
```ruby
# ...
item = {
  id: "1234",
  title: "Lightweight Paper Table",
  quantity: 3,
  currency_id: "[FAKER][CURRENCY][ACRONYM]",
  unit_price: 55.41
}# ...
```
```csharp
// ...
var request = new PreferenceRequest
{
    Items = new List<PreferenceItemRequest>
    {
        new PreferenceItemRequest
        {
            Id = "1234",
            Title = "Lightweight Paper Table",
            Quantity = 3,
            CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
            UnitPrice = 55.41m,
        }
    },
};
// ...
```
```python
# ...
preference_data = {
    "items": [
        {
            "id": '1234',
            "title": 'Lightweight Paper Table',
            "quantity": 3,
            "currency_id": '[FAKER][CURRENCY][ACRONYM]',
            "unit_price": 55.41
        }
    ]
    # ...
}
# ...
```
]]]

Você pode obter mais informações sobre cada atributo nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments/post).

### Dados de indústria

Envia os dados sobre sua indústria para melhorar sua aprovação.<br>

[Ir para dados de indústria](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/resources/industry-data/additional-info)

### Auxilie os seus clientes com seus pagamentos recusados

É importante que você explique aos seus clientes o motivo de recusa do pagamento e que ação pode realizar para solucioná-lo. Seus clientes terão todas as informações necessárias para pagar sem problemas.

Por exemplo, se um pagamento for recusado por fundos insuficientes, poderá recomendar a eles que tentem novamente com outro meio de pagamento para completar a operação.

> NOTE
>
> Nota
>
> Se você utilizar o Checkout Pro, não se preocupe, já tem as mensagens configuradas em cada caso. E se utilizar outro dos nossos produtos, recomendamos para você mostrar uma [mensagem específica por cada motivo de recusa](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/checkout-api/handling-responses).
