import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, finalize } from 'rxjs/operators';
import { ErrorService } from './error.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private errorService: ErrorService,
    private loadingService: LoadingService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let d = 0;
    if(req.reportProgress) {
      this.loadingService.show();
      d = 1000;
    }

    return next.handle(req).pipe(
      delay(d),
      finalize(() => this.loadingService.hide()),
      catchError((err: HttpErrorResponse) => {
        this.errorService.setErrorPage(err.error);
        return throwError(err);
      })
    );
  }
}
