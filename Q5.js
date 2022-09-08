function createGreeting(greet, type) {
    if (type === 'hello') {
        return function (name) {
            return `hello ${name}`
        }
    } else if (type === 'good bye') {
        return function (name) {
            return `good bye ${name}`
        }
    }
}