const spinnerArr = ['\r|       ', '\r/       ', '\r-       ', '\r\\      '];
const runSpinner = (times)=>{
    let throughTime = 100;
    let i = 0;
    while(throughTime < times){
        setTimeout(()=>{
            if (i === spinnerArr.length) {
                i = 0;
            }
            process.stdout.write(spinnerArr[i]);
            i++;
        }, throughTime+=200)
    }
}

runSpinner(5000);