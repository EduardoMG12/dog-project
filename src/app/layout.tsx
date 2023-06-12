import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Doglopedia',
  description: 'Discover the world of dogs: breeds, care tips, and heartwarming stories. Find your perfect furry companion and embark on a journey filled with love and joy. Explore our comprehensive resources and connect with a community of passionate dog lovers. Start your dog-loving adventure today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
