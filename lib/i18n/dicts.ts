import type { Lang } from './index'
import { en, type Dict } from './en'
import { fr } from './fr'
import { es } from './es'
import { de } from './de'
import { pt } from './pt'
import { pl } from './pl'
import { el } from './el'
import { ar } from './ar'
import { OVERRIDES, applyOverride } from './overrides'

const BASE: Record<Lang, Dict> = { en, fr, es, de, pt, pl, el, ar }
export const DICTS = Object.fromEntries((Object.keys(BASE) as Lang[]).map((l) => [l, applyOverride(BASE[l], OVERRIDES[l])])) as Record<Lang, Dict>
export const getDict = (lang: Lang): Dict => DICTS[lang]
export { en }
export type { Dict }
