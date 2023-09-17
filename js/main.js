
// console.log(products);
// 1 посчитать и вывести суму товаров
// 2 > 100 > :(
// 3 < 20  > :)

let meals = [
    ['Bread', 20],
    ['Butter', 70],
    ['Sausage', 150,],
];

function sum() {
    let totalAmount = 0;
    for (let i = 0; i < meals.length; i++) {
        let products = meals[i][0];
        let price = meals[i][1];
        totalAmount += meals[i][1];
        if (price === 70) {
            console.log((i + 1), products, price, `:)`);
        } else if (price === 150) {
            console.log((i + 1), products, price, `:(`);
        } else {
            console.log((i + 1), products, price, `*___*`);
        }
    }
    console.log(totalAmount);
    return sum;
}
sum();