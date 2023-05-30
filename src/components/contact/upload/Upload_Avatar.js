import React from "react";
import {Card, message, Upload} from "antd";
import {LoadingOutlined,PlusOutlined} from "@ant-design/icons";
import myConfig from "../../../config/config";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  const isPNG = file.type === 'image/png';
  if (!isJPG && !isPNG) {
    message.error('You can only upload JPG or PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG || isPNG && isLt2M;
}

class Upload_Avatar extends React.Component {
  constructor(props) {
    super(props);
    const imageUrl = props.thumb;
    
    this.state = {
      imageUrl
    }
  }
  state = {
    loading: false,
  };
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({loading: true});
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        this.setState({
          imageUrl,
          loading: false,
        });
        this.props.onChangeThumb(imageUrl);
      });
      
    }
  };

  render() {
    
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    let USER_URL = myConfig.CRU_URL + "api/heros/create";
    return (
      <Card className="gx-card" title="">
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action = {USER_URL}
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt=""/> : uploadButton}
        </Upload>
      </Card>
    );
  }
}

export default Upload_Avatar;
