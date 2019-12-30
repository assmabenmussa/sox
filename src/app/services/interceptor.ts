import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { RestService } from './rest.service';

@Injectable() 
export class HttpErrorInterceptor implements HttpInterceptor {
            constructor(public restService: RestService){}

    errorMessage: string;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{    

        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    switch(error.status){
                        case 0:
                            this.errorMessage = "Connection Issues";
                            break;
                        case 301:
                            this.errorMessage = "The page you requested is moved permenantly";
                            break;
                        case 400: 
                            this.errorMessage = "Bad Request";
                            break;
                        case 401:
                            this.errorMessage = "Email or password incorrect";
                            break;
                        case 403: 
                            this.errorMessage = "This page is forbidden";
                            break;
                        case 404:
                            this.errorMessage = "Resource not found";
                            break;
                        case 500:
                            this.errorMessage = "Internal Server Error";
                            break;
                        default:
                            if (error.status >= 300 && error.status <= 399 ) {
                                this.errorMessage = "Redirection error";
                            } else if (error.status >= 400 && error.status <= 499 ) {
                                this.errorMessage = "Client-side error";
                            } else if (error.status >= 500 && error.status <= 599 ) {
                                this.errorMessage = "Server-side error";
                            } else {
                                this.errorMessage = "Undefined Error";
                            }
                            break;
                        }
                        return throwError({errorStatus: error.status, errorMessage: this.errorMessage});
                    })
                )
            }

}