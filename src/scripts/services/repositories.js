import { baseUrl, repositoriesQuantity } from "/src/scripts/variables.js"

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    const repositories = await response.json()
    
    return repositories.map(repo => ({
        name: repo.name,
        html_url: repo.html_url,
        forks_count: repo.forks_count,
        stargazers_count: repo.stargazers_count,
        watchers_count: repo.watchers_count,
        language: repo.language
    }))
}

export { getRepositories };
