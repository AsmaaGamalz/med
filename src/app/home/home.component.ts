import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() { 


  }

  ngOnInit(): void {
  
    $("#options i").click(function(){
    
      $("#color-options").toggle()
  })
  
  
  var lis = $("#color-options ul li");
  lis.eq(0).css("backgroundColor","blue");
  lis.eq(1).css("backgroundColor","black");
  lis.eq(2).css("backgroundColor","white");
  lis.eq(3).css("backgroundColor","gray");
  lis.eq(4).css("backgroundColor","tomato");
  
  $("#color-options ul li").click(function(){
      var color = $(this).css("backgroundColor");
      $("h1,h2,p").css("color",color);
  })
  
  
  


    

 
 
 
var navheight = $("nav").outerHeight();
console.log(navheight);
$(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    console.log(scrolled);
    if(scrolled>navheight)
        {
            $("nav").css("backgroundColor","rgba(0,0,0,0.7)")
        }
    else{
        $("nav").css("backgroundColor","transparent")
    }
})

var mybutton = document.getElementById('group');
window.onscroll = function(){
  'use strict';
  if(window.pageYOffset >=400){
    mybutton.style.display='block';
  }
  else{
    mybutton.style.display='none';
  }
};
mybutton.onclick = function(){
  'use strict';
  window.scrollTo(0,0);
}



}


}