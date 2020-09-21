const createfeatures = ()=>{
  let featurenumbers =  document.getElementsByClassName('features').length;
  for(i=0; i<featurenumbers; i++){
    features[i] = document.getElementsByClassName('features')[i].value;
    console.log(features);}
  console.log(featurenumbers);
document.getElementById("featureblock").innerHTML =``;
  for(i=0; i<featurenumbers; i++){
  //document.getElementsByClassName('features')[i].value =   features[i]
    console.log(features);
    if(i ==0 && featurenumbers == 1){

}

  document.getElementById("featureblock").innerHTML +=`

  <label for="features">Features and Tags</label>
  <input id="features" name="features" class="features" onkeyup="createarray();" value=${features[i]}>


  <span class="errormessage" id="featureserrormessage"></span>
  `;
}
document.getElementById("featureblock").innerHTML +=`
  <label for="features">Features and Tags</label>
  <input id="features" name="features" class="features" onkeyup="createarray();" >


  <span class="errormessage" id="featureserrormessage"></span>
  `;
}
let features= [];
const createarray = ()=>{
let featurenumbers =  document.getElementsByClassName('features').length;
console.log(featurenumbers);
for(i=0; i<featurenumbers; i++){
  features[i] = document.getElementsByClassName('features')[i].value;
  console.log(features);
   document.getElementById('featuresarray').value = features;

}


}
