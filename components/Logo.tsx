import { clsxm } from '@zolplay/utils'
import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/assets/logo.png"
      alt="Logo"
      width={1264}
      height={1329}
      className={clsxm('w-6 group-hover:rotate-45 transition-transform', className)}
    />
  )
}