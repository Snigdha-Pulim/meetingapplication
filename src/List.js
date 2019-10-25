import React from "react";
import ReactTable from "react-table";  
import "react-table/react-table.css";
class List extends React.Component{
    constructor(props){
        super(props);
        this.state={boo:false}
    }
    b1=x=>{
        this.setState({
          boo:true
        });
      }
    render() {
        const c=[
            {
                Header: 'Name',
                accessor:'name',
                width:100,
                maxWidth:100,
                minWidth:100
            }]
        for (var x = 0; x < 30; x++) {
            if(this.props.array.includes(x+1)&&this.state.boo==true){c.push({
                Header: x+1,
                accessor:`${x+1}`,
                width:'5%',
                maxWidth:'5%',
                minWidth:'5%',
                style: {
                    background: '#80ced6'
                  }
              });}
            else{
            c.push({Header: x+1,
                accessor:`${x+1}`,
                width:'5%',
                maxWidth:'5%',
                minWidth:'5%',
                
            });}
        }
        const data=[]
        
        {this.props.tasks.map(i=>{
        
            var yo={name:i.name}
            for(var j=parseInt(i.start,10);j<=parseInt(i.end,10);j++)
            {
                yo = Object.assign({}, 
                    yo, {[`${j}`]:'x'});
            }
            
            return (
                data.push(yo)
                );
        })}
        return (
            <div>
                <div class="container">
                    <div className="row">
                    <div className="col-5"></div>
                    <div className="col">September 2019 </div>
                    <div className="col-5"></div>
                    </div>
                </div>
                <ReactTable
                  columns={c}
                  data={data}
                  defaultPageSize={15}
                  showPagination={false}
                  /> 
                <div>
                <div class="container">
                    <div className="row">
                    <div className="col-5"></div>
                    <div className="col"><button className="btn-primary"onClick={this.b1}>show availability</button></div>
                    </div>
                </div>
                </div>
            </div>);
    }
}
export default List;