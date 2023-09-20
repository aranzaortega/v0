import { Pricing } from '@/components/component/pricing'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>v0 test</h1>
      <Pricing />
    </main>
  )
}
