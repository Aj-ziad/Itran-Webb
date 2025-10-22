const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'flagcdn.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'plus.unsplash.com',
              port: '',
              pathname: '/**',
            },
          ],
    }
};
 
module.exports = withNextIntl(nextConfig);