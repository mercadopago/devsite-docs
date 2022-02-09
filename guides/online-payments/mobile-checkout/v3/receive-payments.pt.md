---
sites_supported:
    - mla
    - mlb
    - mlm
    - mco
    - mlc
    - mpe
---
# Receba Pagamentos

> WARNING
>
> Pré-requisitos
>
> * Esta guia presume que você já tenha seguido os passos da seção ‘introdução da documentação para instalação do SDK’.

Esta guia irá ajudá-lo a integrar o componente visual de pagamento do Mercado Pago em sua aplicação. Este componente gerencia a seleção do meio de pagamento, a coleta de dados do meio de pagamento do usuário e a comunicação do resultado do pagamento.

#### A integração consiste em duas etapas:
- Integração em seu servidor: nesta etapa, você receberá a informação sobre o pagamento.
- Integração em sua aplicação: nesta etapa, você irá configurar o componente visual.

![scheme](/images/mobile-sdk-schema.png)

1. Crie a preferência de pagamento a partir de seu servidor nos servidores do MercadoPago.
2. Inicie o Checkout em sua aplicação utilizando a ID da preferência.
3. O Checkout efetuará o pagamento nos servidores do MercadoPago.
4. Inscreva-se nas notificações para obter informações sobre seus novos pagamentos e atualizações de status.


## Configure seu servidor

Para poder iniciar o fluxo de pagamento, é necessário obter as informações sobre o produto ou serviço a ser pago.

Esta entidade é a preferência de pagamento e contém:

1. Descrição e preço.
2. Informações do seu comprador (e-mail, nome, endereço, etc.).
3. Meios de pagamentos aceitos.
4. ID de referência do seu sistema.

[[[
```php
<?php  
  require ('mercadopago.php');
  MercadoPago\SDK::configure(['ACCESS_TOKEN' => 'ENV_ACCESS_TOKEN']);
?>
```
```java
import com.mercadopago.*;
MercadoPago.SDK.configure("ENV_ACCESS_TOKEN");
```
```node
var mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: 'ENV_ACCESS_TOKEN'
});
```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('ENV_ACCES_TOKEN')
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")
```
]]]

Depois você deverá adicionar os atributos das suas preferências de pagamento:

[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "Blue shirt";
  $item->quantity = 10;
  $item->currency_id = "[FAKER][CURRENCY][ACRONYM]";
  $item->unit_price = [FAKER][COMMERCE][PRICE];

  $payer = new MercadoPago\Payer();
  $payer->email = "test_user_19653727@testuser.com";

  $preference->items = array($item);
  $preference->payer = $payer;
  $preference->save();
?>
```
```java

Preference preference = new Preference();

Item item = new Item();
item.setId("1234")
    .setTitle("Blue shirt")
    .setQuantity(10)
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float)[FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("john@yourdomain.com");

preference.setPayer(payer);
preference.appendItem(item);
preference.save();

```
```javascript
var preference = {}

var item = {
  title: 'Blue shirt',
  quantity: 10,
  currency_id: '[FAKER][CURRENCY][ACRONYM]',
  unit_price: [FAKER][COMMERCE][PRICE]
}

var payer = {
  email: "demo@mail.com"
}

preference.items = [item]
preference.payer = payer

mercadopago.preferences.create(preference).then(function (data) {
   // Do Stuff...
 }).catch(function (error) {
   // Do Stuff...
 });
```
```ruby
preference_data = {
  items: [
    {
      title: 'Blue shirt',
      quantity: 10,
      currency_id: '[FAKER][CURRENCY][ACRONYM]',
      unit_price: [FAKER][COMMERCE][PRICE]
    }
  ],
  payer: {
    email: 'john@yourdomain.com'
  }
}

preference_response = sdk.preference.create(preference_data)
preference = preference_response[:response]
```
```python
preference_data = {
    "title": "Blue shirt",
    "quantity": 10,
    "currency_id": "[FAKER][CURRENCY][ACRONYM]",
    "unit_price": [FAKER][COMMERCE][PRICE],
    "payer": {
        "email": "john@yourdomain.com"
    }
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]
```
]]]

### Conteúdo da preferência

Quanto mais informações você nos enviar, melhor será a aprovação dos pagamentos e a experiência de seus usuários.

#### Payer

É necessário o envio do `e-mail` de seu comprador.

