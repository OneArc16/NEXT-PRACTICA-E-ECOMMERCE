import React from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router'

export default function Game() {
    const router = useRouter()
    const {platform, game} = router.query;
    console.log(router)
  return (
    <div> 
      <Head>
        <title>{game} | {platform}</title>
      </Head>
      <h1>Estamos en la plataforma: {platform}</h1>
      <h1>Estamos en el juego: {game}</h1>
    </div>
  )
}
