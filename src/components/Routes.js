class Routes extends Component {
    ReactDOM.render(<Routes />, document.getElementById('root'));){
      return(
        <Router>
          <div>
            <Navbar />
            <hr />
            <Route name="Home" exact path="/" component={Home}/>
            <Route name="Menu" path="/menu" component={Menu}/>
            <Route name="About" path="/about" component={About} />
          </div>
        </Router>
      );
    }
  }