import Link from 'nextein/link'

export default function Navigation() {
  return (
    <nav className='sticky z-10 -top-4 border border-b-2 border-gray-100 bg-white bg-opacity-90'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-20 flex items-center'>
        <div className='sticky top-0 flex-1 flex items-center justify-between h-16'>
          <Link href='/'><a>elmasse.io</a></Link>
          <Link href='/about'><a>about me</a></Link>
        </div>
      </div>
    </nav>
  )
}