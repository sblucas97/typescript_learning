/**
 * constrain this function to work with any and all types that ALSO have the length
 */

interface Lengthwise {
	length: number
}

const logginIdentity = <Type extends Lengthwise>(arg: Type): Type => {
	console.log(arg.length)
	return arg
}

// logginIdentity(3) => error

logginIdentity([3])
logginIdentity({ length: 10 })
logginIdentity({ length: 10, value: 'something' })

const getProperty = <Type, Key extends keyof Type>(
	obj: Type,
	key: Key
): Type[Key] => {
	return obj[key]
}

let x = { a: 1, b: 2, c: 3 }

getProperty(x, 'a')
// getProperty(x, "m") => error
