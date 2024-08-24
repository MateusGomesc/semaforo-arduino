var loopSemaforo = () => {
    red.on()
    yellow.off()
    green.off()

    setTimeout(() => {
        red.off()
        yellow.on()
        green.off()

        setTimeout(() => {
            red.off()
            yellow.off()
            green.on()

            setTimeout(() => {
                loopSemaforo()
            }, 5000) // Led verde
        }, 5000) // Led amarelo
    }, 5000) // Led vermelho
}

// configure express
const express = require('express')
const app = express()

var five = require('johnny-five')
var arduino = new five.Board({ port: "Com5" }) // confire arduino
var green, yellow, red  // Leds


// start arduino
arduino.on('ready', () => {
    console.log('Ready')
    green = new five.Led(26)
    yellow = new five.Led(22)
    red = new five.Led(28)
})

app.get("/", (req, res) => {
    loopSemaforo()
    res.status(200)
})

// start server
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})