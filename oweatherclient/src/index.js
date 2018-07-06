import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  class Hello extends React.Component {

    constructor(props){
        super(props);
        this.state = {value:null,isLoaded:false,error:null}
    }

    componentDidMount(){
       var url="https://springboot-209312.appspot.com/test/";
       var url1="http://localhost:8080/api/hello";
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded:true,
              value:result.id,
            })
          }
        )
    }
    render() {
      return (
        <label className="Hello">
          {this.state.value}
        </label>
      );
    }
  }
  
 
  
  // ========================================
  
  ReactDOM.render(
    <Hello />,
    document.getElementById('root')
  );
  