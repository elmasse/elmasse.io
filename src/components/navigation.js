import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='sticky z-10 -top-4 border-b-2 border-gray-100  dark:border-gray-800  bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-80' >
      <div className='max-w-7xl mx-auto px-6 h-20 flex items-center'>
        <div className='sticky top-0 flex-1 flex items-center justify-between h-16 text-black dark:text-white'>
          <Link href='/'><a>elmasse.io</a></Link>
          <Link href='/about'><a>about me</a></Link>
        </div>
      </div>
    </nav>
  )
}