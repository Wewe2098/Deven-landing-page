import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const isDevelopment = process.env.NODE_ENV !== 'production'

export default defineConfig({
  name: 'default',
  title: 'my-article-landing-site',

  projectId: 'y7j5j2mt',
  dataset: 'production',

  plugins: [
    structureTool(),
    ...(isDevelopment ? [visionTool()] : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
