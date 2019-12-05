const palette = {
	grey: {
		100: '#000',
		200: '#333',
		400: '#888',
		700: '#fff'
	}
}

const theme = {
	space: [0, '2px', '4px', '8px', '16px', '32px'],
	colors: {
		...palette,
		background: palette.grey[700],
		text: palette.grey[200],
		primary: '#783396',
		secondary: '#7e7e7e',
		acceent: '#f8c124',
		muted: '#f6f6f6',
	},
	fonts: {
		body: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
		monospace: `"Mono Lisa", Monaco, monospace` /* Check out https://monolisa.dev for Mono Lisa font */,
	},
	fontSizes: {
		xs: '0.8rem',
		sm: '1rem',
		md: '1.5rem',
		lg: '2rem',
		xl: '4rem',
	},
};

export default theme;
