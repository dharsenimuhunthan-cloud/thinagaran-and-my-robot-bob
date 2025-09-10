basic.showIcon(IconNames.Happy)
basic.showString(" selamat pagi encik nak makan apa")
basic.forever(function () {
    if (input.logoIsPressed()) {
        music.setVolume(127)
    } else if (false) {
        basic.pause(100)
    }
})
