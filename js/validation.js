// Script para validação das funcionalidades do sistema
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se estamos na página de dashboard
    if (document.querySelector('.dashboard')) {
        console.log('Inicializando validação do dashboard...');
        
        // Verificar usuário logado
        const userInfo = document.getElementById('userName');
        if (userInfo) {
            const user = JSON.parse(localStorage.getItem('efataUser') || sessionStorage.getItem('efataUser') || '{"nome": "Usuário"}');
            userInfo.textContent = user.nome;
        }
        
        // Configurar botão de logout
        const logoutBtn = document.getElementById('logout');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('efataUser');
                sessionStorage.removeItem('efataUser');
                window.location.href = '../index.html';
            });
        }
        
        // Validar funcionalidades específicas de cada página
        const currentPage = window.location.pathname;
        
        if (currentPage.includes('vistorias.html')) {
            initVistoriasPage();
        } else if (currentPage.includes('ordens-servico.html')) {
            initOrdensServicoPage();
        } else if (currentPage.includes('fotos.html')) {
            initFotosPage();
        } else if (currentPage.includes('clientes.html')) {
            initClientesPage();
        }
    } else if (document.getElementById('loginForm')) {
        // Estamos na página de login
        initLoginPage();
    }
    
    // Verificar responsividade
    checkResponsiveness();
});

// Inicialização da página de login
function initLoginPage() {
    console.log('Validando página de login...');
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            
            if (!email || !senha) {
                showValidationMessage('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Simulação de login bem-sucedido
            const user = {
                nome: 'Administrador',
                email: email,
                tipo: 'admin'
            };
            
            localStorage.setItem('efataUser', JSON.stringify(user));
            window.location.href = '../dashboard/index.html';
        });
    }
}

// Inicialização da página de vistorias
function initVistoriasPage() {
    console.log('Validando página de vistorias...');
    
    // Configurar modal de nova vistoria
    const btnNovaVistoria = document.getElementById('btnNovaVistoria');
    const modalNovaVistoria = document.getElementById('modalNovaVistoria');
    
    if (btnNovaVistoria && modalNovaVistoria) {
        btnNovaVistoria.addEventListener('click', function() {
            modalNovaVistoria.style.display = 'block';
        });
        
        const closeModal = modalNovaVistoria.querySelector('.close-modal');
        if (closeModal) {
            closeModal.addEventListener('click', function() {
                modalNovaVistoria.style.display = 'none';
            });
        }
        
        const btnCancelarVistoria = document.getElementById('btnCancelarVistoria');
        if (btnCancelarVistoria) {
            btnCancelarVistoria.addEventListener('click', function() {
                modalNovaVistoria.style.display = 'none';
            });
        }
        
        const btnSalvarVistoria = document.getElementById('btnSalvarVistoria');
        if (btnSalvarVistoria) {
            btnSalvarVistoria.addEventListener('click', function() {
                // Validar formulário
                const cliente = document.getElementById('cliente').value;
                const data = document.getElementById('data').value;
                const tipo = document.getElementById('tipo').value;
                const tecnico = document.getElementById('tecnico').value;
                
                if (!cliente || !data || !tipo || !tecnico) {
                    showValidationMessage('Por favor, preencha todos os campos obrigatórios.');
                    return;
                }
                
                // Simulação de salvamento bem-sucedido
                showValidationMessage('Vistoria cadastrada com sucesso!', 'success');
                modalNovaVistoria.style.display = 'none';
            });
        }
    }
    
    // Configurar ações da tabela
    const actionButtons = document.querySelectorAll('.table .actions button');
    if (actionButtons) {
        actionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const action = this.getAttribute('title');
                showValidationMessage(`Ação "${action}" executada com sucesso!`, 'success');
            });
        });
    }
}

