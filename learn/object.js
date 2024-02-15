// const obj1 = new Object();
// const obj2 = {};
const obj = { neme: '전시윤', email: 'siyoonjeonn@gmail.com'};

obj['age'] = 20
obj.phone = '01012341234'
console.log(obj)

delete obj.phone;
console.log(obj)

console.log('email' in obj)
console.log('phone' in obj)

console.log(Object.keys(obj));
console.log(Object.values(obj));

// for in 객체 순회
for (const key in obj) {
	console.log(key, obj[key])
}
