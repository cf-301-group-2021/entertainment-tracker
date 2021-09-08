import React from "react";
import Toast from "react-bootstrap/Toast";

class ToastMessage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show || false,
    };
  }

  render() {
    return (
      <Toast
        onClose={() => {
          this.setState({ show: false });
          this.props.clearError();
        }}
        show={this.state.show}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong>{this.props.title}</strong>
        </Toast.Header>
        <Toast.Body>{this.props.body}</Toast.Body>
      </Toast>
    );
  }
}

export default ToastMessage2;
