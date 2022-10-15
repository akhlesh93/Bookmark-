/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		screens: {
			xl: { max: '1535px' },
			lg: { max: '1279px' },
			md: { max: '1023px' },
			sm: { max: '767px' },
			xs: { max: '479px' },
		},
		extend: {
			colors: {
				softBlue: 'hsl(231, 69%, 60%)',
				softRed: 'hsl(0, 94%, 66%)',
				grayishBlue: 'hsl(229, 8%, 60%)',
				veryDarkBlue: 'hsl(229, 31%, 21%)',
			},
			fontFamily: {
				sans: ['Rubik', 'sans-serif'],
			},
			backgroundImage: () => ({
				dots: "url('../images/bg-dots.svg')",
			}),
		},
	},
	plugins: [],
};
