'use client'

import { CheckIsPublicRoute } from '@/functions/isPrivateRouter'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { usePathname } from "next/navigation"
import { UserProvider } from '@/contexts/ContextProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathName = usePathname()


  const isPublicPage = CheckIsPublicRoute(pathName!)
  console.log(isPublicPage)

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
