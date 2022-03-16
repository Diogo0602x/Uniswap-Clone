import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'kxsmyxmt',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skA7xrIs31K1Gac6HyrbKpcGkj8iddLK413ZyN6y02zpNPa7sj0BVN2fDShIKJOlh4jSka74sNXMrIopFRz2VVBnbKycZkQ1wQhMLFOcYnpPENa6qtglOqUy5Sa4LIiUTXWTxfcsMBgVPbPQ7zkzusAcDtsrqnlsz6wIvV36rnDOpxbQGm6j',
  useCdn: false,
})