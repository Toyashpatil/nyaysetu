import React from 'react'

function Video({title,link}) {
  return (
    <div>
        
      <p className=" font-medium text-black text-base mb-[0.6rem]">{title} :</p>
      <div className="rounded-2xl shadow-lg overflow-hidden">
      <iframe width="300" height="200" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    
    </div>
  )
}

export default Video