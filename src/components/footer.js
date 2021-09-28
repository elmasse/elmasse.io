import Link from 'next/link'
import { CC, BY } from './icons/creative-commons'

export default function Footer () {
  return (
    <footer className='bg-white dark:bg-black border-t border-gray-100 dark:border-gray-700 border-solid pt-6 text-gray-900 dark:text-gray-100'>
      <div className='max-w-7xl h-full pt-4 mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-32'>
          <div className='flex-none pb-4'>
            <Link href='/'><a>elmasse.io</a></Link>
          </div>

          <div className='flex-grow'>
            <ul className='text-sm font-medium grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 pb-32'>

              <li className='space-y-5 row-span-2'>
                <div className='text-xs font-semibold tracking-wide uppercase'>Social</div>
                <ul className='space-y-4'>
                  <li><a rel='noopener' href='https://github.com/elmasse' target='_blank'>Github</a></li>
                  <li><a rel='noopener' href='https://twitter.com/elmasse' target='_blank'>Twitter</a></li>
                  <li><a rel='noopener' href='https://www.linkedin.com/in/maximilianofierro' target='_blank'>LinkedIn</a></li>
                </ul>
              </li>

              <li className='space-y-5 row-span-2'>
                <div className='text-xs font-semibold tracking-wide uppercase'>Contact</div>
                <ul className='space-y-4'>
                  <li><a rel='noopener' href='mailto:hello@elmasse.io'>Mail</a></li>
                </ul>
              </li>

              <li className='space-y-5 row-span-2'>
                <div className='text-xs font-semibold tracking-wide uppercase'>Projects</div>
                <ul className='space-y-4'>
                  <li><a rel='noopener' href='https://nextein.elmasse.io' target='_blank'>nextein</a></li>
                </ul>
              </li>


              <li className='space-y-5 row-span-2'>
                <div className='text-xs font-semibold tracking-wide uppercase'>license</div>
                <ul className='space-y-4'>
                  <li>
                    <a className='inline-flex space-x-1' rel='license' href='http://creativecommons.org/licenses/by/4.0/'>
                      <CC height='24px'/>
                      <BY height='24px'/>
                    </a>
                    <p className='text-xs'>
                      This work is licensed under a &nbsp;
                      <a rel='license' href='http://creativecommons.org/licenses/by/4.0/'>Creative Commons Attribution 4.0 International License</a>.
                     </p>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div className='bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-900'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='space-x-1 h-10 w-full flex items-center justify-center'>
            <div className='text-xs text-gray-600  dark:text-gray-300 font-medium'>
              Built with ♥︎ and <a href='https://nextein.elmasse.io'>nextein</a> by <a href='https://github.com/elmasse'>
              <span className='font-em text-sm'>elmasse</span></a>  
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
