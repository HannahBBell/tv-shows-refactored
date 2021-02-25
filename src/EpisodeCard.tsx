import './App.css';
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


function padEpisode(unpadded: number) {
    return (unpadded < 10 ? `0${unpadded}` : unpadded);
}

function EpisodeCard(props: EpisodeTypes) {
  return (
    <div className="Episodes">
      <h1>{props.name} - S{padEpisode(props.season)} E{padEpisode(props.number)}</h1>
      <img src = {props.image.medium} alt = "Episode"/>
      <p>{props.summary}</p>
    </div>
  );
}

// function MappedEpisodes() {
//     return (episodes.map(EpisodeCard))
//   };
  
export default EpisodeCard;
