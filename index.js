let model = require('./student')
let students =[];

let student = {
    name: 'Edgar Valderrama Castillo',
    controlNumber: '16401011',
    email: 'edalvalderrama@ittepic.edu.mx',
    grade: 80
};

let student2 = {
    name: 'Blanca Ramirez Barajas',
    controlNumber: '16400985',
    email: 'blesramirezba@ittepic.edu.mx',
    grade: 90
};

students = model.create(student, students);
students = model.create(student2, students);

console.log("-------DESPUES DE INSERTAR-----");
model.read(students);
students = model.erase(student.controlNumber,students);

console.log("-------DESPUES DE BORRAR------");
model.read(students);

student = {
    name: 'Jiacheng Zhou',
    controlNumber: '16400412',
    email: 'jizhou@ittepic.edu.mx',
    grade: 100
};

students = model.create(student, students);

console.log("-------AGREGAR SEGUNDO ESTUDIANTE------");
model.read(students);

students = model.update(student2.controlNumber,{name:"Miguel Arciniega", controlNumber:"16400547",email:"rojo.com",grade:98},students);

console.log("-------DESPUES DE ACTUALIZADO------");
model.read(students);

model.read2(student2.controlNumber, students);

model.approve(students);
/*console.log(students[0]);
console.log(students[1]);*/
    

/*students = model.create(student,students);
console.log(students);*/