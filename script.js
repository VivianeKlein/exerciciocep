const btnBuscar = document.getElementById("buscar");

btnBuscar.addEventListener("click", async () => {

    const cep = document.getElementById("cep").value.replace("-", "");
    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = "";

    try {

        const resposta = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );

        const dados = await resposta.json();

        if (dados.erro) {
            mensagem.textContent = "CEP não encontrado.";

            document.getElementById("logradouro").value = "";
            document.getElementById("bairro").value = "";
            document.getElementById("cidade").value = "";
            document.getElementById("estado").value = "";

            return;
        }

        document.getElementById("logradouro").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;

    } catch (erro) {
        mensagem.textContent = "Erro ao consultar o CEP.";
        console.error(erro);
    }

});