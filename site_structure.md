# Estrutura do Site Efata Prime Elevadores

## Síntese das Referências Analisadas

Após análise de três sites de referência do setor de elevadores (Novart, Artlift e Design Elevadores), foram identificados os seguintes padrões e boas práticas:

1. **Design Visual:**
   - Uso de cores sóbrias e elegantes (preto, azul escuro, dourado)
   - Imagens de alta qualidade mostrando projetos realizados
   - Tipografia clara e moderna
   - Layout limpo e organizado

2. **Estrutura de Navegação:**
   - Menu principal simples e intuitivo
   - Chamadas para ação (CTAs) destacadas
   - Formulários de contato em posições estratégicas
   - Botão de WhatsApp flutuante para contato rápido

3. **Conteúdo:**
   - Destaque para diferenciais da empresa
   - Apresentação de projetos realizados (portfólio)
   - Descrição detalhada dos serviços
   - Seção de clientes/parceiros para transmitir credibilidade

## Arquitetura Proposta para o Site Efata Prime

### 1. Área Pública

#### 1.1 Páginas Principais
- **Home:** Apresentação da empresa, serviços principais e chamadas para ação
- **Sobre Nós:** História, missão, visão, valores e equipe
- **Serviços:** Detalhamento dos serviços oferecidos
- **Portfólio:** Galeria de projetos realizados
- **Blog/Dicas:** Conteúdo informativo sobre manutenção de elevadores
- **Contato:** Formulário de contato, mapa e informações de contato

#### 1.2 Elementos Comuns
- Header com logo e menu de navegação
- Footer com informações de contato, mapa do site e redes sociais
- Botão de WhatsApp flutuante
- Botão de acesso à área restrita (login)

### 2. Área Restrita (Sistema)

#### 2.1 Sistema de Login
- Tela de login com usuário e senha
- Recuperação de senha
- Níveis de acesso:
  - Administrador: acesso total
  - Técnico: acesso a vistorias e ordens de serviço
  - Cliente: acesso a informações específicas de seus elevadores

#### 2.2 Dashboard
- Visão geral personalizada conforme nível de acesso
- Notificações de atividades recentes
- Acesso rápido às principais funcionalidades

#### 2.3 Módulo de Vistorias
- Cadastro de novas vistorias
- Listagem de vistorias realizadas e pendentes
- Detalhamento de vistoria com:
  - Informações do elevador
  - Checklist de itens verificados
  - Fotos do equipamento
  - Observações técnicas
  - Status da vistoria
- Geração de relatório de vistoria em PDF

#### 2.4 Módulo de Ordens de Serviço
- Abertura de nova OS
- Listagem de OS por status (aberta, em andamento, concluída)
- Detalhamento da OS com:
  - Informações do cliente e elevador
  - Descrição do problema/serviço
  - Técnico responsável
  - Materiais utilizados
  - Fotos antes e depois
  - Assinatura do cliente
- Histórico de OS por cliente/elevador

#### 2.5 Módulo de Clientes
- Cadastro de novos clientes
- Listagem de clientes
- Perfil do cliente com:
  - Dados cadastrais
  - Endereços
  - Contatos
  - Elevadores
  - Histórico de vistorias e OS

#### 2.6 Módulo de Upload de Fotos
- Interface para upload de múltiplas fotos
- Organização por categorias (vistorias, OS, portfólio)
- Visualização em galeria
- Edição básica (recorte, rotação)
- Associação com vistorias ou OS específicas

## Fluxo de Navegação

### Fluxo Público
1. Usuário acessa o site
2. Navega pelas páginas públicas
3. Pode solicitar contato via formulário ou WhatsApp
4. Acessa área de login caso seja cliente ou funcionário

### Fluxo de Login
1. Usuário acessa tela de login
2. Insere credenciais
3. É redirecionado para dashboard conforme seu nível de acesso

### Fluxo de Vistoria
1. Técnico acessa módulo de vistorias
2. Cria nova vistoria ou seleciona vistoria pendente
3. Preenche informações e faz upload de fotos
4. Finaliza vistoria e gera relatório
5. Cliente recebe notificação sobre vistoria realizada

### Fluxo de Ordem de Serviço
1. Administrador ou cliente abre nova OS
2. Administrador atribui OS a um técnico
3. Técnico executa serviço e registra informações
4. Técnico finaliza OS com fotos e assinatura do cliente
5. Cliente recebe notificação sobre conclusão do serviço

## Tecnologias Propostas

### Frontend
- HTML5, CSS3, JavaScript
- Framework Bootstrap para responsividade
- Biblioteca jQuery para interações
- Ícones Font Awesome

### Backend
- PHP para processamento do lado do servidor
- MySQL para banco de dados
- Sistema de autenticação seguro com JWT

### Recursos Adicionais
- API de WhatsApp para contato direto
- Biblioteca para geração de PDF
- Sistema de notificações por e-mail
- Armazenamento de imagens otimizado
