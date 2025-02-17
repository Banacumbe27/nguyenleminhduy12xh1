let details = navigator.userAgent; 
let regexp = /android|iphone|kindle|ipad/i; 
let isMobileDevice = regexp.test(details); 
  
if (isMobileDevice) { 
    document.querySelector('.screen-cover').style.display='block'; 
}





let section_container=document.querySelector('.section_container');
let sections=document.querySelectorAll('section');
let nextlabel=document.querySelector('#nextlabel');
let backlabel=document.querySelector('#backlabel');
let next_button=document.querySelector('.next-button');
let back_button=document.querySelector('.back-button');
labels=['Home(Bắn pháo bông)','Tết còn có những phong tục nào nhỉ? (Click me!)','Các món ăn ngày Tết','Chúc Tết','Mâm ngũ quả','Lời kết'];
let section_count=0;//intro
function navigate(direction){//0=back 1=next
if(direction==0){//back
section_count=Math.max(0,section_count-1);
}
if(direction==1){//next
section_count=Math.min(section_count+1,sections.length-1);
}
if(section_count==0){
    next_button.style.transform=`translateY(0)`;
    back_button.style.display='none';
    
}
if(section_count!=0){
    next_button.onmouseover=()=>{
    next_button.style.transform=`translateY(0)`;
};
    next_button.onmouseout=()=>{
    next_button.style.transform=`translateY(50%)`;
    };
    back_button.style.display='block';
    next_button.style.display='block';
}
if(section_count==sections.length-1){
    next_button.style.display='none';
}
section_container.style.transform=`translateY(${-100*section_count}vh)`;
nextlabel.textContent='Tiếp theo:'+labels[section_count+1];
backlabel.textContent='Quay về: '+labels[section_count-1];
document.querySelector('.progress-bar').style.height=`${100*section_count/(sections.length-1)}%`;
document.querySelector('.progress-bar pre').textContent=`${
    100*section_count/(sections.length-1)
}\n%\nP\nR\nO\nG\nR\nE\nS\nS`;
}
function openlixi(){
    document.querySelector('.baolixi').style.animation='1s shake';
    setTimeout(()=>{
    document.querySelector('.baolixi').style.display='none';
    document.querySelector('.baolixi-money').style.display='block';
document.querySelector('.baolixi-money').style.animation='1s materialize forwards';

}
    ,1000
);

}
let gallery=document.querySelector('.imgslider');
function generateFoodGallery(){
const img_src=['banhtet1.jpg','duamon.jpg','banhtet2.webp','thitkho.jpg','gacung.jpg','mut.jpg'];
for(let i=0;i<img_src.length;i++){
let half_container=document.createElement('div');
half_container.classList.add('half-container');
let img=document.createElement('img');
img.src=img_src[i];
half_container.appendChild(img);
gallery.appendChild(half_container);
}
}
generateFoodGallery();
const food_names=['Bánh Tét đậu xanh','Dưa món','Bánh Tét chuối','Thịt kho hột vịt','Gà cúng','Mứt']
const food_descs=['Bánh nếp hình trụ hấp và bọc \n bằng lá chuối \n Nhân mỡ đậu xanh.Khá ngon.\nMình đánh giá 3sao hơi ngán',
    'Rau củ muối chua\nĂn chung với bánh tét đậu xanh\nGiúp đỡ ngán và tăng hương vị\n4sao ăn với gì cũng ngon',
    'Thay nhân đậu xanh bằng \nchuối sim.\n Rất ngon và đỡ ngán, 5sao.',
    'Thịt heo đem kho nước dừa với \ntrứng vịt. \nMột trong những món classic \nngày Tết.\nThịt biểu tượng cho đát\ntrứng biểu tượng cho trời.\n5sao ngon và ý nghĩa',
    'Gà ta vặt lông\nrửa sạch và luộc chín\nĐôi cánh chấp lạy ông bà\nThịt rất chắc và ngọt\n4sao hơi dai nhưng ngọt',
    'Rất phổ biến ngày Tết.\n Làm từ trái cây, gừng,\n thậm chí hoa atiso\n Một mâm mứt được xếp từ chua\n tới ngọt\n Uống trà ăn chung rất ngon'
]
let food_name_ele=document.querySelector('#food_name');
let food_desc_ele=document.querySelector('#food_desc');
let food_count=0;
function nav_foodGallery(direction){//0 back 1 next
if(direction==0){
    food_count=Math.max(0,food_count-1);
}
if(direction!=0){
    food_count=Math.min(food_names.length-1,food_count+1);
}
food_desc_ele.textContent=food_descs[food_count];
food_name_ele.textContent=`${food_count+1}.${food_names[food_count]}`;
gallery.style.transform=`translateY(${-100*food_count}vh)`;

}
nav_foodGallery(0);
const chuctet_collection=document.querySelector('.chuctet-collection');
const chuctet_generator=document.querySelector('.chuctet-generator');
const chuctet_slider=document.querySelector('.chuctet-slider');
let chuctet_count=0;
function nav_chuctet_slider(direction){//0 1
    if(direction==0){
        chuctet_count=Math.max(-1,chuctet_count-1);
    }
    if(direction!=0){
        chuctet_count=Math.min(1,chuctet_count+1);
    }
    chuctet_slider.style.transform=`translateX(${-150-100*chuctet_count}vw)`
    console.log(chuctet_count); 
}
function chuctet_copy(){
    let xungho = document.querySelector('#xungho').value;
    let prefix = document.querySelector('#prefix').value;
    let chucai = document.querySelector('#chucai').value;
    let loichuc_prefix = document.querySelector('#loichuc-prefix').value;
    let loichuc_affix = document.querySelector('#loichuc-affix').value;
    let loichuc = `Nhân dịp năm mới ${xungho} ${prefix} chúc ${chucai} ${loichuc_prefix} ${loichuc_affix}.`;
    navigator.clipboard.writeText(loichuc);
    window.alert(`Đã copy: ${loichuc}`);
}
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function chuctet_random() {
    const xungho = ["mình", "tôi", "tao", "anh", "em", "chú", "bác", "ông", "bà", "cô", "anh", "chị", "em", "bạn"];
const prefix = ["thân", "kính", "xin"];
const chucai = ["bạn", "chú", "bác", "ông", "bà", "cô", "anh", "chị", "em", "mày", "con"];
const loichuc_prefix = ["vạn sự", "thật nhiều", "tràn đầy", "chỉ toàn", "cuộc sống"];
const loichuc_affix = ["như ý", "cát tường", "hanh thông", "hạnh phúc", "vui vẻ"];
    let xunghoRandom = getRandomElement(xungho);
    let prefixRandom = getRandomElement(prefix);
    let chucaiRandom = getRandomElement(chucai);
    let loichucPrefixRandom = getRandomElement(loichuc_prefix);
    let loichucAffixRandom = getRandomElement(loichuc_affix);

    let loichuc = `Nhân dịp năm mới ${xunghoRandom} ${prefixRandom} chúc ${chucaiRandom} ${loichucPrefixRandom} ${loichucAffixRandom}.`;
    document.querySelector('#chuctet_random').textContent=loichuc;
}
function copy_random(){
    
    navigator.clipboard.writeText(
        document.querySelector('#chuctet_random').textContent
    );
        window.alert("Đã copy: "+
        document.querySelector('#chuctet_random').textContent
        );
}

window.onkeyup=(e)=>{
    if(e.key=='ArrowDown')navigate(1);
    if(e.key=='ArrowUp')navigate(0);
};



