const dom = {
    repoGrid: document.getElementById('repoGrid'),
    repoState: document.getElementById('repoState'),
    repoCount: document.getElementById('repoCount'),
    starCount: document.getElementById('starCount'),
    topLanguage: document.getElementById('topLanguage'),
    githubUser: document.getElementById('githubUser'),
    reloadRepos: document.getElementById('reloadRepos'),
    contactForm: document.getElementById('contactForm')
};

async function loadRepos(username) {
    dom.repoState.textContent = `Loading projects for @${username}...`;
    dom.repoGrid.innerHTML = '';

    try {
        const repos = await fetchAllUserRepos(username);
        if (!Array.isArray(repos) || repos.length === 0) {
            dom.repoState.textContent = `No public projects found for @${username}.`;
            updateStats([]);
            return;
        }

        const nonForkRepos = repos.filter(repo => !repo.fork);
        const displayRepos = nonForkRepos.slice(0, 8);
        renderRepos(displayRepos);
        updateStats(repos);

        dom.repoState.textContent =
            `Showing ${displayRepos.length} recently updated projects from ${repos.length} public repositories.`;
    } catch (error) {
        dom.repoState.textContent = 'Failed to load GitHub projects. Check username or API rate limits.';
    }
}

async function fetchAllUserRepos(username) {
    const perPage = 100;
    let page = 1;
    const allRepos = [];

    while (true) {
        const res = await fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=${perPage}&page=${page}`
        );
        if (!res.ok) throw new Error('Unable to fetch repositories.');

        const pageRepos = await res.json();
        if (!Array.isArray(pageRepos)) throw new Error('Unexpected GitHub API response.');

        allRepos.push(...pageRepos);

        if (pageRepos.length < perPage) break;
        page += 1;
    }

    return allRepos;
}

function renderRepos(repos) {
    dom.repoGrid.textContent = '';

    repos.forEach(repo => {
        const language = repo.language || 'N/A';
        const description = repo.description || 'No description added yet.';
        const stars = Number.isFinite(repo.stargazers_count) ? repo.stargazers_count : 0;

        const article = document.createElement('article');
        article.className = 'repo-card glass';

        const title = document.createElement('h3');
        const link = document.createElement('a');
        link.target = '_blank';
        link.rel = 'noopener';
        link.textContent = repo.name || 'Unnamed repository';

        const safeHref = typeof repo.html_url === 'string' ? repo.html_url : '';
        link.href = safeHref.startsWith('https://github.com/') ? safeHref : 'https://github.com';

        title.appendChild(link);

        const descriptionText = document.createElement('p');
        descriptionText.textContent = description;

        const meta = document.createElement('div');
        meta.className = 'repo-meta';

        const languageStat = document.createElement('span');
        const languageIcon = document.createElement('i');
        languageIcon.className = 'fa-solid fa-code-branch';
        languageStat.appendChild(languageIcon);
        languageStat.append(` ${language}`);

        const starStat = document.createElement('span');
        const starIcon = document.createElement('i');
        starIcon.className = 'fa-solid fa-star';
        starStat.appendChild(starIcon);
        starStat.append(` ${stars}`);

        meta.append(languageStat, starStat);
        article.append(title, descriptionText, meta);
        dom.repoGrid.appendChild(article);
    });
}

function updateStats(repos) {
    const stars = repos.reduce(
        (sum, repo) => sum + (Number.isFinite(repo.stargazers_count) ? repo.stargazers_count : 0),
        0
    );
    const languageCounter = repos.reduce((acc, repo) => {
        if (!repo.language) return acc;
        acc[repo.language] = (acc[repo.language] || 0) + 1;
        return acc;
    }, {});

    const topLanguage =
        Object.entries(languageCounter).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

    dom.repoCount.textContent = repos.length;
    dom.starCount.textContent = stars;
    dom.topLanguage.textContent = topLanguage;
}

function showToast(message) {
    const old = document.querySelector('.toast');
    if (old) old.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2200);
}

if (dom.reloadRepos) {
    dom.reloadRepos.addEventListener('click', () => {
        const username = dom.githubUser.value.trim();
        if (!username) return showToast('Please enter a GitHub username.');
        loadRepos(username);
    });
}

if (dom.contactForm) {
    dom.contactForm.addEventListener('submit', event => {
        event.preventDefault();
        showToast('Message captured! Connect this form to your backend/email service.');
        dom.contactForm.reset();
    });
}

loadRepos(dom.githubUser?.value?.trim() || 'kimberley');
