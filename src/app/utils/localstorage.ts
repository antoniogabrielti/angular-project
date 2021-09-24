export class LocalStorageUtils {
    
    
    public obterUsuario() {
        return JSON.parse(localStorage.getItem('teste.user'));

    }

    public salvarDadosLocaisUsuario(response: any) {
        this.salvarTokenUsuario(response.accessToken);
        this.salvarUsuario(response.user.userName);
    }

    public limparDadosLocaisUsuario() {
        localStorage.removeItem('teste.accessToken');
        localStorage.removeItem('teste.user.userName');
    }

    public obterTokenUsuario(): string {
        return localStorage.getItem('teste.accessToken');
    }

    public salvarTokenUsuario(token: string) {
        localStorage.setItem('teste.accessToken', token);
    }

    public salvarUsuario(user: string) {
        localStorage.setItem('teste.user.userName',(user));
    }

}