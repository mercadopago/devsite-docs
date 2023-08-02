# Recomendações para melhorar sua aprovação

> WARNING
>
> Atenção
>
> Recomendamos avaliar a [qualidade de sua integração](/developers/pt/guides/additional-content/homologator/homologator) antes de entrar em produção para verificar se você está cumprindo os padrões de qualidade e segurança do Mercado Pago que podem melhorar sua taxa de aprovação de pagamentos.

Para evitar que um pagamento legítimo seja recusado por não atender as validações de segurança, é necessário **incluir todas as informações possíveis na hora de realizar a operação** e também se atentar a alguns requisitos de segurança, como nosso **Código de Segurança** e o **Device ID**.

> NOTE
>
> Importante
>
> Se você usa o Checkout Pro, você já implementou nossos métodos de segurança para evitar fraudes.

## Detalhar todas as informações sobre o pagamento

Para otimizar a validação de segurança dos pagamentos e melhorar as aprovações, é importante fazer o envio do máximo de dados sobre o comprador e do item. 
 
Se atente a todos os atributos disponíveis ao criar um pagamento usando o método [Criar pagamento](/developers/pt/reference/payments/_payments/post). 

## Configurar as preferências

Você pode adaptar a **integração do Checkout Pro** ao seu modelo de negócio configurando atributos de preferência, que auxiliam na melhoria das aprovações. 


Veja mais detalhes acessando a documentação de [configurações de preferência](/developers/pt/docs/checkout-pro/checkout-customization/preferences) do Checkout Pro.

## Melhorar a experiência do usuário

Muitas vezes o comprador pode errar na hora de preencher seus dados no checkout. Por isso, vale a pena revisar cada passo, interações e até design, para checar se tudo está claro como deveria. Faça as alterações necessárias para impedir qualquer confusão ou problema.

## Auxilie os seus clientes com seus pagamentos recusados

É importante que você explique aos seus clientes o motivo de recusa do pagamento e que ação pode realizar para solucioná-lo. Seus clientes terão todas as informações necessárias para pagar sem problemas.

Por exemplo, se um pagamento for recusado por fundos insuficientes, poderá recomendar a eles que tentem novamente com outro meio de pagamento para completar a operação.

> Se você utilizar o Checkout Pro, não se preocupe, já tem as mensagens configuradas em cada caso. E se utilizar outro dos nossos produtos, recomendamos para você mostrar uma **mensagem específica por cada motivo de recusa**.

## Adicionar o código de segurança

Adicione o código de segurança do Mercado Pago na sua página, substituindo o valor de `view` pelo nome da seção na qual deseja adicioná-lo (Ex.: home, search, item).

```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

> NOTE
>
> Importante
>
> Caso não tenha um valor disponível para a seção, você pode deixá-la vazia.

## Utilizar informações do device ID na web

O Device ID é uma informação importante para garantir uma melhor segurança e, consequentemente, uma melhor taxa de aprovação de pagamentos. Ele representa um **identificador único para cada dispositivo do comprador** no momento da compra. 

Caso um comprador frequente faça uma compra a partir de um dispositivo diferente do habitual, isso pode representar um comportamento fraudulento e nos indicar que essa transação não deve ser efetivada. 

Para usá-lo na Web é preciso seguir os passos abaixo:

### 1. Adicione o script de segurança do Mercado Pago

Para implementar a geração do device ID em seu site, adicione o seguinte código na sua página de Checkout:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

### 2. Obtendo o device ID

Uma vez que você tenha adicionado o código de segurança do Mercado Pago em seu site, uma variável global de javascript é criada automaticamente com o nome `MP_DEVICE_SESSION_ID`, cujo valor é o device ID. 

  - Se você preferir atribuí-lo a outra variável, indique o nome adicionando o atributo output ao script de segurança, como no exemplo a seguir:  
  ```html
  <script src="https://www.mercadopago.com/v2/security.js" view="checkout" output="deviceId"></script>
  ```

  - Você também pode criar sua própria variável, bastando adicionar uma tag HTML no seu site com o identificado `id="deviceID"`, como no exemplo abaixo.
  ```html
  <input type="hidden" id="deviceId">
  ```

### 3. Utilizando o Device ID

Uma vez que você tenha o valor de Device ID, é preciso que você o envie aos nossos servidores ao criar um pagamento. Para isso, basta acrescentar o seguinte **cabeçalho (header)** à requisição:

```http
X-meli-session-id: device_id
```

> WARNING
> 
> Atenção
>
> Lembre-se de substituir `device_id` pelo nome da variável que contém o seu valor de Device ID.

## Utilizar Device ID em aplicações móveis

Se você possui uma aplicação móvel nativa, pode capturar a informação do dispositivo com nosso SDK e enviar no momento de criar o token. Siga estas etapas:

### 1. Adicione a dependência

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

### 2. Inicialize o módulo

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

### 3. Capture a informação

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

### 4. Envie a informação

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