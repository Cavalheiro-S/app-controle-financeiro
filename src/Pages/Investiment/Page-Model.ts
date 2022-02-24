import moment from 'moment';

class PageModel {

    private name : String;
    private type : String | null;
    private date : String;
    private value : Number;

    constructor(idName: string, idType: string, idValue: string, idDate: string){
        this.name = document.querySelector<HTMLInputElement>(`#${idName}`)!.value
        this.type = document.querySelector<HTMLInputElement>(`#${idType}`)!.value
        this.value = document.querySelector<HTMLInputElement>(`#${idValue}`)!.valueAsNumber
        this.date = moment(document.querySelector<HTMLInputElement>(`#${idDate}`)!.valueAsDate).add(1,"d").format("YYYY-MM-DD");
    }

    makeObjectWithValues() : Object{
        console.log(this.name, this.type, this.date, this.value);
        
        return{
            name: this.name,
            type: this.type,
            value: this.value,
            date: this.date
        }
    }
    
}

export default PageModel