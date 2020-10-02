import Axios from 'axios';
import React,{Component} from 'react';
import '../App.css';
import { Button } from "@chakra-ui/core";
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

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
  .catch(err => alert(err));
  }

  render() {
    const { imageUrl, imageAlt } = this.state;

    return (
      <div className="Upload">
        <section className="left-side">
         <Form>
            <FormGroup className="forms">
            <Label className="form-label" for="file">Select an image</Label>
            <CustomInput type="file" id="file"/>
            <Button variantColor="blue" type="button" className="mt-2" onClick={this.handleImageUpload}>Submit</Button>
            </FormGroup>
        </Form>
          </section>
          <section className="right-side">
          <p>The uploaded image will be displayed here</p>
          {imageUrl && (
            <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
          )}
        </section>
      </div>
    );
  }
}

export default Upload;