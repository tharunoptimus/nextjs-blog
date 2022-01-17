/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	i18n: {
		locales: ["en-US"],
		// This is the default locale you want to be used when visiting
		// a non-locale prefixed path e.g. `/hello`
		defaultLocale: "en-US",
	},
}

module.exports = nextConfig
