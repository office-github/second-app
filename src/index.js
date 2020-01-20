import React from 'react';
import ReactDOM from 'react-dom'

function First(prop) {
    return (
        <form>
            <h1 onClick={() => prop.onClick(prop.data)}>Hi {prop.data}</h1>
        </form>
    );
}

class Second extends React.Component {
    handleClick(v) {
        alert(v);
    }

    render() {
        return (<First data="One" onClick={(value) => this.handleClick(value)} />);
    }
}
ReactDOM.render(
    <Second />,
    document.getElementById('root')
);