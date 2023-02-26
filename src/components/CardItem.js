import TagItem from "./TagItem"

const CardItem = (props) =>{ 
    const tags = props.data.tags.split(',');
    return (
        // image card item
    <div className='max-w-sm rounded shadow-lg break-inside-avoid'>
    <img src={props.data.webformatURL} alt="random" className='w-full'/>      
      <div className="px-6 py-4">
        <div className="font-semibold text-purple-500 text-xl">Photo by {props.data.user}</div>
        <ul>
          <li><strong>Views:</strong> {props.data.views}</li>
          <li><strong>Downloads:</strong> {props.data.downloads}</li>
          <li><strong>Likes:</strong> {props.data.likes}</li>
        </ul>
      </div>
      <div className="flex gap-2 flex-wrap items-center px-2 py-4">
        {tags.map((tag,index)=>(<TagItem key={index} tag={tag}/>))}
      </div>
  </div>
    )
}

export default CardItem