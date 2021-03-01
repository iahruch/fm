import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AlertComponent } from './components/alert.component'
import { MessageService } from '../../services/alert.service'

@NgModule({
  imports: [CommonModule],
  declarations: [AlertComponent],
  exports: [AlertComponent],
  providers: [MessageService],
})
export class AlertModule {}
