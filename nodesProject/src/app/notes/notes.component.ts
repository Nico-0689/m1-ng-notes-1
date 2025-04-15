import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageService} from '../storage.service';
import {Note} from '../Note';
import {NoteComponent} from '../note/note.component';
import {Tag} from '../Tag';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-notes',
  imports: [CommonModule, NoteComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './notes.component.html',
  standalone: true,
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  editing: Note | null = null;

  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.notes = this.storageService.getAllNotes();
  }

  //editNotes form comme tag
  // avec le double clique

  submitForm() {
    // Save dans service
    if (this.editing?.id === 0) {
      console.log("AddNote")
      //random id (idees donner par mon camarade)
      this.editing.id=Date.now();

      this.storageService.addNote(this.editing)
    } else {
      this.storageService.updateNote(this.editing)
    }
    this.cancelEdit()

  }

  cancelEdit() {
    this.editing = null;
  }

  editNote(note: Note) {
    this.editing = note;
  }

  startEditing() {
    this.editing = {id: 0, content: '', color: '', title: '', tags: []};
  }

}
