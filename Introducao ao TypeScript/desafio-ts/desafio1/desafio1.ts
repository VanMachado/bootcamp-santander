interface IEmployee {
    code: number;
    name: string;
};

let employee: IEmployee = {
    code: 10,
    name: 'John'
}

console.log(employee.code);
console.log(employee.name);
