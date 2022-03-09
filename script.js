
function endereco() {
    let cep = document.getElementById("cep").value;

    const dataLista = (result) =>{
        for (const campo in result){
            // console.log(campo)
            document.getElementById("logradouro").value = result.logradouro
            document.getElementById("bairro").value = result.bairro
            document.getElementById("cidade").value = result.localidade
            document.getElementById("uf").value = result.uf
            if(result.complemento === ''){
                document.getElementById("complemento").value = ' --- '
            }else{
                document.getElementById("complemento").value = result.complemento
            }
           
        }
    }

    const options = {
        method : 'GET',
        mode : 'cors',
        cache: 'default'
    }

  fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
    .then((response) => response.json())
    .then(data => dataLista(data))
        
    .catch(erro => alert("CEP não encontrado"))

}

function limpar(){
    document.getElementById("cep").value = ''
    document.getElementById("logradouro").value = ''
    document.getElementById("bairro").value = ''
    document.getElementById("cidade").value = ''
    document.getElementById("uf").value = ''
    document.getElementById("complemento").value = ''
    
}




    //contruir um if em que o cep é maior ou menor do que o desejado surge uma mensagem de erro
    // if(cep.length > 11 && cep.length <11 ){

    //caso de erro aparecer um alert e reiniciar a pagina
        
    // }