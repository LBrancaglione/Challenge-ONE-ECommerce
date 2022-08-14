let imageUrl = document.querySelector('#img-url');
let validUrl = false;

let categoria = document.querySelector('#categoria');
let validCategoria = false;

let produtoNome = document.querySelector('#produto-nome');
let validProdutoNome = false;

let preco = document.querySelector('#preco');
let validPreco = false;

let descricao = document.querySelector('#descricao');
let validDescricao = false;

let tituloAddProduto = document.querySelector('#tituloAddProduto');

let cadastrarBtn = document.querySelector('#cadastar-produto');

imageUrl.addEventListener('keyup', () => {
    if (imageUrl.value.length <= 6) {
        imageUrl.setAttribute('style', 'color: red');
        validUrl = false;
    } else {
        imageUrl.setAttribute('style', 'color: #464646')
        validUrl = true;
    }
})

categoria.addEventListener('keyup', () => {
    if (categoria.value.length <= 5) {
        categoria.setAttribute('style', 'color: red');
        validCategoria = false;
    } else {
        categoria.setAttribute('style', 'color: #464646')
        validCategoria = true;
    }
})

produtoNome.addEventListener('keyup', () => {
    if (produtoNome.value.length <= 5) {
        produtoNome.setAttribute('style', 'color: red')
        validProdutoNome = false;
    } else {
        produtoNome.setAttribute('style', 'color: #464646')
        validProdutoNome = true;
    }
})

preco.addEventListener('keyup', () => {
    if (parseFloat(preco.value) <= 0) {
        preco.setAttribute('style', 'color: red')
        validPreco = false;
    } else {
        preco.setAttribute('style', 'color: #464646')
        validPreco = true;
    }
})

descricao.addEventListener('keyup', () => {
    if (descricao.value.length <= 10) {
        descricao.setAttribute('style', 'color: red')
        validDescricao = false;
    } else {
        descricao.setAttribute('style', 'color: #464646')
        validDescricao = true;
    }
})

cadastrarBtn.addEventListener('click', () => {
    if (validCategoria && validDescricao && validPreco && validProdutoNome && validUrl) {
        let listaProduto = JSON.parse(localStorage.getItem('listaProduto') || '[]');

        listaProduto.push({
            url: imageUrl.value,
            categoria: categoria.value,
            produtoNome: produtoNome.value,
            preco: parseFloat(preco.value),
            descricao: descricao.value
        })

        localStorage.setItem('listaProduto', JSON.stringify(listaProduto));

        tituloAddProduto.setAttribute('style', 'color:#04A529');
        tituloAddProduto.innerHTML = 'Cadastrado com Sucesso';

        setTimeout(() => {
            window.location.href = 'file:///D:/LeonardoBrancaglione/OneOracle/One%20Challenge/Front-End/Sprint02/produtos.html';
        }, 4000);

    } else {
        alert("Por-favor preencha os campos!")
    }
})
