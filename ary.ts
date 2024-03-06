let ary:any = [
    ["Ali",22,"Freelancer","Intermediate"],
    ["Waqas",25,"Blogger","Intermediate"],
    ["Faisal",26,"Digital'Marketing","Bcome"],
    ["Mohib",23,"Yotuber","Matric"]
];
ary.forEach(loop);
function loop (value:any, index) {
    console.log(index + " : " + value);
}