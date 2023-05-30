import React, { useState } from "react";
import { Card, Col, Row, Button, Input } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import IntlMessages from "util/IntlMessages";
class Signword extends React.Component {
  constructor(props) {
    super(props);
    
    const subject = '';
    const emailcontent = '';
    this.state = {  
      subject,
      emailcontent,
    }
    
  }
  send = () => {
    this.props.onSendemailcontent(
      {
        'subject': this.state.subject,
        'emailcontent': this.state.emailcontent,
      });
  } 
  render () {
    
    const {subject, emailcontent} = this.state;
    return (
      <Row>
        <Col lg={24} md={24} sm={24} xs={24}>
          <Card className="gx-card" style={{height:600 }} title={<IntlMessages id="sidebar.editors.WYSISWYGEditor" />}   
          >
          <div className="button-save-close">
            <Button type="primary" onClick={this.send}>SEND</Button>
            <Input
                    required
                    placeholder="Subject"
                    onChange={(event) => this.setState({subject: event.target.value})}
                    defaultValue={subject} />
          </div>
          <Editor 
            onEditorStateChange={(editorState) => {
              const currentContent = editorState.getCurrentContent();
              const contentText = currentContent.getPlainText()
              
              this.setState({
                emailcontent: contentText
              })
            }} 
            editorStyle={{
              width: '100%',
              minHeight: 100,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'lightgray',
              placeholder:"Content",
              defaultValue:{emailcontent}
            }}
          />
          </Card>
        </Col>
      </Row>

    );
  }
}


export default Signword;
