import React,{useState} from 'react'
import { Heading,Box,Text } from "@chakra-ui/core";
import axios from 'axios';

function Upload() {
    const [loading,setLoading]= useState(false)
    const [image, setImage]=useState("")

    const uploadImage= async e=>{
        const files = e.target.files
        const data= new FormData()
        data.append=('file',files[0])
        data.append('upload_preset','testimages')
        setLoading(true)

        const bearer = 'Bearer ' + localStorage.getItem('token');
        const res = await axios.post("https://api.cloudinary.com/v1_1/imaginarycloud/image/upload",{
            data
        },{
        headers: {
            'Authorization': bearer
          }
        })
        const file= await res.json()
        console.log(file)
    }
    return (        
 <>  
 <div>
  <Box maxW="32rem">
  <Heading mb={4}>Image Upload Service to Cloudinary</Heading>
  <Text fontSize="xl">
    Upload and Store your photos on the cloudinary service.
  </Text>
  <input type='file' name='file' placeholder='Upload an Image' 
  onChange={uploadImage}/>
</Box>
</div>   

</>
    )
}

export default Upload
