/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    MONGO_URI:"mongodb+srv://musa:el8m7saa@cluster0.dlc9t.mongodb.net/notesdata?retryWrites=true&w=majority",
    JWT_SECRET:"hkHSADjjskASDDJOisdjaxsnKAJjakjznJASNJXKSAJXNKSXNJX"
  },
  reactStrictMode: true,
}

module.exports = nextConfig

