import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StorageService} from '../storage.service';
import {Note} from '../Note';
import {NoteComponent} from '../note/note.component';


@Component({
  selector: 'app-notes',
  imports: [CommonModule, NoteComponent],
  templateUrl: './notes.component.html',
  standalone: true,
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.notes = this.storageService.getAllNotes();
  }
}
