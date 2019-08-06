import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Track } from '../models/track.model';
import { SpotifyService } from '../services/spotify.service';
import { Observable, timer, Subject } from 'rxjs';
import { take, map, takeWhile, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit, AfterViewInit {

  playList: Track[];
  loaded = false;
  currentSong = 0;
  score = 0;
  count = 30;
  input = '';
  counter$: Observable<number>;
  finished = false;
  subject = new Subject();

  @ViewChild('audio', {static: false}) audioPlayerRef: ElementRef;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.spotifyService.getPlaylistAuthorized('rock').subscribe((playList: Track[]) => {
      this.loaded = true;
      this.playList = playList;

      console.log(this.playList);

      this.start();
    });
  }

  start() {
    this.audioPlayerRef.nativeElement.volume = 0.2;
    this.audioPlayerRef.nativeElement.load();
    this.audioPlayerRef.nativeElement.play();
    this.counter$ = timer(0, 1000).pipe(take(this.count), map(() => {
      return --this.count;
    }), takeUntil(this.subject), takeWhile(counter => counter >= 0));
  }

  skip() {
    this.goToNext();
  }

  @HostListener('document:keypress', ['$event'])
  checkCorrect(event: KeyboardEvent) {
    if (!this.finished && event.key === 'Enter') {
      if (true) { // user input matches song name
        this.score += Math.ceil(300 * (this.count / 30));
        this.goToNext();
      }
    }
  }

  goToNext() {
    this.audioPlayerRef.nativeElement.pause();
    this.audioPlayerRef.nativeElement.currentTime = 0;

    this.count = 30;
    this.counter$ = timer(0, 1000).pipe(take(this.count), map(() => {
      return --this.count;
    }), takeUntil(this.subject), takeWhile(counter => counter >= 0));

    if (this.currentSong < this.playList.length - 1) {
      this.currentSong++;

      this.audioPlayerRef.nativeElement.load();
      this.audioPlayerRef.nativeElement.play();
    } else {
      this.subject.next();
      this.finished = true;
    }
  }
}
