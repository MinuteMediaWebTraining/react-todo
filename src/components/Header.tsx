import React, {MouseEvent, SyntheticEvent} from 'react';
import './Header.css';

interface IProps {
  onAdd: Function
}

interface IState {
  value: string
  buttonEnabled: boolean
}

class Header extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: '',
      buttonEnabled: false
    };
  }
  
  clear() {
    this.setState({
      value: '',
      buttonEnabled: false
    });
  }

  handleChange = (event: SyntheticEvent) => {
    const value = (event.target as HTMLInputElement).value;
    this.setState({
      value,
      buttonEnabled: (value.length > 0)
    });
  };
  
  handleClick = () => {
    if(this.state.buttonEnabled) {
      this.props.onAdd(this.state.value)
      this.clear();
    }
  };
  
  render(): React.ReactElement {
    return (
      <header className="header">
        <h1>My Todo list</h1>
        <input value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.handleClick}
                disabled={!this.state.buttonEnabled}>Add</button>
      </header>
    )
  }
}

export default Header;