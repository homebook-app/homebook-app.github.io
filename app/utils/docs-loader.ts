import { docsBySlug, type DocEntry } from '~/data/docs'

const localDocs = import.meta.glob('../content/docs/*.md', {
  query: '?raw',
  import: 'default'
}) as Record<string, () => Promise<string>>

export function resolveDoc(slug: string): DocEntry | undefined {
  return docsBySlug[slug]
}

export async function loadDocMarkdown(entry: DocEntry): Promise<string> {
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

  const key = `../content/docs/${entry.source.path}`
  const loader = localDocs[key]

  if (!loader) {
    throw createError({
      statusCode: 404,
      statusMessage: `Markdown file not found: ${entry.source.path}`
    })
  }

  return loader()
}
