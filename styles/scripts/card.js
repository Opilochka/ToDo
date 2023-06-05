/* Submit on Enter */
$("#addNewItemInput").on("keydown", (e) => {
    if (e.keyCode === 13) {
      $("#addNewItemBtn").click()
      $("#addNewItemInput").val("")
    }
  })
  
  $("#titleInput").on("keydown", (e) => {
    if (e.keyCode == 13) {
      $("#titleInput").blur();
    }
  })
  
  /* Add a new item */
  $("#addNewItemBtn").on("click", (e) => {
    if ($("#addNewItemInput").val() == "") {
      gsap.to("#addNewItemInput", .1, {x: -4})
      gsap.to("#addNewItemInput", .1, {delay: .1, x: 4})
      gsap.to("#addNewItemInput", .1, {delay: .2, x: -4})
      gsap.to("#addNewItemInput", .1, {delay: .3, x: 4})
      gsap.to("#addNewItemInput", .1, {delay: .4, x: 0})
    } else {
      const newItemInput = $("#addNewItemInput").val()
    
    $(".item").append(
      `<div class="itemInner">
        <i class="taskCompleted"></i>
        <p>${newItemInput}</p>
        <button class="removeItemBtn">
        </button>
       </div>`)
    
    $("#addNewItemInput").val("")
    
    const newItem = e.target

    gsap.to(".itemsWrapper, .item", .3, {paddingBottom: 30, ease: Back.easeOut})
    gsap.to(".itemsWrapper, .item", .3, {delay: .15, paddingBottom: 8, y: 0, ease: Back.easeOut})
  
    }
  })
  
  /* Completed item line through */
  $(".item").on("click", "i.taskCompleted", (e) => {
    const handPoint = e.target
    const completedItem = e.target.parentElement
    const text = completedItem.getElementsByTagName('p')
    
    $(text).css({"text-decoration": "line-through"})
    gsap.to(handPoint, .3, {rotate: -30, transformOrigin: "center", ease: Back.easeOut})
    gsap.to(handPoint, .3, {delay: .15, rotate: 0, transformOrigin: "center", ease: Back.easeOut})
  })
  
  /* Remove item */
  $(".item").on("click", "button.removeItemBtn", (e) => {
      const removeItem = e.target
      const itemInner = removeItem.parentElement    
      $(itemInner).remove()
    
    gsap.to(".itemsWrapper, .item", 0, {paddingBottom: 52})
    gsap.to(".itemsWrapper, .item", .3, {paddingBottom: 8, ease: Back.easeOut})
  })
  
  