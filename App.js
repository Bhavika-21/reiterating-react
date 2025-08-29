

// const heading = document.createElement('h1');
// heading.innerText = "Hello React!";
// const root = document.getElementById('root');
// root.appendChild(heading);



{/* <div id="parent">
    <div id="child-1">
        <h1>Hello from h1</h1>
        <h2>Hello from h2</h2>
    </div>
    <div id="child-2">
        <h3>Hello from h3</h3>
        <h4>Hello from h4</h4>
    </div>
</div> */}


const parent = React.createElement("h1", { id: "parent" },
    [React.createElement("div", { id: "child-1" }, [React.createElement("h1", {}, "Hello from h1"), React.createElement("h2", {}, "Hello from h2")])
        , React.createElement("div", { id: "child-2" }, [React.createElement("h3", {}, "Hello from h3"), React.createElement("h4", {}, "Hello from h4")])]
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);