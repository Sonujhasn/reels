import React,{useContext,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material'
import Image from 'next/image'
import insta from '../../Assets/instagram.jpg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext ,Image as Img} from 'pure-react-carousel';
import bg1 from '../../Assets/img1.jpg'
import bg2 from '../../Assets/img2.jpg'
import bg3 from '../../Assets/img3.jpg'
import { Carousel } from 'react-responsive-carousel';
import { AuthContext } from '../../context/auth';
import { async } from '@firebase/util';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { useRouter } from 'next/router';
function index(){

     const router=useRouter()
    const [email,setEmail]=React.useState('')
    const [password,setPassword]=React.useState('')
    const [error,setError]=React.useState('')
    const [loading,setLoading]=React.useState(false)
    const {forget,user}=useContext(AuthContext)
    const handleClick= async()=>{
      //console.log(email+" "+password)
      try{
        setLoading(true)
        setError('')
        await forget(email)
        console.log('email send')
        router.push('/login')
      }catch(err){
        console.log('err')
         setError(err.message)
         setTimeout(()=>{
           setError('')
         },2000 )
      }
      setLoading(false)
    }
  useEffect(()=>{
    if(user){
      router.push('/')
    }else{
      console.log('user not')
    }
  },[user])
  return (
    <div className='login-container'>
      <div className='carbg'>
        <div className='car'>
          <Carousel showIndicators={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          interval={2000}
          autoPlay={true}
          showArrows={false}
          >
             <Image src={bg1}/>
             <Image src={bg2}/>
             <Image src={bg3}/>
          </Carousel>
        </div>
      </div>
      <div>
      <div className='login-card'>
           <Image src={insta}/>
            <TextField id="outlined-basic" size="small" margin='dense'
            fullWidth label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            {/*<TextField id="outlined-basic" type="password" size="small" margin='dense'
            fullWidth label="Password" variant="outlined"  value={password} onChange={(e)=>setPassword(e.target.value)}/>*/}
            {
              error!='' && 
              <div style={{color:'red'}}>{error}</div>
            }
            
             <Button variant="contained" component="span"
             style={{marginTop:'0.5rem'}} fullWidth onClick={handleClick} disabled={loading}>
                Send Email
             </Button>
             {/*<div style={{color:'blue',marginTop:'1rem'}}>Forget password</div>*/}
      </div>
       <div className='bottom-card'>
          Don't  Have an Account? <span style={{color:'blue'}}>Sign Up</span>
       </div>
       </div>
    </div>
  )
}

export default index