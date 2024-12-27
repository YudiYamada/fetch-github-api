const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `
        <div class="info">
            <img src="${user.avatarUrl}" alt="Foto de perfil"/>
            <div class="data">
                <h1>${user.name ?? "Não possui nome cadastrado 😢"}</h1>
                <p>${user.bio ?? "Não possui bio cadastrada 😓"}</p>
                <p>Seguidores: ${user.followers}</p>
                <p>Seguindo: ${user.following}</p>
            </div>
        </div>`

        let repositoriesItems = ""
        user.repositories.forEach(repo => repositoriesItems += `
            <li>
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <p>Forks: ${repo.forks_count}</p>
                <p>Estrelas: ${repo.stargazers_count}</p>
                <p>Watchers: ${repo.watchers_count}</p>
                <p>Linguagem: ${repo.language ?? "Não especificada"}</p>
            </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
            <div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItems}</ul>
            </div>`
        }

        let eventsItems = ""
        user.events.forEach(event => eventsItems += `
            <li>${event.type} - ${new Date(event.created_at).toLocaleString()}</li>`)

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `
            <div class="events section">
                <h2>Eventos Recentes</h2>
                <ul>${eventsItems}</ul>
            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }