import React, { Component } from 'react';
import contact from './Images/contact.jpg';

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(${contact})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <div >
                    <h1 style={{ text: "white" }}>CONTACT </h1><br />
                    <br />

                    <center>
                        <table border='4' className="table table-bordered table-solid" >

                            <tr >
                                &nbsp;<th>Name </th>  &nbsp;
                                <th>Email ID</th>&nbsp;
                                <th>Contact Number</th>&nbsp;&nbsp;


                            </tr>
                            <tr>
                                &nbsp; <td>Harshal Patil</td>&nbsp;
                                <td>Patilh148@gmail.com</td>&nbsp;
                                <td>9552663668</td>&nbsp;&nbsp;
                            </tr>



                            <tr>
                                &nbsp; <td>Omkar Chavan</td>&nbsp;
                                <td>omkarchavan396@gmail.com</td>&nbsp;
                                <td>8956791796</td>&nbsp;&nbsp;
                            </tr>


                            <tr>
                                &nbsp; <td>Shubham Darekar</td>&nbsp;
                                <td>darekarshubham007@gmail.com</td>&nbsp;
                                <td>9689001485</td>&nbsp;&nbsp;
                            </tr>


                            <tr>
                                &nbsp; <td>Sourabh Pandare</td>&nbsp;
                                <td>sourabhpanadare123@gmail.com</td>&nbsp;
                                <td>7843074525</td>&nbsp;&nbsp;
                            </tr>


                            <tr>
                                &nbsp; <td>Shivam Jadhav</td>&nbsp;
                                <td>shivamjadhav9122000@gmail.com</td>&nbsp;
                                <td>9923564873</td>&nbsp;&nbsp;
                            </tr>

                        </table>
                    </center>
                </div>
            </div>


        )
    }
}

export default Contact;