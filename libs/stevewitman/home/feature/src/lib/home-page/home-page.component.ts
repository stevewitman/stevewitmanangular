import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stevewitmanangular-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  talks = [
    {
      type: 'in-person',
      event: 'Angular Boulder Meetup',
      title: 'Introduction to TypeScript',
      date: '2017-06-12',
      thumbUrl: '',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/239348522/',
    },
    {
      type: 'in-person',
      event: 'Angular Boulder Meetup',
      title: 'Angular Virtual Scroll',
      date: '2019-02-11',
      thumbUrl: '',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/258502184/',
    },
    {
      type: 'in-person',
      event: 'Angular Boulder Meetup',
      title: 'Build a server side REST API with Angular inspired Nest JS',
      date: '2019-08-12',
      thumbUrl: '',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/263664528/',
    },
    {
      type: 'live-stream',
      event: 'Angular Boulder Meetup',
      title: 'Angular Architectural Considerations',
      date: '2021-01-12',
      thumbUrl:
        '2021-01-12 Angular Architectural Considerations (by Steve Witman).jpg',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/274725466/',
    },
    {
      type: 'live-stream',
      event: 'Angular Boulder Meetup',
      title: 'Nx Workspaces With Angular',
      date: '2021-02-09',
      thumbUrl: '2021-02-09 Nx Workspaces With Angular (by Steve Witman).jpg',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/276028762/',
    },
    {
      type: 'live-stream',
      event: 'Angular Boulder Meetup',
      title: 'The Angular Router',
      date: '2021-03-09',
      thumbUrl: '2021-03-09 The Angular Router (by Steve Witman).jpg',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/276703927/',
    },
    {
      type: 'live-stream',
      event: 'Angular Boulder Meetup',
      title: 'Angular Custom Components',
      date: '2021-04-13',
      thumbUrl: '2021-04-13 Angular Custom Components (by Steve Witman).jpg',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/277480717/',
    },
    {
      type: 'live-stream',
      event: 'Angular Boulder Meetup',
      title: 'Angular Animations',
      date: '2021-05-11',
      thumbUrl: '2021-05-11 Angular Animations (by Steve Witman).jpg',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/277926193/',
    },
    {
      type: 'live-stream',
      event: 'Angular Boulder Meetup',
      title: 'Observables In Angular Part 1',
      date: '2021-07-13',
      thumbUrl:
        '2021-07-13 Observables In Angular Part 1 (by Steve Witman).jpg',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/279244952/',
    },
    {
      type: 'live-stream',
      event: 'Angular Boulder Meetup',
      title: 'Observables In Angular Part 2',
      date: '2021-08-10',
      thumbUrl:
        '2021-08-10 Observables In Angular Part 2 (by Steve Witman).jpg',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/279813284/',
    },
    {
      type: 'live-stream',
      event: 'Angular Boulder Meetup',
      title: 'Observables In Angular Part 3',
      date: '2021-09-14',
      thumbUrl:
        '2021-09-14 Observables In Angular Part 3 (by Steve Witman).jpg',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/280259513/',
    },
    {
      type: 'in-person',
      event: 'Angular Boulder Meetup',
      title: 'Angular The Framework',
      date: '2021-11-09',
      thumbUrl: '2021-11-09 Angular The Framework (by Steve Witman).jpg',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/281661250/',
    },
    {
      type: 'in-person',
      event: 'Angular Boulder Meetup',
      title: 'Angular Getting Started',
      date: '2021-12-14',
      thumbUrl: '2021-12-14 Angular Getting Started (by Steve Witman).jpg',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/281662098/',
    },
    {
      type: 'in-person',
      event: 'Angular Boulder Meetup',
      title: 'Angular Custom Directives',
      date: '2022-02-08',
      thumbUrl: '2022-02-08 Angular Custom Directives (by Steve Witman).jpg',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/283227383/',
    },
    {
      type: 'in-person',
      event: 'Angular Boulder Meetup',
      title: 'Angular Custom Pipes',
      date: '2022-03-08',
      thumbUrl: '2022-03-08 Angular Custom Pipes (by Steve Witman).jpg',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/283644758/',
    },
    {
      type: 'in-person',
      event: 'Angular Boulder Meetup',
      title: 'Angular Change Detection',
      date: '2022-04-12',
      thumbUrl: '2022-04-12 Angular Change Detection (by Steve Witman).jpg',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/284475988/',
    },
    {
      type: 'live-stream',
      event: 'Angular Boulder Meetup',
      title: 'Angular Dynamically Loading Components',
      date: '2022-06-14',
      thumbUrl:
        '2022-06-14 Angular Dynamically Loading Components (by Steve Witman).jpg',
      repoUrl: '',
      eventUrl: 'https://www.meetup.com/angularboulder/events/286167461/',
    },
  ];

  ngOnInit() {
    console.log('HomePageComponent');
  }
}
