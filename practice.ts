let myName: string;
let age: string | number;
let isDumb: boolean;
let hobbies: string[];
let role: [number, string];

type Person = {
  name: string;
  age?: number;
};

let person: Person = {
  name: "Marissa",
  age: 28,
};

let allPeople: Person[];

age = 28;
isDumb = true;
hobbies = ["sleeping", "snoozing"];
role = [5, "a string now"];

// return void or never (void returns undefined, never returns nothing)
let printName: (name: string) => void;

let personName: unknown;
