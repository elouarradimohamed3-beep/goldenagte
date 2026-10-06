'use client'
import { usePathname } from 'next/navigation'
import { langFromPath, type Lang } from '@/lib/i18n'

export const useLang = (): Lang => langFromPath(usePathname())
