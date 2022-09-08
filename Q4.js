function applyStatusColor(code, statusArr) {
    const colorArr = Object.keys(code)
    return  statusArr.map(item => {
        for (let i = 0; i < colorArr.length; i++) {
            if (code[colorArr[i]].indexOf(item.status) !== -1) {
                return {...item, color: colorArr[i]}
            }
        }
    }).filter(item => item)
}
applyStatusColor({
    red: [404, 400],
    green: [200, 201],
  },
  [
    {
      status: 404,
    },
    {
      status: 200,
    },
    {
      status: 404,
    },
    {
      status: 201,
    },
    {
      status: 400,
    },
    {
      status: 408,
    },
  ])