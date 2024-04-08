//Determine the area of shapes by using switch case.
type structure = {
    height?:number, 
    length?:number,
    radius?:number, 
    base?:number, 
    side?:number, 
    width?:number
}

let area = (shape: string, data:structure) => {
    let result:number
        switch(shape){
            case "circle":
                if (data.radius != undefined){
                    result = Math.PI * data.radius ** 2
                    return `The area of circle will be ${result.toFixed(3)}`
                }
                else {console.log("Put the value of radius")}
                break;

            case "square":
                if (data.side !=undefined){
                    result = data.side ** 2
                    return `The area square will be ${result}`
                }
                else {console.log("Put the value of side")}
                break;

            case "rectangle":
                if (data.length != undefined && data.width != undefined){
                    result = data.length * data.width
                    return `The area of rectangle will be ${result}`
                }
                else {console.log("Put the value of length and width")}
                break;

            case "triangle":
                if (data.base != undefined && data.height != undefined){
                    result = 0.5 * data. base * data.height
                    return `The area of triangle is ${result}`
                    
                }
                else {console.log("Put the value of base and height")}
                break;

            default : console.log("Try following operations:\n 1.cirle \n 2.triagle \n 3.square \n 4.reactangle")
        }

}
console.log(area("circle".toLowerCase(),{radius:13}))
console.log(area("square".toLowerCase(),{side:21}))
console.log(area("triangle".toLowerCase(),{base:35, height:18}))
console.log(area("rectangle".toLowerCase(),{length:56, width:71}))
console.log(area("cile".toLowerCase(),{radius:13}))



