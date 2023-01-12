export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
    marker.addListener("click", function() {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infowindow.open(this.googleMap, marker);
    });
  }

  //Bu ikisi yerine yukaridaki tek metodu kullanacagiz.
  //Ve bu sayede her class i ayri ayrida import etmek zorunda kalmayacagiz.
  // //Eger user icin | isareti ile Company ekleyip ya User ya Company deseydik iki class in ortak degerlerini sadece alacakti. Ikisinde ortak olan sadece location. eger user.name e ulasmak isteseydik ulasamazdik.
  // addUserMarker(user: Users): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng
  //     }
  //   });
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   });
  // }
}
