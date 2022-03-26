const { default: axios } = require("axios")

async function getData(userId) {

   	
	if(userId < 0 || !Number.isInteger(userId)) {
        return 
   }

const {data:user} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
    console.log("user",user)
const {data:post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    console.log(  "post ",  post)
    return {...user, posts:post }
}
getData(1)
