import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class BuildingList extends React.Component {
    selectedUpdate(id) {
        this.props.selectedUpdate(id);
    }

    render() {
        const { data, filterText } = this.props;

        const buildingList = data
        .filter(directory => {
            return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
        })
        .map(directory => {
            return (
                <tr
                    key={directory.id}
                    onClick={(e) => this.selectedUpdate(directory.id, e)}
                >
                    <td>{directory.code}</td>
                    <td>{directory.name}</td>
                    <td>
                        <RemoveBuilding
                            id={directory.id}
                            removeBuilding={this.props.removeBuilding.bind(this)}
                        />
                    </td>
                </tr>
            );
        });

        return (
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Building</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {buildingList}
                </tbody>
            </table>
        );
    }
}
export default BuildingList;
