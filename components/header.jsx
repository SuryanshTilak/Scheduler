import { PenBox } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'


const Header = () => {
    return (
      <nav className='mx-auto py-2 px-4 flex justify-between items-center shadow-md border-b-2'>
          <Link href={"/"} className='flex items-center'>
          <Image className="h-16 w-auto"
           src="/logo.png"
           alt="Scheduler Logo"
          width="150"
          height="60"/>
          </Link>
  
          <div className='flex items-center gap-4'>
            <Link href='/events?create=true'>
              <Button className='flex items-center gap-2'>
                <PenBox size={18}/> Create Event
              </Button>
            </Link>
  
            <Button variant="outline">Login</Button>
          </div>
      </nav>
    )
  }   
  
  export default Header        
  
