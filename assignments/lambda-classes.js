// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    };
}


class Instuctor extends Person{
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    };
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    };
}

class Student extends Person{
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => {
            return console.log(`One of my favorite subjects is ${subject}.`);
        })
    }
    PRAssignment(student, subject){
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(student, subject){
        return `${student.name} has begun sprint challenge on ${subject}`; 
    }
}

class ProjectManagers extends Instuctor{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel){
        return `${name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(name, student, subject){
        return `${name} debugs ${student.name}'s code on ${subject}`;
    }
}

const fred = new Instuctor({
    name: "Fred",
    age: 37,
    location:"Bedrock",
    specialty: "Javascript",
    favLanguage: "Javascript",
    catchPhrase: "yabadabadoo",
});

const wilma = new Instuctor({
    name: "Wilma",
    age: 33,
    location: "Bedrock",
});

const bambam = new Student({
    name: "Bambam",
    age:10,
    location:"bedrock",
    favSubjects:["javascript", "react", "python"],
    className: "web25",
    previousBackground: "stone worker",
})

const pebbles = new Student({
    name: "Pebbles",
    age: 8,
    location: "bedrock",
    favSubjects: ["javascript", "react", "python"],
    className: "web25",
    previousBackground: "stone worker",
})

const barney = new ProjectManagers({
    name: "Barney",
    age: 37,
    location: "Bedrock",
    specialty: "Python",
    favLanguage: "Javascript",
    catchPhrase: "Hey, Fred",
    gradClassName: "Web 25 full time",
    favInstructor: "Fred",
})

const betty = new ProjectManagers({
    name: "Betty",
    age: 33,
    location: "Bedrock",
    specialty: "Ruby",
    favLanguage: "C#",
    catchPhrase: "Hey, Barney",
    gradClassName: "Web 25 full time",
    favInstructor: "Wilma",
})


console.log(fred.speak());
console.log(wilma.demo("Javascript"));
console.log(fred.grade(pebbles, "Python"));
console.log(bambam.listsSubjects());
console.log(bambam.PRAssignment(bambam, "Javascript"));
console.log(pebbles.sprintChallenge(pebbles, "C#"));
console.log(barney.standUp("Web25", "Slack"));
console.log(betty.debugsCode("Web25", pebbles, "Javascript"));