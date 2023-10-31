// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    turso: {
      dbUrl: "https://vedio-db-yingzi12.turso.io/",
      dbAuthToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTEwLTMwVDA5OjUyOjU5Ljg5OTI0Njk3NVoiLCJpZCI6IjZlOWUxMjkzLTc3MDctMTFlZS04Y2I5LTFlZWY0NDFjZTM4ZiJ9.8KtwHuvcFMcU4NBsNkwV4Wn05RDh4J-GDz4BMQyAU3WrXEnUZqe-9mz7Ceqkog3Ydj4puKfCAHhtan9j3A53BA",
    },
  },
})
