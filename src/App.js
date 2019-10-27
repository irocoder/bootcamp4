import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            filterText: '',
            selectedBuilding: 0
        };
    }

    filterUpdate(value) {
        this.setState({
            filterText: value
        });
    }

    selectedUpdate(id) {
        this.setState({
            selectedBuilding: id
        });
    }

    addBuilding(code, name, longitude, latitude, address) {
        var lastId = this.state.data[this.state.data.length - 1].id;
        var newData = this.state.data;
        newData.push({
            id: lastId + 1,
            code: code,
            name: name,
            coordinates: {
                longitude: longitude,
                latitude: latitude
            },
            address: address
        });
        this.setState({
            data: newData
        });
    }

    render() {

        return (
            <div className="bg">
                <div className="row">
                    <h1>UF Directory App</h1>
                </div>

                <Search
                    filterText={ this.state.filterText }
                    filterUpdate={this.filterUpdate.bind(this)}
                />
                <main>
                    <AddBuilding addBuilding={this.addBuilding.bind(this)}/>
                    <div className="row">
                        <div className="column1">
                            <div className="tableWrapper">
                                <table className="table table-striped table-hover">
                                    <tr>
                                        <td>
                                            <b>Code Building</b>
                                        </td>
                                    </tr>
                                    <BuildingList
                                        data={this.state.data}
                                        filterText={this.state.filterText}
                                        selectedUpdate={this.selectedUpdate.bind(this)}
                                    />
                                </table>
                            </div>
                        </div>
                        <div className="column2">
                            <ViewBuilding
                                data={this.state.data}
                                buildingId={this.state.selectedBuilding}
                            />
                        </div>
                    </div>
                    <Credit />
                </main>
            </div>
        );
    }
}

export default App;
