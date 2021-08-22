import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import Icon from '@material-ui/core/Icon';
// import Button from '@material-ui/core/Button';
import { Button, Icon } from 'semantic-ui-react'

import "./contact.css"

class ContactForm2 extends React.Component  {


    

    constructor(props) {
        super(props);
        this.state = {
          firstname:'',
          lastname:'',
          email: '',
          message: ''
        }
      }


      handleSubmit(e){
        e.preventDefault();
        axios({
          method: "POST",
          url:"http://localhost:3000/send",
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success') {
            alert("Message Sent.");
            this.resetForm()
          } else if (response.data.status === 'fail') {
            alert("Message failed to send.")
          }
        })
      }

 
      resetForm(){
        this.setState({firstname: "", lastname:"", email: "", message: ""})
      }



  render() {
  return (
   
<div style={{ padding: "8em 0em"}}>

      <Typography variant="h6" gutterBottom className="align" style={{marginBottom:"2rem"}}>
        Write A Message
      </Typography>

      <form className="align" d="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <Grid container spacing={3} style={{width:'50vw'}} >

        <Grid item xs={12} sm={6}>
          <TextField required name="firstname" label="First name" fullWidth placeholder="given-name" 
          id="firstname" 
        //   value={this.state.firstname} 
        //   onChange={this.onFirstnameChange.bind(this)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required  name="lastname" label="Last Name" fullWidth placeholder="family-name"
          id="lastname" 
        //   value={this.state.lastname} 
        //   onChange={this.onLastnameChange.bind(this)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField required name="email" label="Email" fullWidth placeholder="Email"
          id="email"  
        //   value={this.state.email} 
        //   onChange={this.onEmailChange.bind(this)}
          />
        </Grid>

    <Grid item xs={12}>
        <TextField required id="standard-multiline-static" label="Message" multiline fullWidth rows={4} placeholder="Write Message"
        id="message" 
        // value={this.state.message} 
        // onChange={this.onMessageChange.bind(this)}
        />
    </Grid>

    <Grid item xs={12} className="align" style={{ padding: "5em 0em"}}>
        <Button type="submit"  icon labelPosition='right'>Send Message <Icon name='send' /></Button>
        </Grid>
    </Grid>
      </form>

</div>
   
  )}
  
onNameChange(event) {
    this.setState({firstname: event.target.value})
}

onNameChange(event) {
    this.setState({lastname: event.target.value})
}

onEmailChange(event) {
    this.setState({email: event.target.value})
}

onMessageChange(event) {
    this.setState({message: event.target.value})
} 
  
}

export default ContactForm2;