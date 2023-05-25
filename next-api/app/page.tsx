import UploadFile from '@/components/UploadFile'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="py-4 px-4">
      Upload file

      <UploadFile />
    </main>
  )
}