// Inicialização da página de ordens de serviço
function initOrdensServicoPage() {
    console.log('Validando página de ordens de serviço...');
    
    // Configurar modal de nova OS
    const btnNovaOS = document.getElementById('btnNovaOS');
    const modalNovaOS = document.getElementById('modalNovaOS');
    
    if (btnNovaOS && modalNovaOS) {
        btnNovaOS.addEventListener('click', function() {
            modalNovaOS.style.display = 'block';
        });
        
        const closeModal = modalNovaOS.querySelector('.close-modal');
        if (closeModal) {
            closeModal.addEventListener('click', function() {
                modalNovaOS.style.display = 'none';
            });
        }
        
        const btnCancelarOS = document.getElementById('btnCancelarOS');
        if (btnCancelarOS) {
            btnCancelarOS.addEventListener('click', function() {
                modalNovaOS.style.display = 'none';
            });
        }
        
        const btnSalvarOS = document.getElementById('btnSalvarOS');
        if (btnSalvarOS) {
            btnSalvarOS.addEventListener('click', function() {
                // Validar formulário
                const cliente = document.getElementById('cliente').value;
                const data = document.getElementById('data').value;
                const tipo = document.getElementById('tipo').value;
                const descricao = document.getElementById('descricao').value;
                const tecnico = document.getElementById('tecnico').value;
                
                if (!cliente || !data || !tipo || !descricao || !tecnico) {
                    showValidationMessage('Por favor, preencha todos os campos obrigatórios.');
                    return;
                }
                
                // Simulação de salvamento bem-sucedido
                showValidationMessage('Ordem de serviço cadastrada com sucesso!', 'success');
                modalNovaOS.style.display = 'none';
            });
        }
    }
    
    // Configurar ações da tabela
    const actionButtons = document.querySelectorAll('.table .actions button');
    if (actionButtons) {
        actionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const action = this.getAttribute('title');
                showValidationMessage(`Ação "${action}" executada com sucesso!`, 'success');
            });
        });
    }
}

// Inicialização da página de fotos
function initFotosPage() {
    console.log('Validando página de fotos...');
    
    // Configurar área de upload
    const btnUploadFotos = document.getElementById('btnUploadFotos');
    const uploadArea = document.getElementById('uploadArea');
    
    if (btnUploadFotos && uploadArea) {
        btnUploadFotos.addEventListener('click', function() {
            uploadArea.style.display = 'block';
        });
        
        const btnCancelarUpload = document.getElementById('btnCancelarUpload');
        if (btnCancelarUpload) {
            btnCancelarUpload.addEventListener('click', function() {
                uploadArea.style.display = 'none';
            });
        }
        
        const fileUpload = document.getElementById('fileUpload');
        const fileList = document.getElementById('fileList');
        
        if (fileUpload && fileList) {
            fileUpload.addEventListener('change', function() {
                fileList.innerHTML = '';
                
                for (let i = 0; i < this.files.length; i++) {
                    const file = this.files[i];
                    const fileItem = document.createElement('div');
                    fileItem.className = 'file-item';
                    
                    // Criar preview da imagem
                    const img = document.createElement('img');
                    img.src = URL.createObjectURL(file);
                    
                    // Criar informações do arquivo
                    const fileInfo = document.createElement('div');
                    fileInfo.className = 'file-item-info';
                    
                    const fileName = document.createElement('div');
                    fileName.className = 'file-item-name';
                    fileName.textContent = file.name;
                    
                    const fileSize = document.createElement('div');
                    fileSize.className = 'file-item-size';
                    fileSize.textContent = formatFileSize(file.size);
                    
                    fileInfo.appendChild(fileName);
                    fileInfo.appendChild(fileSize);
                    
                    // Criar ações do arquivo
                    const fileActions = document.createElement('div');
                    fileActions.className = 'file-item-actions';
                    
                    const removeBtn = document.createElement('button');
                    removeBtn.className = 'file-item-btn delete';
                    removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                    removeBtn.addEventListener('click', function() {
                        fileItem.remove();
                    });
                    
                    fileActions.appendChild(removeBtn);
                    
                    // Montar item completo
                    fileItem.appendChild(img);
                    fileItem.appendChild(fileInfo);
                    fileItem.appendChild(fileActions);
                    
                    fileList.appendChild(fileItem);
                }
            });
        }
        
        const btnEnviarFotos = document.getElementById('btnEnviarFotos');
        if (btnEnviarFotos) {
            btnEnviarFotos.addEventListener('click', function() {
                const categoria = document.getElementById('uploadCategoria').value;
                const descricao = document.getElementById('uploadDescricao').value;
                
                if (!categoria || !descricao) {
                    showValidationMessage('Por favor, preencha todos os campos obrigatórios.');
                    return;
                }
                
                if (fileList.children.length === 0) {
                    showValidationMessage('Por favor, selecione pelo menos uma foto para upload.');
                    return;
                }
                
                // Simulação de upload bem-sucedido
                showValidationMessage('Fotos enviadas com sucesso!', 'success');
                uploadArea.style.display = 'none';
            });
        }
    }
    
    // Configurar ações da galeria
    const galleryActions = document.querySelectorAll('.gallery-item .photo-actions button');
    if (galleryActions) {
        galleryActions.forEach(button => {
            button.addEventListener('click', function() {
                const action = this.getAttribute('title');
                showValidationMessage(`Ação "${action}" executada com sucesso!`, 'success');
            });
        });
    }
}

