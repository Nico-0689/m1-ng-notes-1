import {Component} from '@angular/core';
import {StorageService} from '../storage.service';
import {Tag} from '../Tag';
import {TagComponent} from '../tag/tag.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-tags',
  imports: [
    TagComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './tags.component.html',
  standalone: true,
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  loaded: boolean = false;
  tags: Tag[] = [];
  nextId: number = 4; //car certaines donner par default
  editing: Tag | null = null;


  constructor(private serviceStorage: StorageService) {
    this.loadTags();
  }

  loadTags(): void {
    if (!this.loaded) {
      this.ngOnInit();
      this.loaded = true;
    }
  }

  ngOnInit(): void {
    this.tags = this.serviceStorage.getAllTag();
  }

  dialogAddTag() {
    const tagName = window.prompt('Entrez le nom du nouveau tag :');

    if (tagName && tagName.trim() !== '') {
      const newTag: Tag = {
        name: tagName.trim(),
        color: 'blue',
        id: this.nextId++
      };

      //this.tags.push(newTag);
      this.serviceStorage.saveTag(newTag);
    }
    return false;
  }

  deleteTag(tag: Tag) {
    this.serviceStorage.deleteTag(tag);
    //nouveau affichage
    this.tags = this.tags.filter(t => t.id !== tag.id);


  }

  startEditing() {
    this.editing = { id: 0, name: '', color: '' };

  }
  submitForm() {
    if (!this.editing) return;

    if (this.editing.id === 0) {
      const newId = this.tags.length > 0 ? Math.max(...this.tags.map(t => t.id)) + 1 : 1;
      const newTag: Tag = { ...this.editing, id: newId };
      this.serviceStorage.saveTag(newTag);
      this.tags = this.serviceStorage.getAllTag();
    } else {
      const index = this.tags.findIndex(t => t.id === this.editing!.id);
      if (index !== -1) {
        this.tags[index] = { ...this.editing };
        this.serviceStorage.updateTag(this.tags[index]);
      }
    }

    this.editing = null;
  }
  cancelEdit() {
    this.editing = null;
  }

  editTag(tag: Tag) {
    console.log("edition du tag :"+ tag.name)
    this.editing = { ...tag };
  }
}
