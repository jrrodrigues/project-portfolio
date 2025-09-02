	tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        'primary-bg-light': '#f3f4f6',
                        'secondary-bg-light': '#ffffff',
                        'primary-text-light': '#1f2937',
                        'secondary-text-light': '#6b7280',
                        'accent-light': '#4c51bf',
                        'primary-bg-dark': '#111827',
                        'secondary-bg-dark': '#1f2937',
                        'primary-text-dark': '#f3f4f6',
                        'secondary-text-dark': '#9ca3af',
                        'accent-dark': '#6366f1',
                    }
                }
            }
        }
        document.addEventListener('DOMContentLoaded', () => {
            // Alternar modo claro/escuro
            const themeToggleBtn = document.getElementById('theme-toggle');
            const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
            const sunIcon = document.getElementById('sun-icon');
            const moonIcon = document.getElementById('moon-icon');
            const mobileSunIcon = document.getElementById('mobile-sun-icon');
            const mobileMoonIcon = document.getElementById('mobile-moon-icon');

            const isDarkMode = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

            if (isDarkMode) {
                document.documentElement.classList.add('dark');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
                mobileSunIcon.classList.add('hidden');
                mobileMoonIcon.classList.remove('hidden');
            } else {
                document.documentElement.classList.remove('dark');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
                mobileSunIcon.classList.remove('hidden');
                mobileMoonIcon.classList.add('hidden');
            }

            const toggleTheme = () => {
                const isDark = document.documentElement.classList.toggle('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                sunIcon.classList.toggle('hidden', isDark);
                moonIcon.classList.toggle('hidden', !isDark);
                mobileSunIcon.classList.toggle('hidden', isDark);
                mobileMoonIcon.classList.toggle('hidden', !isDark);
            };

            themeToggleBtn.addEventListener('click', toggleTheme);
            mobileThemeToggleBtn.addEventListener('click', toggleTheme);

            // Menu mobile
            const mobileMenuBtn = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Fecha o menu móvel ao clicar em um link
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });

            // Atualiza o ano no rodapé
            document.getElementById('current-year').textContent = new Date().getFullYear();
        });
document.addEventListener('DOMContentLoaded', () => {
    const itensHabilidade = document.querySelectorAll('.habilidade-item');

    itensHabilidade.forEach(item => {
        item.addEventListener('click', () => {
            const habilidadeNome = item.getAttribute('data-habilidade');
            console.log(`Você clicou na habilidade: ${habilidadeNome}`);
            alert(`Você clicou em ${habilidadeNome}!`);
        });
    });
});
