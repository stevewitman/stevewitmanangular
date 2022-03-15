import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { from, map, Observable, startWith, switchMap, tap } from 'rxjs';
import { ref, Storage } from '@angular/fire//storage';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { getDownloadURL, uploadBytes } from 'firebase/storage';

import tags from './tags.json';
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
  postForm!: FormGroup;
  filePath!: string;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagsCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  allTags: string[] = [];

  slug = '2022-01-28-B';

  @ViewChild('tagsInput') tagsInput?: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder, private storage: Storage) {
    this.allTags = this.getTags();
    this.filteredTags = this.tagsCtrl.valueChanges.pipe(
      startWith(''),
      map((tags) => (tags ? this._filterTags(tags) : this.tags.slice()))
    );
  }

  ngOnInit() {
    this.initializeForm();
    
  }

  getTags() {
    const newArray = tags.map(el => {
      return el.tag;
    });
    newArray.sort()
    return newArray
  }

  initializeForm(): void {
    this.postForm = this.fb.group({
      tagsCtrl: [''],
    });
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
      this.tags.push(value);
    }
    event.chipInput?.clear();
    this.tagsCtrl.setValue(null);
  }

  tagRemove(tag: string): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  tagSelected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    if (this.tagsInput) {
      this.tagsInput.nativeElement.value = '';
    }
    this.tagsCtrl.setValue(null);
  }

  private _filterTags(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter((tag) =>
      tag.toLowerCase().includes(filterValue)
    );
  }
}
