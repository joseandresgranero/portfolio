/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Exporta el sitio como estático
  // basePath: '/nombre-del-repo', // Descomenta si tu repo no es username.github.io
  images: {
    unoptimized: true, // desactiva la optimización
  },
};

module.exports = nextConfig;
