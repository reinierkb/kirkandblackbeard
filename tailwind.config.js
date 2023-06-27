module.exports = {
    content: ["./src/**/*.{html,njk,md}"],
    theme: {
        extend: {
            fontFamily: {
                'kb-extras': ['SpaceMono', '-apple-system', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
                'kb-body': ['SpaceGrotesk', '-apple-system', 'Helvetica Neue', 'Helvetica', 'sans-serif']
            },
            colors: {
                'kb-darkest-tint': '#111',
                'kb-dark-tint': '#444',
                'kb-light-tint': '#ddd',
                'kb-alt-tint': '#f0f',
                'kb-bright-tint': '#bebebe',
                'kb-brightest-tint': '#eee'
            }
        },
    },
    plugins: [],
};
