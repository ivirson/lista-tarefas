let tarefas = [];

const obterTarefas = () => {
  tarefas = getLocalStorage();
  return tarefas;
};

const salvarTarefa = (tarefa) => {
  // crypto.randomUUID() gera um uuid para o id único de cada tarefa
  // ref uuid: (https://medium.com/trainingcenter/o-que-%C3%A9-uuid-porque-us%C3%A1-lo-ad7a66644a2b)
  tarefa.id = crypto.randomUUID();
  tarefa.concluida = false;
  tarefas.push(tarefa);
  setLocalStorage(tarefas);
};

const atualizarTarefa = (tarefa) => {
  const index = tarefas.findIndex((item) => item.id === tarefa.id);
  tarefas[index] = tarefa;
  setLocalStorage(tarefas);
};

const deletarTarefa = (id) => {
  const index = tarefas.findIndex((item) => item.id === id);
  tarefas.splice(index, 1);
  setLocalStorage(tarefas);
};