// Inicialização da página de clientes
function initClientesPage() {
    console.log('Validando página de clientes...');
    
    // Configurar modal de novo cliente
    const btnNovoCliente = document.getElementById('btnNovoCliente');
    const modalNovoCliente = document.getElementById('modalNovoCliente');
    
    if (btnNovoCliente && modalNovoCliente) {
        btnNovoCliente.addEventListener('click', function() {
            modalNovoCliente.style.display = 'block';
        });
        
        const closeModal = modalNovoCliente.querySelector('.close-modal');
        if (closeModal) {
            closeModal.addEventListener('click', function() {
                modalNovoCliente.style.display = 'none';
            });
        }
        
        const btnCancelarCliente = document.getElementById('btnCancelarCliente');
        if (btnCancelarCliente) {
            btnCancelarCliente.addEventListener('click', function() {
                modalNovoCliente.style.display = 'none';
            });
        }
        
        const btnSalvarCliente = document.getElementById('btnSalvarCliente');
        if (btnSalvarCliente) {
            btnSalvarCliente.addEventListener('click', function() {
                // Validar formulário
                const nome = document.getElementById('nome').value;
                const tipo = document.getElementById('tipo').value;
                const contato = document.getElementById('contato').value;
                const telefone = document.getElementById('telefone').value;
                const email = document.getElementById('email').value;
                const endereco = document.getElementById('endereco').value;
                
                if (!nome || !tipo || !contato || !telefone || !email || !endereco) {
                    showValidationMessage('Por favor, preencha todos os campos obrigatórios.');
                    return;
                }
                
                // Simulação de salvamento bem-sucedido
                showValidationMessage('Cliente cadastrado com sucesso!', 'success');
                modalNovoCliente.style.display = 'none';
            });
        }
    }
    
    // Configurar ações da tabela
    const actionButtons = document.querySelectorAll('.table .actions button');
    if (actionButtons) {
        actionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const action = this.getAttribute('title');
                showValidationMessage(`Ação "${action}" executada com sucesso!`, 'success');
            });
        });
    }
}

// Verificar responsividade
function checkResponsiveness() {
    console.log('Verificando responsividade...');
    
    // Adicionar classe para indicar tamanho da tela
    const body = document.body;
    
    function updateScreenSizeClass() {
        const width = window.innerWidth;
        
        body.classList.remove('screen-xs', 'screen-sm', 'screen-md', 'screen-lg', 'screen-xl');
        
        if (width < 576) {
            body.classList.add('screen-xs');
        } else if (width < 768) {
            body.classList.add('screen-sm');
        } else if (width < 992) {
            body.classList.add('screen-md');
        } else if (width < 1200) {
            body.classList.add('screen-lg');
        } else {
            body.classList.add('screen-xl');
        }
    }
    
    // Verificar no carregamento
    updateScreenSizeClass();
    
    // Verificar no redimensionamento
    window.addEventListener('resize', updateScreenSizeClass);
}

// Função para exibir mensagens de validação
function showValidationMessage(message, type = 'error') {
    // Verificar se já existe uma mensagem
    let alertBox = document.querySelector('.alert-box');
    
    if (!alertBox) {
        alertBox = document.createElement('div');
        alertBox.className = 'alert-box';
        document.body.appendChild(alertBox);
    }
    
    // Criar nova mensagem
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <div class="alert-content">
            <i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'check-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="alert-close">&times;</button>
    `;
    
    // Adicionar evento para fechar
    const closeBtn = alert.querySelector('.alert-close');
    closeBtn.addEventListener('click', function() {
        alert.remove();
    });
    
    // Adicionar à caixa de alertas
    alertBox.appendChild(alert);
    
    // Remover automaticamente após 5 segundos
    setTimeout(() => {
        alert.classList.add('fade-out');
        setTimeout(() => {
            alert.remove();
        }, 300);
    }, 5000);
}

// Função para formatar tamanho de arquivo
function formatFileSize(bytes) {
    if (bytes < 1024) {
        return bytes + ' bytes';
    } else if (bytes < 1048576) {
        return (bytes / 1024).toFixed(1) + ' KB';
    } else {
        return (bytes / 1048576).toFixed(1) + ' MB';
    }
}
