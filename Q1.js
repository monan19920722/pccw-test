function stripProp(propArr, objArr) {
    return objArr.map((item) => {
        const obj = Object.assign(item)
        propArr.forEach(element => {
            if (obj[element]) {
                delete obj[element]
            }
        });
        console.log(obj)
        return obj
    })
}

const result = stripProp(['password', 'token'],
[
  {
    name: 'stan',
    email: 'stan@smith.test',
    password: 'secret',
    token: '123',
  },
  {
    name: 'fran',
    email: 'sran@smith.test',
    password: 'secret',
    token: '123',
  },
])
// console.log(result)