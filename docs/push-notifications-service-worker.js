/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

let baseUrl = 'https://ui-libs-cr-dev.gamanzaengage.com';


if (self.origin.includes('qa')) {
  baseUrl = 'https://cdn-libs-qa.gamanzaengage.com';
}

importScripts(
  `${baseUrl}/casino-ui-widgets/gamanza-service-worker.f11d1af1.min.js`,
)
