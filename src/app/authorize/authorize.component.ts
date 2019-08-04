import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: SpotifyService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('init');
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      this.service.isAuthorized.next(true);
      this.router.navigate(['play']);
    });
  }

}
