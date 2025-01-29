function createProject(title, description, whats_used, date_creation, link, special) {
    const divProjects = document.querySelector('#grid-projects')
    template_li = ''
    for (used of whats_used) {
        template_li += `<li>${used}</li>`
    };

    template = `
    <header>
        <h2>${title}</h2>
    </header>
    <p class="description"><b>Descrição:</b> ${description}</p>
    <ul>
        <h4>O que usei para desenvolver:</h4>
        ${template_li}
    </ul>
    <p class="data-criacao">Desenvolvido em: ${date_creation}</p>
    <p class="link-project">Link para ver: <a href="${link}" target="_blank">clique aqui</a></p>
    `
    article = document.createElement('article')
    article.classList.add('project')

    if (special) article.classList.add('project-star')

    article.innerHTML += template
    divProjects.appendChild(article)
};

// ed planejamento project
createProject(
    'ED Planejamentos', 
    'este é um site que permite que professores gerem planejamentos de aulas com o auxílio de uma IA, que é integrada a um documento Word.', 
    ['Django Framework', 'Python', 'HTML', 'CSS', 'Google Cloud Platform (GCP)', 'JavaScript', 'Nginx', 'Dominios e certificados SSL', 'Inteligência Artificial'], 
    '01/2025', 
    'https://www.edplanejamentos.com.br/',
    true
)

// tio elias's project
createProject(
    'Tio Elias Londrina', 
    'foi criada uma simples landing page para divulgar um serviço, porém, sua maior funcionalidade é que ela é uma plataforma de gerenciamento de clientes, utilizada para: lançar e receber pagamentos, consultar análises, gerar relatórios e outros, são algumas das funcionalidades implementadas no site.', 
    ['Django Framework', 'Python', 'HTML', 'CSS', 'Google Cloud Platform (GCP)', 'JavaScript', 'Nginx', 'Dominios e certificados SSL'], 
    '09/2024', 
    'https://www.tioeliaslondrina.com.br/',
    true
)


// e commerce project
createProject(
    'E-Commerce', 
    'desenvolvido com django, este é um projeto de um simples e-commerce que explora diversas áreas do django, neste, em especial, sessions. Desenvolvido no curso de Python.', 
    ['Python', 'Django Framework', 'SQL', 'Debug Toolbar', 'Bootstrap'], 
    '11/2024', 
    'https://github.com/Dryzera/e-commerce-django-2024',
    false
)


// musicals test project
createProject(
    'Musicals Test', 
    'desenvolvido TOTALMENTE por mim, tanto a parte de arquitetura, engenharia e programação do software em questão. O objetivo é treinar todos os conhecimentos obtidos durante o curso de python e aplicá-los neste projeto.', 
    ['Python', 'Django Framework', 'SQL', 'Debug Toolbar', 'Bootstrap', 'JavaScript'], 
    '11/24 - em dev', 
    'https://github.com/Dryzera/musical-test-django-24',
    false
)


// code defender project
createProject(
    'Code Defender', 
    'um jogo simples, feito puramente em Python, criei para o teste de admissão na empresa Kodland.', 
    ['Python'], 
    '08/2024', 
    'https://github.com/Dryzera/code-defender',
    false
)


// meu portifolio project
createProject(
    'Meu Portfólio', 
    'feito para uso pessoal e como forma de divulgar meu trabalho.', 
    ['HTML', 'CSS', 'JavaScript'], 
    '08/2024', 
    'https://github.com/Dryzera/portfolio',
    false
)
