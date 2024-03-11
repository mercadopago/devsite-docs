# Como atualizar a versão do plugin?

Aprimoramos constantemente o plugin do Mercado Pago para Adobe Commerce para oferecer a melhor experiência possível. Para aproveitar as últimas funcionalidades e garantir a segurança e o bom funcionamento do plugin, recomendamos que você o mantenha sempre atualizado. Siga o passo a passo abaixo para garantir uma atualização bem-sucedida:

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
> O plugin é construído com base na plataforma, garantindo a preservação de suas customizações durante a atualização. Ao atualizar a versão do plugin, **seus dados e configurações não serão perdidos**.