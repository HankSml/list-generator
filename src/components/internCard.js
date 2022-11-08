const internCard = (intern) => {
    return (
        `<div class="card">
            <div class="card-head">
                <h2>${intern.name}</h2>
                <h3>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <div>
                    <p>${intern.id}</p>
                    <p>
                        <a href='mailto:${intern.email}'>${intern.email}</a>
                    </p>
                    <p>${intern.school}</p>
                </div>
            </div>
        </div>`
    )
}

module.exports = internCard