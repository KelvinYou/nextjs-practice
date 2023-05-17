import Image from 'next/image'
import { personalData } from '@/data/personalData';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{personalData.greeting}</div>
      
      <div>{personalData.roles[0]}</div>

      <Link href="/projects">Projects</Link>
    </main>
  )
}
