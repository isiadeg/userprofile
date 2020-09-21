let packagess=[{
	  id : 1,
pictureUrl: ["./assets/picture1.png", "./assets/picture2.png"],
packageName: "Household Waste Disposal",
packagePrice: 20000,
packageDetails:`With 20000, You get a household waste disposal service three days a week for 3 months.
Your waste may include kitchen, paper, carton and fabric wastes `,
packageItems: ['Customer Care Support', '1 extra  free week disposal service', '3 days A week',
'Spill over unused subscription', 'Monthly Customer Rewards']
  },
  {
	  id : 2,
pictureUrl: ["./assets/picture1.png", "./assets/logo.jpg"],
packageName: "Blog or News Package",
packagePrice: 20000,
packageDetails:`By its own nature,
the abstracts implemented in this article are incomplete.
 At Etiya, where I work, we have much more robust classes with mappers,
 default value getters, secondary generic types, conditional value limiters,
 predefined lifecycle-hooks, and more. We owe that to OOP features available in
 Angular and an unrelenting search for better code.<p>I cannot think of any reason
 not to adopt such a productive practice immediately. In fact, we have not stumbled
 on any drawbacks so far and are enjoying it every day.Happy new year</p>`,

packageItems: ['6 month Support','2 revisions for free', 'One year Hosting',
'Guide clients on domain registration', 'Search Engine Optimization', 'Responsive Mobile Design',
'Social Media Integration(facebook, whatsapp, twitter)']
  },
  {
	  id : 3,
pictureUrl: ["./assets/picture1.png", "./assets/picture2.png"],
packageName: "Blog or News Package",
packagePrice: 20000,
packageDetails:`By its own nature,
the abstracts implemented in this article are incomplete.
 At Etiya, where I work, we have much more robust classes with mappers,
 default value getters, secondary generic types, conditional value limiters,
 predefined lifecycle-hooks, and more. We owe that to OOP features available in
 Angular and an unrelenting search for better code.<p>I cannot think of any reason
 not to adopt such a productive practice immediately. In fact, we have not stumbled
 on any drawbacks so far and are enjoying it every day.Happy new year</p>`,
packageItems: ['6 month Support','2 revisions for free', 'One year Hosting',
'Guide clients on domain registration', 'Search Engine Optimization', 'Responsive Mobile Design',
'Social Media Integration(facebook, whatsapp, twitter)']
  }
  ];
  let htmli;
  htmli = `<div id="choose_package"> CHOOSE PACKAGE`;
packagess.forEach((package)=>{
  htmli += `

  <div class="package_container">
  <div class="package_chooser_wrapper">
  <div class="package_picture">
  <div id="picturecarousel${package.id}" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators" >`;
  package.pictureUrl.forEach((picture_indicator)=>{
    let clas;
    if (package.pictureUrl.indexOf(picture_indicator) == 0){
      clas="active";
    }else{
      clas="";
    }
    console.log(clas);
    htmli += `
  <li data-target="" data-slide-to="0" class="${clas}"></li>`;
});
htmli += ` </ol>
  <div class="carousel-inner">`;
    package.pictureUrl.forEach((picture)=>{
      let cla;
      if (package.pictureUrl.indexOf(picture) == 0){
        cla="carousel-item active";
      }else{
        cla="carousel-item ";
      }
  htmli += `<div class="${cla}">
  <img src="${picture}" class="w-100 d-block packagepicture">
  </div>`;});
htmli += `  </div>

  <a class="carousel-control-prev" data-slide="previous" href="#picturecarousel${package.id}" role="button" data-slide="prev">
  <span class="inline" style="background-color: black"><span class="carousel-control-prev-icon"></span>
  </span><span class="sr-only">Previous</span>
  </a>

  <a class="carousel-control-next" href="#picturecarousel${package.id}" role="button" data-slide="next">
  <span class="inline"  style="background-color: black"><span class="carousel-control-next-icon"></span>
  </span><span class="sr-only">Next</span>
  </a>
  </div>
  </div>
  <div class="package_chooser_right" id="package_chooser_right${package.id}" onclick="chosenpackage(${package.id});">
  <span style="display: block; ">Click To Choose</span><br>
  <div class="package_chooser_right" class="box">
  <i class="fas fa-check no-display"></i>
  </div>
  </div>
  <div class="package_name_center">
${package.packageName}  N${package.packagePrice}
  </div>
  </div>
  <div class="package_details" id="package${package.id}">
  <div class="package_detail" id="details${package.id}">
  ${packagess[package.id - 1].packageDetails}  </div>`;
  package.packageItems.forEach((packageItem)=>{
  htmli += `<div class="package_details_item ${package.packageItems.indexOf(packageItem)>4?'no-display':'display'}"
   id="packageItem${package.id}${package.packageItems.indexOf(packageItem)}" style=''>
  <div class="icon_marker">
  <i class="fas fa-check"></i>

  </div>
  <div class="package_item_word">
  ${packageItem};
  </div>
  </div>` });
  htmli += `<div class="more" id="more${package.id}" onclick="more(${package.id});">
  <i class="fas fa-angle-right" id="fas${package.id}" ></i>
  </div>
  </div>

  </div>`;

});
  htmli += `<div id="previous" onclick="previous();">
  <i></i>
  </div>
  <div id="next" onclick="next();">
  <i></i>
  </div></div>`;
  document.getElementById('web_order_form').innerHTML = `${htmli}`
