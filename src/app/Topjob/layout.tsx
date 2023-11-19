import Footer from '@/components/footer';
import Nav from '@/components/nav';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Sign up page',
}

export default function TopjobLayout({
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