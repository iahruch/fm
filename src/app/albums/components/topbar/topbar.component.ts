import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { backToGenre, getSearch } from '../../store/actions'

@Component({
  selector: 'fm-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  form: FormGroup
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: [''],
    })
  }

  search() {
    let search = this.form.get('search').value.trim()
    const data = {
      searchStr: search,
    }
    this.store.dispatch(getSearch(data))
    this.form.reset()
  }

  backToGenre() {
    this.router.navigate(['/'])
    this.store.dispatch(backToGenre())
  }
}
