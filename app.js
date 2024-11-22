function submitPost() {
  var userName = document.getElementById("username");
  var description = document.getElementById("desc");
  var dropDownitem = document.getElementsByClassName("dropDownitem");

  var currentDateTime = new Date().toUTCString();


  var listingContainer = document.querySelector("#listingContainer");

  if (userName.value.trim() !== "") {
    if (description.value.trim() !== "") {
      listingContainer.innerHTML += `<div class="card my-4">
      <div class="card-header  justify-content-between">
     <img class="mt-auto" style="width: 3rem; height: 3rem;" src="./dp.jpg" alt="">
      <span>${userName.value}
     </span>
      <p><i class="fa fa-globe me-2 ms-5 "></i>${currentDateTime}</p>
      <p class="dropDownitem">${dropDownitem.value}</p>

    </div> 
    <div>
     <p class="card-text">${description.value}</p>
  </div>

   <div class="card-footer social">
    <div class="social-content"></div>
    <div class="social-buttons">
      <span><i class="fa fa-thumbs-up me-2"></i><button id="remarks" onclick="Like()" style="border: none;">Like</button></span>
      <span><i class="fa fa-comment me-2 ms-5"></i><button id="remarks" onclick="Like()" style="border: none;">Comment</span>
      <span><i class="fa fa-share me-2 ms-5"></i><button id="remarks" onclick="Like()" style="border: none;">Share</span></div>
    </div>
</div>
</div>
  `;


      userName.value = ''

      description.value = ''
    }
    else {
      alert("description is required");
    }

  }
  else {
    alert("Username is required");
  }
}
