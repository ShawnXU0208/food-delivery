import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {

  restaurantInfoForm: FormGroup;

  imageData: file = null;
  previewURL: any = null;
  submitted = false;


  selectedTypes: string[] = [];

  openTime = null;
  closeTime = null;

  constructor(
    private http: HttpClient,
    private renderer: Renderer2,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.restaurantInfoForm = this.formBuilder.group({
      restaurantImage: ['', Validators.required],
      restaurantName: ['', Validators.required],
      restaurantAddress: ['', Validators.required],
      restaurantOpen: [''],
      restaurantClose: [''],
      restaurantTypes: [''],
      restaurantIntro: ['', Validators.required]
    })
  }



  fileProgress(fileInput: any) {
      this.imageData = <File>fileInput.target.files[0];
      //console.log(this.imageData);
      this.preview();
  }

  preview(){
    //show preivew
    if(this.imageData.type.match(/image\/*/) == null){
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(this.imageData);
    reader.onload = (_event) => { 
      this.previewURL = reader.result; 
      console.log(this.previewURL);
    }
  }

  onSubmit(data){
    this.submitted = true; 
    console.log(this.submitted);
    const formData = new FormData();
    formData.append('file', this.fileData);
    /*
    this.http.post('url/to/your/api', formData)
      .subscribe(res => {
        console.log(res);
        this.uploadedFilePath = res.data.filePath;
        alert('SUCCESS !!');
      });
     */
  }

  typeItemToggle(event){
    const hasSelected = event.target.classList.contains('selected');
    const type = event.target.textContent;

    if(hasSelected){

      const index: number = this.selectedTypes.indexOf(type);
      if(index !== -1){
        this.selectedTypes.splice(index, 1);
      }

      this.renderer.removeClass(event.target, 'selected');
    }else{
      this.selectedTypes.push(type);
      this.renderer.addClass(event.target, 'selected');
    }

    this.restaurantInfoForm.controls.restaurantTypes.setValue(this.selectedTypes);

  }


}
