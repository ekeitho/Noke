var NokeBox = React.createClass({
    componentDidMount: function() {
        
    },
  
    render : function() {
        /* wrapped in a dumby div: https://github.com/facebook/react-devtools/issues/273 */
        return (
            <NokeList 
                data={this.state.data}/>
        )
    },
    getInitialState: function() {
        return {data: [{"title": "Asics Gel Lyte III Colette",
                        "img_url": "http://www.authentkicks.com/wp-content/uploads/2015/06/IMG_7123.jpg",
                        "description": "One of the best freaking shoes ever!"}, 
                      {"title": "Asics Gel Lyte III Colette",
                        "img_url": "https://www.sneakerfreaker.com/wp-content/uploads/2015/12/Adidas_New_6.jpg",
                        "description": "One of the best freaking shoes ever!"},
                      {"title": "Asics Gel Lyte III Colette",
                        "img_url": "https://www.eukicks.com/wp-content/uploads/2016/07/adidas_Pharrell_Williams_HU_NMD_yellow-yellow-white_1013868-8-1.jpg",
                        "description": "One of the best freaking shoes ever!"},
                      {"title": "Asics Gel Lyte III Colette",
                        "img_url": "https://s-media-cache-ak0.pinimg.com/originals/10/c1/74/10c174a206bd722f633886583d49da54.jpg",
                        "description": "One of the best freaking shoes ever!"}]}
    }
});



var NokeList = React.createClass({
    render: function() {
        var nokeCards = this.props.data.map(function(nokeObj, index) {
            return (
                <NokeCard 
                    index={index}
                    data={nokeObj}
                    />
            );                                        
        }.bind(this));
        return (
            <div id="noke-list" className="mdl-grid">
                {nokeCards}
            </div>
        )
    }
});

var NokeCard = React.createClass({
    move: function() {
      window.location.href = "http://localhost:3456/index.html" 
    },
    render: function() {
        return (
        <div 
            onClick={this.move}
            className="demo-card-wide mdl-cell mdl-cell-12-col mdl-card mdl-shadow--2dp"> 
          <div className="mdl-card__title"
                style={{backgroundImage: "url(" + this.props.data.img_url + ")"}}>
            <h2 className="mdl-card__title-text">{this.props.data.description}</h2>
          </div>
        </div>
        )
    }
});



ReactDOM.render(<NokeBox />, document.getElementById('content'));