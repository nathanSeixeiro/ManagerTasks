Criar Tarefa (Create Task):

Este caso de uso permite a criação de uma nova tarefa.
Recebe os dados da tarefa, incluindo nome, descrição e data.
Valida os dados da tarefa.
Cria a tarefa no banco de dados (por meio de um repositório).
Listar Tarefas (List Tasks):

Este caso de uso permite listar todas as tarefas cadastradas.
Consulta todas as tarefas no banco de dados (por meio de um repositório).
Atualizar Tarefa (Update Task):

Este caso de uso permite atualizar uma tarefa existente.
Recebe o ID da tarefa e os novos dados da tarefa.
Valida os dados da tarefa.
Atualiza a tarefa no banco de dados (por meio de um repositório).
Excluir Tarefa (Delete Task):

Este caso de uso permite excluir uma tarefa existente.
Recebe o ID da tarefa a ser excluída.
Remove a tarefa do banco de dados (por meio de um repositório).
Enviar Notificações (Send Notifications):

Este caso de uso é responsável por enviar notificações.
Ele pode ser acionado diariamente.
Consulta o banco de dados para encontrar tarefas com datas de vencimento que estão a 1, 3 e 7 dias no futuro.
Envia notificações para essas tarefas.