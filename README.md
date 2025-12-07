# Next.js AI App

Este es un proyecto de práctica para explorar el desarrollo con Inteligencia Artificial utilizando el SDK de Vercel AI y los modelos de Gemini en su capa gratuita.

## 🎯 Propósito

Este repositorio está diseñado como un proyecto de aprendizaje y experimentación para:

- Probar el desarrollo con IA a través del [SDK de Vercel AI](https://sdk.vercel.ai/docs)
- Experimentar con los modelos de **Google Gemini** (específicamente `gemini-2.5-flash`) utilizando su capa gratuita
- Construir una aplicación de chat/completions simple con Next.js

## 🛠️ Tecnologías Utilizadas

- **[Next.js](https://nextjs.org)** - Framework de React para producción
- **[Vercel AI SDK](https://sdk.vercel.ai/docs)** - SDK oficial de Vercel para integración con modelos de IA
- **[@ai-sdk/google](https://sdk.vercel.ai/providers/ai-sdk-providers/google)** - Proveedor de Google para el SDK de Vercel AI
- **Google Gemini 2.5 Flash** - Modelo de IA de Google (capa gratuita)
- **TypeScript** - Para tipado estático
- **Tailwind CSS** - Para estilos

## 🚀 Getting Started

Primero, instala las dependencias:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Luego, configura tu API key de Google Gemini. Crea un archivo `.env.local` en la raíz del proyecto:

```env
GOOGLE_GENERATIVE_AI_API_KEY=tu_api_key_aqui
```

Puedes obtener tu API key gratuita en [Google AI Studio](https://makersuite.google.com/app/apikey).

Finalmente, ejecuta el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 📝 Funcionalidades

- Interfaz simple de chat para interactuar con el modelo Gemini
- Generación de texto mediante prompts
- Diseño responsive con soporte para modo oscuro

## 📚 Recursos de Aprendizaje

- [Vercel AI SDK Documentation](https://sdk.vercel.ai/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Google AI Studio](https://makersuite.google.com/) - Para obtener tu API key y probar modelos

## 🚢 Deploy

La forma más fácil de desplegar esta aplicación Next.js es usando [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consulta la [documentación de deployment de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

**Nota:** Asegúrate de configurar la variable de entorno `GOOGLE_GENERATIVE_AI_API_KEY` en tu plataforma de deployment.
