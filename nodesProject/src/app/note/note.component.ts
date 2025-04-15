import { Component, Input } from '@angular/core';
import { Tag } from '../Tag';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  standalone: true,
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() content!: string;
  @Input() color!: string;
  @Input() tags: Tag[] = [];
}
