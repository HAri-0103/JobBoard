import Footer from '@/components/footer';
import Nav from '@/components/nav';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Job Detail',
  description: '',
}

export default function JobdetailLayout({
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