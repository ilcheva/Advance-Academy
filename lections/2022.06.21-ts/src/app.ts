let car: string[] = ['Audi', 'Bmw', 'Ford'];

interface Auto {
  brandCar: string;
  model: string;
  yearOfManufactury: string;
  colors: string[];
  rentPrice: number;
  rentPriceTotal: (extraFee: number) => void;
  rentTimeStart: string;
  rentTimeEnd: string;
  isPromoted?: boolean;
  test?: number[];
}
let data: Auto[] = [
  {
    brandCar: 'Merceders',
    model: 'ML',
    yearOfManufactury: '01-01-2020',
    colors: ['black', 'metalic', 'red', 'white'],
    rentPrice: 500,
    rentPriceTotal: function (extraFee) {
      return ((extraFee * this.rentPrice) + this.rentPrice)
    },
    rentTimeStart: '01-06-2020',
    rentTimeEnd: '10-06-2020'

  },
  {
    brandCar: 'Volvo',
    model: 'V60',
    yearOfManufactury: '01-01-2018',
    colors: ['black', 'metalic', 'red', 'white'],
    rentPrice: 700,
    rentPriceTotal: function (extraFee) {
      return ((extraFee * this.rentPrice) + this.rentPrice)
    },
    rentTimeStart: '10-08-2020',
    rentTimeEnd: '13-08-2020',
    isPromoted: true,
    test: [1, 2, 3, 4, 5] as number[]

  },
  {
    brandCar: 'Subaru',
    model: 'Forester',
    yearOfManufactury: '01-01-2019',
    colors: ['black', 'metalic', 'red', 'white'],
    rentPrice: 600,
    rentPriceTotal: function (extraFee) {
      return ((extraFee * this.rentPrice) + this.rentPrice)
    },
    rentTimeStart: '03-07-2020',
    rentTimeEnd: '23-07-2020'

  }
];
// console.log(data[1]);
// data[1].color.push('yellow');
// console.log(data[1]);
// data[1].color.splice(2, 0, 'pink');
// console.log(data[1]);
// data[1].color.splice(2, 1, 'green');
// console.log(data[1]);

// console.log(data[1].test);
// let totalSum = 0;
// data.forEach(({ rentPrice }) => totalSum += rentPrice)
// console.log(totalSum);


let fee: any;
let price: any;
let colorPercentages = {} as any;
let rentedAllColors = {} as any;

data.forEach(({ colors, brandCar }, i) => {
 
  let colorPrice: number[] = [0.25, 0.5, 0.75, 1];

  colors.forEach((color, index) => {
    colorPercentages[color] = colorPrice[index];

  });



});
//REDUCE


let numbers: number[] = [10, 20, 30]
let newArr = [100, 200, 300, ...numbers];
let employees = [
  {
    firstName: 'Mariya',
    lastName: 'Ilieva',
    salary: 6400,
  },
  {
    firstName: 'Liubo',
    lastName: 'Kirov',
    salary: 8000,

  }
]
let totalSalarySum = employees.reduce((sum, employee) => {
  return sum += employee.salary
}, 0)
// console.log(totalSalarySum);

