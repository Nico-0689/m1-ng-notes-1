import { Component, Input } from '@angular/core';
import { Tag } from '../Tag';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  standalone: true,
  styleUrls: ['./note.component.css'],
  imports: [CommonModule]
})
export class NoteComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() content!: string;
  @Input() color!: string;
  @Input() tags: Tag[] = [];
}
