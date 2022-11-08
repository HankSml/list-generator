const { Manager } = require('../../lib')

const managerCard = (manager) => {
    return (
        `<div class="card">
            <div class="card-head">
                <h2>${manager.name}</h2>
                <h3>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <div>
                    <p>${manager.id}</p>
                    <p>
                        <a href='mailto:${manager.email}'>${manager.email}</a>
                    </p>
                    <p>${manager.officeNumber}</p>
                </div>
            </div>
        </div>`
    )
}

module.exports = managerCard