import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, Observable, startWith } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

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

  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagsCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  allTags: string[] = [
    'AOT',
    'Accessibility',
    'Angular Elements',
    'Angular 13',
    'Angular Universal',
    'Angular Workspace',
    'Animations',
    'Architecture',
    'Attribute Binding',
    'Builders',
    'CLI',
    'Change Detection',
    'Components',
    'Component Factory',
  ];

  @ViewChild('tagsInput') tagsInput?: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder) {
    this.filteredTags = this.tagsCtrl.valueChanges.pipe(
      startWith(''),
      map((tags) => (tags ? this._filterTags(tags) : this.tags.slice()))
    );
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.postForm = this.fb.group({
      tagsCtrl: [''],
    });
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
