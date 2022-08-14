const criaTitulo = (categoria) => {
    let divCategoria = document.createElement('div');
    divCategoria.className = 'rowTittle';
    const conteudo = `
    <h2>${categoria}</h2>
    <p>ver tudo</p>
    `
    divCategoria.innerHTML = conteudo;
    return divCategoria;
}

const prodTitulo = document.querySelector('[data-produtos]');

let listaProduto = JSON.parse(localStorage.getItem('listaProduto'))

listaProduto.forEach((item) => {
    prodTitulo.appendChild(criaTitulo(item.categoria));
})