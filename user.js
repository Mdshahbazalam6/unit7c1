// async function getAllList (){
//     let url ='http://localhost:8080/User'
//     try {
//         let res= await fetch(url);
//         let data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

function getAllList (){
    fetch(`http://localhost:8080/User`)
            .then((res) => {
                res.json().then((res) => {
                    console.log(res)
                })
            }).catch((err) => {
                console.log(err)
            })
}
getAllList()