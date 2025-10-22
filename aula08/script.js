const form = document.getElementById("formulario");

    const nome = form.elements["nome"];
    const email = form.elements["email"];
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

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      if (nome.value === "" || email.value === "") {
        mensagem.innerHTML = "<strong>Por favor, preencha todos os campos.</strong>";
        mensagem.style.backgroundColor = "#ffe0e0";
        mensagem.style.borderColor = "#cc0000";
      } else {
        mensagem.innerHTML = `
          <strong>Formulário enviado com sucesso!</strong><br />
          Nome: ${nome.value}<br />
          E-mail: ${email.value}
        `;
        mensagem.style.backgroundColor = "#e0ffe0";
        mensagem.style.borderColor = "#00aa00";
        form.reset(); // limpa os campos
      }
      mensagem.style.display = "block"; // exibe a div após o retorno

      // Faz a mensagem sumir após 5 segundos (5000 milissegundos)
      mensagem.classList.remove("fade-out"); // garante que o fade-out não esteja ativo

      // Aplica o fade-out após 3 segundos
      setTimeout(function () {
        mensagem.classList.add("fade-out");
      }, 3000);

      // Esconde completamente após o fade-out terminar (1s depois)
      setTimeout(function () {
        mensagem.style.display = "none";
      }, 4000);
    });
