'use client'

import React from 'react'
import { useUWU } from '~/hooks/useUWU'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import UwU from './xku-campus-uwu.jpg'
import SicoBoom from './sico-boom.png'
import Campus from './xku-campus.jpg'

export default function Home() {
  const t = useTranslations('Home')
  const isUWU = useUWU()

  return (
    <>
      <h1>👋&nbsp;{t('Heading')}</h1>
      <p>{t.rich('Paragraph1')}</p>
      <Image
        src={isUWU ? UwU : Campus}
        alt="XKU Campus"
        placeholder="blur"
      />
      <Image src={SicoBoom} alt="Sico Boom" placeholder="blur" />
      <p className="-mt-4 text-center text-sm text-stone-400 dark:text-stone-500">
        {t('Caption')}
      </p>
    </>
  )
}
