import { Artist } from './artist.model';
import { ExternalUrls } from './external-urls.model';
import { Image } from './image.model';

export class Album {
    album_type: string;
    artists: Artist[];
    available_markets: any[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}
