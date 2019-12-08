import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  constructor() { }
  selectedImage = ""
  images = [
    'assets/coryweaver.svg',
    'assets/rigolettostlouis1.svg',
    'assets/rigolettostlouis2.svg',
    'assets/tosca.jpg',
    'assets/fanciullamno.svg',
    'assets/fanciullaomaha2.svg',
    'assets/fancuillaomaha1.svg',
    'assets/magicflute1.svg',
    'assets/magicflute2.svg',
    'assets/rapeoflucretia.svg',
    'assets/rapeoflucretia2.svg',
    'assets/soundbites1.svg',
    'assets/soundbites2.svg',
    'assets/brandonpavan1.svg',
    'assets/brandonpavan2.svg',
    'assets/brandonpavan3.svg',
    'assets/brandonpavan4.svg',
    'assets/hoebermann1.svg',
    'assets/hoebermann2.svg',
    'assets/hoebermann3.svg',
  ]
  images1 = [
    'assets/coryweaver.svg',
    'assets/rigolettostlouis1.svg',
    'assets/rigolettostlouis2.svg']
  images2 = [
    'assets/tosca.jpg',
    'assets/fanciullamno.svg',
    'assets/fanciullaomaha2.svg']
  images3 = [
    'assets/fancuillaomaha1.svg',
    'assets/magicflute1.svg',
    'assets/magicflute2.svg']
  images4 = [
    'assets/rapeoflucretia.svg',
    'assets/rapeoflucretia2.svg',
    'assets/soundbites1.svg']
  images5 = [
    'assets/soundbites2.svg',
    'assets/brandonpavan1.svg',
    'assets/brandonpavan2.svg']
  images6 = [
    'assets/brandonpavan3.svg',
    'assets/brandonpavan4.svg',
    'assets/hoebermann1.svg']
  images7 = [
    'assets/hoebermann2.svg',
    'assets/hoebermann3.svg',
  ]
  ngOnInit() {
  }

  lightbox($event){
    if (window.location.href.includes("gallery")){
      const srcPath = $event.path[0].src
      const imageName = srcPath.split("assets")[1]
      this.selectedImage = "/assets" + imageName
    }
  }

  exitLightbox(){
    this.selectedImage=""
  }
}
