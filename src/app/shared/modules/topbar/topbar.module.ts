import { NgModule } from '@angular/core'
import { TopbarComponent } from './components/topbar.component'
import { CommonModule } from '@angular/common'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [TopbarComponent],
  exports: [TopbarComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class TopbarModule {}
