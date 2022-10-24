import { Injectable } from '@angular/core';
import { Place } from '../places/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    new Place(
      'p1',
      'Mercedes',
      'Le luxe automobile au quotidien : la Nouvelle Classe A Compacte allie une sportivité souveraine au confort de la classe supérieure et apporte un nouveau dynamisme au segment des véhicules compacts.',
      'https://static1.caroom.fr/guide/wp-content/uploads/2020/03/Essai-Mercedes-Classe-A.jpg',
      160,
      new Date('2021-06-01'),
      new Date('2022-02-01')
    ),
    new Place(
      'p2',
      'Ford Gt',
      'Innovation. Cest la raison dêtre de la Ford GT. De sa forme optimisée sur le plan aérodynamique à ses contreforts multifonctionnels en passant par son moteur V6 EcoBoost® de 3,5 L extraordinairement puissan',
      'https://hips.hearstapps.com/hmg-prod/images/2022-ford-gt-heritage-edition-110-1628777666.jpg?crop=0.893xw:1.00xh;0.0545xw,0&resize=640:*',
      202,
      new Date('2021-01-01'),
      new Date('2021-12-31')
    ),
    new Place(
      'p3',
      'BMW serie 4',
      ' Depuis son introduction en 2013, la BMW Série 4 combine une esthétique incomparable à une dynamique sportive. Des moteurs essence et diesel modernes et léquipement M complètent le concept global réussi de la série.',
      
      'https://catalogue.automobile.tn/big/2020/03/46357.jpg?t=1',
      250,
      new Date('2021-06-01'),
      new Date('2022-12-01')
    )
  ];
  constructor() { }

  getPlaces(){
    return [...this.places];
  }

  getPlace(id: string){
    return {
      ...this.places.find(p => p.id === id)
    };
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      price,
      dateFrom,
      dateTo,
      //this.authService.userId
    );
  }
}
