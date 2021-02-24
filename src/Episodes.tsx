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

function App(props: EpisodeTypes) {
  return (
    <div className="Episodes">
      <h1>{props.name} - S{padEpisode(props.season)} E{padEpisode(props.number)}</h1>
      <img src = {props.image.medium} alt = "Episode Picture"/>
      <p>{props.summary}</p>
    </div>
  );
}

function mappedEpisodes() {
    return (episodes.map(App))
  };
  
export default mappedEpisodes;
