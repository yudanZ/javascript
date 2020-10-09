const fetch = require("node-fetch");

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]
/*
fetch('https://jsonplaceholder.typicode.com/users')
  .then( response => response.json())
  .then(data => console.log(data))
*/
/*
Promise.all( urls.map( url => fetch(url).then(resp => resp.json())
)).then(array => {
  console.log(array)
})

async function getFetchData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
}
*/
//getFetchData();
/*
const getData = async function(){
  try {
    const [ users, posts, albums ] = await Promise.all( urls.map( url => fetch(url).then(resp => resp.json())
    ))
      console.log(users);
      console.log(posts);
      console.log(albums);
  } catch {
    console.log('Opps')
  }
  
}
*/

/*
const getData2 = async function(){
  const arrayOfPromises = urls.map( url => fetch(url));
  for await( let request of arrayOfPromises){
    const data = await request.json()
    console.log(data);
  }
}

getData2()

const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2
}

const { tiger, ...rest} = animals
console.log(tiger)
console.log(rest);

*/

const promisify = (item, delay ) =>
  new Promise((resolve) => 
    setTimeout(() =>
      resolve(item), delay))

const a = () => promisify( 'a', 100);
const b = () => promisify( 'b', 5000);
const c = () => promisify( 'c', 3000);

async function parallel(){
  const promises = [ a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `paralle is done: ${output1} ${output2} ${output3}`
}

async function race(){
  const promises = [ a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`
}

async function sequence(){
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done:  ${output1} ${output2} ${output3}`
}

parallel().then(console.log)
race().then(console.log)
sequence().then(console.log)