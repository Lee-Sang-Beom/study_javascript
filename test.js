const list = [{
  id:1,
  text: 'hello'
},{
  id:2,
  text: 'hello_2'
},]
list.map((item)=>{
  if (item.id===2){
    console.log({...item, text: "hello3"});
  }
  else{
    console.log('test',item);
  }
})