---
sites_supported:
  - mla
---

# Requisitos Previos
Es importante conocer los requisitos previos necesarios antes de continuar:

## Glosario

Término		| 							|	Descripción
------------	| ----------- 			| 	-----------
Preferencia (preference)	|							|	Es la información de la venta que se quiere ofrecer. Entre los Atributos más importantes de una preferencia se definen: la descripción, el monto y los items. Al generarla se obtiene la URL para iniciar el flujo de pago.
Punto de inicio (init_point) 	|							|	Es la URL que se obtiene al momento de generar la preferencia y que da inicio al flujo de pago del Web Checkout.
Item (item)			|							|	Hace referencia al producto o servicio que se quiere ofrecer. Puede ser uno o una lista.
Aplicación (application)|            | Una cuenta de Mercado Pago puede tener múltiples aplicaciones. Cada aplicación está designada a identificar una integración en particular, y tiene sus credenciales correspondientes.
Credenciales |ACCESS_TOKEN				|	Clave privada de la aplicación requerida para generar pagos. Debes usarla sólo en tu back-end.
				|PUBLIC_KEY				|	Clave pública de la aplicación para conocer los medios de pago y cifrar datos de tarjeta (entre otros usos). Debes usarla sólo en tu front-end

## Cuenta de Mercado Pago
Para poder comenzar la integración es necesario contar con una cuenta de Mercado Pago. 
Si aún no tienes cuenta de Mercado Pago o Mercado Libre, puedes crear una haciendo click [aquí](https://www.mercadopago.com.ar/). 			

## Credenciales
Puedes conocer tus credenciales [aquí](https://www.mercadopago.com/mla/account/credentials).

> Si estás navegando este sitio con tu cuenta se autocompletarán las credenciales necesarias dentro de cada snippet de código.


## Instala SDK de Mercado Pago
[[[
```PHP
===
Utilizá [Composer](https://getcomposer.org/doc/00-intro.md) para instalar la SDK. Para hacerlo, ejecutá el siguiente código en línea de comandos en la carpeta principal de tu proyecto:

===
composer require "mercadopago/dx-php:dev-master"
```
```Java
===
Para instalar la SDK en tu proyecto [Maven](http://maven.apache.org/install.html) agrega la siguiente dependencia en tu archivo pom.xml y luego ejecuta 'maven install'

===
<dependency>
		    <groupId> com.mercadopago </groupId>
		    <artifactId> dx-java </artifactId>
		    <version> 1.0.33 </version>
</dependency>
```
```Node JS
===
Para instalar la SDK debes ejecutar el siguiente código en la línea de comandos usando [npm](https://www.npmjs.com/get-npm)

===
npm install mercadopago
```
```.Net
===
Utilizá [NuGet](https://docs.microsoft.com/es-es/nuget/install-nuget-client-tools) para instalar la SDK .NET de Mercado Pago.
Para hacerlo ejecuta el siguiente comando en la consola del NuGet Package Manager.

===
PM> Install-Package mercadopago-sdk -Version 1.0.56
```
```Ruby
===
El SDK de Mercado Pago está disponible como [gema](https://rubygems.org/gems/mercadopago-sdk), para instalarla debes ejecutar el siguiente código en la línea de comandos

===
gem install mercadopago-sdk
```

]]]