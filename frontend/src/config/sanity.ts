import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'y7j5j2mt',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export const sanityConfig = {
  projectId: 'y7j5j2mt',
  dataset: 'production',
  apiVersion: '2024-01-01',
}
