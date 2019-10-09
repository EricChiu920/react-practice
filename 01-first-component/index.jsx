// class Hello extends React.Component {
//   render () {
//     return (
//       <h1>Hello!</h1>
//     )
//   }
// }

const Hello = () => {
  return (
    <div>
      <h1>Hello from function component!</h1>
    </div>
  );
};

ReactDOM.render(<Hello />, document.getElementById('root'));
