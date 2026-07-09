"use strict";
/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ChickenHamburger {
    prepare() {
        console.log('Preparando una hamburguesa de %cpollo');
    }
}
class BeefHamburger {
    prepare() {
        console.log('Preparando una hamburguesa de %cres');
    }
}
class BeanHamburger {
    prepare() {
        console.log('Preparando una hamburguesa de %cfrijol');
    }
}
class Restaurant {
    orderHamburger() {
        const hamburger = this.createHamburger();
        hamburger.prepare();
    }
}
class ChickenRestaurant extends Restaurant {
    createHamburger() {
        return new ChickenHamburger();
    }
}
class BeefRestaurant extends Restaurant {
    createHamburger() {
        return new BeefHamburger();
    }
}
class BeanRestaurant extends Restaurant {
    createHamburger() {
        return new BeanHamburger();
    }
}
function main() {
    let restaurant;
    const burgerType = prompt('¿Qué tipo de hamburguesa quieres? ( chicken/beef/bean )');
    switch (burgerType) {
        case 'chicken':
            restaurant = new ChickenRestaurant();
            break;
        case 'beef':
            restaurant = new BeefRestaurant();
            break;
        case 'bean':
            restaurant = new BeanRestaurant();
            break;
        default:
            throw new Error('Opción no válida');
    }
    restaurant.orderHamburger();
}
main();
