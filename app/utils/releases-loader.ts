import type { ReleaseManifestEntry } from '~/data/releases-manifest'

const localReleaseMarkdown = import.meta.glob('../content/releases/*.md', {
  query: '?raw',
  import: 'default'
}) as Record<string, () => Promise<string>>

export async function loadReleaseMarkdown(entry: ReleaseManifestEntry): Promise<string> {
  const key = `../content/releases/${entry.markdownFile}`
  const loader = localReleaseMarkdown[key]

  if (!loader) {
    throw createError({
      statusCode: 404,
      statusMessage: `Release markdown not found: ${entry.markdownFile}`
    })
  }

  return loader()
}
