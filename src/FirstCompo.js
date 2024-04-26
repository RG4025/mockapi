import axios from "axios";
import React, { useEffect, useState } from "react";

function FirstCompo() {

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [message,setMessage] = useState();
    
    const [data,setData] = useState([]);


    function getName(e){
        setName(e.target.value);
    }


    function getEmail(e){
        setEmail(e.target.value);
    }


    function getMessage(e){
        setMessage(e.target.value);
    }

        let url = `https://65b10d30d16d31d11bddef84.mockapi.io/Employee/Employee`;
        
        function sendData(){
        axios.post(url, {"Name" : name, "Email" : email,"Message" : message});
        alert("Data sended successfully!")
        
        let reset = document.getElementById('form');
        reset.reset();
    }

    
    function getData(){
        axios.get(url).then((e)=>{
            console.log(e.data);
            setData(e.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <>
      <div className="pt-5">
        <h3 className="text-center">Contact Form</h3>

        <div className="row">
          <div className="col-12 col-lg-4 container">
            <div className="container">

            <form action="#" id="form" className="form">
              <label htmlFor="name">Enter your name :</label>
              <input type="text" placeholder="Name" onChange={getName}/>

              <br />
              <br />

              <label htmlFor="email">Enter your name :</label>
              <input type="email" placeholder="Email"  onChange={getEmail}/>

              <br />
              <br />

              <label htmlFor="message">Enter your name :</label>
              <input type="text" placeholder="Message" onChange={getMessage} />
              <br />
              <br />
              <button type="button" className="btn btn-primary" onClick={sendData}>Send Data</button>
            </form>
            </div>
          </div>

          <div className="col-12 col-lg-8">

            <div className="text-center">
                <button type="button" className="btn btn-primary" onClick={getData}>Get Data</button>
            </div>

            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                
                {
                    data.map((e)=>{

                        let ema = e.Email;
                        let TF = false;
                        
                        for (let i = 0; i < ema.length; i++) {
                           
                            if(ema[i] == "@"){
                                TF = true;
                                return(
                                    <tr>
                                    <td>{e.Name}</td>
                                    <td>{TF? e.Email : "Invalid Email "}</td>
                                    <td>{e.Message}</td>
                                </tr>
                                );
                            }
                        };

                        for (let i = 0; i < ema.length; i++) {
                           
                            if(ema[i] != "@"){
                                TF = true;
                                return(
                                    <tr>
                                    <td>{e.Name}</td>
                                    <td>Invalid Email</td>
                                    <td>{e.Message}</td>
                                </tr>
                                );
                            }
                        };
                       
                    })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstCompo;
