import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tienda de Juegos</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <main>
      <h1>Estamos en el home</h1>
      {/* <a href='/pages/contact.js'>Contacto</a> */}

      <Link href='/ps5/fortnite'>
        PS5 - Fortnite
      </Link>
    </main>
    </div>
  )
}
