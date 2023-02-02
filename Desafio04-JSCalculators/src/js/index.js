let Desafio01=document.getElementById("desafio01")
Desafio01.addEventListener('click',function(){
    let N1 = prompt("Insira o primeiro valor:")
    N1=Number(Number(N1).toFixed(2))
    let N1Type
    if(N1%2==0){
        N1Type="par"
    }else{
        N1Type="ímpar"
    }

    let N2 = prompt("Insira o segundo valor:")
    N2=Number(Number(N2).toFixed(2))
    let N2Type
    if(N2%2==0){
        N2Type="par"
    }else{
        N2Type="ímpar"
    }


    let sum = (N1+N2).toFixed(2)
    let takeaway=(N1-N2).toFixed(2)
    let multiply=(N1*N2).toFixed(2)
    let division=(N1/N2).toFixed(2)
    let remain=(N1%N2).toFixed(0)
    let compare

    if(N1==N2){
        compare=`Os valores inseridos são idênticos: ${N1}, um número ${N1Type}.`
    }else{
        compare=`Os valores inseridos são diferentes, o primeiro foi ${N1}, um número ${N1Type}, e o segundo foi ${N2}, um número ${N2Type}.`
    }


    let message=`${compare}
    
    A soma dos valores é ${sum}.
    A subtração dos valores é ${takeaway}.
    A multiplicação dos valores é ${multiply}.
    A divisão dos valores é ${division}.
    O resto da divisão é ${remain}`

    alert(message)

})

let Desafio02=document.getElementById("desafio02")
Desafio02.addEventListener('click',function(){
    let students=[]
    let numberStudents=prompt("Insira a quantidade de alunos")
    for (let i=1;i<=numberStudents;i++){
        let studentName=prompt("Nome:")
        let studentGrade1=Number(prompt("Nota P1:"))
        let studentGrade2=Number(prompt("Nota P2:"))
        let student={
            name:studentName,
            grades:[studentGrade1,studentGrade2]
        }
        alert(`Aluno ${student.name} cadastrado com notas ${student.grades[0]} e ${student.grades[1]}`)
        students.push(student)
    }
    
    students.forEach((student) =>{
        
        let avg=((student.grades[0]+student.grades[1])/2)
        let status = avg>=6 ? "está APROVADO" : "está REPROVADO"
        
        alert(`${student.name} obteve média ${avg.toFixed(1)} e ${status}`)
    })
})


