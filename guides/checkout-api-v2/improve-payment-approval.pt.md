# Melhore a aprovação de seus pagamentos

## Por que um pagamento é recusado?

A recusa de pagamentos é uma realidade no mundo das vendas online e pode acontecer por diversas razões. **Um pagamento pode ser recusado por**:
 * um erro com o meio de pagamento;
 * preenchimento incorreto das informações por parte do cliente;
 * cartão sem saldo suficiente;
 * violação de requisitos de segurança necessários;
 * movimentos suspeitos indicando risco de fraude;
 * problemas na comunicação entre adquirentes e subadquirentes.

Você pode encontrar as **informações e checar o estado de um pagamento** via API, através do método [Obter pagamento](/developers/pt/reference/payments/_payments_id/get). O campo `status` indica se o pagamento foi ou não aprovado, enquanto o campo `status_detail` traz mais detalhes, incluindo os motivos de recusa.


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

> NOTE
>
> Importante
>
> Também é possível achar mais informações sobre pagamentos na atividade da conta de [Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/activities).

### Recusas devido a erros de preenchimento

Estes motivos de recusa acontecem devido a **erros no momento do checkout**. Isso pode acontecer por diversos motivos, como por exemplo falha de entendimento da tela de pagamento, problemas de experiência do comprador, falta de validação nos campos, ou também erros que o comprador pode cometer na hora de preencher seus dados, principalmente os dados de cartão.
Nestes casos o campo `status_detail` poderá retornar: 
 * `cc_rejected_bad_filled_card_number`
 * `cc_rejected_bad_filled_date`
 * `cc_rejected_bad_filled_other`
 * `cc_rejected_bad_filled_security_code`


### Recusas pelo banco emissor

Ao realizar um **pagamento com cartão de crédito ou débito**, por exemplo, o banco emissor pode recusar a cobrança por diferentes motivos, como a data de validade expirada, saldo ou limite insuficientes, cartão desabilitado ou bloqueado para compras online.
Nestes casos o campo `status_detail` poderá retornar: 
 * `cc_rejected_call_for_authorize`
 * `cc_rejected_card_disabled`
 * `cc_rejected_duplicated_payment`
 * `cc_rejected_insufficient_amount`
 * `cc_rejected_invalid_installments`
 * `cc_rejected_max_attempts`


### Recusas por prevenção contra fraudes

Fazemos o acompanhamento em tempo real das transações procurando **reconhecer recursos e padrões suspeitos** que apontam para uma tentativa de fraude. Isso é feito tanto pelos algoritmos do Mercado Pago quanto pelos bancos, tudo para evitar ao máximo chargebacks.

Quando o nosso sistema de prevenção de fraude detectar um pagamento suspeito, o campo `status_detail` poderá retornar: 
 * `cc_rejected_blacklist`
 * `cc_rejected_high_risk`
 * `cc_rejected_other_reason`

> WARNING
> 
> Atención
>
> A resposta `cc_rejected_other_reason` é um status enviado pelo banco emissor e, embora não especifique o motivo da rejeição, é uma estimativa do risco de fraude. No entanto, há outras razões pelas quais esse status pode ser retornado. Em caso de dúvida, é recomendável escolher outro meio de pagamento ou contactar o banco.
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

Para **evitar que um pagamento legítimo seja recusado** por não atender as validações de segurança, é necessário incluir o máximo de informações possíveis na hora de realizar a operação e também que seu checkout esteja com uma interface otimizada.

Você pode ver em detalhes nossas **recomendações para melhorar sua aprovação** abaixo.

### Coleta e envío de Device ID

O **Device ID** é uma informação importante para garantir uma melhor segurança e, consequentemente, uma melhor taxa de aprovação de pagamentos. Ele representa um identificador único para cada dispositivo do comprador no momento da compra.
Caso um comprador frequente faça uma compra a partir de um dispositivo diferente do habitual, isso pode representar um comportamento atípico. Embora possa não ser necessariamente fraude, o ID do dispositivo nos ajuda a refinar a avaliação e nos impede de rejeitar pagamentos legítimos.

> WARNING
> 
> Atenção
>
> Caso já esteja utilizando o [SDK JS do Mercado Pago](/developers/pt/docs/sdks-library/client-side/mp-js-v2), **não** será necessário adicionar o código de segurança, pois o Device ID será obtido por padrão.
Você pode **adicionar o código de segurança do Mercado Pago** na sua página substituindo o valor de `view` pelo nome da seção na qual deseja adicioná-lo. O mais importante é adicioná-lo na **página do checkout**, porém adicionar em **outras páginas**, como home, search ou item, também ajuda a enriquecer as informações coletadas.

