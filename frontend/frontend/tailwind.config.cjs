// tailwind.config.cjs
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: { // Cores do tema de ferramentas
                'metal-dark': '#3a3a3a', // Cinza metálico escuro
                'metal-light': '#e0e0e0', // Cinza metálico claro
                'rust': '#b45309', // Ferrugem/laranja
                'toolbox-blue': '#1e40af', // Azul de caixa de ferramentas
            },
            fontFamily: {
                'tool': ['"Roboto Condensed"', 'sans-serif'], // Fonte estilizada
            },
        },
    },
    plugins: [],
}