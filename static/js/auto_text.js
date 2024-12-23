function createProject(title, description, whats_used, date_creation, link) {
    const divProjects = document.querySelector('#grid-projects')

    arrayLi = []
    for(used of whats_used) {
        template_li = `<li>${used}</li>`
        arrayLi.push(template_li)
    };

    template = `
    <header>
        <h2>${title}</h2>
    </header>
    <p class="description"><b>Descrição:</b> ${description}</p>
    <ul>
        <h4>O que usei para desenvolver:</h4>

    </ul>
    <p class="data-criacao">Desenvolvido em: ${date_creation}</p>
    <p class="link-project">Link para ver: <a href="${link}" target="_blank">clique aqui</a></p>
    `
    article = document.createElement('article')
    article.classList.add('project')
    article.innerHTML = template
    divProjects.appendChild(article)
};

createProject('Teste', 'teste', ['js', 'py', 'dj'], '12/11', 'http://google.com')

