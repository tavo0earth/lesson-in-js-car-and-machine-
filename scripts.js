/*"Используя es6 классы и наследование решить следующую задачу:
спроектировать 2 вида авто - легковая машина и металорежущий станок.

Машина должна содержать в себе следующий функционал: состояние двигателя(работает сейчас или нет),
размер бака, расход топлива, текущее значение залитого топлива.
Также функции, которые:
1) заправляют бак на определенное количество литров
2) вычисляют текущее значение залитого топлива
3) вычисляют время которое может проехать авто
4) функция: поехали(запускает двигатель, вычисляет сколько времени будет ехать машина, запускает таймер в
секундах сколько она может проехать и выводит сообщение сколько авто было в пути по окончанию поездки.
Также функция должна возвращать включен ли двигатель или нет)
5) функция: остановить авто(останавливает двигатель если он запущен, обнуляет таймер поездки.
Также функция должна возвращать включен ли двигатель или нет)

Станок должен содержать в себе следующий функционал: состояние двигателя(работает сейчас или нет),
состояние инструмента(есть или нет), состояние детали(есть или нет).
Функции:
1) установить/снять инструмент
2) установить/снять деталь
3) узнать установлен ли инструмент
4) узнать есть ли деталь
5) начать обработку детали(если установлен инструмент и деталь, включает двигатель, выводит сообщение что
обратотка детали начата. Также функция должна возвращать включен
ли двигатель или нет)
6) остановить обработку(если обработка начата, останавливает двигатель. Также функция должна возвращать
включен ли двигатель или нет)

Проанализировать общий функционал и спроектировать общую сущность(техника) для обеих видов авто.
Общее состояние и функции должны находится в этой сущности."
*/

class CarCharacteristic {
    constructor(engine, tank, fuelConsumption, fuelNow) {
        this.engine = engine;
        this.tank = tank;
        this.fuelConsumption = fuelConsumption;
        this.fuelNow = fuelNow;
    }

    tankCheck () {
            if (this.fuelNow < 0) {
                return "Значение должно быть положительным";
            }
            if (this.fuelNow > this.tank) {
                return "Нельзя залить больше, чем " + this.tank + "л";
            }
        };

    tankFull () {
        if (this.fuelNow > 0 && this.fuelNow < this.tank) {
            return true;
        }
    }

    motor () {
        if (this.engine === true) {
            return true
        } else {
            return false
        }
    }

    go() {
        if (this.motor() === true && this.tankFull() === true) {
            const time = this.fuelNow / this.fuelConsumption;
            alert('Поехали!');
            alert("Двигатель: " + this.motor());
            alert('Бак заполнен на ' + this.fuelNow + "л.");
            alert("Машина проедет: " + time + "с.")
        }
        if (this.motor() !== true) {
            alert("Двигатель: " + this.motor());
        }
        if (this.tankFull() !== true) {
            alert(this.tankCheck());
        }
    }

    stop() {
        const time = 0;
        if (this.motor() === true) {
            alert("Двигатель: " + this.motor());
            alert("Двигатель выключили");
            alert("Машина проедет: " + time + "с.");
        }
        if (this.motor() !== true) {
            alert("Двигатель: " + this.motor());
        }
    }
}

const car = new CarCharacteristic(true, 200, 5, 100);

car.go();
car.stop();