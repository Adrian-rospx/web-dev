/**
 *  .reduce = Reduce elements of an array 
 *            to a single value
 */

const prices = [5, 15, 25, 7, 3, 20];

const total = prices.reduce(sum);

console.log(`Total amount: ${total.toFixed(2)}$`);


// parameters may be renamed!
function sum(accumulator, next) {
    return accumulator + next;
}