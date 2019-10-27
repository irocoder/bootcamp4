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
                <div>
                    <span class="selectedBuildingField">Code</span>: {props.selectedBuilding.code}
                </div>
                <div>
                    <span class="selectedBuildingField">Name</span>: {props.selectedBuilding.name}
                </div>
                <div>
                    <span class="selectedBuildingField">Coordinates</span>: [
                        Latitude: {props.selectedBuilding.coordinates.latitude}, 
                        Longitude: {props.selectedBuilding.coordinates.longitude}
                    ]
                </div>
                <div>
                    <span class="selectedBuildingField">Address</span>: {props.selectedBuilding.address}
                </div>
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
