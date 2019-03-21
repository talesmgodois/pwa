export default class Unidade {
    public cd:number;
    public sigla:string;
    public email:string;
    public descricao:string;
    public numZE:number;

    constructor(params: any) {
        this.cd = params.cd;
        this.sigla = params.sigla;
        this.email = params.email;
        this.descricao = params.descricao;
        this.numZE = params.numZe;
    }
}