function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();

    return (
      <div>
        <h1>Your Number is: {num}</h1>
        <p>{ num === 7 ? 'Congrats!' : 'Unlucky. :(' }</p>
      </div>
    );
  }
}

// class JSXDemo extends React.Component {
//   render() {
//     return (
//       React.createElement('h1', null, 'React createElement')
//     );
//   }
// }

ReactDOM.render(<NumPicker />, document.getElementById('root'));
