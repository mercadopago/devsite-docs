---
sites_supported:
    - mla
    - mlb
    - mlm
    - mco
    - mlc
    - mpe
    - mlv
    - global
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
MercadoPago::SDK.configure(ACCESS_TOKEN: ENV_ACCESS_TOKEN)
```
]]]

Depois você deverá adicionar os atributos das suas preferências de pagamento:

[[[
```php
<?php
  $preference = new MercadoPago\Preference();

  $item = new MercadoPago\Item();
  $item->title = "[FAKER][COMMERCE][PRODUCT_NAME]";
  $item->quantity = [FAKER][NUMBER][BETWEEN][1,10];
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
    .setTitle("[FAKER][COMMERCE][PRODUCT_NAME]")
    .setQuantity([FAKER][NUMBER][BETWEEN][1,10])
    .setCategoryId("[FAKER][CURRENCY][ACRONYM]")
    .setUnitPrice((float)[FAKER][COMMERCE][PRICE]);

Payer payer = new Payer();
payer.setEmail("[FAKER][INTERNET][FREE_EMAIL]");

preference.setPayer(payer);
preference.appendItem(item);
preference.save();

```
```javascript
var preference = {}

var item = {
  title: '[FAKER][COMMERCE][PRODUCT_NAME]',
  quantity: [FAKER][NUMBER][BETWEEN][1,10],
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
preference = MercadoPago::Preference.new()

item = MercadoPago::Item.new()
item.title="[FAKER][COMMERCE][PRODUCT_NAME]"
item.quantity= [FAKER][NUMBER][BETWEEN][1,10]
item.currency_id = '[FAKER][CURRENCY][ACRONYM]'
item.unit_price = [FAKER][COMMERCE][PRICE]

payer = MercadoPago::Payer.new()
payer.email="[FAKER][INTERNET][FREE_EMAIL]"

preference.items = [item]
preference.payer = payer

preference.save
```
```csharp
Preference preference = new Preference();

 preference.Items.Add(
  new Item()
  {
    Id = "1234",
    Title = "[FAKER][COMMERCE][PRODUCT_NAME]", 
    Quantity = [FAKER][NUMBER][BETWEEN][1,10],
    CurrencyId = "[FAKER][CURRENCY][ACRONYM]",
    UnitPrice = (float)[FAKER][COMMERCE][PRICE]
  }
  preference.Payer = new Payer()
  {
    Email = "[FAKER][INTERNET][FREE_EMAIL]"
  };

  preference.Save();

```
```csharp
using MercadoPago;
MercadoPago.SDK.SetAccessToken = "ENV_ACCESS_TOKEN";
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
    "email": "[FAKER][INTERNET][FREE_EMAIL]",
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
      "street_number": [FAKER][ADDRESS][BUILDING_NUMBER],
      "zip_code": "[FAKER][ADDRESS][ZIP_CODE]"
    }
  },
  ...
}
```

## Integre o fluxo de pagamentos do Mercado Pago em sua aplicação


### 1. Crie um botão de pagamento

Como exemplo, sugerimos que inicie o fluxo do Mercado Pago a partir de um botão.

[[[

```android-xml
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
      android:onClick='startMercadoPagoCheckout'/>

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
5. No próximo passo, você trabalhará no evento associado ao clique do botão (startMercadoPagoCheckout).
===

import UIKit
import MercadoPagoSDK

