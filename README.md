# Efata Prime Elevadores - Sistema de Gerenciamento

Este projeto contém o sistema de gerenciamento para a Efata Prime Elevadores, incluindo site institucional e sistema administrativo com funcionalidades de login, vistorias, ordens de serviço, upload de fotos e gerenciamento de clientes.

## Estrutura do Projeto

```
efata_prime_project/
├── css/                  # Arquivos de estilo
│   └── style.css         # Estilo principal do sistema
├── js/                   # Scripts JavaScript
│   ├── main.js           # Script principal
│   ├── login.js          # Funcionalidades de login
│   ├── dashboard.js      # Funcionalidades do dashboard
│   ├── vistorias.js      # Funcionalidades do módulo de vistorias
│   ├── ordens-servico.js # Funcionalidades do módulo de ordens de serviço
│   ├── fotos.js          # Funcionalidades do módulo de fotos
│   ├── clientes.js       # Funcionalidades do módulo de clientes
│   └── validation.js     # Scripts de validação
├── img/                  # Imagens do sistema
│   └── logo.png          # Logo da Efata Prime Elevadores
├── pages/                # Páginas do site institucional
│   ├── sobre.html        # Página Sobre
│   ├── servicos.html     # Página de Serviços
│   ├── portfolio.html    # Página de Portfólio
│   ├── contato.html      # Página de Contato
│   └── login.html        # Página de Login
├── dashboard/            # Páginas do sistema administrativo
│   ├── index.html        # Dashboard principal
│   ├── vistorias.html    # Gerenciamento de vistorias
│   ├── ordens-servico.html # Gerenciamento de ordens de serviço
│   ├── fotos.html        # Gerenciamento de fotos
│   ├── clientes.html     # Gerenciamento de clientes
│   ├── relatorios.html   # Relatórios
│   └── configuracoes.html # Configurações
├── includes/             # Arquivos de inclusão
├── index.html            # Página inicial do site
├── validation_report.md  # Relatório de validação do sistema
├── site_structure.md     # Documentação da estrutura do site
└── README.md             # Este arquivo
```

## Funcionalidades Implementadas

### Site Institucional
- Página inicial com apresentação da empresa
- Página sobre a empresa
- Página de serviços oferecidos
- Página de portfólio de projetos
- Página de contato
- Acesso ao sistema administrativo (login)

### Sistema Administrativo
- **Login:** Autenticação de usuários com diferentes níveis de acesso
- **Dashboard:** Visão geral das atividades e estatísticas
- **Vistorias:** Gerenciamento completo de vistorias em elevadores
- **Ordens de Serviço:** Controle de ordens de serviço
- **Fotos:** Upload e gerenciamento de fotos
- **Clientes:** Cadastro e gerenciamento de clientes
- **Relatórios:** Geração de relatórios diversos
- **Configurações:** Configurações do sistema

## Identidade Visual
O sistema foi desenvolvido seguindo fielmente a identidade visual da Efata Prime Elevadores, utilizando as cores preto e dourado presentes no logo oficial.

## Responsividade
O sistema é totalmente responsivo, adaptando-se a diferentes tamanhos de tela, desde desktops até smartphones.

## Segurança
- Autenticação de usuários
- Controle de acesso por perfil
- Validação de dados de entrada
- Proteção contra injeção de código

## Instruções de Uso

### Instalação
1. Faça o upload de todos os arquivos para o servidor web
2. Configure o banco de dados (instruções detalhadas no arquivo de configuração)
3. Acesse o sistema pelo navegador

### Acesso ao Sistema
- URL: [seu-dominio.com]
- Acesso administrativo: [seu-dominio.com]/pages/login.html

### Credenciais de Demonstração
- **Administrador:**
  - Email: admin@efataprime.com.br
  - Senha: admin123
- **Técnico:**
  - Email: tecnico@efataprime.com.br
  - Senha: tecnico123
- **Cliente:**
  - Email: cliente@exemplo.com.br
  - Senha: cliente123

## Próximos Passos Recomendados
1. Implementar backend real com banco de dados
2. Configurar servidor de email para notificações
3. Implementar sistema de backup automático
4. Realizar testes com usuários reais
5. Treinar a equipe para uso do sistema

## Suporte
Para suporte técnico ou dúvidas sobre o sistema, entre em contato com a equipe de desenvolvimento.

---

© 2025 Efata Prime Elevadores - Todos os direitos reservados
