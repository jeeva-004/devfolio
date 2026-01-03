export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3B82F6', // Modern Blue
                    dark: '#2563EB',
                    light: '#60A5FA',
                },
                dark: {
                    bg: '#0F172A', // Slate 900
                    card: '#1E293B', // Slate 800
                    text: '#F1F5F9', // Slate 100
                },
                light: {
                    bg: '#F8FAFC', // Slate 50
                    card: '#FFFFFF',
                    text: '#334155', // Slate 700
                }
            },
            fontFamily: {
                sans: ['"Inter"', '"Source Sans Pro"', 'sans-serif'], // Swapping to Inter for a more modern look if available, else fallback
            },
            boxShadow: {
                'btn': '0 5px 15px 0 rgba(0, 0, 0, 0.15)',
                'glass': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            }
        },
    },
    plugins: [],
}
