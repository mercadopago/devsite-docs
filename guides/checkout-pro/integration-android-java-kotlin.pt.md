# Integrar o Checkout Pro para Android com Java ou Kotlin

> WARNING
>
> Importante
>
> Antes de começar a integrar o Checkout Pro para Mobile, você precisará ter uma preferência criada em seu backend. Se ainda não o fez, vá para [Criação de preferência](/developers/pt/docs/checkout-pro/integrate-preferences).

No desenvolvimento de aplicações móveis, muitas vezes surge a necessidade de exibir conteúdo da web dentro da aplicação. Para isso, existem diversas opções, entre as quais se destacam a utilização de Custom Tabs (para Android) e Safari View Controller (para iOS). Essas tecnologias permitem que páginas da web sejam abertas em um navegador nativo incorporado á aplicação, proporcionando uma experiência de navegação mais suave e consistente aos usuários.

Nesta etapa iremos instalar e configurar as dependências necessárias para implementar **Custom Tabs** em seu projeto desenvolvido em Java ou Kotlin.

> CLIENT_SIDE
>
> h2
>
> Configuração para Android nativo

Se você usa Android Native para desenvolver sua aplicação, a primeira coisa que você precisa é instalar essa dependência no arquivo **build.gradle**.

```Java
dependencies {
    ...
    implementation "androidx.browser:browser:1.4.0"
}
```


O próximo passo é **implementar as Custom Tab**. Para fazer isso, você só precisa instanciá-las. A seguir, compartilhamos um exemplo de uma Custom Tab simples.

> As Custom Tabs podem ser configuradas com estilos personalizáveis. Para saber mais, acesse o [guia de Custom Tabs](https://developer.chrome.com/docs/android/custom-tabs/guide-get-started/).


O código a seguir pode ser colocado ao abrir uma atividade ou ao executar uma ação nela, onde o valor `url` é igual ao `init url` do nosso checkout.

[[[
```Java
String url = "URL-PREFERENCE";
CustomTabsIntent intent = new CustomTabsIntent.Builder()
       .build();
intent.launchUrl(MainActivity.this, Uri.parse(url));
```
```Kotlin
val url = "URL-PREFERENCE"
    val intent = CustomTabsIntent.Builder()
        .build()
    intent.launchUrl(this@MainActivity, Uri.parse(url))
```
]]]

> CLIENT_SIDE
>
> h2
>
> Como retornar ao sua app

**Deep Links**, também conhecidos como links diretos, são uma forma poderosa de permitir a navegação direta para telas ou seções específicas de uma aplicação móvel.

### Criar um Deep Link

A partir do nosso checkout, é possível configurar Deep Links para retornar ao sua aplicação, seja clicando em um link "Voltar" ou automaticamente após concluir um fluxo de pagamento bem-sucedido, redirecionando-o de volta ao sua aplicação.

Para isso, devemos adicionar as propriedades back_urls e auto_return ao criar a preferência de pagamento, conforme necessário.

Para saber mais, você pode acessar a documentação sobre [URLs de retorno](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).

> CLIENT_SIDE
>
> h2
>
> Configuração da aplicação para gerenciar o Deep Link

Para configurar um Deep Link nativo no Android, vá para o arquivo Android **/app/src/main/AndroidManifest.xml** e declare qual atividade estará disponível como Deep Link. Abaixo, compartilhamos um exemplo de como é uma atividade com Deep Link.

```AndroidManifest.xml
<activity
   android:name=".Congrats"
   android:exported="true"
   android:label="@string/deeplink"
   android:theme="@style/Theme.MyApplication.NoActionBar" >

   <intent-filter>
       <action android:name="android.intent.action.VIEW" />
       <category android:name="android.intent.category.DEFAULT" />
       <category android:name="android.intent.category.BROWSABLE" />
       <!-- Accepts URIs that begin with "yourapp://congrats" -->
       <data android:scheme="yourapp"
           android:host="congrats" />

   </intent-filter>
</activity>
```

Nos valores `intent`, você deverá definir a atividade como navegável por outras aplicações. Com os valores `scheme` e `host`, você pode definir o Deep Link da aplicacão para uma atividade específica.

Lembre-se de que este Deep Link será usado em todos os `back_urls` da sua preferência. Nos ciclos da atividade que foi exposta (por exemplo, onCreate, onResume), você poderá inserir sua lógica de negócios após o pagamento.


