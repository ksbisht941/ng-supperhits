import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError } from 'rxjs/operators'

import { ContentService } from 'src/app/services/content.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<any> {

  constructor(private contentService: ContentService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.contentService.getAllMovies().pipe(
      catchError((error) => {
        console.log(error);
        return error;
      })
    )
  }
}
