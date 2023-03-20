# Gerenciamento
 
Atualmente existem formas diferentes através das quais os **access tokens** e **temporal grants** criados podem ser desabilitados e invalidados para autorizar requests de recursos protegidos ou para trocar por novos tokens.
 
* **Expiração**: após o tempo estabelecido no momento da criação, o token expira automaticamente e não pode ser obtido.
* **Alteração de senha pelo usuário**: existem fluxos de alteração de senha em que o vendedor pode revogar todas as suas credenciais, incluindo os tokens associados e concessões temporárias.
* **Revogação de autorização**: ao revogar uma autorização entre o vendedor e o aplicativo, é acionada a exclusão de todos os tokens e concessões temporárias associadas a eles.
* **Lavagem de credenciais por fraude**: é possível que o departamento de segurança da informação e prevenção de fraudes realizem uma atualização total das credenciais de um usuário. Isso aciona a exclusão de todos os tokens e concessões temporárias associadas ao vendedor em questão.
* **Limpeza de sessão do usuário**: aciona a atualização de todos os tokens de vendedor e concessões temporárias.
* **Exclusão de aplicação**: quando uma aplicação é excluída, todos os tokens e concessões temporárias pertencentes a ele são excluídos.
 
Você pode receber notificações webhook sempre que um vendedor autorizar ou desautorizar sua aplicação. Para configurá-las, leia [Tus aplicaciones](/developers/pt/guides/additional-content/dashboard/applications) através do Dashboard.