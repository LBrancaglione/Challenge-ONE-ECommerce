let addProduto = document.querySelector('#addProduto');

addProduto.addEventListener('click', () =>{
    window.location.href ="file:///D:/LeonardoBrancaglione/OneOracle/One%20Challenge/Front-End/Sprint02/adicionar-produto.html"
})

//CREATE
const criaProduto = (url, produtoNome, preco) => {
    let divProduto = document.createElement('div');
    divProduto.className = 'rowContent-produtos';
    const conteudo = `
    <div class="icons" > 
        <img onclick="deletProduto()" src="icons/icons8-trash-24.png" alt="">
        <img id="edit" src="icons/icons8-edit-24.png" alt="">
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

listaProduto.forEach((item) => {
    prodLista.appendChild(criaProduto(item.url,item.produtoNome, item.preco));
})

//READ
const readProduto = () => listaProduto;

//UPDATE
const updateProduto = (index, produto) =>{
    const listaProduto = readProduto();
    listaProduto[index] = produto;
    localStorage.setItem('listaProduto', JSON.stringify(listaProduto));
}
//DELETE
const deletProduto = (index) =>{
    const listaProduto = readProduto();
    listaProduto.splice(index , 1);
    localStorage.setItem('listaProduto', JSON.stringify(listaProduto));
    location.reload();
}