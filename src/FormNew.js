import React from 'react'

class FormNew extends React.Component { 
            constructor() {
                super() 
                this.state = {
                    fullname: '', 
                    email: '',
                    phone:'',
                    bio:'',
                    skills:'',
                    experience:'',
                    jobTitle:''
                }
            }

            handlefullnameChange = (e) => {
                const fullname = e.target.value 
                this.setState({ fullname })
            }

            handleEmailChange = (e) => {
                const email = e.target.value 
                this.setState({ email })
            }

            handlePhoneChange = (e) => {
                const phone = e.target.value 
                this.setState({ phone })
            }

            handleExperienceChange =(e)=>{
                const experience=e.target.value
                this.setState({ experience })
            }
            
            handleJobTitleChange=(e)=>{
                const jobTitle=e.target.value
                this.setState({jobTitle})
            }
            

            handleskillsChange=(e)=>{
                const skills=e.target.value
                this.setState({skills})
            }
            
           

            handleSubmit=(e)=>{
                e.preventDefault()
                const formData={
                    fullname:this.state.fullname,
                    email:this.state.email,
                    skills:this.state.skills,
                    phone: this.state.phone,
                    jobTitle:this.state.jobTitle
                }
                alert(`user registered`)
                console.log(formData)
                
            }
            render() {
               console.log(this.state)
                return (
                    <div>
                    
                        <h1>Apply for job</h1> 
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="fullname">full Name</label> 
                            <input type="text" 
                            id="fullname" 
                            value={this.state.fullname} 
                            onChange={this.handlefullnameChange} /> <br/>  <br/> 

                            <label htmlFor="email">email</label> 
                            <input type="text" id="email" 
                            value={this.state.email} 
                            onChange={this.handleEmailChange} 
                            placeholder="example@gmail.com"/><br/><br/> 

                            <label htmlFor="phone">Contact Number</label>
                            <input type="text" id="phone"
                            value={this.state.phone}
                            onChange={this.handlePhoneChange}
                            placeholder="+91 8722129886"/><br/><br/>

                           

                             <label>
                             Applying for job:
                             <select value={this.state.value} onChange={this.handleJobTitleChange} >
                             <option>select</option>
                            <option value="Front-End Developer">Front-End Developer</option>
                            <option value="Node.js Developer">Node.js Developer</option>
                            <option value="MEAN stack developer">MERN stack developer</option>
                            <option value="FULL stack developer">FULL stack developer</option>

            
                             </select>
                            

                             </label><br /><br />

                           

                            <label htmlFor="experience">Experience</label>
                            <input type="text" id="experience"
                            value={this.state.experience}
                            onChange={this.handleExperienceChange}
                            placeholder=" Experience(2 years, 3 months)"/><br/><br/>


                            <label htmlFor="skills">Technical Skills</label>
                            <textarea 
                            value={this.state.value} 
                            onChange={this.handleskillsChange} 
                            placeholder="Technical skills"/> <br/><br />
                            <br/>

                            

                            
                            

                            <input type="submit"  value="Send Application"/>
                        </form>
                    
                    </div> 
                )
            }
        
        }
       
             
       
export default FormNew