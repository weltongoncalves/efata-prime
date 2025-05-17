// Arquivo JavaScript para funcionalidade de login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm('loginForm')) {
                const email = document.getElementById('email').value;
                const senha = document.getElementById('senha').value;
                const lembrar = document.getElementById('lembrar').checked;
                
                // Simulação de autenticação (em produção, isso seria uma chamada de API)
                login(email, senha, lembrar);
            }
        });
    }
});

// Função de login
function login(email, senha, lembrar) {
    // Simulação de autenticação
    // Em um ambiente real, isso seria uma chamada de API para o backend
    
    // Dados de usuário simulados para demonstração
    const usuarios = [
        {
            email: 'admin@efataprime.com.br',
            senha: 'admin123',
            nome: 'Administrador',
            tipo: 'admin'
        },
        {
            email: 'tecnico@efataprime.com.br',
            senha: 'tecnico123',
            nome: 'Técnico',
            tipo: 'tecnico'
        },
        {
            email: 'cliente@exemplo.com.br',
            senha: 'cliente123',
            nome: 'Cliente',
            tipo: 'cliente'
        }
    ];
    
    // Verificar credenciais
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    
    if (usuario) {
        // Remover a senha antes de armazenar
        const { senha, ...usuarioSemSenha } = usuario;
        
        // Armazenar dados do usuário
        if (lembrar) {
            localStorage.setItem('efataUser', JSON.stringify(usuarioSemSenha));
        } else {
            sessionStorage.setItem('efataUser', JSON.stringify(usuarioSemSenha));
        }
        
        // Redirecionar para o dashboard
        window.location.href = '../dashboard/index.html';
    } else {
        // Exibir mensagem de erro
        showAlert('Email ou senha incorretos. Por favor, tente novamente.', 'danger');
    }
}

// Função para logout
function logout() {
    localStorage.removeItem('efataUser');
    sessionStorage.removeItem('efataUser');
    window.location.href = '../index.html';
}
