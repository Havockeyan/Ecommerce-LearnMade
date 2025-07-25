import Link from 'next/link'
import React from 'react'
import twitch from '../assets/twitch.png'
import Image from 'next/image'
import discord from '../assets/discord.png'
import telegram from '../assets/telegram.png'
import youtube from '../assets/youtube.png'
import instagram from '../assets/instagram.png'
const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col">
    <div className="flex-1"></div>
  
    <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
      <p>© 2025 Learnmade</p>
      
      <div className="mt-2 flex justify-center items-center gap-4">
        <Link href="https://discord.gg/PgTk7Dxtgb" target="_blank" rel="noopener noreferrer">
          <Image src={discord} height={40} width={40} alt="Discord" />
        </Link>
        <Link href="https://twitch.tv/learnmadetamil" target="_blank" rel="noopener noreferrer">
          <Image src={twitch} height={40} width={40} alt="Twitch" />
        </Link>
        <Link href="https://youtube.com/channel/UCLrkOJKPxb0DYKTGuzDwxXQ" target="_blank" rel="noopener noreferrer">
          <Image src={youtube} height={40} width={40} alt="YouTube" />
        </Link>
        <Link href="https://t.me/2yoDkyu-hQ41N2I1" target="_blank" rel="noopener noreferrer">
          <Image src={telegram} height={40} width={40} alt="Telegram" />
        </Link>
        <Link href="https://instagram.com/learnmade.in?igsh=NDBjYWRieTBmdjI0" target="_blank" rel="noopener noreferrer">
          <Image src={instagram} height={40} width={40} alt="Instagram" />
        </Link>
      </div>
    </footer>
  </div>
  

  )
}

export default Footer