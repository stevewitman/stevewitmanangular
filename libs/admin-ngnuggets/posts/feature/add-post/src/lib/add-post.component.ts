import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { Observable, from, of } from 'rxjs';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

import { ref, Storage } from '@angular/fire//storage';
import { getDownloadURL, uploadBytes } from 'firebase/storage';

import tagsData from './tags.json';

export interface Tag {
  category: string;
  tag: string;  
  alt: string;  
}
@Component({
  selector: 'admin-ngnuggets-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  postForm: FormGroup = new FormGroup({});
  typeCtrl: FormControl = new FormControl();
  postUrlCtrl: FormControl = new FormControl();
  tagsCtrl: FormControl = new FormControl();
  sourceSiteCtrl: FormControl = new FormControl();
  sourceUrlCtrl: FormControl = new FormControl();
  todaysDate: Date = new Date();
  currSourceDate: Date = new Date();
  sourceDateOffset = 0;
  tagsAll: string[] = [];
  tagsFiltered: Observable<string[]> = of([]);
  tagsSelected: string[] = [];
  retrieved: any;

  postTypes = [
    { value: 'blog' },
    { value: 'video' },
    { value: 'podcast' },
    { value: 'community' },
    { value: 'release' },
  ];

  slug = '2022-01-28-B';

  @ViewChild('tagsInput') tagsInput?: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private storage: Storage,
  ) {}

  ngOnInit() {
    this.todaysDate = new Date();
    this.currSourceDate = this.todaysDate;
    this.initializeForm();
    this.tagsAll = this.getTags();
    this.tagsFiltered = this.tagsCtrl.valueChanges.pipe(
      startWith(null),
      map((tags) => (tags ? this._filterTags(tags) : this.tagsSelected.slice()))
    );
  }

  initializeForm(): void {
    this.postForm = this.formBuilder.group({
      typeCtrl: [''],
      postUrlCtrl: [''],
      tagsCtrl: [''],
      datePostedCtrl: [this.todaysDate.toISOString().split('T')[0]],
      dateSourceCtrl: [this.todaysDate.toISOString().split('T')[0]],
      sourceSiteCtrl: [''],
      sourceUrlCtrl: [''],
    });
  }

  changeSourceDate(value: number) {
    this.currSourceDate.setDate(this.currSourceDate.getDate() + value);
    this.postForm.controls['dateSourceCtrl'].setValue(
      this.currSourceDate.toISOString().split('T')[0]
    );
  }

  getTags() {
    const newArray = tagsData.map((el) => {
      return el.tag;
    });
    newArray.sort();
    return newArray;
  }

  uploadImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];
      console.log('FILE: ', file);
      this.uploadImageService(file, `thumbnails/${this.slug}`);
    } else {
      return;
    }
  }

  uploadImageService(image: File, path: string): Observable<string> {
    const storageRef = ref(this.storage, path);
    const uploadTask = from(uploadBytes(storageRef, image));
    return uploadTask.pipe(
      switchMap((result) => getDownloadURL(result.ref)),
      tap((res) => console.log('DownloadURL: ', res))
    );
  }

  tagAdd(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tagsSelected.push(value);
    }
    event.chipInput?.clear();
    this.postForm.controls['tagsCtrl'].setValue(null);
  }

  tagRemove(tag: string): void {
    const index = this.tagsSelected.indexOf(tag);
    if (index >= 0) {
      this.tagsSelected.splice(index, 1);
    }
  }

  tagSelected(event: MatAutocompleteSelectedEvent): void {
    this.tagsSelected.push(event.option.viewValue);
    if (this.tagsInput) {
      this.tagsInput.nativeElement.value = '';
    }
    this.postForm.controls['tagsCtrl'].setValue(null);
  }

  onUrlChange() {
    const currUrl = this.postForm.value['postUrlCtrl'];
    // [video] YouTube
    if (currUrl.indexOf('https://www.youtube.com/watch?') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('video');
      this.postForm.controls['sourceSiteCtrl'].setValue('YouTube');
      this.postForm.controls['sourceUrlCtrl'].setValue('https://youtube.com');
      // [video] YouTube (at current time)
    } else if (currUrl.indexOf('https://youtu.be') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('video');
      this.postForm.controls['sourceSiteCtrl'].setValue('YouTube');
      this.postForm.controls['sourceUrlCtrl'].setValue('https://youtube.com');
      // [blog] Dev.to
    } else if (currUrl.indexOf('https://dev.to/') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('blog');
      this.postForm.controls['sourceSiteCtrl'].setValue('DEV Community');
      this.postForm.controls['sourceUrlCtrl'].setValue(
        'https://dev.to/search?q=angular&sort_by=published_at&sort_direction=desc'
      );
      // [blog] Medium
    } else if (currUrl.indexOf('medium.com/') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('blog');
      this.postForm.controls['sourceSiteCtrl'].setValue('Medium');
      this.postForm.controls['sourceUrlCtrl'].setValue(
        'https://medium.com/tag/angular/latest'
      );
      // [blog] Hashnode
    } else if (currUrl.indexOf('hashnode.dev/') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('blog');
      this.postForm.controls['sourceSiteCtrl'].setValue('Hashnode');
      this.postForm.controls['sourceUrlCtrl'].setValue(
        'https://hashnode.com/n/angular'
      );
      // [blog] Telerik
    } else if (currUrl.indexOf('https://www.telerik.com/blogs') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('blog');
      this.postForm.controls['sourceSiteCtrl'].setValue('Telerik Blogs');
      this.postForm.controls['sourceUrlCtrl'].setValue(
        'https://www.telerik.com/blogs'
      );
      // [podcast] Adventures In Angular
    } else if (currUrl.indexOf('https://adventuresinangular.com/') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('podcast');
      this.postForm.controls['sourceSiteCtrl'].setValue(
        'Adventures in Angular'
      );
      this.postForm.controls['sourceUrlCtrl'].setValue(
        'https://adventuresinangular.com'
      );
      // [podcast] Angular Experience
    } else if (
      currUrl.indexOf('https://www.spreaker.com/user/14532324/') !== -1
    ) {
      this.postForm.controls['typeCtrl'].setValue('podcast');
      this.postForm.controls['sourceSiteCtrl'].setValue('Angular Experience');
      this.postForm.controls['sourceUrlCtrl'].setValue(
        'https://angular-experience.web.app/episodes'
      );
      // [podcast] WebRush
    } else if (currUrl.indexOf('https://webrush.io/episodes/') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('podcast');
      this.postForm.controls['sourceSiteCtrl'].setValue('WsbRush');
      this.postForm.controls['sourceUrlCtrl'].setValue('https://webrush.io');
      // [release] Angular GitHub
    } else if (
      currUrl.indexOf('https://github.com/angular/angular/releases') !== -1
    ) {
      this.postForm.controls['typeCtrl'].setValue('release');
      this.postForm.controls['sourceSiteCtrl'].setValue(
        'GitHub Angular Releases'
      );
      this.postForm.controls['sourceUrlCtrl'].setValue(
        'https://github.com/angular/angular/releases'
      );
    }
  }


  private _filterTags(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.tagsAll.filter((tag) =>
      tag.toLowerCase().includes(filterValue)
    );
  }
}
