import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'


export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page of Job Board',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <Nav/>
        {children}
        <Footer/>
    </div>
  )
}