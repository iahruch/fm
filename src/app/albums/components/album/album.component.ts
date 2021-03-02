import { Component, Input, OnInit } from '@angular/core'
import { AlbumInterface } from '../../types/album.interface'

@Component({
  selector: 'fm-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent {
  @Input() album: AlbumInterface
}
