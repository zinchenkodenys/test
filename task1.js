// Здравствуй!
//Вот ваше тестовое задание для курса MA Node.js. Это не очень сложно, но может быть немного сложно. Он проверяет только ваши базовые знания языка JavaScript, 
//необходимые для успешного завершения нашего курса.
//Создайте функцию, которая получает массив товаров и возвращает стоимость, которая должна быть оплачена за все эти товары.
//Ваш код должен:
//- Вывести в консоль общее количество пар носков (Socks - $ {количество});
//- Вывести на консоль общее количество шляп красного цвета (Red Hats - $ {количество});
//- Вывести в консоль стоимость товаров по цветам (Красный - $ {costRed}, Зеленый - $ {costGreen}, Синий - $ {costBlue});
//- Вывести в консоль результат выполнения этой функции.
//Примечание: постарайтесь свести к минимуму свой код.
//Входной массив в формате JSON:

let type = "Socks";
let colorType = "Red";

function valueItems(array) {
    let costs = 0;
    for(let i = 0; i < array.length; i++) {
        let quantity = 0;
        let cost = 0;
        for(let item in array[i]){
            if(item == "quantity") {
                quantity = +array[i][item];
            }else if(item == "priceForPair" || item == "price"){
                cost = +(array[i][item]).slice(1);
            }
        }

        costs += quantity * cost;
    }

    return costs;
}

function valueQuantityType(array, type, color = undefined) {
    let quantityType = 0;
    type = type.toLowerCase();
    P
    for(let i = 0; i < array.length; i++) {
        if(array[i]["type"] == type && array[i]["quantity"] !== undefined) {
            if(color !== undefined && array[i]["color"] == color) {

            }else{
                quantityType += +array[i]["quantity"];
            } 
        }
    }

    return quantityType;
}

function costItemColor(array) {
    for(let i = 0; i < array.length; i++){
        //console.log(`${array[i][]}`);    
    }
}

const items =[
    {"type": "socks", "color": "red", "quantity": 10, "priceForPair": "$3"},
    {"type": "socks", "color": "green", "quantity": 5, "priceForPair": "$10"},
    {"type": "socks", "color": "blue", "quantity": 8, "priceForPair": "$6"},
    {"type": "hat", "color": "red", "quantity": 7, "price": "$5"},
    {"type": "hat", "color": "green", "quantity": 0, "price": "$6"},
    {"type": "socks", "color": "blue", "priceForPair": "$6"},
    {"type": "socks", "color": "red", "quantity": 10, "priceForPair": "$3"},
    {"type": "socks", "color": "white", "quantity": 3, "priceForPair": "$4"},
    {"type": "socks", "color": "green", "priceForPair": "$10"},
    {"type": "socks", "color": "blue", "quantity": 2, "priceForPair": "$6"},
    {"type": "hat", "color": "green", "quantity": 3, "price": "$5"},
    {"type": "hat", "color": "red", "quantity": 1, "price": "$6"},
    {"type": "socks", "color": "blue", "priceForPair": "$6"}
];

console.log(`Items costs: ${valueItems(items)};`);
console.log(`Quantity ${type}: ${valueQuantityType(items, type)};`);

type = "Hat";

console.log(`Quantity ${type} ${colorType}: ${valueQuantityType(items, type, colorType)};`);
costItemColor(items);