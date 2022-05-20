# Configurar la integración

> CLIENT_SIDE
>
> h2
>
> Crear container

Deberás crear un container para definir dónde se colocará el brick en la pantalla. La creación del container se realiza insertando un elemento (por ejemplo, un div) en el código HTML de la página en la que se renderizará el brick (ver el código a continuación).

> NOTE
>
> Atención
>
> El valor que se muestra en la propiedad `id` a continuación es solo un ejemplo y puede ser alterado, pero siempre debe coincidir con el `id` indicado en la renderización.

```html
  <div id="cardPaymentBrick_container"></div>
```

> CLIENT_SIDE
>
> h2
>
> Incluir y configurar la librería MercadoPago.js

**Usa nuestra librería oficial para acceder a las funcionalidades de Mercado Pago** desde tu frontend de forma segura.

> NOTE
>
> Atención
>
> El código JS se puede incluir en una etiqueta `<script>` o en un archivo JS separado.

Para esto deberás instalar la SDK agregando lo siguiente en tu código HTML:

```html
<script src="https://beta-sdk.mercadopago.com/gama/js/v2"></script>
```

Luego, inicializa la SDK y configura tu [clave pública]([FAKER][CREDENTIALS][URL]) mediante código JavaScript de la siguiente manera:

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');
```

> SERVER_SIDE
>
> h3
>
> Instalar la SDK de Mercado Pago

Instala un [SDKs oficial](/developers/es/guides/sdks) para simplificar tu interacción con nuestras APIs.

[[[
```php
===
[Instala Composer](https://getcomposer.org/download) para usar el SDK.

Luego ejecuta el siguiente código en la línea de comandos:
===
php composer.phar require "mercadopago/dx-php"
```
```node
===
Para instalar la SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [npm](https://www.npmjs.com/get-npm):
===
npm install mercadopago
```
```java
===
Para instalar la SDK en tu proyecto [Maven](http://maven.apache.org/install.html) agrega la siguiente dependencia en tu archivo pom.xml y luego ejecuta 'maven install'.
===
<dependency>
   <groupId>com.mercadopago</groupId>
   <artifactId>sdk-java</artifactId>
   <version>2.0.0</version>
</dependency>
```
```ruby
===
La SDK de Mercado Pago está disponible como [gema](https://rubygems.org/gems/mercadopago-sdk), para instalarla debes ejecutar el siguiente código en la línea de comandos:
===
gem install mercadopago-sdk
```
```csharp
===
----[mlb]----
Usa [NuGet](https://docs.microsoft.com/pt-br/nuget/reference/nuget-exe-cli-reference) para instalar la SDK .NET de Mercado Pago.
------------
----[mla, mlm, mco, mlc, mlu]----
Usa [NuGet](https://docs.microsoft.com/es-es/nuget/reference/nuget-exe-cli-reference) para instalar la SDK .NET de Mercado Pago.
------------
Para hacerlo ejecuta el siguiente comando en tu terminal:
===
nuget install mercadopago-sdk
```
```python
===
El SDK de Mercado Pago está disponible como [pip](https://pypi.org/project/mercadopago/), para instalarla debes ejecutar el siguiente código en la línea de comandos:
===
pip3 install mercadopago
```
]]]

> CLIENT_SIDE
>
> h2
>
> Instanciar brick

Con el container creado y la SDK JS instalada, el siguiente paso es instanciar el brick builder, que permitirá generar el brick. Para crear la instancia, inserta el código a continuación del paso anterior.

```javascript
const bricksBuilder = mp.bricks();
```

> WARNING
>
> Atención
>
> Durante la instanciación del brick, es posible que aparezcan diferentes errores. Para más detalles sobre cada uno de ellos, consulta la sección [Posibles errores](/developers/es/docs/checkout-bricks-beta/additional-content/possible-errors).

> CLIENT_SIDE
>
> h2
>
> Renderizar brick

Una vez instanciado el builder, nuestro brick puede ser renderizado y tener todas sus configuraciones compiladas para que la estructura final sea generada.

Para renderizar el brick, inserta el código a continuación del paso anterior y completa los atributos de acuerdo con los comentarios destacados en este mismo código.

```javascript
const renderCardPaymentBrick = async (bricksBuilder) => {

  const settings = {
    initialization: {
      amount: 100, //valor del pago a realizar
    },
    callbacks: {
      onReady: () => {
        // callback llamado cuando Brick esté listo
      },
      onSubmit: (cardFormData) => {
        // callback llamado cuando el usuario haga clic en el botón enviar los datos

        // ejemplo de envío de los datos recolectados por el Brick a su servidor
        return new Promise((resolve, reject) => {
            fetch("/process_payment", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cardFormData)
            })
            .then((response) => {
                // recibir el resultado del pago
                resolve();
            })
            .catch((error) => {
                // tratar respuesta de error al intentar crear el pago
                reject();
            })
          });
      },
      onError: (error) => { 
        // callback llamado para todos los casos de error de Brick
      },
    },
  };
  cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
};
renderCardPaymentBrick(bricksBuilder);
```

![cardform](checkout-bricks/card-form-es.png)
