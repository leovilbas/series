/**
 * Função para pesquisar séries e exibir os resultados em uma seção HTML.
 *
 * @param {Array} series - Um array de objetos, onde cada objeto representa uma série com as seguintes propriedades:
 *   - titulo: O título da série.
 *   - descricao: Uma breve descrição da série.
 *   - link: O link para a página da série no IMDb.
 *
 * @returns {void}
 */
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa){
        section.innerHTML = "<p>Nenhum valor digitado. Você precisa informar o nome da série desejada</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    
    // Inicializa uma string para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada série e constrói o HTML do resultado
    for (let serie of series) {

        titulo = serie.titulo.toLowerCase();
        descricao = serie.descricao.toLowerCase();
        tags = serie.tags.toLowerCase();
       
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)||tags.includes(campoPesquisa)){  
            resultados += `
                <div class="item-resultado">
                <h2>
                    <a href="https://www.netflix.com/search?q=${serie.titulo}" target="_blank">${serie.titulo}</a>
                </h2>
                <p class="descricao-meta">${serie.descricao}</p>
                <a href="${series.link}" target="_blank">Saiba mais sobre ${serie.titulo} no IMDb</a><br>
                </div>
            `;
        }
    }


    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Atualiza o conteúdo HTML da seção com os resultados
    section.innerHTML = resultados;
}