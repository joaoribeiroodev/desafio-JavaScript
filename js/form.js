
//class contato

class Contato {

    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }

}


function Post(event, form) {

    event.preventDefault();

    const data = new Contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value
    );

    Enviar(data);

}

function Enviar(data) {

    if (data.nome !== "") {

        alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome} seus dados foram encaminhados com sucesso!`);

        const informacoes =
            `- Nome: ${data.nome}\n` +
            `- Sobrenome: ${data.sobrenome}\n` +
            `- Email: ${data.email}\n` +
            `- CPF: ${data.cpf}\n` +
            `- Telefone: ${data.telefone}\n` +
            `- Contato preferencial: ${data.contato}`;

        console.log(informacoes);
    }

}