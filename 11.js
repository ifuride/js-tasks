//Write a function getInfo(persons) that takes an array of objects describing a person with fields {name, age} 
//and returns an object with the average age and the name of the oldest person.
const getInfo = persons => {
    const ages = persons.map(person => person.age);
    const averageAge = ages.reduce((sum, current) => sum + current, 0) / ages.length;
    const maxAge = Math.max(...ages);
    const oldestPerson = persons.find(person => person.age === maxAge);
    return {
        averageAge,
        oldestPerson: oldestPerson.name}
}

console.log( getInfo([
    {
        name: 'Kaya',
        age: 10,
    },
    {
        name: 'Vitya',
        age: 20,
    },
    {
        name: 'Kolya',
        age: 30,
    }
]) )
