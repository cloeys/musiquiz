import { Component, OnInit } from '@angular/core';
import { Track } from '../models/track.model';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  title = 'musiquiz';
  playList: Track[];
  loaded = false;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    // this.spotifyService.getPlaylist('rock').subscribe((playList: Track[]) => {
    //   this.loaded = true;
    //   console.log(playList);
    //   this.playList = playList;
    // });
  }
}
