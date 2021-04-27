function create(student , students){
    students.push(student);
    return students;
}

function read(students){
    students.forEach(s => {
        console.log("Nombre: "+s.name);
        console.log("Numero de control: "+s.controlNumber);
    });
}

function read2(studentnc, students){
    students.forEach(s => {
        if(s.controlNumber==studentnc)
        console.log("Nombre: "+s.name);
        console.log("Numero de control: "+s.controlNumber);
    });
}

function erase(studentnc, students){
    students.forEach((student, i)=>{
        if(student.controlNumber==studentnc)
        students.splice(i, 1);
    })
    return students;
}

function update(studentnc, newelement, students){
    students.forEach((student, i)=>{
        if(student.controlNumber==studentnc)
        students[i] = newelement;
    })
    return students;
}

function approve(students){
    students.forEach(s => {
        if(s.grade>=70)
        console.log("Nombre: "+s.name);
        console.log("Numero de control: "+s.controlNumber);
    });
}

module.exports.read = read;
module.exports.read2 = read2;
module.exports.create = create;
module.exports.erase = erase;
module.exports.update = update;
module.exports.approve = approve;