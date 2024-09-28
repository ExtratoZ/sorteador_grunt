document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numMax = document.getElementById('num-max').value;
        numMax = parseInt(numMax);

        let numRandom = Math.random() * numMax;

        document.getElementById('resultado-valor').innerText = Math.floor(numRandom + 1);
        document.querySelector('.resultado').style.display = 'block';
    })
})