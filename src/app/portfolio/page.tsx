'use client'
import PortfolioHero from './PortfolioHero'
import PortfolioList from './PortfolioList'

export default function Page() {
  return (
    <main className="w-full overflow-hidden">
      <PortfolioHero />
      <PortfolioList />
    </main>
  )
}
