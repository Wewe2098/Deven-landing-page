import { useEffect } from 'react'

interface SeoProps {
  title: string
  description: string
  keywords?: string
  image?: string
  ogImage?: string
  twitterImage?: string
  ogImageWidth?: string
  ogImageHeight?: string
  ogLocale?: string
  url?: string
  type?: 'website' | 'article'
  robots?: string
  structuredData?: Record<string, unknown>
}

const ensureMeta = (key: 'name' | 'property', value: string, content: string) => {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${key}="${value}"]`)

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(key, value)
    document.head.appendChild(meta)
  }

  meta.setAttribute('content', content)
}

const ensureCanonical = (href: string) => {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }

  canonical.setAttribute('href', href)
}

const ensureStructuredData = (payload?: string) => {
  const scriptId = 'app-structured-data'
  const existing = document.getElementById(scriptId)

  if (!payload) {
    existing?.remove()
    return
  }

  let script = existing as HTMLScriptElement | null

  if (!script) {
    script = document.createElement('script')
    script.id = scriptId
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  script.textContent = payload
}

export const Seo = ({
  title,
  description,
  keywords,
  image,
  ogImage,
  twitterImage,
  ogImageWidth,
  ogImageHeight,
  ogLocale,
  url,
  type = 'website',
  robots = 'index, follow',
  structuredData,
}: SeoProps) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin
  const resolvedUrl = url || `${siteUrl}${window.location.pathname}`
  const resolvedImage = image || `${siteUrl}/favicon.svg`
  const resolvedOgImage = ogImage || resolvedImage
  const resolvedTwitterImage = twitterImage || resolvedImage
  const structuredDataPayload = structuredData ? JSON.stringify(structuredData) : undefined

  useEffect(() => {
    document.title = title

    ensureMeta('name', 'description', description)
    ensureMeta('name', 'robots', robots)
    ensureMeta('property', 'og:type', type)
    ensureMeta('property', 'og:title', title)
    ensureMeta('property', 'og:description', description)
    ensureMeta('property', 'og:url', resolvedUrl)
    ensureMeta('property', 'og:image', resolvedOgImage)

    if (ogImageWidth) {
      ensureMeta('property', 'og:image:width', ogImageWidth)
    }

    if (ogImageHeight) {
      ensureMeta('property', 'og:image:height', ogImageHeight)
    }

    if (ogLocale) {
      ensureMeta('property', 'og:locale', ogLocale)
    }

    ensureMeta('name', 'twitter:card', 'summary_large_image')
    ensureMeta('name', 'twitter:title', title)
    ensureMeta('name', 'twitter:description', description)
    ensureMeta('name', 'twitter:image', resolvedTwitterImage)

    if (keywords) {
      ensureMeta('name', 'keywords', keywords)
    }

    ensureCanonical(resolvedUrl)
    ensureStructuredData(structuredDataPayload)
  }, [
    title,
    description,
    keywords,
    robots,
    type,
    resolvedUrl,
    resolvedOgImage,
    resolvedTwitterImage,
    ogImageWidth,
    ogImageHeight,
    ogLocale,
    structuredDataPayload,
  ])

  return null
}
