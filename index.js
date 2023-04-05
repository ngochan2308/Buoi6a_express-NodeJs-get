const express = require ('express');
const cors = require ('cors');
const dssv = require('./dssv.json');
const fs = require("fs");
const app = express();
// let corsOptions ={
    
// };
//BÀI 6a CHẠY TERMINAL
app.use(cors({
    origin:["http://127.0.0.1:5500","http://localhost:5500"]
    //link của bài web
}))

const port = 3000;

//chèn danh sách sinh viên trực tiếp
// const dssv = [
//     {
//         MaSV: "21661069",
//         HoTen: "Trần Phạm Tuấn Anh",
//         Lop: "17CSI01"
//     },

//     {
//         MaSV: "21662020",
//         HoTen: "Nguyễn Chí Bảo",
//         Lop: "17CSI01"
//     },

//     {
//         MaSV: "21661037",
//         HoTen: "Phan Hoài Bảo",
//         Lop: "17CSI01"
//     }
    
// ]


// -----------------------------------------------

// app.get('/students',(req, res)=>{
//     res.send('Xin chào đến với EXPRESS backend!!!');
// });

//GET
app.get('/students',(req, res)=>{
    res.send(Object.values(dssv));
})
app.get('/students/:mssv',(req, res)=>{
    //CÁCH1
    // console.log(req.params.mssv);
    // let i = 0;
    // for (i = 0; i < dssv.length; i++){
    //     if(dssv[i].MaSV == req.params.mssv)
    //         break;
    //     }
    //     if(i < dssv.length)
    //     {res.send(dssv[i]);}
    //     else{
    //         res.send("Not found !!!");
    //     }


    
        ///cách 2
    res.send(dssv.find(sv=>sv.MaSV===req.params.mssv));
    // === là so sánh chuỗi

    
});
//----------------------------------------------------

//POST
app.post('/students',(req, res)=>{
    res.send('POST students');
});


//-----------------------------------------------------
app.put('/students',(req, res)=>{
    res.send('PUT students');
});
//-----------------------------------------------------

app.delete('/students',(req, res)=>{
    res.send('DELETE students');
});

//-----------------------------------------------------
app.listen(port,()=>console.log(`App is running at port ${port}`))
