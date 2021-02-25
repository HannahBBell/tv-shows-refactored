import React, {useState} from 'react';
import './App.css';
import EpisodeCard from './EpisodeCard';
import SearchBar from './SearchBar';
import episodes from './episodes.json';



function Apps() {
  const [episodeList, setEpisodeList] = useState(episodes)
  const [input, setInput] = useState("")

  console.log(input)
  console.log(episodeList)
  console.log(setInput, "Hello")

  const filteredEpisodeList = episodeList.filter((episode) => {
    return (episode.name.toLowerCase().includes(input.toLowerCase())) || episode.summary.toLowerCase().includes(input.toLowerCase())})

  return (
    <div>
      <SearchBar input={input} setInput={setInput}/>
      {filteredEpisodeList.map(EpisodeCard)}
    </div>
  )
}

export default Apps;


// let text: string = event.target.value
//             props.setEpisodeList(episodes.filter((episode)=> {
//                 return episode.name.toLowerCase().includes(text.toLowerCase())
//             }))