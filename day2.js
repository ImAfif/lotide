//process.agrv

let total = 0 

const myarr = [1, 2, 3, 4]

  for (let i = 0;  i < myarr.length; i++){
    //console.log(myarr[i])

    total += myarr[i]
  }
console.log(total)

const args = process.argv;

const sliced = args.slice()