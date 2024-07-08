function Card(props){//also we can Card({⁡⁣⁣⁢𝗻𝗮𝗺𝗲,𝗯𝘁𝗻𝘁𝘅𝘁,𝗺𝘆𝗮𝗿𝗿⁡}) then no need for props.name  only {name} also {⁡⁢⁣⁣name||"default"⁡}or in ⁡⁢⁢⁣𝗖𝗮𝗿𝗱({𝗻𝗮𝗺𝗲="𝗱𝗲𝗳𝗮𝘂𝗹𝘁"})⁡
    console.log("props->", props);
    return(
        <>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">see {props.name} The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
        </>
    )
}

export default Card