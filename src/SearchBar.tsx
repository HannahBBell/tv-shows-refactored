import './App.css';
import React, {useState} from 'react'
import episodes from './episodes.json'

interface EpisodeTypes {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    image: {
      medium:
        string;
      original:
        string;
    },
    summary: string;
    _links: {
      self: {
        href: string
      }
    }
  };

// function FilterEpisodes(episodes: EpisodeTypes){
//     return episodes.filter((episode:) => {
//         return episode.name.toLowerCase().includes(input.toLowerCase())
//     })
interface Istate {
  input: string;
  setInput: (input: string) => void;
};

function SearchBar(props: Istate) {

    // const [input, setInput] = useState("")
    // const [episodeList, setEpisodeList] = useState(episodes)
    // console.log(input)

    // const filtered = episodes.filter(episode => {
    //     return episode.name.toLowerCase().includes(input.toLowerCase())
    // })
    // setEpisodeList(filtered);


    return (
        <input key="searchElement"
        value={props.input}
        placeholder={"search episode"}
        onChange= {(event) => {
            props.setInput(event.target.value);
            
        }}
        />
        );
};

export default SearchBar;