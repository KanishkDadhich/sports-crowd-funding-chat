import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client';
const Card = ({ props: { image, name, gender, description, tags, rollno } }) => {
  let linkURL
  if (rollno) linkURL = "/profile/" + rollno.toLowerCase()
  return (
    <div className='max-w-xs snap-start snap-always bg-white rounded-xl shadow-md m-4 overflow-hidden shrink-0 md:flex md:max-w-lg'>
        <Link href={linkURL || '/'}>
          <div className='md:shrink-0'>
            {image? <img key={image[0]._key} src={urlFor(image[0])} className='h-52 w-full md:w-52 md:h-full object-cover cursor-pointer transition-all origin-[100%_50%] hover:opacity-80 hover:scale-110' alt={name}></img>: <img src='/Default.png' className='h-52 w-full md:w-52 md:h-full object-cover cursor-pointer transition-all origin-[100%_50%] hover:opacity-80 hover:scale-110'  alt={name}></img>}
          </div>
        </Link>
      <div className='bg-white p-6 space-y-4'>
        <div>
          {name && <Link href={linkURL || '/'}>
            <p className='text-slate-800 text-xl font-semibold decoration-dashed hover:text-indigo-500 hover:cursor-pointer hover:underline'>{name}</p>
          </Link>}
          {gender && <p className='text-sm font-semibold text-emerald-400'>{gender}</p>}
        </div>
        {description && <ul className='marker:text-sky-400 list-disc ml-6 text-slate-500'>
          {
            description.map(desc => (
              <li key={desc}>{desc}</li>
            ))
          }
        </ul>}
        {tags && <div>
          {
            tags.map(tag => (
              <p key={tag} className='bg-slate-100 text-slate-700 font-semibold inline-block rounded-full px-2 mr-1 mb-1 border-2 border-transparent hover:border-slate-200'>{tag}</p>
            ))
          }
        </div>}
      </div>
    </div>

  )
}
export default Card