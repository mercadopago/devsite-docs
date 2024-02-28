# Como atualizar a versão do plugin?

Estamos constantemente aprimorando o plugin do Mercado Pago para Adobe Commerce. Para aproveitar as mais recentes funcionalidades implementadas, é essencial manter seu plugin atualizado. O processo de atualização é simples e suas customizações são preservadas. Siga o passo a passo abaixo para garantir uma atualização bem-sucedida:

1. Em seu terminal, execute o comando abaixo para baixar o módulo:

```terminal
composer update mercadopago/adb-payment
```

2. Em seguida, execute o comando abaixo para atualizar o módulo:

```terminal
bin/magento setup:upgrade
```

3. Execute o seguinte comando para compilar os arquivos do módulo:

```terminal
bin/magento setup:di:compile
```

4. Por fim, execute o seguinte comando para limpar o cache de Adobe Commerce:

```terminal
bin/magento cache:clean
```

> NOTE
>
> Nota
>
> O plugin é construído com base na plataforma, o que implica na preservação das customizações durante a atualização. Não há perda de dados ou configurações ao atualizar a versão do seu plugin.