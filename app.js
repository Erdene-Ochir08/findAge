// function -> dahij ashiglah bolomjtoi kodnii tsugluulga
// define -> zarlana 
// argument/parametr -> function-iin avch boloh utga
function hello(name,age){
    console.log("Hello "+name);
    console.log("Good day"+ age);
}
// call -> duudaj ajluulah
hello("Bat",25);
hello("Suvd",20);
// 2 тооны нийлбэр олдог функц бичнэ үү 
// Тооны квадрат зэрэг олдог функц бичнэ үү
// Нас оруулахад насанд хүрсэн эсэхийг олдог функц бичнэ үү

// backtick
var b=5;
console.log("Too " + b);
console.log(`Too ${b}`);

// DOM -> Document -> html deer bga bvh code
console.log(document);

var h1 = document.getElementsByTagName('h1')[0];
var img = document.getElementsByTagName('img')[0];
var inputAge = document.getElementsByTagName('input')[0];
var p = document.getElementsByTagName('p')[0];

console.log(inputAge);
// variableName.style.styeName="value";
h1.style.fontSize="20px";
img.style.width="300px";
function changeColor(){
    // variableName.src="zuragniiNer.jpg";
    img.src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg";
    h1.style.color="aqua";
    // variableName.innerText="solih text bichne" ->
    h1.innerText="Changed!";
}
function nas(){
    console.log(inputAge.value);
    if(inputAge.value>17){
        p.innerText="Nasad hursen";
    }else if(inputAge.value==""){

    }
    else{
        p.innerText="Nasand hureegui";
    }
    // parseInt(inputAge.value);  -> text-iig too bolgoh func
}
// 1. 130 дээш нас оруулвал улаан өнгөөр Хүн ийм наслах боломжгүй
// 2. 0-ээс бага тоо оруулвал шар өнгөөр Та төрөөгүй байна
// 3. Насаа хоосон оруулахад үед alert() гарж ирнэ 
// 4. 10 жилийн дараах насыг гаргаж ирэх
// 5. Төрсөн оныг гаргаж ирэх
