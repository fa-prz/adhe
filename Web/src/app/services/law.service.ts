import { Injectable } from '@angular/core';

@Injectable({
 	providedIn: 'root'
})
export class LawService {

 	constructor() { }

 	generateCode(token, last){

		return 0;
	}

	applyLaw(token, law){
		let result = {};

		// 0 asociación
		// 1 asociación Inv
		// 2 conmutación
		// 3 distribución
		// 4 distribución Inv
		switch (law) {
			case 0:
				result = this.setRule(
							token.operator, 
							token.atom1.atom1, 
							token.atom1.sign1,
							this.setRule( token.atom1.operator,
								          token.atom1.atom2, 
								          token.atom2, 
								          token.atom1.sign2, 
								          token.sign2
								          ),
							1
						);
				break;
			case 1:
				result = this.setRule(
							token.operator, 
							this.setRule( token.atom2.operator,
								          token.atom1, 
								          token.sign1, 
								          token.atom2.atomo1, 
								          token.atom2.sign1, 
								          ),
							1,
							token.atom2.atom2, 
							token.atom2.sign2
						);
				break;
			case 2:
				result = this.setRule(
							token.operator,
							token.atom2,
							token.sign2,
							token.atom1,
							token.sign1,
						);
				break;
			case 3:
				result = this.setRule(
							token.atom2.operator,
							this.setRule( token.operator,
								          token.atom1, 
								          token.sign1, 
								          token.atom2.atom1, 
								          token.atom2.sign1, 
								          ),
							1,
							this.setRule( token.operator,
								          token.atom1, 
								          token.sign1, 
								          token.atom2.atom2, 
								          token.atom2.sign2, 
								          ),
							1
						);
				break;
			case 4:
				result = this.setRule(
							token.atom1.operator,
							token.atom1.atom1,
							token.atom1.sign1,
							this.setRule( token.operator,
								          token.atom1.atom2, 
								          token.atom1.sign2, 
								          token.atom2.atom2, 
								          token.atom2.sign2, 
								          ),
							1
						);
				break;			
			default:
				// code...
				break;
		}

		return result;
	}

	setRule(operator, a1, s1, a2, s2){

		return {
			operator : operator,
			atom1 : a1,
			sign1 : s1,
			atom2 : a2,
			sign2 : s2,
		};

	}
}
