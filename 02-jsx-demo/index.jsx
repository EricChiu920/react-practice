class JSXDemo extends React.Component {
  render() {
    return (
      React.createElement('h1', null, 'React createElement')
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
