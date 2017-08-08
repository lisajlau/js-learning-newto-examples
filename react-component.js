class App extends React.Component {
    state = {clicks: 6}
    
    handleClick = () => {
        this.setState(prevState => {
            return {clicks: prevState.clicks + 1}
        })
    }
    
    render() {
        return (
        <div>
            Click count: {this.state.clicks}
            <button onClick={this.handleClick}>Click me</button>
        </div>
        )
    }
}


/***** below is wrong *****/

class App extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {clicks : 0}
    }
    
    handleClick() {
        this.setState(prevState => {
            return {clicks: prevState.clicks + 1}
        })
    }
    
    render() {
        return (
        <div>
            Click count: {this.state.clicks}
            <button onClick={this.handleClick}>Click me</button>
        </div>
        )
    }
}



/***** below works *****/

class App extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {clicks : 0}
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState(prevState => {
            return {clicks: prevState + 1}
        })
    }
    
    render() {
        return (
        <div>
            Click count: {this.state.clicks}
            <button onClick={this.handleClick}>Click me</button>
        </div>
        )
    }
}

class App extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {clicks : 0}
    }
    
    handleClick = function() {
        this.setState(prevState => {
            return {clicks: prevState + 1}
        })
    }.bind(this)
    
    render() {
        return (
        <div>
            Click count: {this.state.clicks}
            <button onClick={this.handleClick}>Click me</button>
        </div>
        )
    }
}