import React from 'react';

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
                    <td>{directory.code} </td>
                    <td> {directory.name} </td>
                </tr>
            );
        });

        return <div>{buildingList}</div>;
    }
}
export default BuildingList;
