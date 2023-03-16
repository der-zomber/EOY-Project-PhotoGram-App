let mostPopularPhotos=["https://cdn.pixabay.com/photo/2020/04/11/08/26/lake-5029360__340.jpg","https://cdn.pixabay.com/photo/2020/04/10/11/54/nature-5025462__340.jpg","https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"];

let pictures = [];

$(".liked-photo").append("<img src=" + "https://i.pinimg.com/736x/cd/0c/13/cd0c13629f217c1ab72c61d0664b3f99.jpg" + ">");

$(".submit").click(function() {
    $(".posts").empty();
    $(".posts").push(userPic);
    let userPic = $("input").val();
    pictures.push(userPic);
    console.log(pictures);
   
    
    for (let picture of pictures) {
    $(".posts").append("<img src=" + picture + ">");
   
}
$(".input").val("");

if(pictures.length===3){
    $(".message").text("Congrats, you are a Silver Level User");
}
    
    if(pictures.length===5){
    $(".message").text("Congrats, you are a Gold Level User");
}
    
    if(pictures.length>5){
    $(".message").text("Congrats, you are a Platinum Level User");
}

});


