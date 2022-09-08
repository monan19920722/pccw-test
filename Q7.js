const {
    services
  } = require('./@console/assessment-js/__tests__/__helpers__/p7');
async function fetchUserByNameAndUsersCompany(name, service) {
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
}

fetchUserByNameAndUsersCompany('stan', services)