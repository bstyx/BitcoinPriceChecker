class Price extends React.Component {
  state = {
    currency: "USD"
  };

  render() {
    return (
      <div className="text-center">
        <ul className="list-group">
          <li className="list-group-item text-info display-4">
            Bitcoin Price :
            <span className="badge badge-primary m-2">
              {this.props.bpi.USD.code}
            </span>
            <strong className="">{this.props.bpi.USD.rate}</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default Price;
