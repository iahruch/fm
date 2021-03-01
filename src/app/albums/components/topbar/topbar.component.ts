import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { backToGenre, getSearch } from '../../store/actions'
import { getFavoritesSelector } from '../../../shared/modules/addToFavorites/store/selectors'

@Component({
  selector: 'fm-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  countFavorites: number | string
  form: FormGroup
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.pipe(select(getFavoritesSelector)).subscribe((favorites) => {
      this.countFavorites = favorites.length
    })
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
    this.store.dispatch(backToGenre())
  }
}
