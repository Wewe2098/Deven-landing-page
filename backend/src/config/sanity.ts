import { createClient } from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01'
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_TOKEN

if (!projectId || !dataset) {
  throw new Error('Missing Sanity configuration. Set SANITY_PROJECT_ID and SANITY_DATASET.')
}

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: !token,
})

export default sanityClient
