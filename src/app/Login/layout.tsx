import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign up page',
}

export default function SigninLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}