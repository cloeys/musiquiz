import { Album } from './album.model';
import { Artist } from './artist.model';
import { ExternalIds } from './external-ids.model';
import { ExternalUrls } from './external-urls.model';

export class Track {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    _explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}
