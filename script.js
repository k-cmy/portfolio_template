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
    dom.repoState.textContent = `Loading repositories for @${username}...`;
    dom.repoGrid.innerHTML = '';

    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
        if (!res.ok) throw new Error('Unable to fetch repositories.');

        const repos = await res.json();
        if (!Array.isArray(repos) || repos.length === 0) {
            dom.repoState.textContent = `No public repositories found for @${username}.`;
            updateStats([]);
            return;
        }

        const nonForkRepos = repos.filter(repo => !repo.fork);
        const displayRepos = nonForkRepos.slice(0, 8);
        renderRepos(displayRepos);
        updateStats(nonForkRepos);

        dom.repoState.textContent = `Showing ${displayRepos.length} recently updated repositories.`;
    } catch (error) {
        dom.repoState.textContent = 'Failed to load GitHub repositories. Check username or API rate limits.';
    }
}

function renderRepos(repos) {
    dom.repoGrid.innerHTML = repos
        .map(repo => {
            const language = repo.language || 'N/A';
            const description = repo.description || 'No description added yet.';

            return `
                <article class="repo-card glass">
                    <h3><a target="_blank" rel="noopener" href="${repo.html_url}">${repo.name}</a></h3>
                    <p>${description}</p>
                    <div class="repo-meta">
                        <span><i class="fa-solid fa-code-branch"></i> ${language}</span>
                        <span><i class="fa-solid fa-star"></i> ${repo.stargazers_count}</span>
                    </div>
                </article>
            `;
        })
        .join('');
}

function updateStats(repos) {
    const stars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
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
