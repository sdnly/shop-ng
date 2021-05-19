import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'shopping-cart';


  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
   title = 'shop-ng'
}
