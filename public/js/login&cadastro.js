let name_register     = document.getElementById("inp_register_name");
let nick_register     = document.getElementById("inp_register_nick");
let email_register    = document.getElementById("inp_register_email");
let password_register = document.getElementById("inp_register_password");
let password_confirmation_register = document.getElementById("inp_register_password_confirmation");
let fotoperfil_register = document.getElementById("inp_register_fotoperfil");

let email_login    = document.getElementById("inp_login_email");
let password_login = document.getElementById("inp_login_password");

//──  BACK BUTTON  ────────────────────────────────────────────────────────────
function back() {
    setTimeout(window.location.href="index.html",500)
}

// ─── LOGIN ────────────────────────────────────────────────────────────────────

function login() {
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            emailServer: email_login.value,
            senhaServer: password_login.value
        })
    })
    .then(function (resposta) {
        if (resposta.status == 200) {
            return resposta.json();
        } else if (resposta.status == 403) {
            alert("Email ou senha inválidos!");
        } else {
            alert("Erro no servidor. Tente novamente.");
        }
    })
    .then(function (usuario) {
        if (usuario) {
            // Salva os dados do jogador no navegador para usar no game.html
            localStorage.setItem("idusuario",  usuario.idusuario);
            localStorage.setItem("name",        usuario.name);
            localStorage.setItem("nickName",    usuario.nickName);
            localStorage.setItem("fotoPerfil",  usuario.fotoPerfil);

            // Redireciona para o jogo
            window.location.href = "game.html";
        }
    })
    .catch(function (erro) {
        console.log("Erro ao fazer login:", erro);
    });
}


// ─── CADASTRO ─────────────────────────────────────────────────────────────────

function registerVerification() {
    let validacao = true;

    email_register.value = email_register.value.toLowerCase();

    if (!email_register.value.includes("@") || !email_register.value.includes(".")) {
        validacao = false;
    }
    if (password_register.value.length <= 6) {
        validacao = false;
    }
    if (password_register.value !== password_confirmation_register.value) {
        validacao = false;
    }
    if (
        name_register.value == ""     ||
        nick_register.value == ""     ||
        email_register.value == ""    ||
        password_register.value == ""
    ) {
        validacao = false;
    }

    console.log(validacao)

    return validacao;
}

function cadastrar() {
    if (registerVerification()) {

        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nomeServer:       name_register.value,
                nickServer:       nick_register.value,
                emailServer:      email_register.value,
                senhaServer:      password_register.value,
                fotoPerfilServer: fotoperfil_register.value
            })
        })
        .then(function (resposta) {
            if (resposta.status == 200) {
                alert("Cadastro realizado com sucesso! Faça login.");
                window.location.href = "login.html";
            } else {
                alert("Erro ao cadastrar. Tente novamente.");
            }
        })
        .catch(function (erro) {
            console.log("Erro ao cadastrar:", erro);
        });

    } else {
        alert("Preencha todos os campos corretamente!");
    }
}
