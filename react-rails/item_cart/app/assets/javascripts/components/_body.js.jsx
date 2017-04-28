var Body = React.createClass({
  getInitialState(){
    return { items: []}
  },
  handleDelete(id){
    //console.log('in handle delete');
    $.ajax({
      url: `/api/v1/items/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeItemClient(id);
      }
    });
  },
  removeItemClient(id){
    var newItems = this.state.items.filter((item) => {
      return item.id != id;
    });
    this.setState({ items: newItems });
  },
  componentDidMount(){
    console.log('Component mounted.');
    $.getJSON('/api/v1/items.json', (response) => { this.setState({items: response}) });
  },
  handleSubmit(item){
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  },
  render(){
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit} />
        <AllItems items={this.state.items} handleDelete={this.handleDelete}/>
      </div>
    )
  }
});
