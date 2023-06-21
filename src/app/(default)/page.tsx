import Developer from './partials/developer'
import Hero from './partials/hero'

export const metadata = {
  title: 'Home - JobBoard',
  description: 'Page description',
}


export default function Home() {
  return (
    <>
      <Hero />
      <Developer />
    </>
  )
}
