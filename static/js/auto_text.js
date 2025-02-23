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
    'este é um site que permite que professores gerem planejamentos de aulas com o auxílio de uma IA da microsoft, além de possuir um repositório com várias atividades onde os professores podem baixar e utiliza-las. Tudo isso é integrado a um documento Word.', 
    ['Django Framework', 'Python', 'PostgreSQL', 'HTML', 'CSS', 'Google Cloud Platform (GCP)', 'JavaScript', 'Nginx', 'Dominios e certificados SSL', 'Inteligência Artificial', 'Bootstrap 5'], 
    '01/2025', 
    'https://www.edplanejamentos.com.br/',
    true
)

// tio elias's project
createProject(
    'Tio Elias Londrina', 
    'foi criada uma simples landing page para divulgar um serviço, porém, sua maior funcionalidade é que ela é uma plataforma de gerenciamento de clientes, utilizada para: lançar e receber pagamentos, consultar análises, gerar relatórios e outros, são algumas das funcionalidades implementadas no site.', 
    ['Django Framework', 'Python', 'HTML', 'CSS', 'Google Cloud Platform (GCP)', 'JavaScript', 'Nginx', 'Dominios e certificados SSL', 'SQL'], 
    '09/2024', 
    'https://www.tioeliaslondrina.com.br/',
    true
)


// e commerce project
createProject(
    'E-Commerce', 
    'desenvolvido com django, este é um projeto de um simples e-commerce que explora diversas áreas do django. Neste projeto, em especial, sessions. Desenvolvido no curso de Python do Básico ao Avançado.', 
    ['Python', 'Django Framework', 'SQL', 'Debug Toolbar', 'Bootstrap'], 
    '11/2024', 
    'https://github.com/Dryzera/e-commerce-django-2024',
    false
)


// musicals test project
createProject(
    'Musicals Test', 
    'desenvolvido totalmente por mim, toda a parte de arquitetura, engenharia e programação do software em questão. O objetivo é treinar todos os conhecimentos obtidos durante o curso de python e aplicá-los neste projeto. O projeto em si é uma plataforma de perguntas sobre teoria músical, aqui trabalho muito com grupos Django e base de dados.', 
    ['Python', 'Django Framework', 'SQL', 'Debug Toolbar', 'Bootstrap', 'JavaScript'], 
    '11/24', 
    'https://github.com/Dryzera/musical-test-django-24',
    false
)


// code defender project
createProject(
    'Code Defender', 
    'um jogo simples, feito puramente em Python, criei para o teste de admissão na empresa Kodland. Este foi um ótimo projeto para começar a aplicar POO.', 
    ['Python'], 
    '08/2024', 
    'https://github.com/Dryzera/code-defender',
    false
)


// meu portifolio project
createProject(
    'Meu Portfólio', 
    'feito para uso pessoal e como forma de divulgar meu trabalho. Apesar de não possuir um ótimo layout, é funcional, utilizo um pouco de JavaScript e bastante HTML e CSS.', 
    ['HTML', 'CSS', 'JavaScript'], 
    '08/2024', 
    'https://github.com/Dryzera/portfolio',
    false
)
