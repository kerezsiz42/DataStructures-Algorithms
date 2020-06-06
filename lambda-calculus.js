// Lambda calculus
// https://www.youtube.com/watch?v=3VQ382QG-y4&t=2619s

// Ibis = Identity
// I := λx.x
const I = x => x

// Mockingbird = Apply argument to itself
// M := λx.xx
const M = x => x(x)

// Kestrel = Return first argument
// K := λxy.x
const K = x => y => x

// Kite = Return second argument
// KI := λxy.y
const KI = x => y => y

// Cardinal = Flip arguments
// C := λfxy.fyx
const C = f => x => y => f(y)(x)

// True
const T = K
// False
const F = KI

// NOT := λp.pFT
const not = p => p(F)(T)
// AND := λpq.pqp
const and = p => q => p(q)(p)
// OR := λpq.ppq
const or = p => q => p(p)(q)
// BEQ := λpq.p q (not q)
const beq = p => q => p(q)(not(q))