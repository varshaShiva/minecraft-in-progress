var canvas= new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_img_width=30;
block_img_height=30;
var player_object="";
var block_object="";
function player_update(){
fabric.Image.fromURL("player.png”,function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
top:player_y,
left:player_x
});
canvas.add(player_object);
}
function new_image(get_image){
fabric.Image.fromURL(get_image,function(Img){
block_object=Img;
block_object.scaleToWidth(block_img_width);
block_object.scaleToHeight(block_img_heigth);
top:player_y,
left:player_x
});
canvas.add(block_object);
}

