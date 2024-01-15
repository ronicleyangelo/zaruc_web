import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BackendCommunicationService {
    private baseUrl = 'http://localhost:8080'; // Atualize com a URL do seu backend

    constructor(private http: HttpClient) { }

    public login(credentials: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/auth/login`, credentials);
    }

    public registrarUsuario(usuario: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/auth/registrar-usuario`, usuario);
    }
}
