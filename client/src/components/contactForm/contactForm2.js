import React from 'react';
import { useForm } from 'react-hook-form';
// import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import Icon from '@material-ui/core/Icon';
// import Button from '@material-ui/core/Button';
import { Button, Icon } from 'semantic-ui-react'

import "./contact.css"


const ContactForm2 = () => {

//   const [status, setStatus] = useState("Submit");



const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Subject: ', subject);
    console.log('Message: ', message);
  };

 
return (
   
<div style={{ padding: "8em 0em"}}>

      <Typography variant="h6" gutterBottom className="align" style={{marginBottom:"2rem"}}>
        Write A Message
      </Typography>

      <form className="align" onSubmit={handleSubmit(onSubmit)} noValidate >
    <Grid container spacing={3} style={{width:'50vw'}} >

        <Grid item xs={12} sm={6}>
          <TextField required name="name" label="Name" fullWidth placeholder="name" 
          id="name" 
          {...register('name', {
            required: { value: true, message: 'Enter your name' },
            })}
          />
          {errors.name && <span className='errorMessage' style={{color:"red"}}>{errors.name.message}</span>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required name="email" label="Email" fullWidth placeholder="Email"
          id="email"  
          {...register('email', {
            required: true,
            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          })}
          />
           {errors.email && (
            <span className='errorMessage' style={{color:"red"}}>Enter a valid email address</span>)}
        </Grid>
       
        <Grid item xs={12}>

        <TextField required  name="subject" label="Subject" fullWidth placeholder="subject"
          id="subject" 
          {...register('subject', {
            required: { value: true, message: 'Enter a subject' },
          })}
          />
          {errors.subject && (
         <span className='errorMessage' style={{color:"red"}}>{errors.subject.message}</span>)}  
        </Grid>

    <Grid item xs={12}>
        <TextField required id="standard-multiline-static" label="Message" multiline fullWidth rows={4} placeholder="Write Message"
        id="message"
        {...register('message', {
            required: true
          })}
           />
           {errors.message && <span className='errorMessage' style={{color:"red"}}>Enter a message</span>}
    </Grid>

    <Grid item xs={12} className="align" style={{ padding: "5em 0em"}}>
        <Button type="submit"  icon labelPosition='right'>Send Message <Icon name='send' /></Button>
        </Grid>
    </Grid>
      </form>

</div>
   
  )

  

  
}

export default ContactForm2