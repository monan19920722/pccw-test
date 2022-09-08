/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = (propArr, objArr) => (
    objArr.map((item) => {
        const obj = Object.assign(item)
        propArr.forEach(element => {
            if (obj[element]) {
                delete obj[element]
            }
        });
        return obj
    })
);
exports.excludeByProperty = (prop, objArr) => (
    objArr.filter((item) => {
        const obj = Object.assign(item)
        if (obj[prop]) {
            return false
        }
        return true
    })
);
exports.sumDeep = (arr) => {
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
};
exports.applyStatusColor = (code, statusArr) => {
    const colorArr = Object.keys(code)
    return  statusArr.map(item => {
        for (let i = 0; i < colorArr.length; i++) {
            if (code[colorArr[i]].indexOf(item.status) !== -1) {
                return {...item, color: colorArr[i]}
            }
        }
    }).filter(item => item)
};
exports.createGreeting = (greet, type) => {
    if (type === 'hello') {
        return function (name) {
            return `hello ${name}`
        }
    } else if (type === 'good bye') {
        return function (name) {
            return `good bye ${name}`
        }
    }
};
exports.setDefaults = (defaultProps) => {
    return function (props) {
        return {
            ...defaultProps,
            ...props
        }
    }
};
exports.fetchUserByNameAndUsersCompany = async (name, service) => {
    const {fetchStatus, fetchUsers, fetchCompanyById} = service
    const [allUser, status] = await Promise.all([fetchUsers(), fetchStatus()])
    const user = allUser.find(item => item.name === name)
    const {companyId} = user
    const company = await fetchCompanyById(companyId)
    return {
        company,
        status,
        user
    }
};
