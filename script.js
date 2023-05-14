// Aguarde o carregamento da página antes de executar o código dentro da função 
document.addEventListener("DOMContentLoaded", function () {
    // Obtem os elementos de hora, minuto e segundo do documento HTML
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");

    // Define uma função que será chamada repetidamente para atualizar os ponteiros do relogio
    function setDate() {
        //Obtem a atual hora como um objeto Date
        const now = new Date();

        // Calcula o ângulo em graus para o ponteiro dos segundos com base nos segundos atuais
        const seconds = now.getSeconds();
        const secondsDegrees = (seconds / 60) * 360 + 90;

        // Define o estilo de transformação do elemento do ponteiro de segundos para girá-lo no ângulo correto
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        // Calcula o ângulo em graus para o ponteiro dos minutos com base nos minutos atuais
        const minutes = now.getMinutes();
        const minutesDegrees = (minutes / 60)* 360 + (seconds / 60) * 6 + 90;

        //Define o estilo de transformação do elemento do ponteiro de minutos para girá-lo no ângulo correto
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

        // Calcula o ângulo em graus para o ponteiro de horas com base na hora atual
        const hours = now.getHours();
        const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

        //Define o estilo de transformação do elemento do ponteiro de horas para girá-lo no ângulo correto
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    setInterval(setDate, 1000);
})