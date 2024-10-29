// Dados dos produtos
const products = [
    {
        title: "Smartwatch Premium - Série X",
        price: "R$999,00",
        description: "Experimente o futuro com o Smartwatch Série X. Monitoramento avançado de saúde, design elegante e conectividade total.",
        image: "1 img.jpg"
    },
    {
        title: "Smartwatch Active - Série A",
        price: "R$799,00",
        description: "Modelo Active com design leve, ideal para práticas esportivas e monitoramento de atividades.",
        image: "2 img.jpg"
    },
    {
        title: "Smartwatch Pro - Série P",
        price: "R$1.199,00",
        description: "Série Pro com recursos avançados para usuários que buscam desempenho e estilo em um só.",
        image: "3 img.jpg"
    },
    {
        title: "Smartwatch Slim - Série S",
        price: "R$699,00",
        description: "Design ultrafino e funcional, perfeito para quem valoriza praticidade e elegância.",
        image: "4 img.jpg"
    }
];

// Função para atualizar o produto selecionado
function updateProduct(index) {
    const selectedProduct = products[index - 1];
    document.getElementById("productTitle").textContent = selectedProduct.title;
    document.getElementById("productPrice").textContent = selectedProduct.price;
    document.getElementById("productDescription").textContent = selectedProduct.description;
    document.getElementById("mainImage").src = selectedProduct.image;
}

// Função para atualizar a imagem principal ao clicar em uma miniatura
function updateImage(imageSrc) {
    document.getElementById("mainImage").src = imageSrc;
}
