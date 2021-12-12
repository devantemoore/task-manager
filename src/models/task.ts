import Base from './common/base'
export default class Task extends Base {
    id: number;
    description: string;
    completed: boolean;

    constructor(data:any){
        super();
        this.id = data.id;
        this.description = data.id;
        this.completed = data.id;
    }
}