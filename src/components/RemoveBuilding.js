import React from 'react';

class RemoveBuilding extends React.Component
{
    onRemoveBuilding() {
        this.props.removeBuilding(this.props.id);
    }

    render() {
        return (
            <button onClick={this.onRemoveBuilding.bind(this)}>Remove</button>
        );
    }
}

export default RemoveBuilding;