

function logPerson() {
		console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
	}
function bind(person, func) {
	return function(...args) {
		func.call(person, args)
	}
}

const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
const person2 = {name: 'Сергей', age: 36, job: 'FE_FS'}


export {bind, person1, person2, logPerson}