import Axios from 'axios';
import React,{Component} from 'react';
import '../App.css';
import { Button } from "@chakra-ui/core";

class Upload extends Component{
  state = {
    imageUrl: null,
    imageAlt: null,
  }

handleImageUpload = () => {
const { files } = document.querySelector('input[type="file"]')
const formData = new FormData();
formData.append('file', files[0]);
formData.append('upload_preset', 'randomimages');

return Axios.post('https://api.cloudinary.com/v1_1/imaginarycloud/image/upload', formData)
  .then(response => {
    this.setState({
      imageUrl: response.data.secure_url,
      imageAlt: `An image of ${response.data.original_filename}`
    })
  })
  .catch(err => console.log(err));
  }

  render() {
    const { imageUrl, imageAlt } = this.state;

    return (
      <div className="Upload">
        <section className="left-side">
          <form>
            <div className="form-group">
              <input type="file"/>
            </div>
        <Button variantColor="blue" type="button" className="mt-1" onClick={this.handleImageUpload}>Submit</Button>
          </form>
        </section>
        <section className="right-side">
          <p>The resulting image will be displayed here</p>
          {imageUrl && (
            <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
          )}
        </section>
      </div>
    );
  }
}

export default Upload;