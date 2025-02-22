import React from 'react'
import BookCover from './BookCover'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from './ui/button'

const BookCard = ({ id, title, genre, color, cover, isLoanedBook = false,}: Book) => {
  return (
    <li className={cn( isLoanedBook && "xs:w-52 w-full" )}>
        <Link href={`/books/${id}`} className={cn( isLoanedBook && "w-full flex flex-col items-center" )}>
            <BookCover coverColor={color} coverImage={cover} />

            <div className={cn( "mt-4", !isLoanedBook && "xs:max-w-40 max-w-28" )}>
                <div className="book-title">{title}</div>
                <div className="book-genre">{genre}</div>
            </div>

            {isLoanedBook && (
                <div className="mt-3 w-full">
                    <div className="book-loaned">
                        <Image 
                            src="/icons/calender.svg"
                            alt='calender'
                            width={18}
                            height={18}
                            className='object-contain'
                        />
                    
                       <p className="text-light-100">11 days left to return</p>
                    </div>

                <Button className='book-btn'>Download receipt</Button>
               </div>
            )}
        </Link>
    </li>
  )
}

export default BookCard