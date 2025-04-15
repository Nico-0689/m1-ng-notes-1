import {Injectable} from '@angular/core';
import {Tag} from './Tag';
import {Note} from './Note';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private notes: Note[]
    = [
    {
      id: 1, title: "Note test", color: '#2196f3', content: 'note 1',
      tags: []
    },
    {
      id: 2, title: "Ma seconde note", color: '#211603', content: 'content bis',
      tags: []
    },
  ]

  private tags: Tag[] = [
    {id: 1, name: 'Travail', color: 'red'},
    {id: 2, name: 'Perso', color: 'blue'},
    {id: 3, name: 'Urgent', color: 'orange'}
  ];

  getAllTag(): Tag[] {
    return this.tags;
  }


  saveTag(tag: Tag): void {
    this.tags.push(tag);
  }

//   remove tag

  deleteTag(tag: Tag): void {
    //copie + remove si same

    this.tags = this.tags.filter(t => t.id !== tag.id);
  }


  updateTag(updatedTag: Tag): void {
    const index = this.tags.findIndex(t => t.id === updatedTag.id);
    if (index !== -1) {
      this.tags[index] = updatedTag;
    }
  }

  // ---------------------------GESTION Note-----------------------------------


  getAllNotes(): Note[] {

    return this.notes;
  }

  getNote(id: number): Note | undefined {
    return this.notes.find(note => note.id === id);
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
  }

  updateNote(updatedNote: Note): void {
    const index = this.notes.findIndex(note => note.id === updatedNote.id);
    if (index !== -1) {
      this.notes[index] = updatedNote;
    }
  }
}
