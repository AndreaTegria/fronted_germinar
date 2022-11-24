import React from "react";

class ComponenteClase extends React.Component{
    render(){
        return(<div>
            <h2> Este es un componente de tipo clase</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quod aspernatur, impedit maxime debitis explicabo perspiciatis tempore velit officia voluptatem laboriosam eveniet dignissimos autem soluta laborum accusantium consequuntur eum animi.

            </p>
            <br/>
            <p> El mensaje es :{this.props.msn}</p>
        </div>)
    }
}

export default ComponenteClase;