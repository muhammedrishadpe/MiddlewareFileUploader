
import { useState } from 'react';
import axios from 'axios';
import './App.css'


function App() {
  const [image, setImage]= useState("")
  const [imagePreview, setImagePreview]= useState("")
  const handleImage = (event) => {
 setImage(event.target.files[0]);
 setImagePreview(URL.createObjectURL(event.target.files[0]));
 }

 const uploadImage = async () => {
const formData = new FormData();
formData.append("upload_file" ,image);
// formData.append("firstName" ,"Rishad");
  const response = await axios("http://localhost:3006/api/profile/upload", {
  method:"POST",
  headers:{
    "Content-Type":"multipart/form-data",
  },
  data:formData,
});

console.log(response.data);
 }
  return (
    <div>
    {imagePreview && <img src={imagePreview } alt="" style={{width:"200px", height:"200px", objectFit:"contain"}}/> }
    
    <input type='file' accept='image/*' onChange={handleImage} />
    <div id="k" className='animate'>
    <button className='animate' onClick={uploadImage}>Upload</button>
    </div>
    
    </div>
  )
}

export default App
