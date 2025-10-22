const form = document.getElementById("formulario");

    const nome = form.elements["nome"];
    const email = form.elements["email"];

    const idade = form.elements["idade"];
    const senha = form.elements["senha"];
    
    const genero = form.elements["genero"];
    const texto = form.elements["mensagem"];

    const mensagem = document.getElementById("mensagem");

    // Evento change: valor preenchido → borda azul
    nome.addEventListener("change", function () {
      if (nome.value.trim() !== "") {
        nome.classList.remove("erro");
        nome.classList.add("ok");
      }
    });

    email.addEventListener("change", function () {
      if (email.value.trim() !== "") {
        email.classList.remove("erro");
        email.classList.add("ok");
      }
    });

    // Evento blur: campo vazio → borda vermelha
    nome.addEventListener("blur", function () {
      if (nome.value.trim() === "") {
        nome.classList.remove("ok");
        nome.classList.add("erro");
      }
    });

    email.addEventListener("blur", function () {
      if (email.value.trim() === "") {
        email.classList.remove("ok");
        email.classList.add("erro");
      }
    });

    function msg(tipo,texto,campo){
      if(tipo==="erro"){
        mensagem.innerHTML = `<strong>${texto}</strong>`;
        mensagem.style.backgroundColor = "#ffe0e0";
        mensagem.style.borderColor = "#cc0000";
        mensagem.style.display = "block"; // exibe a div após o retorno

        mensagem.classList.remove("fade-out"); // garante que o fade-out não esteja ativo

        // Aplica o fade-out após 4 segundos
        setTimeout(function () {
          mensagem.classList.add("fade-out");
        }, 4000);

        // Esconde completamente após o fade-out terminar (1s depois)
        setTimeout(function () {
          mensagem.style.display = "none";
        }, 5000);
        
      } else if(tipo==="ok"){
        mensagem.innerHTML = `<strong>${texto}</strong>`;
        mensagem.style.backgroundColor = "#e0ffe0";
        mensagem.style.borderColor = "#00aa00";
        mensagem.style.display = "block"; // exibe a div após o retorno

        mensagem.classList.remove("fade-out"); // garante que o fade-out não esteja ativo
      }
    }

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      if (nome.value === "" || email.value === "") {
        msg("erro","Por favor, preencha todos os campos.");
      } else {
        msg("ok","Formulário enviado com sucesso!");
        form.reset(); // limpa os campos
      }
    });




idade.addEventListener("blur", function () {
  if (idade.value === "" || idade.value <= 0 || idade.value > 120) {
    idade.classList.add("erro");
  } else {
    idade.classList.remove("erro");
    idade.classList.add("ok");
  }
});

// Validação do campo "senha" ao perder o foco
senha.addEventListener("blur", function () {
  // Verifica se a senha tem menos de 6 caracteres
  if (senha.value.length < 6) {
    // Aplica estilo de erro se a senha for fraca
    senha.classList.add("erro");
  } else {
    // Remove erro e aplica estilo de campo válido
    senha.classList.remove("erro");
    senha.classList.add("ok");
  }
});

// Validação do campo "gênero" ao mudar a seleção
genero.addEventListener("change", function () {
  // Verifica se o usuário selecionou alguma opção
  if (genero.value !== "") {
    // Remove erro e aplica estilo de campo válido
    genero.classList.remove("erro");
    genero.classList.add("ok");
  }
});

// Validação do campo "mensagem" ao perder o foco
texto.addEventListener("blur", function () {
  // Verifica se o texto tem menos de 10 caracteres (após remover espaços)
  if (texto.value.trim().length < 10) {
    // Aplica estilo de erro se a mensagem for muito curta
    texto.classList.add("erro");
  } else {
    // Remove erro e aplica estilo de campo válido
    texto.classList.remove("erro");
    texto.classList.add("ok");
  }
});
