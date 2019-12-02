import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { RestuarantDetailService } from '../services/restuarant-detail.service';
import {TimePipe} from '../time.pipe';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {

  restaurantInfoForm: FormGroup;
  id: number;
  restaurantInfo: any = "";

  imageData: File = null;
  previewURL: any = null;
  submitted = false;


  selectedTypes: string[] = [];
  types = ['Chinese', 'Indian', 'American', 'Europe', 'Kiwi', 'Turkey', 'Japanese', 'Korean', 'Asian'];

  openTime = null;
  closeTime = null;

  constructor(
    private http: HttpClient,
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private restaurantDetailService: RestuarantDetailService,
    private timePipe: TimePipe
  ) {

  }

  ngOnInit() {
    this.restaurantInfoForm = this.formBuilder.group({
      restaurantImage: ['', Validators.required],
      restaurantName: ['', Validators.required],
      restaurantAddress: ['', Validators.required],
      restaurantOpen: [''],
      restaurantClose: [''],
      restaurantTypes: [''],
      restaurantIntro: ['', Validators.required],
      restaurantOpenSlider: [''],
      restaurantCloseSlider: ['']
    });


    this.route.params.subscribe(params => {
      this.selectedTypes = [];
      this.id = params.id;
      if(this.id > 0){
        this.restaurantDetailService.getRestuarantInfo(this.id)
          .subscribe((data: any[]) => {
            this.restaurantInfo = data;
            this.previewURL = "../../assets/images/" + this.restaurantInfo.image;

            this.restaurantInfoForm.controls['restaurantName'].setValue(this.restaurantInfo.name);
            this.restaurantInfoForm.controls['restaurantAddress'].setValue(this.restaurantInfo.address);

            let openTime = this.timePipe.transform(this.restaurantInfo.open);
            this.restaurantInfoForm.controls['restaurantOpen'].setValue(openTime);
            this.restaurantInfoForm.controls['restaurantOpenSlider'].setValue(this.restaurantInfo.open);
            let closeTime = this.timePipe.transform(this.restaurantInfo.close);
            this.restaurantInfoForm.controls['restaurantClose'].setValue(closeTime);
            this.restaurantInfoForm.controls['restaurantCloseSlider'].setValue(this.restaurantInfo.close);

            
            for(let i = 0; i < this.restaurantInfo.tags.length; i++){
              let typeToCheck = this.restaurantInfo.tags[i];
              if(this.types.includes(typeToCheck)){
                this.selectedTypes.push(typeToCheck);
              }
              
            }
            this.restaurantInfoForm.controls['restaurantTypes'].setValue(this.selectedTypes);

            this.restaurantInfoForm.controls['restaurantIntro'].setValue(this.restaurantInfo.description);
        });
      }else{
        this.restaurantInfo = "";
        this.previewURL = null;

        this.restaurantInfoForm.controls['restaurantName'].setValue("");
        this.restaurantInfoForm.controls['restaurantAddress'].setValue("");
        this.restaurantInfoForm.controls['restaurantOpen'].setValue("00:00am");
        this.restaurantInfoForm.controls['restaurantClose'].setValue("00:00am");
        this.restaurantInfoForm.controls['restaurantTypes'].setValue("");
        this.restaurantInfoForm.controls['restaurantIntro'].setValue("");
      }
    });
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
    //formData.append('file', this.fileData);
    /*
    this.http.post('url/to/your/api', formData)
      .subscribe(res => {
        console.log(res);
        this.uploadedFilePath = res.data.filePath;
        alert('SUCCESS !!');
      });
     */
  }

  ifSelected(type){
    if(this.selectedTypes.includes(type)){
      return "selected";
    }else{
      return "";
    }
  }

  typeItemToggle(event){
    const hasSelected = event.target.classList.contains('selected');
    const type = event.target.textContent;

    if(hasSelected){

      const index: number = this.selectedTypes.indexOf(type);
      if(index !== -1){
        this.selectedTypes.splice(index, 1);
      }

      //this.renderer.removeClass(event.target, 'selected');
    }else{
      this.selectedTypes.push(type);
      //this.renderer.addClass(event.target, 'selected');
    }

    this.restaurantInfoForm.controls.restaurantTypes.setValue(this.selectedTypes);


  
  }


}
