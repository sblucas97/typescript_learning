const identity = <Type>(arg: Type): Type => arg

// let myIdentity: <Input>(arg: Input) => Input = identity
// let myIdentity: { <Input>(arg: Input):  Input } = identity

// interface GenericIdentityFn {
// 	<Type>(arg: Type): Type
// }
interface GenericIdentityFn<Type> {
	(arg: Type): Type
}

let myIdentity: GenericIdentityFn<number> = identity

export {}
