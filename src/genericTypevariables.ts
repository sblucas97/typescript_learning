// const myFunc = <T>(array: T[]): T | null => {
// 	if (array.length < 0) return null
// 	array.forEach((item, i) => console.log(`position ${i} - value ${item}`))
// }

// myFunc<number>([12])

/**
 * IDENTITY FUNCTION => a function tha will return back whatever is passed in
 */

// whithout generics

// function identity(arg:number): number {
// 	return arg
// }

// function identity(arg:any): any {
// 	return arg
// }

/**
 * using ANY it will accept any and all type of arg, which is ok
 * but we're actually losing the information about what type was when the function returns
 */

// using generics

const identity = <Type>(arg: Type): Type => arg

// passing all arguments
let output = identity<string>('myString')

// type argument inference => compiler will set the value of Type automatically
let output2 = identity(12)

const funcShowingCompilerEnforce = <Type>(arg: Type): Type => {
	// console.log(arg.length)
	/**
	 * whitout a type verification compiler will show an error, in the case above:
	 * "Property "length "does not exist on type Type  "
	 */

	if (Array.isArray(arg)) {
		console.log(arg.length)
	}

	return arg
}

export {}
