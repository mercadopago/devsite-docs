# Integrar o Device ID

O **Device ID** é uma informação importante para garantir uma melhor segurança e, consequentemente, uma melhor taxa de aprovação de pagamentos. Ele representa um **identificador único para cada dispositivo do comprador** no momento da compra.
Caso um comprador frequente faça uma compra a partir de um dispositivo diferente do habitual, isso pode representar um comportamento atípico. Embora possa não ser necessariamente fraude, o ID do dispositivo nos ajuda a refinar a avaliação e nos impede de rejeitar pagamentos legítimos.


## Obter e enviar o Device ID

Você pode **adicionar o código de segurança do Mercado Pago** na sua página substituindo o valor de `view` pelo nome da seção na qual deseja adicioná-lo. O mais importante é adicioná-lo na **página do checkout**, porém adicionar em **outras páginas**, como home, search ou item, também ajuda a enriquecer as informações coletadas.


> NOTE
>
> Importante
>
> Caso não tenha um valor disponível para a seção, você pode deixá-la vazia.

## Utilizar informações do Device ID na web

Para usar o Device ID na web e evitar possíveis compras fraudulentas, é preciso seguir os passos abaixo:

### 1. Adicione o script de segurança do Mercado Pago
Para implementar a geração do device ID em seu site, adicione o seguinte código na sua página de Checkout:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

### 2.Obtendo o Device ID
Uma vez que você tenha adicionado o código de segurança do Mercado Pago em seu site, uma variável global de javascript é criada automaticamente com o nome `MP_DEVICE_SESSION_ID`, cujo valor é o Device ID.

Se você preferir atribuí-lo a outra variável, indique o nome adicionando o atributo output ao script de segurança, como no exemplo a seguir:

```html
  <script src="https://www.mercadopago.com/v2/security.js" view="checkout" output="deviceId"></script>
```

Você também pode **criar sua própria variável**. Para isso, adicione uma tag HTML no seu site com o identificador `id="deviceID"`, como no exemplo abaixo.
```html
  <input type="hidden" id="deviceId">
```

### 3. Utilizando o Device ID
Uma vez que você tenha o valor de Device ID, é preciso que você **o envie aos nossos servidores** ao criar um pagamento. Para isso, basta acrescentar o seguinte **cabeçalho (*header*)** à requisição:

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
   implementation 'com.mercadolibre.android.device:sdk:4.0.1'
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

```json
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
}
```