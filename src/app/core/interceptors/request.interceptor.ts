import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { LoadingService } from '../services/loading.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(
    private loadingService: LoadingService,
    private toastr: ToastrService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.loadingService.setLoading(true);

    const authReq = req.clone({ setHeaders: this.defaultHeader() });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        this.toastr.error('Something went Wrong!', 'Error');
        return throwError(error);
      }),
      finalize(() => {
        this.totalRequests--;

        if (this.totalRequests === 0) {
          this.loadingService.setLoading(false);
        }
      })
    );
  }

  private defaultHeader() {
    return {
      'Content-Type': 'application/json'
    };
  }
}
