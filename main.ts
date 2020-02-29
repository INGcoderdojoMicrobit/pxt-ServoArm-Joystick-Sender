basic.showIcon(IconNames.Heart)
radio.setGroup(199)
WSJoyStick.JoyStickInit()
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        led.plot(0, 0)
        radio.sendString("U")
        while (WSJoyStick.Listen_Dir(DIR.U)) {

        }
        radio.sendString("N")
        led.unplot(0, 0)
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        led.plot(0, 4)
        radio.sendString("D")
        while (WSJoyStick.Listen_Dir(DIR.D)) {

        }
        radio.sendString("N")
        led.unplot(0, 4)
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        radio.sendString("L")
        while (WSJoyStick.Listen_Dir(DIR.L)) {

        }
        radio.sendString("N")
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        radio.sendString("R")
        while (WSJoyStick.Listen_Dir(DIR.R)) {

        }
        radio.sendString("N")
    } else if (WSJoyStick.Listen_Key(KEY.C)) {
        radio.sendString("1")
        while (WSJoyStick.Listen_Key(KEY.C)) {

        }
        radio.sendString("N")
    } else if (WSJoyStick.Listen_Key(KEY.D)) {
        radio.sendString("2")
        while (WSJoyStick.Listen_Key(KEY.D)) {

        }
        radio.sendString("N")
    } else if (WSJoyStick.Listen_Key(KEY.E)) {
        radio.sendString("3")
        while (WSJoyStick.Listen_Key(KEY.E)) {

        }
        radio.sendString("N")
    } else if (WSJoyStick.Listen_Key(KEY.F)) {
        radio.sendString("4")
        while (WSJoyStick.Listen_Key(KEY.F)) {

        }
        radio.sendString("N")
    } else if (WSJoyStick.Listen_Key(KEY.P)) {
        radio.sendString("N")
        while (WSJoyStick.Listen_Key(KEY.P)) {

        }
        radio.sendString("N")
    } else if (WSJoyStick.Listen_Key(KEY.A)) {
        radio.sendString("A")
        while (WSJoyStick.Listen_Key(KEY.A)) {

        }
        radio.sendString("N")
    } else if (WSJoyStick.Listen_Key(KEY.B)) {
        radio.sendString("B")
        while (WSJoyStick.Listen_Key(KEY.B)) {

        }
        radio.sendString("N")
    }
    radio.sendString("N")
})
 