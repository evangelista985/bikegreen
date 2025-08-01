        function Mostra() {
            if (document.getElementById('bt').value == "Abrir") {
                document.getElementById("contatos").style.height = "700px";
                document.getElementById("formulario").className = document.getElementById("formulario").className.valueOf = "visivel";
                document.getElementById('bt').value = "Fechar";
                document.getElementById('bt').innerHTML = "Fechar"; /*muda a legenda do botão para Fechar*/
            }
            else {
                document.getElementById("contatos").style.height = "170px";
                document.getElementById("formulario").className = document.getElementById("formulario").className.valueOf = "invisivel";
                document.getElementById('bt').value = "Abrir";
                document.getElementById('bt').innerHTML = "Fale Conosco"; /*muda a legenda do botão para Abrir*/
            }
        }
    