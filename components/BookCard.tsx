import React from 'react'
import BookCover from './BookCover'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const BookCard = ({ id, title, genre, color, cover, isLoadnedBook = false,}: Book) => {
  return (
    <li className={cn( isLoadnedBook && "xs:w-52 w-full" )}>
        <Link href={`/books/${id}`} className={cn( isLoadnedBook && "w-full flex flex-col items-center" )}>
            <BookCover coverColor={color} coverImage={cover} />

            <div className={cn( "mt-4", !isLoadnedBook && "xs:max-w-40 max-w-28" )}>
                <div className="book-title">{title}</div>
                <div className="book-genre">{genre}</div>
            </div>

            {isLoadnedBook && (
                <div className="mt-3 w-full">
                    <div className="book-loadned">
                        <Image 
                            src="/icons/calender.svg"
                            alt='calender'
                            width={18}
                            height={18}
                            className='object-contain'
                        />
                    </div>
                    
                    <p className="">11 days left to return</p>
                </div>
            )}
        </Link>
    </li>
  )
}

export default BookCard