/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Exporta el sitio como estático
  // basePath: '/nombre-del-repo', // Descomenta si tu repo no es username.github.io
    basePath: 'portfolio',
  assetPrefix: 'portfolio',
};

module.exports = nextConfig;
