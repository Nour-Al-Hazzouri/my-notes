import { FullSlug, isFolderPath, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { Date, getDate } from "./Date"
import { QuartzComponent, QuartzComponentProps } from "./types"
import { GlobalConfiguration } from "../cfg"

export type SortFn = (f1: QuartzPluginData, f2: QuartzPluginData) => number

/**
 * Extract the leading numeric prefix from a name like "1- Title" or "7.1- Title".
 * Returns null if no prefix is found.
 */
function getNumericPrefix(name: string): number[] | null {
  const match = /^(\d+(?:\.\d+)*)\s*-/.exec(name)
  if (!match) return null
  return match[1].split(".").map(Number)
}

/**
 * Compare two names that may begin with an N- or N.M- prefix.
 * Prefixed names are sorted numerically before unprefixed names.
 */
function compareByName(a: string, b: string): number {
  const aParts = getNumericPrefix(a)
  const bParts = getNumericPrefix(b)

  if (aParts && bParts) {
    const len = Math.max(aParts.length, bParts.length)
    for (let i = 0; i < len; i++) {
      const diff = (aParts[i] ?? 0) - (bParts[i] ?? 0)
      if (diff !== 0) return diff
    }
    return 0
  }

  // Prefixed names come before unprefixed ones
  if (aParts && !bParts) return -1
  if (!aParts && bParts) return 1

  // Neither has a prefix — lexicographic fallback
  return a.toLowerCase().localeCompare(b.toLowerCase())
}

export function byDateAndAlphabetical(cfg: GlobalConfiguration): SortFn {
  return (f1, f2) => {
    const t1 = f1.frontmatter?.title ?? ""
    const t2 = f2.frontmatter?.title ?? ""
    return compareByName(t1, t2)
  }
}

export function byDateAndAlphabeticalFolderFirst(cfg: GlobalConfiguration): SortFn {
  return (f1, f2) => {
    const f1IsFolder = isFolderPath(f1.slug ?? "")
    const f2IsFolder = isFolderPath(f2.slug ?? "")
    if (f1IsFolder && !f2IsFolder) return -1
    if (!f1IsFolder && f2IsFolder) return 1

    const t1 = f1.frontmatter?.title ?? ""
    const t2 = f2.frontmatter?.title ?? ""
    return compareByName(t1, t2)
  }
}

type Props = {
  limit?: number
  sort?: SortFn
} & QuartzComponentProps

export const PageList: QuartzComponent = ({ cfg, fileData, allFiles, limit, sort }: Props) => {
  const sorter = sort ?? byDateAndAlphabeticalFolderFirst(cfg)
  let list = allFiles.sort(sorter)
  if (limit) {
    list = list.slice(0, limit)
  }

  return (
    <ul class="section-ul">
      {list.map((page) => {
        const title = page.frontmatter?.title
        const tags = page.frontmatter?.tags ?? []

        return (
          <li class="section-li">
            <div class="section">
              <p class="meta">
                {page.dates && <Date date={getDate(cfg, page)!} locale={cfg.locale} />}
              </p>
              <div class="desc">
                <h3>
                  <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                    {title}
                  </a>
                </h3>
              </div>
              <ul class="tags">
                {tags.map((tag) => (
                  <li>
                    <a
                      class="internal tag-link"
                      href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}
                    >
                      {tag}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

PageList.css = `
.section h3 {
  margin: 0;
}

.section > .tags {
  margin: 0;
}
`
