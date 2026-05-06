let pacientes = [];

let medias = {
  "Clínico": { "Luva": 15, "Gaze": 10 },
  "Cirúrgico": { "Luva": 25, "Gaze": 20 },
  "UTI": { "Luva": 30, "Seringa": 35 }
};

function addPaciente() {
  let nome = document.getElementById("nome").value;
  let tipo = document.getElementById("tipo").value;
  let leito = document.getElementById("leito").value;

  pacientes.push({ nome, tipo, leito });

  atualizarLista();
}

function atualizarLista() {
  let select = document.getElementById("pacienteSelect");
  select.innerHTML = "";

  pacientes.forEach((p, index) => {
    let option = document.createElement("option");
    option.value = index;
    option.text = p.nome + " (" + p.tipo + ")";
    select.appendChild(option);
  });
}

function registrarDescarte() {
  let index = document.getElementById("pacienteSelect").value;
  let material = document.getElementById("material").value;
  let quantidade = Number(document.getElementById("quantidade").value);

  let paciente = pacientes[index];
  let media = medias[paciente.tipo]?.[material] || 0;

  let alerta = document.getElementById("alerta");

  if (quantidade > media && media !== 0) {
    alerta.innerText = "⚠️ Consumo acima do esperado!";
    alerta.style.color = "red";
  } else {
    alerta.innerText = "Consumo dentro do esperado";
    alerta.style.color = "green";
  }
}
