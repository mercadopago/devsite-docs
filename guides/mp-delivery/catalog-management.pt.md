# Gestão de catálogos

A gestão de catálogo é realizada por meio de API REST, com as quais você poderá executar as seguintes funcionalidades:

* Realizar a carga em massa de catálogo para várias lojas.
* Verificar se o processo de carga do catálogo foi bem-sucedido.
* Atualizar o status de um item por meio do seu SKU.

O processo de carga do catálogo é feito de forma assíncrona.

> Recomendamos **monitorar sempre o processo de carga do catálogo por meio do endpoint**, pois, mesmo obtendo uma resposta positiva ao usar a carga do catálogo, esta é a forma mais segura de verificar se o processo foi concluído corretamente.