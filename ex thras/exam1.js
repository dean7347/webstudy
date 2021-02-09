



function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve(ms);
        //reject(new Error('reason'));
        },ms)
    });
}

//promise.all
(async function main(){
    const results = await Promise.all([p(1000),p(1000),p(1000)]);
    console.log(results);
})();

//promise.race
(async function main(){
    const results = await Promise.race([p(1000),p(1000),p(1000)]);
    console.log(results);
})();