const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("tarefas_db")) || [];
};

const setLocalStorage = (tarefas) => {
  return localStorage.setItem("tarefas_db", JSON.stringify(tarefas));
};
