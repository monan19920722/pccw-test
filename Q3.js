function sumDeep(arr) {
    return arr.map(item => {
        if (!Array.isArray(item.objects)) {
            return
        }
        const {val} = item.objects.reduce((accumulator, currentValue) => {
            if (accumulator.val && currentValue.val) {
                return {val: accumulator.val + currentValue.val}
            } else if (accumulator.val) {
                return accumulator
            } else if (currentValue.val) {
                return currentValue
            }
        })
        return {objects: val}
    })
}

sumDeep([
    {
      objects: [{ val: 2 }, { val: 1 }, { val: 1 }],
    },
    {
      objects: [{ val: 1 }, { val: 0 }, { val: 4 }],
    },
  ])