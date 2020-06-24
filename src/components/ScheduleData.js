import React, { Component } from 'react';
import Papa from 'papaparse';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class DataController extends Component {

    constructor(props) {
        super(props);

        this.state = {
            week: "",
            data: [],
            dataFields: [],
            firstWeekDate: ""
        };

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getCsvData();
    }

    async fetchCsv() {
        const response = await fetch('data/Schedule.csv');
        let reader = response.body.getReader();
        let decoder = new TextDecoder('utf-8');
        const result = await reader.read();
        return decoder.decode(result.value);
    }

    getData(result) {
        const vendorData = result.data.filter(function(item){
            return item.Vendor !== "";
        });
        const fields = result.meta.fields;
        const firstWeekDate = result.meta.fields[2].replace("-", " ");
        this.setState({ data: vendorData, dataFields: fields, firstWeekDate: firstWeekDate });
    }

    async getCsvData() {
        let csvData = await this.fetchCsv();
        console.log(csvData);
        Papa.parse(csvData, {
            header: true,
            complete: this.getData
        });
    }

    chunk(array, parts) {
        let result = [];
        for (let i = parts; i > 0; i--) {
            result.push(array.splice(0, Math.ceil(array.length / i)));
        }
        return result;
    }

    renderVendors(weekNum, col){
        let allData = this.state.data;
        let week = 1 + weekNum;
        let weekField = this.state.dataFields[week];
        let vendorsThisWeek = allData.filter(item =>{
            return item[weekField] === 'TRUE';
        });
        let finalVendors = this.chunk(vendorsThisWeek, 3);
        return (
            <List className="VendorList">
                {finalVendors[col].map(item => (
                    <ListItem key={item.Vendor} className={item["Vendor Type"]}>{item.Vendor}</ListItem>
                ))}
            </List>
        );
    }
    renderWeek(weekNum){
        let week = 1 + weekNum;
        let weekField = this.state.dataFields[week];
        return (
            <h3>{weekField}</h3>     
        );
    }

    render() {
        const theWeek = this.props;
        return (
            <div className="data-controller">
                <h3>{this.renderWeek(theWeek.week)}</h3>
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="top"
                    spacing={2}
                >
                    <Grid item xs={12} sm={4}>
                        {this.renderVendors(theWeek.week, 0)}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {this.renderVendors(theWeek.week, 1)}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {this.renderVendors(theWeek.week, 2)}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default DataController;