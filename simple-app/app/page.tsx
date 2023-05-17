import Image from 'next/image'
import Link from 'next/link'

type Repository = {
  id: number;
  name: string;
  full_name: string;
}

export default async function Home() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const data: Repository = await res.json();

  return (
    <>
      <Link href="/blog/123">Blog Post</Link>
      <br/> <br/> <br/>
      <Link href="/about">About</Link>

      <h1>{data.full_name}</h1>
    </>
  )
}
