import React from 'react';

class ViewBuilding extends React.Component {

    getBuilding(id) {
        return this.props.data.find(building => {
            return building.id === id;
        });
    }

    CoordinatesList(props) {
        return (
            <div>
                <span class="selectedBuildingField">Coordinates</span>:
                [ Latitude: {props.coordinates.latitude}, Longitude: {props.coordinates.longitude} ]
            </div>
        );

    }

    SelectedBuildingPane(props) {
        var coordinates = <div>No coordinate data available for this building.</div>;
        if (props.selectedBuilding.coordinates) {
            coordinates = <props.coordinatesList coordinates={props.selectedBuilding.coordinates}/>
        }
        return (
            <div class="selectedBuildingPane">
                <div>
                    <span class="selectedBuildingField">Code</span>: {props.selectedBuilding.code}
                </div>
                <div>
                    <span class="selectedBuildingField">Name</span>: {props.selectedBuilding.name}
                </div>
                {coordinates}
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
            buildingInfo = <this.SelectedBuildingPane
                selectedBuilding={selectedBuilding}
                coordinatesList = {this.CoordinatesList.bind(this)}
            />
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