```json
{
   ...,
  "payer": {
    "name": "[FAKER][NAME][FIRST_NAME]",
    "surname": "[FAKER][NAME][LAST_NAME]",
    "email": "john@yourdomain.com",
    "date_created": "2015-06-02T12:58:41.425-04:00",
    "phone": {
      "area_code": "[FAKER][PHONE_NUMBER][AREA_CODE]",
      "number": "[FAKER][PHONE_NUMBER][CELL_PHONE]"
    },
    "identification": {
      "type": "DNI",
      "number": "123456789"
    },
    "address": {
      "street_name": "[FAKER][ADDRESS][STREET_NAME]",
      "street_number": 7304,
      "zip_code": "[FAKER][ADDRESS][ZIP_CODE]"
    }
  },
  ...
}
```

## Integre o fluxo de pagamentos do Mercado Pago em sua aplicação

### 1. Conecte sua aplicação com seu servidor

No SDK, nós oferecemos uma classe chamada **CustomServer** para que a conexão com seu servidor seja mais fácil. O método createPreference faz um POST e envia como corpo da mensagem o mapa que tiver definido (`preferenceMap`). Indique sua URL base (https://your-base-url.com) e a URI (/your-create-preference-uri) onde espera os dados para criar a preferência.

O CustomServer irá transformar a resposta do seu serviço (que deve ter a mesma estrutura que a do MercadoPago) em um objeto **CheckoutPreference**, cuja ID é o ponto de entrada para o nosso checkout.

Crie a preferência em seu servidor a partir de sua aplicação com o seguinte código:

[[[

```android
public void submit(View view) {
// Create a map with payment’s details.
Map<String, Object> preferenceMap = new HashMap<>();
preferenceMap.put("item_id", "1");
preferenceMap.put("amount", new BigDecimal(10));
preferenceMap.put("currency_id", "[FAKER][CURRENCY][ACRONYM]");
preferenceMap.put("payer_email", "john@yourdomain.com");

final Activity activity = this;
LayoutUtil.showProgressLayout(activity);
CustomServer.createCheckoutPreference(activity, "https://your-base-url.com", "/your-create-preference-uri", preferenceMap, new Callback<CheckoutPreference>() {
@Override
public void success(CheckoutPreference checkoutPreference) {
startMercadoPagoCheckout(checkoutPreference);
LayoutUtil.showRegularLayout(activity);
}

@Override
public void failure(ApiException apiException) {
// Ups, something went wrong
}
});
}
```
```swift
let preferenceBody : [String : Any] = ["item_id" : "id", "quantity" : 3]

CustomServer.createCheckoutPreference(url: "https://your-base-url.com/", uri: "your-create-preference-uri", bodyInfo: preferenceBody as NSDictionary, success: { (checkoutPrefernece) in
    startMercadoPagoCheckout(checkoutPreference)
}) { (error) in
    // Handle error
}
```
```Objective-c
NSDictionary *preferenceBody = @{
                                 @"amount" : @10,
                                 @"itemId" : @29334,
                                 @"customerId" : @207,
                                 @"payerEmail" : @"john@yourdomain.com" };


[CustomServer createCheckoutPreferenceWithUrl:@"https://your-base-url.com" uri:@"/your-create-preference-uri" bodyInfo:preferenceBody success:^(CheckoutPreference * checkoutPreference) {
    [self startMercadoPagoCheckoutWithCheckoutPreference: checkoutPreference];

} failure:^(NSError * error) {
    // Ups, something went wrong
}];
```

]]]

### 2. 2. Crie um botão de pagamento

Como exemplo, sugerimos que inicie o fluxo do Mercado Pago a partir de um botão.

[[[

```android
===
1. Crie uma Atividade para inserir o botão (**MainActivity**, por exemplo).  
2. Adicione um campo de texto para mostrar o resultado do pagamento.
3. Cole o seguinte código de exemplo em **res/layout/activity_main.xml**.
===

<FrameLayout xmlns:android='http://schemas.android.com/apk/res/android'
xmlns:tools='http://schemas.android.com/tools'
android:layout_width='match_parent'
android:layout_height='match_parent'
android:paddingLeft='@dimen/activity_horizontal_margin'
android:paddingRight='@dimen/activity_horizontal_margin'
android:paddingTop='@dimen/activity_vertical_margin'
android:paddingBottom='@dimen/activity_vertical_margin'
android:orientation='vertical'
tools:context='.MainActivity'>
<include layout="@layout/mpsdk_view_progress_bar"/>
<LinearLayout
android:id="@+id/mpsdkRegularLayout"
android:layout_width="match_parent"
android:layout_height="match_parent"
android:orientation="vertical">

<Button
android:layout_width='match_parent'
android:layout_height='50dp'
android:layout_marginTop='25dp'
android:gravity='center'
android:text='Pagar $10'
android:onClick='submit'/>

<TextView
android:layout_width='match_parent'
android:layout_height='wrap_content'
android:id='@+id/mp_results'
android:paddingTop='50dp'/>
</LinearLayout>
</FrameLayout>
```
```swift
===
1. Crie um ViewController para inserir o botão (**MainViewController**, por exemplo).
2. Insira um botão no **.xib** correspondente.
3. Adicione um campo de texto para mostrar o resultado do pagamento.
4. Cole o seguinte código de exemplo em sua classe **MainViewController.swift**.
5. No próximo passo, você trabalhará no evento associado ao clique do botão (startCheckout).
===

import UIKit
import MercadoPagoSDK

class MainViewController: UIViewController {
@IBOutlet weak var payButton: UIButton!
@IBOutlet weak var paymentResult: UITextField!

override func viewDidLoad() {
super.viewDidLoad()

self.payButton.addTarget(self,
action: #selector(MainViewController.startCheckout),
for: .touchUpInside)
}
}
```   
```objective-c
===
1. Crie um ViewController para inserir o botão (**MainViewController**, por exemplo).
2. Insira um botão no **.xib** correspondente.
3. Adicione um campo de texto (em nosso exemplo, nós o chamamos de paymentResult) para mostrar o resultado do pagamento.
4. Cole o seguinte código de exemplo em sua classe **MainViewController.c**.
5. No próximo passo, você trabalhará no evento associado ao clique do botão (startCheckout).
===

@import MercadoPagoSDK;

@interface MainExamplesViewController()
@property (weak, nonatomic) IBOutlet UIButton *button;
@property (weak, nonatomic) IBOutlet UILabel *label;

@end
@implementation MainExamplesViewController

- (void)viewDidLoad {
[super viewDidLoad];

[_button addTarget:self action:@selector(startCheckout:)
forControlEvents:UIControlEventTouchUpInside];
}
@end
```

]]]

### 3. Inicie o Checkout!

Após ter criado a preferência de pagamento e definido um evento a partir do qual deseja iniciar o fluxo de pagamento, você poderá iniciar o nosso Checkout com o seguinte código:

[[[

```android
private void startMercadoPagoCheckout(CheckoutPreference checkoutPreference) {
  new MercadoPagoCheckout.Builder()
    .setActivity(activity)
    .setPublicKey("ENV_PUBLIC_KEY").setCheckoutPreference(checkoutPreference)
    .startForPayment();
}
```
```swift
===
O fluxo do nosso checkout está baseado em **NavigationController**. Caso sua aplicação também esteja baseada em NavigationControllers, você pode iniciar o fluxo do Checkout utilizando o NavigationController da sua aplicação, ou você pode criar um, iniciar o Checkout sobre ele e, em seguida, apresentá-lo.
===

public func startMercadoPagoCheckout(_ checkoutPreference CheckoutPreference) {

  let checkout = MercadoPagoCheckout(publicKey: "ENV_PUBLIC_KEY", accessToken: nil, checkoutPreference: checkoutPreference,
  navigationController: self.navigationController!)

  checkout.start()
}
```
```objective-c
===
O fluxo do nosso checkout está baseado em **NavigationController**. Caso sua aplicação também esteja baseada em NavigationControllers, você pode iniciar o fluxo do Checkout utilizando o NavigationController da sua aplicação, ou você pode criar um, iniciar o Checkout sobre ele e, em seguida, apresentá-lo.
===

-(void)startMercadoPagoCheckout:(CheckoutPreference *)checkoutPreference {
    MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithPublicKey: "ENV_PUBLIC_KEY" checkoutPreference:checkoutPreference discount:nil navigationController:self.navigationController];
    [checkout start];
}
```

]]]


### 4. Obtenha a resposta

O SDK sempre retornará o resultado do pagamento.

Se houve qualquer erro que não pôde ser evitado ou o usuário abandonou o fluxo, ele retornará um objeto que representa o erro para que você possa entender o que aconteceu.

Estes são os atributos mais importantes de pagamento:

- id: Identificação do pagamento.
- status: Status do pagamento.
- payment_method_id: Identificador do meio de pagamento selecionado pelo usuário.
- payment_type_id: Tipo de meio de pagamento selecionado.
- card: Objeto que identifica o cartão do usuário.
- issuer_id: Identificação do banco do cartão selecionado pelo usuário.
- installments: Número de parcelas selecionado.

Os possíveis estados de um pagamento são:

![payment-status](/images/payments-status-transitions-diagram.png)

Você poderá obter a resposta com o seguinte código:

[[[

```android
@Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == MercadoPagoCheckout.CHECKOUT_REQUEST_CODE) {
            if (resultCode == MercadoPagoCheckout.PAYMENT_RESULT_CODE) {
                Payment payment = JsonUtil.getInstance().fromJson(data.getStringExtra("payment"), Payment.class);
                ((TextView) findViewById(R.id.mp_results)).setText("Resultado del pago: " + payment.getStatus());
                //Done!
            } else if (resultCode == RESULT_CANCELED) {
                if (data != null && data.getStringExtra("mercadoPagoError") != null) {
                    MercadoPagoError mercadoPagoError = JsonUtil.getInstance().fromJson(data.getStringExtra("mercadoPagoError"), MercadoPagoError.class);
                    ((TextView) findViewById(R.id.mp_results)).setText("Error: " +  mercadoPagoError.getMessage());
                    //Resolve error in checkout
                } else {
                    //Resolve canceled checkout
                }
            }
        }
    }
```      
```swift
MercadoPagoCheckout.setPaymentCallback { (payment) in
self.payment = payment
}

checkout.setCallbackCancel {
   // Resolved cancel checkout
   self.navigationController?.popToRootViewController(animated: true)
}
```
```objective-c
[MercadoPagoCheckout setPaymentCallbackWithPaymentCallback:^(Payment * payment) {
self.payment = payment
}];

[self.checkout setCallbackCancelWithCallback:^{
	// Resolved cancel checkout
  [self.navigationController popToRootViewControllerAnimated:YES];
}];
```

]]]

### Configuração de cor

É possível alterar as cores da interface gráfica do fluxo de pagamento, bem como escurecer a fonte utilizando a classe DecorationPreference. Você pode fazer isso utilizando o seguinte código:

[[[

```android
private void startMercadoPagoCheckout(CheckoutPreference checkoutPreference) {
  DecorationPreference decorationPreference = new DecorationPreference.Builder()
    .setBaseColor(ContextCompat.getColor(context, R.color.your_color))
    .enableDarkFont() //Optional
    .build();

  new MercadoPagoCheckout.Builder()
    .setActivity(activity)
    .setDecorationPreference(decorationPreference)
    .setPublicKey("ENV_PUBLIC_KEY")
    .setCheckoutPreference(checkoutPreference)
    .startForPayment();
}
```
```swift
public func startMercadoPagoCheckout(_ checkoutPreference CheckoutPreference) {
    let decorationPreference: DecorationPreference = DecorationPreference()
    decorationPreference.setBaseColor(color: UIColor.purple)
    decorationPreference.enableDarkFont()
    MercadoPagoCheckout.setDecorationPreference(decorationPreference)

    let checkout = MercadoPagoCheckout(publicKey: "ENV_PUBLIC_KEY", accessToken: nil, checkoutPreference: checkoutPreference,
    navigationController: self.navigationController!)

    checkout.start()
}
```
```objective-c
DecorationPreference *decorationPreference = [[DecorationPreference alloc] initWithBaseColor:[UIColor fromHex:@"#CA254D"]];
[decorationPreference enableDarkFont];
[MercadoPagoCheckout setDecorationPreference:decorationPreference];

-(void)startMercadoPagoCheckout:(CheckoutPreference *)checkoutPreference {
    MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithPublicKey: "ENV_PUBLIC_KEY" checkoutPreference:checkoutPreference discount:nil navigationController:self.navigationController];
    [checkout start];
}
```

]]]

O SDK permite configurar a cor no formato hexadecimal, ou seja, por exemplo: **setBaseColor("#060d72")**.

## Ative as notificações de pagamento

As notificações informam automaticamente sobre seus novos pagamentos e atualizações de status.

Isto permitirá que você gerencie seu estoque e mantenha seu sistema sincronizado.

Para mais informações, consulte a seção de [Notificações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/webhooks/webhooks).

## Teste a integração

Você pode testar sua integração antes de partir para a produção, a fim de verificar o funcionamento e fazer os ajustes necessários.

Para isso, deve-se utilizar usuários e cartões de teste.

Para mais informações, consulte a seção de [Testes](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/mobile-checkout/testing).


### Próximos passos

- Visite a seção [Personalização](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/mobile-checkout/v3/personalization) para adequar o fluxo de pagamento às suas necessidades.
- Para informações sobre como testar, vá para a seção [testando a integração](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/mobile-checkout/v3/testing).