// Arquivo principal de JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Inicialização de componentes
    initializeComponents();
    
    // Verificar se há usuário logado
    checkLoggedUser();
});

// Inicialização de componentes da interface
function initializeComponents() {
    // Adicionar classe active ao link do menu correspondente à página atual
    const currentLocation = window.location.pathname;
    const menuLinks = document.querySelectorAll('nav a');
    
    menuLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentLocation.includes(linkPath) && linkPath !== '../index.html' && linkPath !== 'index.html') {
            link.classList.add('active');
        } else if ((currentLocation.endsWith('/') || currentLocation.endsWith('index.html')) && 
                  (linkPath === 'index.html' || linkPath === '../index.html')) {
            link.classList.add('active');
        }
    });
    
    // Inicializar animações de entrada
    const fadeElements = document.querySelectorAll('.section');
    
    if (fadeElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Verificar se há usuário logado
function checkLoggedUser() {
    const user = localStorage.getItem('efataUser');
    
    if (user) {
        const userData = JSON.parse(user);
        const loginLink = document.querySelector('nav a[href*="login.html"]');
        
        if (loginLink) {
            loginLink.innerHTML = `<i class="fas fa-user-circle"></i> ${userData.nome}`;
            loginLink.href = 'dashboard/index.html';
        }
    }
}

// Função para exibir mensagens de alerta
function showAlert(message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerHTML = message;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        alertDiv.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(alertDiv);
        }, 300);
    }, 3000);
}

// Função para validar formulários
function validateForm(formId) {
    const form = document.getElementById(formId);
    
    if (!form) return false;
    
    const inputs = form.querySelectorAll('input, textarea, select');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
        
        if (input.type === 'email' && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value.trim())) {
                input.classList.add('error');
                isValid = false;
            }
        }
    });
    
    return isValid;
}
