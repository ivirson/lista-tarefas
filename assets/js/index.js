// Adiciona a hora na tela
document.getElementById("hora-atual").innerHTML = obterHora();
setInterval(() => {
  document.getElementById("hora-atual").innerHTML = obterHora();
}, 60000);

// Adiciona data dinâmica na tela
const dataFormatada = obterDataFormatada();
const dataHtml = document.createTextNode(dataFormatada);
const h3 = document.getElementById("data-atual");
h3.appendChild(dataHtml);

//
const atualizarListaNaTela = () => {
  document.getElementById("lista-tarefas").innerHTML = "";
  const tarefas = obterTarefas();
  if (!tarefas.length) {
    return renderizaSemTarefas();
  }
  tarefas.forEach((tarefa) => renderizarTarefa(tarefa));
};

const renderizaSemTarefas = () => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <div class="card d-flex justify-content-center align-items-center">
      <p class="m-0 p-2">Ainda não há tarefas para este dia</p>
    </div>
  `;
  document.getElementById("lista-tarefas").appendChild(newDiv);
};

const renderizarTarefa = (tarefa) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("col-md-6");
  newDiv.classList.add("col-sm-12");
  newDiv.classList.add("mb-3");
  newDiv.innerHTML = `
    <div class="card">
      <div class="row no-gutters">
        <div id="status" class="col-1 d-flex align-items-center">
          ${exibirIconeConcluida(tarefa)}
        </div>
        <div class="col-8">
          <p class="tarefa-titulo">${tarefa.titulo}</p>
          <p class="tarefa-detalhe">
            <span>${tarefa.categoria}</span>
            <span class="material-icons separator">
              fiber_manual_record
            </span>
            <span class="material-icons clock">schedule</span>
            <span class="tarefa-horario">${tarefa.hora}</span>
          </p>
        </div>
        <div class="col-3 d-flex align-items-center">
          <button class="btn btn-sm btn-primary" onclick="editarTarefa('${
            tarefa.id
          }')">
            <span class="material-icons">edit</span>
          </button>
          <button class="btn btn-sm btn-secondary" onclick="excluirTarefa('${
            tarefa.id
          }')">
            <span class="material-icons">delete</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("lista-tarefas").appendChild(newDiv);
};

const exibirIconeConcluida = (tarefa) => {
  return tarefa.concluida
    ? `<span class="material-icons status-icon" onclick="alterarStatus('${tarefa.id}')">check_circle</span>`
    : `<span class="material-icons status-icon" onclick="alterarStatus('${tarefa.id}')">radio_button_unchecked</span>`;
};

const alterarStatus = (id) => {
  const tarefas = obterTarefas();
  const index = tarefas.findIndex((item) => item.id === id);
  const tarefa = tarefas[index];
  tarefa.concluida = !tarefa.concluida;
  atualizarTarefa(tarefa);
  atualizarListaNaTela();
};

const formValido = () => {
  return document.getElementById("form").reportValidity();
};

atualizarListaNaTela();

// Alterações nos registros das tarefas
const alterarTarefa = () => {
  if (formValido()) {
    const tarefa = {
      id: document.getElementById("id").value,
      titulo: document.getElementById("titulo").value,
      categoria: document.getElementById("categoria").value,
      hora: document.getElementById("hora").value,
    };

    if (!tarefa.id) {
      salvarTarefa(tarefa);
    } else {
      atualizarTarefa(tarefa);
    }

    atualizarListaNaTela();
    document.getElementById("form").reset();
  }
};

const editarTarefa = (id) => {
  document.getElementById("modal-titulo").innerHTML = "Editar tarefa";
  const tarefas = obterTarefas();
  const index = tarefas.findIndex((item) => item.id === id);
  const tarefa = tarefas[index];

  const myModal = new bootstrap.Modal(document.getElementById("modal"), {});
  myModal.show();

  document.getElementById("id").value = tarefa.id;
  document.getElementById("titulo").value = tarefa.titulo;
  document.getElementById("categoria").value = tarefa.categoria;
  document.getElementById("hora").value = tarefa.hora;
};

const excluirTarefa = (id) => {
  deletarTarefa(id);
  atualizarListaNaTela();
};
