import moment from "moment";
import { ObjectTable } from "../common/interfaces/TableProps";
export class Investiment {
    
    private _name:string ;
    private _type:string;
    private _value:number;
    private _date:string;
    

    constructor(nameID: string, typeID: string, valueID: string, dateID: string ){
        const inputName = document.querySelector(`#${nameID}`) as HTMLInputElement
        const inputType = document.querySelector(`#${typeID}`) as HTMLInputElement
        const inputValue = document.querySelector(`#${valueID}`) as HTMLInputElement
        const inputDate = document.querySelector(`#${dateID}`) as HTMLInputElement

        this._name = inputName.value
        this._type = inputType.value
        this._value = inputValue.valueAsNumber
        this._date = inputDate.value 
        ? moment().add(1,"d").format("YYYY-MM-DD") 
        : moment(inputDate.valueAsDate).add(1,"d").format("YYYY-MM-DD");
    }

    public get name(){
        return this._name
    }

    public get type(){
        return this._type
    }

    public get value(){
        return this._value
    }

    public get date(){
        return this._date
    }


    public makeObject() : ObjectTable{

        return{
            id: Math.floor(Math.random() * 100),
            name:this._name,
            type:this._type,
            value:this._value,
            date:this._date
        }
    }
}