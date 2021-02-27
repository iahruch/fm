import { ArtistInterface } from './artist.interface'
import { ImageInterface } from '../../shared/types/image.interface'

export interface AlbumInterface {
  name: string
  mbid: string
  url: string
  artist: ArtistInterface
  image: ImageInterface[]
  '@attr': {
    rank: 'https://www.last.fm/music/Linkin+Park'
  }
}