```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```


> NOTE
>
> Importante
>
>Caso não tenha um valor disponível para a seção, você pode deixá-la vazia.

### * Utilizar informações do Device ID na web

Para usar o Device ID na web e evitar possíveis compras fraudulentas, é preciso seguir os passos abaixo:

#### 1. Adicione o script de segurança do Mercado Pago
Para implementar a geração do device ID em seu site, adicione o seguinte código na sua página de Checkout:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

#### 2.Obtendo o Device ID
Uma vez que você tenha adicionado o código de segurança do Mercado Pago em seu site, uma variável global de javascript é criada automaticamente com o nome `MP_DEVICE_SESSION_ID`, cujo valor é o Device ID.

Se você preferir atribuí-lo a outra variável, indique o nome adicionando o atributo output ao script de segurança, como no exemplo a seguir:

```html
  <script src="https://www.mercadopago.com/v2/security.js" view="checkout" output="deviceId"></script>
```

Você também pode **criar sua própria variável**, bastando adicionar uma tag HTML no seu site com o identificado `id="deviceID"`, como no exemplo abaixo.
```html
  <input type="hidden" id="deviceId">
```

#### 3. Utilizando o Device ID
Uma vez que você tenha o valor de Device ID, é preciso que você **o envie aos nossos servidores** ao criar um pagamento. Para isso, basta acrescentar o seguinte cabeçalho (*header*) à requisição:

```http
X-meli-session-id: device_id
```

> WARNING
> 
> Atenção
>
> Lembre-se de substituir `device_id` pelo nome da variável que contém o seu valor de Device ID.

### * Utilizar Device ID em aplicações móveis

Se você possui uma aplicação móvel nativa, pode capturar a informação do dispositivo com nosso SDK e enviar no momento de criar o token. Siga estas etapas:


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

### Detalhar todas as informações sobre o pagamento

Para otimizar a validação de segurança dos pagamentos e melhorar as aprovações, é importante fazer **o envio do máximo de dados sobre o comprador e o produto**.

Se atente a todos os atributos disponíveis ao criar um pagamento usando o método [Criar pagamento](/developers/pt/reference/payments/_payments/post). Preste atenção especial aos atributos do nó `“adicional_inf”`, como:
 * Dados do comprador,
 * Dados do produto,
 * Dados do envio.

Existem também **campos extras** que podem ser enviados de acordo com **o ramo de atividade**. Você pode encontrar mais detalhes sobre cada setor e os dados do comprador e do shipping que recomendamos incluir em cada um deles [aqui](/developers/pt/docs/checkout-api/additional-content/industry-data).

### Melhorar a experiência do usuário
Muitas vezes o comprador pode errar na hora de preencher seus dados no checkout. Por isso, vale a pena revisar cada passo, interações e até design, para checar se tudo está claro como deveria. 
Caso opte por **criar seu front do zero**, você encontra dicas de como fazê-lo de forma eficiente [aqui](/developers/pt/docs/checkout-api/best-practices/ux-best-practices/ux-for-checkouts/introduction). 
Se um pagamento for negado, é importante também que você explique aos seus clientes o motivo da recusa e que ação pode realizar para solucioná-lo. Assim, seus clientes terão todas as informações necessárias para pagar sem problemas. Você encontra **recomendações de mensagens para os principais motivos de recusa** [aqui](/developers/pt/docs/checkout-api/response-handling/collection-results). 

Se, em vez disso, você quiser garantir uma interface otimizada, pode utilizar os **componentes visuais de [Checkout Bricks](/developers/pt/docs/checkout-bricks/landing)** e também aproveitar um componente visual já pronto com as melhores mensagens com o **[Status Screen Brick](/developers/pt/docs/checkout-bricks/status-screen-brick/introduction)**.

> WARNING
> 
> Importante
>
> Recomendamos avaliar a [qualidade de sua integração](/developers/pt/docs/checkout-api/additional-content/integration-quality) antes de entrar em produção para verificar se você está cumprindo os padrões de qualidade e segurança do Mercado Pago que garantem uma boa taxa de aprovação de pagamentos.