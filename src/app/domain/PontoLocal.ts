import Unidade from './Unidade';

export default class PontoLocal {
    public id:number;
    public nome:string;
    public ip:string;
    public versaoSoftware:string;
    public status:any;
    public unidade:Unidade;

    public PontoLocal( params:any) {
        this.id = params.id;
        this.nome = params.nome;
        this.ip = params.ip;
        this.versaoSoftware = params.versaoSoftware;
        this.status = params.status;
        this.unidade = new Unidade(params.unidade);
    }

}