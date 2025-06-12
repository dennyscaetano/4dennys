// Gerenciamento de tema e traduções
let currentTheme = localStorage.getItem('theme') || 'light';
let currentLanguage = localStorage.getItem('language') || 'pt';

// Função para aplicar o tema
function applyTheme(theme) {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(`${theme}-theme`);
  localStorage.setItem('theme', theme);
  currentTheme = theme;
  updateThemeButton();
}

// Função para aplicar o idioma
function applyLanguage(lang) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const keys = key.split('.');
    let translation = translations[lang];
    for (const k of keys) {
      translation = translation[k];
    }
    if (element.tagName === 'INPUT' && element.type === 'submit') {
      element.value = translation;
    } else {
      element.textContent = translation;
    }
  });
  localStorage.setItem('language', lang);
  currentLanguage = lang;
  updateLanguageButton();
}

// Função para atualizar o botão de tema
function updateThemeButton() {
  const themeButton = document.getElementById('themeButton');
  const themeIcon = themeButton.querySelector('i');
  const themeText = themeButton.querySelector('span');
  
  if (currentTheme === 'dark') {
    themeIcon.className = 'fas fa-sun';
    themeText.textContent = translations[currentLanguage].theme.light;
  } else {
    themeIcon.className = 'fas fa-moon';
    themeText.textContent = translations[currentLanguage].theme.dark;
  }
}

// Função para atualizar o botão de idioma
function updateLanguageButton() {
  const langButton = document.getElementById('languageButton');
  const langText = langButton.querySelector('span');
  langText.textContent = translations[currentLanguage].language;
}

// Função para alternar o tema
function toggleTheme() {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
}

// Função para alternar o idioma
function toggleLanguage() {
  const languages = ['pt', 'en', 'es'];
  const currentIndex = languages.indexOf(currentLanguage);
  const nextIndex = (currentIndex + 1) % languages.length;
  applyLanguage(languages[nextIndex]);
}

// Função para copiar o conteúdo para a área de transferência
async function copyToClipboard(elementId) {
  const output = document.getElementById(elementId);
  const copyButton = output.parentElement.querySelector('.copy-button');
  const tooltip = copyButton.querySelector('.copy-tooltip');
  
  try {
    await navigator.clipboard.writeText(output.textContent);
    
    // Feedback visual
    copyButton.classList.add('copied');
    tooltip.textContent = translations[currentLanguage].copied;
    
    // Reset após 2 segundos
    setTimeout(() => {
      copyButton.classList.remove('copied');
      tooltip.textContent = translations[currentLanguage].copy;
    }, 2000);
  } catch (err) {
    console.error('Erro ao copiar:', err);
    tooltip.textContent = 'Erro ao copiar';
    setTimeout(() => {
      tooltip.textContent = translations[currentLanguage].copy;
    }, 2000);
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLanguage(currentLanguage);
});

document.addEventListener('DOMContentLoaded', function() {
  const settingsBtn = document.getElementById('settingsButton');
  const settingsMenu = document.getElementById('settingsMenu');

  if (settingsBtn && settingsMenu) {
    settingsBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      settingsMenu.style.display = settingsMenu.style.display === 'none' || settingsMenu.style.display === '' ? 'block' : 'none';
    });
    // Fecha o menu ao clicar fora
    document.addEventListener('click', function(e) {
      if (!settingsMenu.contains(e.target) && e.target !== settingsBtn) {
        settingsMenu.style.display = 'none';
      }
    });
  }
}); 