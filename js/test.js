const promise1=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise One')
    }, 1000);
})
const promise2=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Two')
    }, 2000);
})
const promise3=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Three')
    }, 3000);
})

promise1.then((res)=>{
    console.log(res);
    promise2.then((res)=>{
        console.log(res)
        promise3.then((res)=>{
            console.log(res);
        });
    });
})