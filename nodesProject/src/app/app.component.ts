import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NotesComponent} from './notes/notes.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NotesComponent],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NGOURMAND';
}
