import releasesJson from '~/content/releases/releases.json'

export interface ReleaseManifestEntry {
  version: string
  date: string
  markdownFile: string
  short_sha: string
  commit_url: string
  run_id: string
}

export const releaseManifestEntries = releasesJson as ReleaseManifestEntry[]
