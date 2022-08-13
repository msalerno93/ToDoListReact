function BMI() {

    const massMark = 95
    const heightMark = 1.88
    const massJohn = 85
    const heightJohn = 1.76

    const BMIMark = massMark / heightMark ** 2
    const BMIJohn = massJohn / (heightJohn * heightJohn)
    const markHigherBMI = BMIMark > BMIJohn
    
    if(BMIMark === BMIJohn){
        return "Mark's BMI is Higher"
    }else
        return "Marks BMI is lower"
}

export default BMI