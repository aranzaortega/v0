import { Pricing } from '@/components/component/pricing'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Pricing />
    </main>
  )
}
