# Estructura de las guías

Nuestras guías independientes se estructuran de acuerdo a las siguientes secciones:

## Landing

Introducción que lleva un patrón específico. Sirve para presentar el producto/plataforma. Es el único archivo que no se realiza en Markdown.

## Introducción

Breve descripción de la herramienta o plugin a documentar. Es una buena práctica enumerar y vincular los pasos de integración aquí, indicando cuándo uno o más son opcionales pero recomendados.

## Requisitos previos: 

Lista de cosas que deben estar listas para comenzar la integración. Por lo general, se presentan como una tabla que contiene 3 columnas (requisito, descripción, especificaciones).

## Pasos de integración

Esta sección de la documentación generalmente comprende más de una entrada de menú y presenta los pasos que se deben seguir, de principio a fin, para realizar una integración. Es una buena práctica aquí usar descripciones de acción claras para cada título de paso.

> En los casos en que distintas etapas de una integración compartan pasos idénticos y se encuentren en apartados de menú diferentes, es necesario que cada una cuente con la enumeración de esos pasos. Esto se debe a que el público puede haber ingresado a esa sección en específico, por lo que siempre debemos incluir la información completa de cómo realizar la acción que estamos documentando.

## Flujo de prueba

Si hay un flujo de prueba, debe incluirse aquí. Si se incluye este elemento, también debes crear una entrada de menú que explique cómo pasar a producción después de que se complete el flujo de prueba.

## Solución de problemas

Si hay problemas comunes que los desarrolladores pueden encontrar y que las partes interesadas han identificado, es una buena práctica incluirlos aquí. Separa esto del flujo de integración en el menú con una línea, y asegúrate de incluir solo la solución de problemas para la integración (no para el producto con el que se está integrando).

## Preguntas frecuentes

La mayoría de las documentaciones no requieren esta sección, pero sus partes interesadas pueden solicitarla. Si este es el caso, asegúrate de que las preguntas frecuentes solo contengan información que no se pueda incluir en ninguna otra sección de la documentación. De lo contrario, simplemente inclúyela en la sección correspondiente. Deben estar separadas del flujo normal de integración.

## Contenido adicional

Se puede solicitar que se incluya otra información que, si bien es importante, no forma parte del flujo de integración. Puedes agregar esta información, pero mantenla separada con una línea del flujo de integración, para evitar confundir a tus lectores. El nombre "contenido adicional" se entiende como un ejemplo. Deberás pensar en un nombre apropiado para cada sección que agregues como otra información.
