let valorTotal = 0

function calcQuantidade(element) {
    const quant = document.getElementById("quantidade-produtos")
    let quantNumber = parseInt(quant.textContent)
    const valorProduto = document.getElementById("price")
    if (element == "-") {
        if (quantNumber > 1) {
            quantNumber--
        }
    } else {
        quantNumber++
    }
    quant.textContent = quantNumber
    document.getElementById("valor-total").textContent = parseFloat(valorProduto.textContent) * quantNumber
}

function toggleLayout() {
    const icon = document.getElementById("toggle-icon")
    let reviews = document.getElementsByClassName("review");

    Array.prototype.filter.call(
        reviews,
        function (elemento) {
            if (elemento.classList.contains("col-xl-4")){
                elemento.classList.remove("col-xl-4")
                elemento.classList.remove("col-sm-6")
            } else{
                elemento.classList.add("col-xl-4")
                elemento.classList.add("col-sm-6")
            }
        },
    );
    
    if (icon.classList.contains("fa-grip-lines")) {
        icon.classList.remove("fa-grip-lines")
        icon.classList.add("fa-grip")
        reviewContainer.classList.remove("row")
        reviewContainer.classList.add("d-flex")
        reviewContainer.classList.add("flex-column")
    } else {
        icon.classList.remove("fa-grip")
        icon.classList.add("fa-grip-lines")
        reviewContainer.classList.remove("d-flex")
        reviewContainer.classList.remove("flex-column")
        reviewContainer.classList.add("row")
    }
}

function switchImage(url){
    const image = document.getElementById("principal-image")
    image.style.backgroundImage = `url(${url})`
}