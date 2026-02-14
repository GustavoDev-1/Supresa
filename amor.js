function verificarSenha() {

        const senhaCorreta = "04082025, morango"; // 🔐data do dia da primeira conversa e meu apelido (coloca um , dps da data)
            const senhaDigitada = document.getElementById("senha").value;
                const erro = document.getElementById("erro");

                    if (senhaDigitada === senhaCorreta) {
                            document.getElementById("login").classList.add("hidden");
                                    document.getElementById("paginaAmor").classList.remove("hidden");
                                        } else {
                                                erro.innerText = "Senha incorreta 😢";
                                                    }
                                                    }

                                                    /* Criar corações subindo */
                                                    function criarCoracao() {
                                                        const heart = document.createElement("div");
                                                            heart.classList.add("heart");
                                                                heart.innerHTML = "❤️";

                                                                    heart.style.left = Math.random() * 100 + "vw";
                                                                        heart.style.fontSize = (Math.random() * 20 + 10) + "px";
                                                                            heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

                                                                                document.querySelector(".hearts").appendChild(heart);

                                                                                    setTimeout(() => {
                                                                                            heart.remove();
                                                                                                }, 6000);
                                                                                                }

                                                                                                setInterval(criarCoracao, 400);

                                                                                                function atualizarContador() {

                                                                                                    const dataNamoro = new Date("2025-10-04T00:00:00");
                                                                                                        const agora = new Date();

                                                                                                            const diferenca = agora - dataNamoro;

                                                                                                                if (diferenca >= 0) {

                                                                                                                        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
                                                                                                                                const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
                                                                                                                                        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
                                                                                                                                                const segundos = Math.floor((diferenca / 1000) % 60);

                                                                                                                                                        document.getElementById("tempo").innerHTML =
                                                                                                                                                                    dias + " dias, " +
                                                                                                                                                                                horas + " horas, " +
                                                                                                                                                                                            minutos + " minutos e " +
                                                                                                                                                                                                        segundos + " segundos 💖";
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                    document.getElementById("tempo").innerHTML =
                                                                                                                                                                                                                                "Contando os segundos para começarmos nossa história 💘";
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                    setInterval(atualizarContador, 1000)
