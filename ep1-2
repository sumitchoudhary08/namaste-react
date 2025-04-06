import React from "react";
import ReactDOM from "react-dom/client";


// var heading = document.createElement("h1", {id:"heading"});
// heading.innerHTML = "heading from app js!!";
// document.getElementById("root").appendChild(heading);

// var heading = React.createElement("h1", {id: "heading"}, "I am from react");
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{/* <div id = "parent">
    <div id="child1">
        <h1>
            h1 from child 1
        </h1>
        <h2>
            h2 from child 1
        </h2>
    </div>
    <div id="child2">
        <h1>
            h1 from child 2 
        </h1>
        <h2>
            h2 from child 2
        </h2>
    </div>
</div> */}

var parent = React.createElement("div", {id:"parent"}, 
    [React.createElement("div", {id:"child1"}, 
        [React.createElement("h1", {}, "h1 from child 1")
            , React.createElement("h2", {}, "h2 from child 1")
        ]

     ), 
     React.createElement("div", {id:"child2"}, 
        [React.createElement("h1", {}, "h1 from child 2")
            , React.createElement("h2", {}, "h2 from child 2")
        ]
     ), 
    ]
);
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);