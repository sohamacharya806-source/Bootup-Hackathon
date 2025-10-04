document.getElementById('toggleSidebar').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
});

function loadContent(page) {
    const main = document.getElementById('mainContent');
    switch (page) {
        case 'dashboard':
            main.innerHTML = `<h2>Dashboard</h2><p>This is the dashboard content.</p>
            <h1>this is new line</h1>`;
            break;
        case 'profile':
            main.innerHTML = `<h2>Profile</h2><p>This is your profile page.</p>`;
            break;
        case 'settings':
            main.innerHTML = `<h2>Settings</h2><p>Adjust your settings here.</p>`;
            break;
        default:
            main.innerHTML = `<h2>Welcome</h2><p>Select an option from the sidebar.</p>`;
    }

    // Auto-close sidebar on mobile
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('active');
    }
}
