// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

//import {bind, person1, person2, logPerson} from './bind.js'
import * as binder from './bind.js'

binder.bind(binder.person1, binder.logPerson)()

// function logPerson() {
// 		console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// 	}
// function bind(person, func) {
// 	return function(...args) {
// 		func.call(person, args)
// 	}
// }

// const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
// const person2 = {name: 'Сергей', age: 36, job: 'FE_FS'}

// bind(person2, logPerson)()