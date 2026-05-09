document.querySelectorAll('.title').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
    });
});


let currentIndex = 0;
const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".opniao");

function update3DEffect() {
    if (cards.length === 0) return;

    // 1. Atualiza as classes visuais
    cards.forEach((card, i) => {
        card.classList.remove("ativo");
        if (i === currentIndex) {
            card.classList.add("ativo");
        }
    });

    // 2. Calcula o movimento
    // Largura do card (250px) + Gap (30px)
    const moveX = currentIndex * (250 + 30);

    // Move o slider para a esquerda
    slider.style.transform = `translateX(-${moveX}px)`;
}

// Funções para os botões
function avancar() {
    currentIndex = (currentIndex + 1) % cards.length;
    update3DEffect();
}

function voltar() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    update3DEffect();
}

// Autoplay (opcional - pausar se quiser usar só os botões)
let autoPlay = setInterval(avancar, 4000);

// Pausa o autoplay quando o usuário clica em algo
document.querySelector("#carrossel").addEventListener("click", () => {
    clearInterval(autoPlay);
});

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    let itens = document.querySelectorAll("#slider .opniao");

    function atualizarAtivo() {
        itens.forEach(el => el.classList.remove("ativo"));
        if (itens[1]) itens[1].classList.add("ativo");
    }

    function avancar() {
        slider.appendChild(itens[0]);
        itens = document.querySelectorAll("#slider .opniao");
        atualizarAtivo();
    }

    function voltar() {
        slider.insertBefore(itens[itens.length - 1], itens[0]);
        itens = document.querySelectorAll("#slider .opniao");
        atualizarAtivo();
    }

    window.avancar = avancar;
    window.voltar = voltar;

    atualizarAtivo();
});