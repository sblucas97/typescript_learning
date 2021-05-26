const myFunc = <T>(array: T[]): T | null => {
	if (array.length < 0) return null
	array.forEach((item, i) => console.log(`position ${i} - value ${item}`))
}

myFunc<number>([12])
