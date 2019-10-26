import React from 'react';

class ViewBuilding extends React.Component {

    getBuilding(id) {
        return this.props.data.find(building => {
            return building.id === id;
        });
    }

    SelectedBuildingPane(props) {
        return (
            <div class="selectedBuildingPane">
                <div class="code">Code: {props.selectedBuilding.code}</div>
                <div class="code">Name: {props.selectedBuilding.name}</div>
                <div class="code">
                    Coordinates: [
                        Latitude: {props.selectedBuilding.coordinates.latitude}
                        Longitude: {props.selectedBuilding.coordinates.longitude}
                    ]
                </div>
                <div class="code">Address: {props.selectedBuilding.address}</div>
            </div>
        );
    }

    render() {
        var buildingInfo = <i>Click on a name to view more information</i>;
        var selectedBuilding = this.getBuilding(this.props.buildingId);

        if (selectedBuilding) {
            buildingInfo = <this.SelectedBuildingPane selectedBuilding={selectedBuilding}/>
        }

        return (
            <div>
                <p>
                    {' '}
                    {buildingInfo}
                </p>
            </div>
        );
    }
}
export default ViewBuilding;