class MainViewController: UIViewController {
@IBOutlet weak var payButton: UIButton!
@IBOutlet weak var paymentResult: UITextField!

override func viewDidLoad() {
  super.viewDidLoad()

  self.payButton.addTarget(self,
    action: #selector(MainViewController.startMercadoPagoCheckout),
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
5. No próximo passo, você trabalhará no evento associado ao clique do botão (startMercadoPagoCheckout).
===

@import MercadoPagoSDK;

@interface MainExamplesViewController()
@property (weak, nonatomic) IBOutlet UIButton *button;
@property (weak, nonatomic) IBOutlet UILabel *label;

@end
@implementation MainExamplesViewController

- (void)viewDidLoad {
[super viewDidLoad];

[_button addTarget:self action:@selector(startMercadoPagoCheckout:)
forControlEvents:UIControlEventTouchUpInside];
}
@end
```

]]]

### 2. Inicie o Checkout!

Após ter criado a preferência de pagamento e definido um evento a partir do qual deseja iniciar o fluxo de pagamento, você poderá iniciar o nosso Checkout com o seguinte código:

[[[

```android
===
Para iniciar o checkout você deve usar o método **startPayment** passando como parâmetros o contexto do Android e um RequestCode que é o número com o qual você irá identificar a resposta do checkout no método **onActivityResult**.
===

private static final int REQUEST_CODE = 1;

private void startMercadoPagoCheckout(final String checkoutPreferenceId) {
  new MercadoPagoCheckout.Builder("ENV_PUBLIC_KEY", checkoutPreferenceId).build()
                    .startPayment(MainActivity.this, REQUEST_CODE);
}
```
```swift
@IBAction func startMercadoPagoCheckout(_ sender: Any) {
    MercadoPagoCheckout.init(builder: MercadoPagoCheckoutBuilder.init(publicKey: "ENV_PUBLIC_KEY", preferenceId: checkoutPreferenceId))
    .start(navigationController: self.navigationController!)
}
```
```objective-c
- (IBAction)startMercadoPagoCheckout:(id)sender {
  MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithBuilder:[[MercadoPagoCheckoutBuilder alloc] initWithPublicKey:@"ENV_PUBLIC_KEY" preferenceId:@"PREFERENCE_ID"]];
  [checkout startWithNavigationController:self.navigationController lifeCycleProtocol:nil];
}
```

]]]


### 3. Obtenha a resposta

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
===
Use o RequestCode enviado em **startPayment** para obter o resultado do checkout em **onActivityResult**.
===
@Override
protected void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
    if (requestCode == REQUEST_CODE) {
        if (resultCode == MercadoPagoCheckout.PAYMENT_RESULT_CODE) {
            final Payment payment = (Payment) data.getSerializableExtra(MercadoPagoCheckout.EXTRA_PAYMENT_RESULT);
            ((TextView) findViewById(R.id.mp_results)).setText("Resultado del pago: " + payment.getStatus());
            //Done!
        } else if (resultCode == RESULT_CANCELED) {
            if (data != null && data.getExtras() != null
                && data.getExtras().containsKey(MercadoPagoCheckout.EXTRA_ERROR)) {
                final MercadoPagoError mercadoPagoError =
                    (MercadoPagoError) data.getSerializableExtra(MercadoPagoCheckout.EXTRA_ERROR);
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
===
Para obter uma resposta de pagamento, você deve implementar o protocolo **PXLifeCycleProtocol** e passá-lo como um argumento ao inicializar o checkout. Os métodos que devem ser implementados no protocolo são **finishCheckout** e **cancelCheckout**, conforme mostrado no exemplo a seguir. Ao implementar este protocolo, o integrador é responsável por concluir o fluxo de checkout, neste exemplo de implementação no final um **popToRootViewController** é executado.
===
@IBAction func startMercadoPagoCheckout(_ sender: Any) {
    MercadoPagoCheckout.init(builder: MercadoPagoCheckoutBuilder.init(publicKey: "ENV_PUBLIC_KEY", preferenceId: checkoutPreferenceId))
    .start(navigationController: self.navigationController!, lifeCycleProtocol: self)
}

func finishCheckout() -> ((_ payment: PXResult?) -> Void)? {
    return  ({ (_ payment: PXResult?) in
        print(payment)
        self.navigationController?.popToRootViewController(animated: false)
    })
}

func cancelCheckout() -> (() -> Void)? {
    return {
        self.navigationController?.popToRootViewController(animated: true)
    }
}
```
```objective-c
===
Para obtener una respuesta de pago se deberá implementar el protocolo **PXLifeCycleProtocol** y pasarlo como argumento al momento de inicializar el checkout. Los métodos que se deben implementar del protocolo son **finishCheckout** y **cancelCheckout** como se muestra en el siguiente ejemplo. Al implementar este protocolo el integrador es responsable de finalizar el flujo de checkout, en este ejemplo de implementación al finalizar se ejecuta un **popToRootViewController**.
===
- (IBAction)startMercadoPagoCheckout:(id)sender {
  MercadoPagoCheckout *checkout = [[MercadoPagoCheckout alloc] initWithBuilder:[[MercadoPagoCheckoutBuilder alloc] initWithPublicKey:@"ENV_PUBLIC_KEY" preferenceId:@"PREFERENCE_ID"]];
  [checkout startWithNavigationController:self.navigationController lifeCycleProtocol:self];
}

-(void (^ _Nullable)(void))cancelCheckout {
    return ^ {
        [self.navigationController popToRootViewControllerAnimated:YES];
    };
}

- (void (^)(id<PXResult> _Nullable))finishCheckout {
    return nil;
}
```

]]]

## Ative as notificações de pagamento

As notificações informam automaticamente sobre seus novos pagamentos e atualizações de status.

Isto permitirá que você gerencie seu estoque e mantenha seu sistema sincronizado.

Para mais informações, consulte a seção de [Notificações](/guides/notifications/webhooks.pt.md).

## Teste a integração

Você pode testar sua integração antes de partir para a produção, a fim de verificar o funcionamento e fazer os ajustes necessários.

Para isso, deve-se utilizar usuários e cartões de teste.

Para mais informações, consulte a seção de [Testes](/guides/payments/mobile-checkout/testing.pt.md).


### Próximos passos

- Visite a seção [Personalização](/guides/payments/mobile-checkout/personalization.pt.md) para adequar o fluxo de pagamento às suas necessidades.
