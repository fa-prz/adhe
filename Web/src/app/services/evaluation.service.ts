import { Injectable } from '@angular/core';
import { ApiService } from "../services/api.service";
import { LawService } from "../services/law.service";

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
	atoms: any[] = []

	pLeft : number = -2;
	pRight : number = -3;
	not : number = -1;
	or : number = -5;
	and : number = -6;
	implies : number = -7;
	onlyIf : number = -8;

	constructor(
		private api: ApiService,
		private lawServ: LawService,
		) {
		this.reload();
	 }

	getToken(stringValue){
		let values  = [];
		let characters = stringValue.split(" ");	

		for (let i = 0; i < characters.length; i++) {
			let value = this.setTokenValue(characters[i])
			
			if(value >= 0 && characters[i - 1] != this.not)
				values.push(this.pLeft)	

			values.push(value)	

			if(value >= 0)
				values.push(this.pRight)
		}

		return values;
	}

	reload() {
	  	this.api.get("/Atoms/" , false).subscribe(
	    	(atoms: any) => {
	    	this.atoms = atoms
	    	console.log(atoms)
	    },
	    error => {
	      	console.error(error)
	    })
	}

	setTokenValue(character){
		let value = null;
		switch (character) {
			case '¬':
				value = this.not;
				break;
			case '||':
				value = this.or;
				break;
			case '&&':
				value = this.and;
				break;
			case '->':
				value = this.implies;
				break;
			case '<->':
				value = this.onlyIf;
				break;
			case '(':
				value = this.pLeft;
				break;
			case ')':
				value = this.pRight;
				break;
			default:
				value = this.getAtomId(character);
				if(value == -1 ) console.log("error átomo  no encontrado")
				break;
		}

		return value;
	}

	getAtomId(character){
		return this.atoms.findIndex(x => x.name == character);
	}

	tokenToString(token){
		let stringToken = ""

		for (let value of token) {
			switch (value) {
				case this.not:
					stringToken += '¬';
					continue;
				case this.or:
					stringToken += '||';
					continue;
				case this.and:
					stringToken += '&&';
					continue;
				case  this.implies:
					stringToken += '->';
					continue;
				case this.onlyIf:
					stringToken += '<->';
					continue;
				case this.pLeft:
					stringToken += '(';
					continue;
				case this.pRight:
					stringToken += ')';
					continue;
				default:

					if(!this.atoms[value]) {
						console.log("error value  = " + value)
						continue;
					}
					stringToken += this.atoms[value].name;
					continue;
			}
		}
		return stringToken;
	}

	removeNots(token){
		for (let i = 0; i < token.length; i++) {
			if(token[i] == this.not){
				let j = 1;
				let k = i + 1;
				
				while(token[k] == this.not){
					j++;
					k++;
				}

				if(j % 2 == 0){
					token.splice(i , j);
				}
				else{
					token.splice(i , j - 1);
				}
			}
		}
		return token;
	}

	setSubTokens(token, i, subTokens){

		if(token[i] == this.not){
			if(subTokens.operator)
				subTokens.sign2 = false;
			else
				subTokens.sign1 = false;

			i++;
			return this.setSubTokens(token, i, subTokens);
		}

		if(token[i] == this.pLeft ){
			let values = []
			let j = 1;
			let k = i ;

			while(j > 0){
				k++
				if(token[k] == this.pLeft)
					j++
				if(token[k] == this.pRight)
					j--
			}
			for(let n = i + 1; n < k ; n++ ){
				values.push(token[n])
			}

			i = k + 1;

			let rule = {
				atom1 : null,
				sign1 : true,
				atom2 : null,
				sign2 : true,
				operator : null
			}

			if(subTokens.operator){
				if(values.length > 1 ){
					subTokens.atom2 = this.setSubTokens(values, 0, rule);
				} else {
					subTokens.atom2 = values [0]
				}
			}
			else{
				if(values.length > 1 ){
					subTokens.atom1 = this.setSubTokens(values, 0, rule);
				} else {
					subTokens.atom1 = values [0]
				}
			}

			return this.setSubTokens(token, i, subTokens);
		}

		if(token[i] < 0 ){
			subTokens.operator = token[i]
			i++;
			return this.setSubTokens(token, i, subTokens);
		}

		if(i >= token.length)
			return subTokens;
	}

	evaluateToken(token, last){
		// let code  =  this.lawServ.generateCode(token, last);
		// let result = {};
		// let newToken = this.lawServ.applyLaw(token, 5);
		// return newToken;

		// switch (last) {
		// 	case 0:
		// 		// code...
		// 		break;
			
		// 	default:
		// 		// code...
		// 		break;
		// }

		// return result;
	}

}
