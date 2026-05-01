# WebDevSilva 2.0

## Descrição

O **WebDevSilva 2.0** é a segunda versão da minha página pessoal, projetada com foco em **Branding Pessoal**. Esta Landing Page foi reconstruída para ser o meu cartão de visitas digital, utilizando **React.js** e **Vite**.

O projeto reflete minha identidade como desenvolvedor Front-End, apresentando projetos, formação acadêmica e canais de contato de forma direta e elegante.

## Funcionalidades

- **Otimização para Performance:** Build otimizado com Vite, garantindo tempos de carregamento reduzidos e execução fluida.
- **Interface Minimalista:** Design focado em legibilidade, utilizando paletas de cores equilibradas e tipografia moderna.
- **Arquitetura Reativa:** Componentização modular em React para fácil manutenção e escalabilidade do portfólio.
- **Navegação de Seção Única:** Fluxo contínuo entre apresentação e projetos com scroll suave e ajuste de compensação para o header fixo.
- **Botões de Call to Action (CTA):** Links estratégicos para GitHub, LinkedIn e currículo, com efeitos visuais de hover e active.
- **Design Totalmente Responsivo:** Experiência adaptada para dispositivos móveis, tablets e desktops através de media queries rigorosas.

## Tecnologias Utilizadas

- React 
- Vite
- FontAwesome 
- CSS3 
- JavaScript 
- SwiperJS

## Estrutura do Projeto

```plaintext
├── public/           
│   └── assets/       
├── src/
│   ├── components/   # Header, Footer, Hero, Contact, etc.
│   ├── pages/        
│   ├── App.jsx       # Gerenciamento de componentes globais
│   ├── index.css     
│   └── main.jsx      
└── index.html        
```

## Padrão de Commits

Os nomes dos commits são compostos de 2 partes:

1. **Type ou Categoria do Commit:**
   - `feat`: Uma nova funcionalidade.
   - `fix`: A correção de um bug.
   - `perf`: Mudança de código focada em melhorar performance.
   - `refactor`: Mudança de código que não adiciona uma funcionalidade e também não corrige um bug.
   - `style`: Mudanças no código que não afetam seu significado (espaço em branco, formatação, ponto e vírgula, etc).

2. **Descrição do que o Commit Faz:**
   - Após o type, uma breve descrição da funcionalidade ou correção.

### Exemplos

- `feat: adicionar sistema de calculo`: Implementa a lógia de calculo.
- `fix: corrigir bug de calculo`: Resolve um problema ao calcular itens.
