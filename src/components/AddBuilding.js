import React from 'react';

class AddBuilding extends React.Component
{
    onFormSubmit(e) {
        e.preventDefault();
        const data = new FormData(event.target);

        this.props.addBuilding(
            data.get('buildingCode'),
            data.get('buildingName'),
            data.get('buildingLongitude'),
            data.get('buildingLatitude'),
            data.get('buildingAddress')
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <label for="addBuildingName">Name</label>
                    <input id="addBuildingName" name="buildingName" type="text"/>

                    <label for="addBuildingCode">Code</label>
                    <input id="addBuildingCode" name="buildingCode" type="text"/>

                    <label for="addBuildingLongitude">Longitude</label>
                    <input id="addBuildingLongitude" name="buildingLongitude" type="text"/>

                    <label for="addBuildingLatitude">Latitude</label>
                    <input id="addBuildingLatitude" name="buildingLatitude" type="text"/>

                    <label for="addBuildingAddress">Address</label>
                    <input id="addBuildingAddress" name="buildingAddress" type="text"/>

                    <button type="submit">Add Building</button>
                </form>
            </div>
        );
    }
}

export default AddBuilding;