// zadanie pierwsze

const H = 'Hello';
const W = 'World';
console.log(`${H} ${W}`);

// zadanie drugie

const multiply = (x, y = 1) => {return  console.log(x * y);
};

multiply(5);

// zadanie trzecie

const average = (...rest) => 
{ 
    let a = 0;
    rest.forEach(x => a += x)
    return console.log(a/rest.length)
}

average(2, 3);

// zadanie czwarte

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//zadanie piąte

const table = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,firstname, ,lastname] = table;

console.log(firstname, lastname);
