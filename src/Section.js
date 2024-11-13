import React from 'react'
function Section ({title,content,imgSrc})
{return(
    <section>
<h2>{title}</h2>
<p>{content}</p>
{imgSrc && <img src = {imgSrc}alt={title}/>}

    </section>
)
}

export default Section 