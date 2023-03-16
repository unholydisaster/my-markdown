/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    MONGO_URI:"mongodb+srv://musa:el8m7saa@cluster0.dlc9t.mongodb.net/notesdata?retryWrites=true&w=majority",
    JWT_SECRET:"hkHSADjjskASDDJOisdjaxsnKAJjakjznJASNJXKSAJXNKSXNJX",
    OPEN_AI:"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"
  },
  reactStrictMode: true,
}

module.exports = nextConfig

