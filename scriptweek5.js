class Films {
constructor (name, genre){ 
this.name = name;  //name of film
this.genre = genre; // type of film
   }
 describe(){
        return '${this.name} is  ${this.genre}  type of film.';

  }

}

class Screenings{
  constructor(city){
     this.city = city;
     this.film = [];
   }
addMovie(movie){
    if(movie instanceof Films){
        this.film.push(movie);
    }else{
        throw new Error('You can only add an instance of Films');
    }
}
describe (){
    return `${this.city} is playing ${this.film.length}`;
}
}

    
class Menu{
    constructor(){
        this.city = [ ];
        this.selectedCity = null;
    }
    start() {
        let choice = this.showMainMenuOptions();
        while (choice != 0){
            switch (choice) {
                case '1':
                this.chooseCity();
                break;
                case '2':
                this.viewCity();
                break;
                case '3':
                this.deleteCity();
                break;
                case '4':
                this. displayCity();
                break;    
                default:
                choice =0;    
            }
            choice = this.showMainMenuOptions();

        }
        alert ('Goodbye!');
    }
       showMainMenuOptions(){
        return prompt(`
        0) exit
        1) choose city
        2) view city
        3) delete city
        4) display city
        
        
        `)
        
    }
    showCityMenuOptions(cityInfo){
        return prompt(`
        0) back
        1) select film
        2) delete film
        
        ${cityInfo}
        `);
    }

    displayCity(){
     let cityString = '';
      for (let i=0; i< this.city.length; i++){
          cityString += i + ')' + this.city[i].city + '\n';
      }
      alert(cityString);
    }

    chooseCity(){
        let city= prompt ('Enter city for film showing: ');
        this.city.push(new Screenings(city));

    }

    viewCity (){
        let index = prompt('Enter the index of the city you wish to view: ');
        if (index > -1 && index < this.city.length){
            this.selectedCity= this.city[index];
            let description = 'City:  ' + this.selectedCity.city + '\n';

            for(let i =0; i < this.selectedCity.film.length; i++){
                description += i + ')' + this.selectedCity.film[i].city + 
                ' - ' + this.selectedCity.film[i].genre + '\n';

            }
            let selection = this.showCityMenuOptions(description);
            switch (selection){
                case '1':
                    this.selectFilm();
                    break;
                case '2':
                    this.deleteFilm();
            }
        }

    }
     selectFilm(){
         let name = prompt ('Enter film name: ');
         let genre = prompt('Enter genre of film: ');
         this.selectedCity.film.push(new Screenings(name,));
         
         
         
     }
     deleteFilm(){
         let index = prompt('Enter the index of the film you want to delete:');
         if(index > -1 && index < this.selectedCity.film.length){
             this.selectedCity.film.splice(index, 1);
         }
     }

    deleteCity(){
        let index = prompt ('Enter the index of the city you wish to delete:');
        if(index > -1 && index < this.city.length){
            this.city.splice(index, 1);
        }                           

    }

}
    
 let menu =new Menu();
 menu.start();