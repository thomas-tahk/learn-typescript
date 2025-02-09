type Address = {
    street: string
    city: string
    country: string
}

// types can be part of another type's definition/typing
type Person = {
    name: string
    age: number
    isStudent: boolean
    // means the address is optional
    address?: Address
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

// notice type safety measure here
function displayInfo(person: Person) {
    console.log(`${person.name} lives at ${person.address?.street}`)
}

displayInfo(person1)