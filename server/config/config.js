//==================================
//Puerto
// ==================================

process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

//if(process.env.NODE_ENV === 'dev'){
  //  urlDB='mongodb://localhost:27017/milibrotec';   
//}else{
    urlDB='mongodb+srv://juli:juli@cluster0-ugleq.mongodb.net/milibrotec';
//}
process.env.URLDB=urlDB;
//db mongo url
//mongodb+srv://juli:juli@cluster0-ugleq.mongodb.net/milibrotec
