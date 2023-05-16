import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href="/blog/123">Blog Post</Link>
      <br/> <br/> <br/>
      <Link href="/about">About</Link>
    </>
  )
}
