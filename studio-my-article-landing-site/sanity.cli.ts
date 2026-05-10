import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
      projectId: 'y7j5j2mt',
      dataset: 'production',
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
  vite: {
    server: {
      port: 3333,
    },
  },
})
