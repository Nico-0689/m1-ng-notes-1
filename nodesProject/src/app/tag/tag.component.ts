import { Component , input} from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.component.html',
  standalone: true,
  styleUrl: './tag.component.css'
})

export class TagComponent {
  id = input<number>(0);
  name = input<string>('Tag');
  color = input<string>('grey');
}

