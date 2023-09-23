import React from 'react'
import Video from './Video'
const Support = ({ title, data, link }) => {
  const imgURLs = [
    "https://i.redd.it/cbd801fa2l781.jpg",
    "https://i.redd.it/i-keep-seeing-this-angry-cat-meme-does-anyone-know-what-v0-0o96ygkg9jw91.jpg?width=1080&format=pjpg&auto=webp&s=8a7220f58ae5e5ecbef518367d48b96f7327e06d",
    "https://i.redd.it/i-keep-seeing-this-angry-cat-meme-does-anyone-know-what-v0-n9p8aheg9jw91.jpg?width=1080&format=pjpg&auto=webp&s=1234ce6118236f234e84f50164dd6f176c6d9f7e",
  ];
    return (
        <div className='mx-10 mt-6 mb-4 font-semibold flex flex-col gap-5'>
            <div>
                {title}
            </div>
            <div className='text-base text-lightseagreen'>
                {data}
            </div>
            <Video  title="UTP's Human Rights" link="https://www.youtube.com/embed/nDgIVseTkuE?si=8v_EBEIMQZ-D8kBb"/>
            
            <div className=''>
            <h1 >Additional Resources</h1>
                <a href={link}>{link}</a>
            </div>
        </div>
    )
}

export default Support