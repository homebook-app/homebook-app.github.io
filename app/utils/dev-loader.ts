import { devBySlug, type DevEntry } from '~/data/dev'

const localDev = import.meta.glob('../content/dev/*.md', {
  query: '?raw',
  import: 'default'
}) as Record<string, () => Promise<string>>

export function resolveDev(slug: string): DevEntry | undefined {
  return devBySlug[slug]
}

export async function loadDevMarkdown(entry: DevEntry): Promise<string> {
  if (entry.source.type === 'remote') {
    const response = await fetch(entry.source.url)

    if (!response.ok) {
      throw createError({
        statusCode: 502,
        statusMessage: `Failed to fetch remote markdown (${response.status})`
      })
    }

    return response.text()
  }

  const key = `../content/dev/${entry.source.path}`
  const loader = localDev[key]

  if (!loader) {
    throw createError({
      statusCode: 404,
      statusMessage: `Markdown file not found: ${entry.source.path}`
    })
  }

  return loader()
}
