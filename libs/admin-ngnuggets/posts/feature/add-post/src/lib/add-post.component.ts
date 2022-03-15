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
  tagsAll: string[] = [];
  tagsFiltered: Observable<string[]> = of([]);
  tagsSelected: string[] = [];

  postTypes = [
    { value: 'blog' },
    { value: 'video' },
    { value: 'podcast' },
    { value: 'community' },
    { value: 'release' },
  ];
  // postTypeSelectedValue = '';

  slug = '2022-01-28-B';

  @ViewChild('tagsInput') tagsInput?: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder, private storage: Storage) {}

  ngOnInit() {
    this.initializeForm();
    this.tagsAll = this.getTags();
    this.tagsFiltered = this.tagsCtrl.valueChanges.pipe(
      startWith(null),
      map((tags) => (tags ? this._filterTags(tags) : this.tagsSelected.slice()))
    );
    // this.postForm.controls['postUrlCtrl'].valueChanges.subscribe((change) => {
    //   console.log('postUrlCtrl sub', change); // Value inside the input field as soon as it changes
    // });
  }

  initializeForm(): void {
    this.postForm = this.formBuilder.group({
      typeCtrl: [''],
      postUrlCtrl: [''],
      tagsCtrl: [''],
    });
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
    // [video] YouTube (at current time)
    } if (currUrl.indexOf('https://youtu.be') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('video');
    // [blog] Dev.to
    } else if (currUrl.indexOf('https://dev.to/') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('blog');
    // [blog] Medium
    } else if (currUrl.indexOf('https://medium.com/') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('blog');
    // [blog] Hashnode
    } else if (currUrl.indexOf('hashnode.dev/') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('blog');
    // [blog] Telerik
    } else if (currUrl.indexOf('https://www.telerik.com/blogs') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('blog');
    // [podcast] Adventures In Angular
    } else if (currUrl.indexOf('https://adventuresinangular.com/') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('podcast');
    // [podcast] Angular Experience
    } else if (currUrl.indexOf('https://www.spreaker.com/user/14532324/') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('podcast');
    // [podcast] WebRush
    } else if (currUrl.indexOf('https://webrush.io/episodes/') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('podcast');
    // [release] Angular GitHub
    } else if (currUrl.indexOf('https://github.com/angular/angular/releases') !== -1) {
      this.postForm.controls['typeCtrl'].setValue('release');
    }
  }

  private _filterTags(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.tagsAll.filter((tag) =>
      tag.toLowerCase().includes(filterValue)
    );
  }
}
