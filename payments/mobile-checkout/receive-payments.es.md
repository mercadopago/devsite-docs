**Recibiendo Pagos**
============

> Esta guía asume que ya has seguido los pasos de la sección introducción de la documentación para la instalación del SDK.

Esta guía te ayudará a integrar el componente visual de pago de Mercado Pago en tu aplicación. Este componente maneja la selección del medio de pago, la recolección de datos del medio pago del usuario y la comunicación del resultado de pago.


## Configura tu servidor

Para poder iniciar el flujo de pago, necesitas obtener la información sobre el producto o servicio a pagar. 

Esta información se llama [preferencia de pago](https://www.mercadopago.com.ar/developers/en/api-docs/basic-checkout/checkout-preferences/) y contiene: 

1. Datos y monto de lo que se va a pagar.
2. Datos de tu comprador.
3. Medios de pago que aceptas.
4. ID de referencia en tu sistema.

La preferencia debe ser creada desde tu servidor en los servidores de Mercado Pago.

### ¿Cómo crear una Preferencia de Pago?

#### Primero:

1. [Registra la cuenta de MercadoPago](https://registration.mercadopago.com.ar/registration-mp?mode=mp) dónde recibirás el dinero.
2. [Crea una aplicación.](https://applications.mercadopago.com.ar/list?platform=mp)
3. [Configura tus credenciales.](https://www.mercadopago.com/mla/account/credentials?type=basic)

#### Luego, en tu Servidor:

[Crea una preferencia de pago](https://www.mercadopago.com.ar/developers/es/solutions/payments/basic-checkout/receive-payments/) y retorna la respuesta que te dan nuestros servicios. Hazlo desde tu servidor, porque tendrás que firmarla con tu clave privada. De esta forma nos aseguramos proteger tanto al comprador, como a tu propio usuario vendedor. 

En tu servidor, al crear la preferencia, podrás configurar si deseas excluir algún medio de pago y si deseas una cantidad de cuotas por defecto.

Las preferencias completas funcionan mucho mejor. Envíanos toda la información que puedas y verás que ofrecerás tan buena experiencia para los compradores, que **¡tendrás más pagos acreditados!**

> **Tip:** Puedes probar [nuestras SDKs del lado Servidor.](https://www.mercadopago.com.ar/developers/es/tools/)

## Integra el flujo de pago de Mercado Pago en tu aplicación

### Conecta tu aplicación con tu servidor

En el SDK te ofrecemos una clase llamada **CustomServer** para que la conexión con tu servidor sea más sencilla. El método createPreference hace un POST y envía como cuerpo del mensaje el mapa que hayas definido (preferenceMap). Indícanos tu URL base (https://api.tunombre.com) y la URI (/create_preference) donde esperas los datos para crear la preferencia.

CustomServer se encargará de transformar la respuesta de tu servicio (la misma que los servicios de Mercado Pago) en un objeto **CheckoutPreference**, que cuyo ID es el punto de entrada a nuestro checkout.

Crea la preferencia en tu servidor desde tu aplicación con el siguiente código:

[Android]
```java
public void submit(View view) {
// Crea un mapa con los datos de la compra y el mail de tu cliente.
Map<String, Object> preferenceMap = new HashMap<>();
preferenceMap.put("item_id", "1");
preferenceMap.put("amount", new BigDecimal(10));
preferenceMap.put("currency_id", "ARS");
preferenceMap.put("payer_email", "customermail@test.com");

final Activity activity = this;
LayoutUtil.showProgressLayout(activity);
CustomServer.createCheckoutPreference(activity, "https://api.tunombre.com", "/create_preference", preferenceMap, new Callback<CheckoutPreference>() {
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
[iOS - Swift]
```swift
let preferenceBody : [String : Any] = ["amount" : 10,
"itemId" : 29334, "customerId": 207,
"payer_email" : "customermail@test.com"]

let servicePreference = ServicePreference()
servicePreference.setCreateCheckoutPreference(baseURL: “https://api.tunombre.com“, URI: “/create_preference”, additionalInfo: preferenceBody as NSDictionary)
MercadoPagoCheckout.setServicePreference(servicePreference)

MerchantServer.createPreference(
success: { (checkoutPreference) in
startMercadoPagoCheckout(checkoutPreference)
}, failure: { (error) in
// Ups, something went wrong
})
```
[iOS - Objective-C]
```Objective-c
NSDictionary *preferenceBody = @{
@“amount” : @10,
@“itemId” : @29334,
@"customerId" : @207,
@"payerEmail" : @"cusomermail@test.com" };

ServicePreference * servicePreference = [[ServicePreference alloc] init];
[servicePreference setCreateCheckoutPreferenceWithBaseURL:@"" URI:@"" additionalInfo:preferenceBody];
[MercadoPagoCheckout setServicePreference:servicePreference];

[MerchantServer createPreferenceWithSuccess:^(CheckoutPreference * checkoutPreference) {
[self startMercadoPagoCheckoutWithCheckoutPreference: checkoutPreference];
} failure:^(NSError * _Nonnull) {
// Ups, something went wrong
}];
```

### Crea un botón de pago

#### A modo de ejemplo proponemos que inicies el flujo de MercadoPago desde un botón.

[Android]
> 1. Crea un Activity para insertar el botón (**MainActivity**, por ejemplo).  
> 2. Agrega un campo de texto para mostrar el resultado del pago. 
> 3. Pega el siguiente código de ejemplo en **res/layout/activity_main.xml**.
```xml
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
----------
[iOS - Swift]
> 1. Crea un ViewController para insertar el botón (**MainViewController**, por ejemplo).
>2.  Inserta un botón en el **.xib** correspondiente.
> 3. Agrega un campo de texto para mostrar el resultado del pago.
> 4. Pega el siguiente código de ejemplo en tu clase **MainViewController.swift**.
> 5. En el siguiente paso estarás trabajando sobre el evento asociado al click botón (startCheckout).
```swift
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
----------
[iOS - Objective]
> 1. Crea un ViewController para insertar el botón (**MainViewController**, por ejemplo).
>2.  Inserta un botón en el .xib correspondiente.
> 3. Agrega un campo de texto (en nuestro caso lo llamamos paymentResult) para mostrar el resultado del pago.
> 4. Pega el siguiente código de ejemplo en tu clase **MainViewController.swift**.
> 5. En el siguiente paso estarás trabajando sobre el evento asociado al click botón (startCheckout).

```Objective-c
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
----------

#### ¡Inicia nuestro Checkout!

Para iniciar nuestro checkout sólo necesitas:

1. Clave pública: es un identificador único de tu cuenta, tu aplicación y sus configuraciones.
- [Crea tus credenciales.](https://www.mercadopago.com/mla/account/credentials)
- [Configura tu aplicación.](https://applications.mercadopago.com/)
2. Identificador de la preferencia de pago.

Una vez creada la Preferencia de Pago estás en condiciones de iniciar nuestro Checkout con el siguiente código:

[Android]
```java
private void startMercadoPagoCheckout(CheckoutPreference checkoutPreference) {
new MercadoPagoCheckout.Builder()
.setActivity(activity)
.setPublicKey(publicKey)                .setCheckoutPreference(checkoutPreference)
.startForPayment();
}
```
[iOS - Swift]

El flujo de nuestro checkout esta basado en **NavigationController**, para iniciar el mismo necesitamos hacerlo sobre un navigation controller. Si tu aplicación esta basada también en NavigationControllers podes iniciar el flujo de Checkout utilizando el NavigationController de tu aplicación, sino puedes crear un nuevo NavigationController, iniciar el Checkout con él y luego presentarlo.

```swift
public func startMercadoPagoCheckout(_ checkoutPreference CheckoutPreference) {
let publicKey = "TEST-ad365c37-8012-4014-84f5-6c895b3f8e0a"

let checkout = MercadoPagoCheckout(publicKey: publicKey, accessToken: nil, checkoutPreference: checkoutPreference,
navigationController: self.navigationController!)

checkout.start()
}
```
[iOS - Objective-C]

El flujo de nuestro checkout esta basado en **NavigationController**, para iniciar el mismo necesitamos hacerlo sobre un navigation controller. Si tu aplicación esta basada también en NavigationControllers podes iniciar el flujo de Checkout utilizando el NavigationController de tu aplicación, sino puedes crear un nuevo NavigationController, iniciar el Checkout con él y luego presentarlo.
```Objective-c
-(void)startMercadoPagoCheckout:(CheckoutPreference *)checkoutPreference {
self.mpCheckout = [[MercadoPagoCheckout alloc] initWithPublicKey: TEST_PUBLIC_KEY accessToken: nil checkoutPreference:checkoutPreference paymentData:nil discount:nil navigationController:self.navigationController paymentResult: nil];
[self.mpCheckout start];
}
```
### ¡Obtén la respuesta!

El SDK devolverá siempre un resultado del pago.

Si hubo algún error insalvable o el usuario abandonó el flujo, devolverá una excepción para que puedas entender qué pasó.

Estos son los atributos más importantes del pago:

- id: Identificador del pago.
- status: [Estados del pago.](https://www.mercadopago.com.ar/developers/es/api-docs/custom-checkout/webhooks/payment-status/)
- payment_method_id: Identificador del medio de pago que eligió tu usuario.
- payment_type_id: Tipo de medio elegido.
- card: Objeto que identifica la tarjeta de tu usuario.
- issuer_id: Identificador del banco de la tarjeta que eligió tu usuario.
- installments: Cantidad de cuotas elegidas.


Podrás obtener la respuesta con el siguiente código:

[Android]
```java
@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
if (requestCode == MercadoPagoCheckout.CHECKOUT_REQUEST_CODE) {
if (resultCode == MercadoPagoCheckout.PAYMENT_RESULT_CODE) {
Payment payment = JsonUtil.getInstance().fromJson(data.getStringExtra("payment"), Payment.class);
((TextView) findViewById(R.id.mp_results)).setText("Resultado del pago: " + payment.getStatus());
//Done!
} else if (resultCode == RESULT_CANCELED) {
if (data != null && data.getStringExtra("mercadoPagoError") != null) {
//Resolve error in checkout
} else {
//Resolve canceled checkout
}
}
}
}
```      
[iOS - Swift]
```swift
MercadoPagoCheckout.setPaymentCallback { (payment) in
self.payment = payment
}

MercadoPagoCheckout.setCallback { (Void) in
// Resolved cancel checkout
}
```
[iOS - Objective-C]
```Objective-c
[MercadoPagoCheckout setPaymentCallbackWithPaymentCallback:^(Payment * payment) {
self.payment = payment
}];

[MercadoPagoCheckout setCallbackWithCallback:^{
// Resolved cancel checkout
}];
```

**Configura tu color**
============

Puedes cambiar los colores de la interfaz gráfica del flujo de pago, como así también hacer más oscura la fuente utilizando la clase DecorationPreference. Esto lo puedes lograr con el siguiente código:

[Android]
```java
private void startMercadoPagoCheckout(CheckoutPreference checkoutPreference) {
DecorationPreference decorationPreference = new DecorationPreference.Builder()
.setBaseColor(ContextCompat.getColor(context, R.color.your_color))
.enableDarkFont() //Optional
.build();

new MercadoPagoCheckout.Builder()
.setActivity(activity)
.setDecorationPreference(decorationPreference)
.setPublicKey(publicKey)
.setCheckoutPreference(checkoutPreference)
.startForPayment();
}
``` 
[iOS - Swift]
```swift
public func startMercadoPagoCheckout(_ checkoutPreference CheckoutPreference) {
let decorationPreference: DecorationPreference = DecorationPreference()
decorationPreference.setBaseColor(color: UIColor.purple)
decorationPreference.enableDarkFont()
MercadoPagoCheckout.setDecorationPreference(decorationPreference)

let publicKey = "TEST-ad365c37-8012-4014-84f5-6c895b3f8e0a"

let checkout = MercadoPagoCheckout(publicKey: publicKey, accessToken: nil, checkoutPreference: checkoutPreference,
navigationController: self.navigationController!)

checkout.start()
}
```
[iOS - Objective-C]
```Objective-c
DecorationPreference *decorationPreference = [[DecorationPreference alloc] initWithBaseColor:[UIColor fromHex:@"#CA254D"]];
[decorationPreference enableDarkFont];
[MercadoPagoCheckout setDecorationPreference:decorationPreference];

-(void)startMercadoPagoCheckout:(CheckoutPreference *)checkoutPreference {
self.mpCheckout = [[MercadoPagoCheckout alloc] initWithPublicKey: TEST_PUBLIC_KEY accessToken: nil checkoutPreference:checkoutPreference paymentData:nil discount:nil navigationController:self.navigationController paymentResult: nil];
[self.mpCheckout start];
}
```
El SDK permite setear el color en el formato hexadecimal,es decir por ejemplo **setBaseColor("#13123");**.

*** Próximos pasos

- Visita la sección Personalización para adecuar el flujo de pago a tus necesidades.
- Haz pruebas de la integración antes de salir a producción.
----------
