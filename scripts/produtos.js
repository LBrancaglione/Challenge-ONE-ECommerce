let addProduto = document.querySelector('#addProduto');

addProduto.addEventListener('click', () =>{
    window.location.href ="file:///D:/LeonardoBrancaglione/OneOracle/One%20Challenge/Front-End/Sprint02/adicionar-produto.html"
})

//CREATE
const criaProduto = (url, produtoNome, preco) => {
    let divProduto = document.createElement('div');
    divProduto.className = 'rowContent-produtos';
    const conteudo = `
    <div class="icons">
        <img src="icons/icons8-trash-24.png" alt="">
        <img src="icons/icons8-edit-24.png" alt="">
    </div>
    <img src="${url}" alt="">
    <div class="card-description">
        <div class="card-tittle">
            <h3>${produtoNome}</h3>
        </div>
        <div class="card-price">
            <p>R$${preco}</p>
        </div>
    </div>
    `
    divProduto.innerHTML = conteudo;
    return divProduto;
}

const prodLista = document.querySelector('[data-produtos]');

let listaProduto = JSON.parse(localStorage.getItem('listaProduto'));

console.log(listaProduto)

listaProduto.forEach((item) => {
    prodLista.appendChild(criaProduto(item.url,item.produtoNome, item.preco));
})