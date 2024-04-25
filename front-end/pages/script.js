// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o elemento do controle deslizante de preço pelo ID
    const priceRange = document.getElementById("priceRange");
    // Seleciona o elemento de exibição do valor de preço pelo ID
    const priceValue = document.getElementById("priceValue");
    // Seleciona todos os elementos de cor usando a classe .form-check-input
    const colors = document.querySelectorAll(".form-check-input");
  
    // Adiciona um ouvinte de evento para atualizar o valor de preço quando o controle deslizante é alterado
    priceRange.addEventListener("input", function() {
        // Atualiza o texto do elemento de exibição de valor com o valor do controle deslizante
        priceValue.textContent = this.value;
    });
  
    // Adiciona um ouvinte de evento para alterar a cor de fundo do controle deslizante e atualizar o preço quando o usuário move o controle deslizante
    priceRange.addEventListener("mousemove", function() {
        // Calcula a porcentagem de conclusão do controle deslizante
        const value = (this.value - this.min) / (this.max - this.min) * 100;
        // Aplica um gradiente linear à cor de fundo do controle deslizante
        this.style.background = `linear-gradient(to right, #000 0%, #000 ${value}%, #f4f4f4 ${value}%, #f4f4f4 100%)`;
        // Atualiza o texto do elemento de exibição de valor com o valor do controle deslizante
        priceValue.textContent = this.value;
    });
  
    // Adiciona um estilo de destaque ao passar o mouse sobre as opções de cores
    colors.forEach(color => {
        // Adiciona um ouvinte de evento para aumentar a escala ao passar o mouse sobre a cor
        color.addEventListener("mouseover", function() {
            // Aumenta a escala da cor
            this.style.transform = "scale(1.2)";
        });
  
        // Adiciona um ouvinte de evento para restaurar a escala ao mover o mouse para fora da cor
        color.addEventListener("mouseout", function() {
            // Restaura a escala da cor
            this.style.transform = "scale(1)";
        });
    });
  });
  

  // Seleciona todos os botões de tamanho
const sizeButtons = document.querySelectorAll('.sizes input[type="button"]');

// Adiciona um ouvinte de evento de clique a cada botão de tamanho
sizeButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove a classe 'selected' de todos os botões de tamanho
    sizeButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Adiciona a classe 'selected' apenas ao botão clicado
    this.classList.add('selected');
  });
});