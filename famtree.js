var famarray = [];

class Family {
	     constructor(name, hair, eyes, vertical) {
		this.name = name;
		this.hair = hair;
        this.eyes = eyes;
        this.vertical = vertical;
		 }

	    push() {
            
         famarray.push (`
${this.name} has ${this.hair} hair, ${this.eyes} eyes, and can jump ${this.vertical} in the air`);
                }
}
	class Grandparents extends Family {
	    constructor(name, hair, eyes, vertical) {
	        super(name, hair, eyes, vertical);
	    }
	    push() {
	    
             `  ${super.push()}`;
	    }
	}

	class Parents extends Family {
         constructor(name, hair, eyes, vertical) {
	        super(name, hair, eyes, vertical);
	    }
   	  push() {
               `${super.push()}`;
	    }

    }
    
    class Children extends Family {
        constructor(name, hair, eyes, vertical) {
           super(name, hair, eyes, vertical);
       }
        push() {
              `${super.push()}`;
       }

   }
    // create a Grandparent
	let grandma = new Parents("Grandma", 'blonde', 'blue', "14 inches");
	   (grandma.push());
	let grandpa = new Parents("Grandpa", 'brown', 'brown', "15 inches");
       (grandpa.push());
    
    // create Parents
    let mom = new Parents("Mom", 'brown', 'brown', "22 inches");
       (mom.push());
    let dad = new Parents("Dad", 'dark brown', 'brown', "25 inches");
       (dad.push());
    
    // create hildren
    let child = new Parents("Child", 'blonde', 'blue', "14 inches");
       (child.push());
    


    console.log(famarray)