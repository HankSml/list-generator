const engineerCard = (engineer) => {
    return (
        `<div class="card">
            <div class="card-head">
                <h2>${engineer.name}</h2>
                <h3>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <div>
                    <p>${engineer.id}</p>
                    <p>
                        <a href='mailto:${engineer.email}'>${engineer.email}</a>
                    </p>
                    <p>
                        <a href='https://github.com/${engineer.github}'>${engineer.github} </a>
                    </p>
                </div>
            </div>
        </div>`
    )
}

module.exports = engineerCard