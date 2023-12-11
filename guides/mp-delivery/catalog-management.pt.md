# Gestão de catálogos

A gestão de catálogo é realizada por meio de API REST, com as quais você poderá executar as seguintes funcionalidades:

* Realizar a carga em massa de catálogo para várias lojas.
* Verificar se o processo de carga do catálogo foi bem-sucedido.
* Atualizar o status de um item por meio do seu SKU.

O processo de carga do catálogo é feito de forma assíncrona.

Ao definir o conteúdo do JSON para a carga de catálogo, considere as regras de formatação presentes na [API Reference](/developers/es/reference/mp_delivery/_proximity_integrationcatalog/post) para não gerar erros de validação.

> Recomendamos **monitorar sempre o processo de carga do catálogo por meio do endpoint**, pois, mesmo obtendo uma resposta positiva ao usar a carga do catálogo, esta é a forma mais segura de verificar se o processo foi concluído corretamente.
