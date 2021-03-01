import { Component, OnInit } from '@angular/core'
import { MessageService } from '../../../services/alert.service'
import { AlertInterface } from '../../../types/alert.interface'

@Component({
  selector: 'fm-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  message: string
  typeMsg: string
  isShow: boolean = false
  constructor(private msgService: MessageService) {}

  ngOnInit(): void {
    this.msgService.getMessage().subscribe((data: AlertInterface) => {
      this.message = data.text
      this.typeMsg = data.typeMsg
      this.isShow = true

      setTimeout(() => {
        this.isShow = false
      }, 2000)
    })
  }
}
