/** @type {import('next').NextConfig} */


const runtimeCaching = require('next-pwa/cache')  

const { i18n } = require("./next-i18next.config");


module.exports = {

  reactStrictMode: true,
  swcMinify: true,
  i18n,
}
