const projetos = [
  {
    nome: "Projeto 1 Sobre mim",
    descricao: "Criei um projeto com iformaçoes profissionais minhas.",
    link: "#"
    
  },
  {
    nome: "Projeto 2 Alerta Comunidade",
    descricao: "Desenvolver um Aplicatico comunitario de avisos urgentes que permite recber informaçoes  urgentes em tempo real.",
    link: "#"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("projeto");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}">Ver projeto</a>
  `;

  container.appendChild(div);
});
