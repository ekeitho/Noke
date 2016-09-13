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
                        "img_url": "https://c1.staticflickr.com/1/421/19606101752_8b659a140c_b.jpg",
                        "description": "A truly iconic running silhouette, the Gel Lyte III was first released in 1989, featuring numerous innovative features including the famous split tongue - a novel invention that eliminated the problem of having the tongue slip down the side of the shoe."}, 
                      {"title": "Adidas Nmd Pharrell Hu",
                        "img_url": "https://www.eukicks.com/wp-content/uploads/2016/07/adidas_Pharrell_Williams_HU_NMD_yellow-yellow-white_1013868-8-1.jpg",
                        "description": "Inspired by iconic running silhouettes from the adidas archive, the NMD_R1 is a progressive model that effortlessly blends the past and future. Mauris tempus dapibus turpis quis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. "},
                      {"title": "Common Projects",
                        "img_url": "https://s-media-cache-ak0.pinimg.com/originals/10/c1/74/10c174a206bd722f633886583d49da54.jpg",
                        "description": "Common Projects is a collaboration between designers Flavio Girolami and Prathan Poopat. Inspired by the lines and shapes of everyday objects, they design Mauris tempus dapibus turpis quis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus."},
                      {"title": "Yeezy boost 350",
                        "img_url": "http://www.authentkicks.com/wp-content/uploads/2015/06/IMG_7123.jpg",
                        "description": "The adidas Yeezy Boost 350 debuted in 2015 as the second sneaker released from the Kanye West and adidas partnership. The sneaker featured a Primeknit upper and a Boost sole and was designed by West and Nic Galway."},
                      {"title": "Asics Gel Lyte III Colette",
                        "img_url": "https://c1.staticflickr.com/1/421/19606101752_8b659a140c_b.jpg",
                        "description": "A truly iconic running silhouette, the Gel Lyte III was first released in 1989, featuring numerous innovative features including the famous split tongue - a novel invention that eliminated the problem of having the tongue slip down the side of the shoe."}, 
                      {"title": "Adidas Nmd Pharrell Hu",
                        "img_url": "https://www.eukicks.com/wp-content/uploads/2016/07/adidas_Pharrell_Williams_HU_NMD_yellow-yellow-white_1013868-8-1.jpg",
                        "description": "Inspired by iconic running silhouettes from the adidas archive, the NMD_R1 is a progressive model that effortlessly blends the past and future."},
                      {"title": "Common Projects",
                        "img_url": "https://s-media-cache-ak0.pinimg.com/originals/10/c1/74/10c174a206bd722f633886583d49da54.jpg",
                        "description": "Common Projects is a collaboration between designers Flavio Girolami and Prathan Poopat. Inspired by the lines and shapes of everyday objects, they design ..."},
                      {"title": "Yeezy boost 350",
                        "img_url": "http://www.authentkicks.com/wp-content/uploads/2015/06/IMG_7123.jpg",
                        "description": "The adidas Yeezy Boost 350 debuted in 2015 as the second sneaker released from the Kanye West and adidas partnership. The sneaker featured a Primeknit upper and a Boost sole and was designed by West and Nic Galway."}]}
    }
});



var NokeList = React.createClass({
    render: function() {
        var nokeCards = this.props.data.map(function(nokeObj, index) {
            return (
                <NokeCard 
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
    componentDidMount: function() {
       
    },
    render: function() {
        return (
        <div className="demo-card-wide mdl-cell mdl-cell-5-col mdl-card mdl-shadow--2dp">
            
          <div className="mdl-card__title"
                style={{background: "url(" + this.props.data.img_url + ") center / cover"}}>
            <h2 className="mdl-card__title-text">{this.props.data.title}</h2>
          </div>
            
          <div className="mdl-card__supporting-text">
            {this.props.data.description}
          </div>
            
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              View
            </a>
          </div>
            
          <div className="mdl-card__menu">
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">share</i>
            </button>
            </div>
        </div>
        )
    }
});



ReactDOM.render(<NokeBox />, document.getElementById('content'));