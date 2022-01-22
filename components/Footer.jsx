import { useRouter } from 'next/router'

function Footer() {
  const router = useRouter()
  return (
    <footer className='w-full h-64 p-16'>
      <div className='w-full flex justify-center space-x-2 p-4'>
        <img
          src='./icons/github.svg'
          alt='https://github.com/crypto-coding-club'
          className='h-12 w-12 text-white hover:cursor-pointer'
          onClick={() => router.push('https://github.com/jamesprenticez')}
        />
      </div>
        <p className='w-full flex justify-center text-white'>James Prentice 2022</p>
    </footer>
  )
}

export default Footer