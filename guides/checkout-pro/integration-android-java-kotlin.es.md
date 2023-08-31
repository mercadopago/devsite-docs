# Integrar Checkout Pro para Android con Java o Kotlin

> WARNING
>
> Importante
>
> Antes de comenzar a integrar Checkout Pro para Mobile, deberás contar con una preferencia creada en tu backend. Si aún no lo has hecho, ve a [Creación de preferencia](/developers/es/docs/checkout-pro/integrate-preferences).

En el desarrollo de aplicaciones móviles, a menudo surge la necesidad de mostrar contenido web dentro de la aplicación. Para lograr esto, existen varias opciones, entre las cuales se destacan el uso de Custom Tabs (para Android) y Safari View Controller (para iOS). Estas tecnologías permiten abrir páginas web en un navegador nativo integrado en la aplicación, brindando una experiencia de navegación más fluida y coherente para los usuarios.

En este paso vamos a instalar y configurar las dependencias necesarias para implementar **Custom Tabs** en tu proyecto desarrollado en Java o Kotlin. 

> CLIENT_SIDE
>
> h2
>
> Configuración para Android Nativo

Si usas Android Nativo para desarrollar tu aplicación lo primero que necesitas es instalar esta dependencia en el archivo **build.gradle**.

```Java
dependencies {
    ...
    implementation "androidx.browser:browser:1.4.0"
}
```

El siguiente paso es **implementar las Custom Tabs**. Para hacerlo, sólo deberás instanciarlas. A continuación, te compartimos un ejemplo de una Custom Tab simple. 

> Las Custom Tabs pueden ser configuradas con estilos customizables. Para conocer más, accede a la [guía de Custom Tabs](https://developer.chrome.com/docs/android/custom-tabs/guide-get-started/).


El siguiente código puede ser colocado al abrir una actividad o al ejecutar una acción de la misma, en donde el valor `url` es igual a la `init url` de nuestro checkout.

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
> Cómo volver a tu App 

Los **Deep Links**, también conocidos como enlaces profundos, son una forma poderosa de permitir la navegación directa a pantallas o secciones específicas de una aplicación móvil. 

### Crear un Deep Link
Desde nuestro checkout es posible configurar Deep Links para volver a tu aplicación, ya sea haciendo click en un link de “Volver”, o de forma automática al terminar todo un flujo de pago exitoso, para luego ser redirigido a tu App.
Para esto, debemos agregar en la creación de la preferencia de pago las propiedades `back_urls` y `auto_return`, según corresponda.

Para conocer más, puedes acceder a la documentación de [URLs de retorno](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).

> CLIENT_SIDE
>
> h2
>
> Configuración de la aplicación para la gestión del Deep Link

Para configurar un deeplink nativo en android, dirígete al archivo android **/app/src/main/AndroidManifest.xml** y declara cuál es la actividad que va estar disponible como deeplink. A continuación te compartimos un ejemplo de cómo es una actividad con Deep Link.

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

En los valores `intent` deberás establecer que la actividad sea navegable por otras aplicaciones. Con los valores `scheme` y `host` podrás definir el deeplink de la app a una actividad específica.

Ten en cuenta que este deeplink es el que usarás en todas las `back_url` de tu preferencia. En los ciclos de la actividad que fue expuesta (por ejemplo, onCreate, onResume) podrás colocar tu lógica de negocio después del pago.


