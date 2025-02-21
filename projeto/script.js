// Função para alternar entre modo claro e escuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Muda o ícone do botão dependendo do modo
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '🌞';  // Modo claro
    } else {
        darkModeToggle.textContent = '🌙';  // Modo escuro
    }
});

// Atualiza o cronômetro
function updateTimer() {
    const startDate = new Date("2024-12-14T00:00:00");
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Adiciona animação ao atualizar
    const timer = document.getElementById("timer");
    timer.classList.add("updated");
    setTimeout(() => timer.classList.remove("updated"), 300);
}

setInterval(updateTimer, 1000);

// Alternar entre a Página Inicial e o Álbum
document.getElementById('album-link').addEventListener('click', function() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('album').style.display = 'block';

    // Marca a navegação ativa no menu
    document.getElementById('home-link').classList.remove('active');
    document.getElementById('album-link').classList.add('active');
});

// Voltar para a Página Inicial
document.getElementById('back-home').addEventListener('click', function() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('album').style.display = 'none';

    // Marca a navegação ativa no menu
    document.getElementById('album-link').classList.remove('active');
    document.getElementById('home-link').classList.add('active');
});

// Zoom nas imagens
const images = document.querySelectorAll('.zoomable');
images.forEach(image => {
    image.addEventListener('click', () => {
        const zoomedImage = document.createElement('div');
        zoomedImage.classList.add('zoomed-image');
        zoomedImage.innerHTML = `<img src="${image.src}" /><div class="close-btn">X</div>`;
        document.body.appendChild(zoomedImage);

        // Fecha o zoom ao clicar no botão "X" ou fora da imagem
        zoomedImage.addEventListener('click', (e) => {
            if (e.target.classList.contains('close-btn') || e.target === zoomedImage) {
                zoomedImage.remove();
            }
        });
    });
});
