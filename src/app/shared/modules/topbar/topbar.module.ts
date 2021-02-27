import {NgModule} from "@angular/core";
import {TopbarComponent} from "./components/topbar.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [TopbarComponent],
  exports: [TopbarComponent],
  imports: [CommonModule]
})
export class TopbarModule {

}
